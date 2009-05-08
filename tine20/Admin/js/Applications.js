/*
 * Tine 2.0
 * 
 * @license     http://www.gnu.org/licenses/agpl.html AGPL Version 3
 * @author      Philipp Schuele <p.schuele@metaways.de>
 * @copyright   Copyright (c) 2007-2009 Metaways Infosystems GmbH (http://www.metaways.de)
 * @version     $Id$
 *
 */
 
Ext.namespace('Tine.Admin');
Ext.namespace('Tine.Admin.Applications');

/*********************************** MAIN DIALOG ********************************************/

Tine.Admin.Applications.Main = function() {

    /**
     * onclick handler for edit action
     */
    var _editButtonHandler = function(_button, _event) {
        var selectedRows = Ext.getCmp('gridAdminApplications').getSelectionModel().getSelections();
        var applicationId = selectedRows[0].id;
        
        Tine.Tinebase.common.openWindow('applicationWindow', 'index.php?method=Admin.editApplication&appId=' + applicationId, 600, 400);
    };
    
    /**
     * onclick handler for permissions action
     * removed, is replaced by role management
     */
    /*
    var _permissionsButtonHandler = function(_button, _event) {
        var selectedRows = Ext.getCmp('gridAdminApplications').getSelectionModel().getSelections();
        var applicationId = selectedRows[0].id;
        
        Tine.Tinebase.common.openWindow('applicationPermissionsWindow', 'index.php?method=Admin.editApplicationPermissions&appId=' + applicationId, 800, 350);
    };
    */

    var _enableDisableButtonHandler = function(_button, _event) {
    	//console.log(_button);
    	
    	var state = 'disabled';
    	if(_button.id == 'Admin_Accesslog_Action_Enable') {
    		state = 'enabled';
    	}
    	
        var applicationIds = new Array();
        var selectedRows = Ext.getCmp('gridAdminApplications').getSelectionModel().getSelections();
        for (var i = 0; i < selectedRows.length; ++i) {
            applicationIds.push(selectedRows[i].id);
        }
        
        Ext.Ajax.request({
            url : 'index.php',
            method : 'post',
            params : {
                method : 'Admin.setApplicationState',
                applicationIds : Ext.util.JSON.encode(applicationIds),
                state: state
            },
            callback : function(_options, _success, _response) {
                if(_success === true) {
                    var result = Ext.util.JSON.decode(_response.responseText);
                    if(result.success === true) {
                        Ext.getCmp('gridAdminApplications').getStore().reload();
                    }
                }
            }
        });
    };
    

    var _action_enable = new Ext.Action({
        text: 'enable application',
        disabled: true,
        handler: _enableDisableButtonHandler,
        iconCls: 'action_enable',
        id: 'Admin_Accesslog_Action_Enable',
        scope: this
    });

    var _action_disable = new Ext.Action({
        text: 'disable application',
        disabled: true,
        handler: _enableDisableButtonHandler,
        iconCls: 'action_disable',
        id: 'Admin_Accesslog_Action_Disable',
        scope: this
    });

	var _action_settings = new Ext.Action({
        text: 'settings',
        disabled: true,
        handler: _editButtonHandler,
        iconCls: 'action_settings'
    });

	var _createApplicationaDataStore = function()
    {
        /**
         * the datastore for lists
         */
        var ds_applications = new Ext.data.JsonStore({
            url: 'index.php',
            baseParams: {
                method: 'Admin.getApplications'
            },
            root: 'results',
            totalProperty: 'totalcount',
            id: 'id',
            fields: [
                {name: 'id'},
                {name: 'name'},
                {name: 'status'},
                {name: 'order'},
                {name: 'app_tables'},
                {name: 'version'}
            ],
            // turn on remote sorting
            remoteSort: true
        });
        
        ds_applications.setDefaultSort('name', 'asc');

        ds_applications.on('beforeload', function(_dataSource) {
            _dataSource.baseParams.filter = Ext.getCmp('ApplicationsAdminQuickSearchField').getValue();
        });        
        
        ds_applications.load({params:{start:0, limit:50}});
        
        return ds_applications;
    };

	var _showApplicationsToolbar = function()
    {
        this.translation = new Locale.Gettext();
        this.translation.textdomain('Admin');
        
        _action_enable.setText(this.translation.gettext('enable application'));
        _action_disable.setText(this.translation.gettext('disable application'));
        _action_settings.setText(this.translation.gettext('settings'));
    
        var ApplicationsAdminQuickSearchField = new Ext.ux.SearchField({
            id: 'ApplicationsAdminQuickSearchField',
            width:240,
            emptyText: this.translation.gettext('enter searchfilter')
        }); 
        ApplicationsAdminQuickSearchField.on('change', function() {
            Ext.getCmp('gridAdminApplications').getStore().load({params:{start:0, limit:50}});
        });
        
        var applicationToolbar = new Ext.Toolbar({
            id: 'toolbarAdminApplications',
            split: false,
            height: 26,
            items: [
                _action_enable,
                _action_disable,
                '-',
                _action_settings,
                //_action_permissions,
                '->',
                this.translation.gettext('Search:'), ' ',
/*                new Ext.ux.SelectBox({
                  listClass:'x-combo-list-small',
                  width:90,
                  value:'Starts with',
                  id:'search-type',
                  store: new Ext.data.SimpleStore({
                    fields: ['text'],
                    expandData: true,
                    data : ['Starts with', 'Ends with', 'Any match']
                  }),
                  displayField: 'text'
                }), */
                ' ',
                ApplicationsAdminQuickSearchField
            ]
        });
        
        Tine.Tinebase.MainScreen.setActiveToolbar(applicationToolbar);
    };
    
    var _renderEnabled = function (_value, _cellObject, _record, _rowIndex, _colIndex, _dataStore) {
        var translation = new Locale.Gettext();
        translation.textdomain('Admin');
        
        var gridValue;
        
    	switch(_value) {
            case 'disabled':
                gridValue = translation.gettext('disabled');
                break;
    		case 'enabled':
    		  gridValue = translation.gettext('enabled');
    		  break;
    		  
    		default:
    		  gridValue = String.format(translation.gettext('unknown status ({0})'), value);
    		  break;
    	}
        
        return gridValue;
	};

    /**
	 * creates the address grid
	 * 
	 */
    var _showApplicationsGrid = function() 
    {
        var ctxMenuGrid = new Ext.menu.Menu({
            items: [
                _action_enable,
                _action_disable,
                _action_disable
                //_action_permissions
            ]
        });

    	
        var ds_applications = _createApplicationaDataStore();
        
        var pagingToolbar = new Ext.PagingToolbar({ // inline paging toolbar
            pageSize: 50,
            store: ds_applications,
            displayInfo: true,
            displayMsg: this.translation.gettext('Displaying application {0} - {1} of {2}'),
            emptyMsg: this.translation.gettext("No applications to display")
        }); 
        
        var cm_applications = new Ext.grid.ColumnModel([
            {resizable: true, header: this.translation.gettext('order'),   id: 'order', dataIndex: 'order', width: 50},
            {resizable: true, header: this.translation.gettext('name'),    id: 'name', dataIndex: 'name'},
            {resizable: true, header: this.translation.gettext('status'),  id: 'status', dataIndex: 'status', width: 150, renderer: _renderEnabled},
            {resizable: true, header: this.translation.gettext('version'), id: 'version', dataIndex: 'version', width: 70}
        ]);
        
        cm_applications.defaultSortable = true; // by default columns are sortable

        var rowSelectionModel = new Ext.grid.RowSelectionModel({multiSelect:true});
        
        rowSelectionModel.on('selectionchange', function(_selectionModel) {
            var rowCount = _selectionModel.getCount();
            var selected = _selectionModel.getSelections();

            if ( Tine.Tinebase.common.hasRight('manage', 'Admin', 'apps') ) {
                if (rowCount < 1) {
                    _action_enable.setDisabled(true);
                    _action_disable.setDisabled(true);
                    _action_settings.setDisabled(true);
                    //_action_permissions.setDisabled(true);
                } else if (rowCount > 1) {
                    _action_enable.setDisabled(false);
                    _action_disable.setDisabled(false);
                    _action_settings.setDisabled(true);
                    //_action_permissions.setDisabled(true);
                } else {
                    _action_enable.setDisabled(false);
                    _action_disable.setDisabled(false);
                    _action_settings.setDisabled(true);                
                    //_action_permissions.setDisabled(false);
                }
                
                // don't allow to disable Admin, Tinebase or Addressbook as we can't deal with this yet
                for (var i=0; i<selected.length; i++) {
                    if (typeof selected[i].get == 'function' && selected[i].get('name').toString().match(/Tinebase|Admin|Addressbook/)) {
                        _action_enable.setDisabled(true);
                        _action_disable.setDisabled(true);
                        break;
                    }
                }
            }
        });
                
        var grid_applications = new Ext.grid.GridPanel({
        	id: 'gridAdminApplications',
            store: ds_applications,
            cm: cm_applications,
            tbar: pagingToolbar,     
            autoSizeColumns: false,
            selModel: rowSelectionModel,
            enableColLock:false,
            loadMask: true,
            autoExpandColumn: 'name',
            border: false,
            viewConfig: {            
                /**
                 * Return CSS class to apply to rows depending upon flags
                 * - checks Flagged, Deleted and Seen
                 * 
                 * @param {} record
                 * @param {} index
                 * @return {String}
                 */
                getRowClass: function(record, index) {
                    //console.log(record);
                    var className = '';
                    switch(record.get('status')) {
                        case 'disabled':
                            className = 'grid_row_disabled';
                            break;
                        case 'enabled':
                            className = 'grid_row_enabled';
                            break;
                    }
                    return className;
                }
            }
        });
        
        Tine.Tinebase.MainScreen.setActiveContentPanel(grid_applications);
        
        grid_applications.on('rowcontextmenu', function(_grid, _rowIndex, _eventObject) {
            _eventObject.stopEvent();
            if(!_grid.getSelectionModel().isSelected(_rowIndex)) {
                _grid.getSelectionModel().selectRow(_rowIndex);

                if ( Tine.Tinebase.common.hasRight('manage', 'Admin', 'apps') ) {
                    _action_enable.setDisabled(false);
                    _action_disable.setDisabled(false);
                    _action_settings.setDisabled(true);
                    //_action_permissions.setDisabled(false);
                }
            }
            //var record = _grid.getStore().getAt(rowIndex);
            ctxMenuGrid.showAt(_eventObject.getXY());
        }, this);
          
        return;
    };   
    
    // public functions and variables
    return {
        show: function() {
        	_showApplicationsToolbar();
            _showApplicationsGrid();        	
            this.updateMainToolbar();        
        },
        
        updateMainToolbar : function() 
        {
            var menu = Ext.menu.MenuMgr.get('Tinebase_System_AdminMenu');
            menu.removeAll();
            /*menu.add(
                {text: 'product', handler: Tine.Crm.Main.handlers.editProductSource}
            );*/
    
            var adminButton = Ext.getCmp('tineMenu').items.get('Tinebase_System_AdminButton');
            adminButton.setIconClass('AdminTreePanel');
            //if(Admin.Crm.rights.indexOf('admin') > -1) {
            //    adminButton.setDisabled(false);
            //} else {
                adminButton.setDisabled(true);
            //}
    
            var preferencesButton = Ext.getCmp('tineMenu').items.get('Tinebase_System_PreferencesButton');
            preferencesButton.setIconClass('AdminTreePanel');
            preferencesButton.setDisabled(true);
        }
    };
    
}();

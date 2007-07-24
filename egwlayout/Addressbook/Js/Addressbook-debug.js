var EGWNameSpace = EGWNameSpace || {};

EGWNameSpace.Addressbook = function() {

	var ds;

	Ext.namespace('Ext.exampledata');

Ext.exampledata.states = [
['AF', 'AFGHANISTAN'],
['AL', 'ALBANIA'],
['DZ', 'ALGERIA'],
['AS', 'AMERICANSAMOA'],
['AD', 'ANDORRA'],
['AO', 'ANGOLA'],
['AI', 'ANGUILLA'],
['AQ', 'ANTARCTICA'],
['AG', 'ANTIGUAANDBARBUDA'],
['AR', 'ARGENTINA'],
['AM', 'ARMENIA'],
['AW', 'ARUBA'],
['AU', 'AUSTRALIA'],
['AT', 'AUSTRIA'],
['AZ', 'AZERBAIJAN'],
['BS', 'BAHAMAS'],
['BH', 'BAHRAIN'],
['BD', 'BANGLADESH'],
['BB', 'BARBADOS'],
['BY', 'BELARUS'],
['BE', 'BELGIUM'],
['BZ', 'BELIZE'],
['BJ', 'BENIN'],
['BM', 'BERMUDA'],
['BT', 'BHUTAN'],
['BO', 'BOLIVIA'],
['BA', 'BOSNIAANDHERZEGOVINA'],
['BW', 'BOTSWANA'],
['BV', 'BOUVETISLAND'],
['BR', 'BRAZIL'],
['IO', 'BRITISHINDIANOCEANTERRITORY'],
['BN', 'BRUNEIDARUSSALAM'],
['BG', 'BULGARIA'],
['BF', 'BURKINAFASO'],
['BI', 'BURUNDI'],
['KH', 'CAMBODIA'],
['CM', 'CAMEROON'],
['CA', 'CANADA'],
['CV', 'CAPEVERDE'],
['KY', 'CAYMANISLANDS'],
['CF', 'CENTRALAFRICANREPUBLIC'],
['TD', 'CHAD'],
['CL', 'CHILE'],
['CN', 'CHINA'],
['CX', 'CHRISTMASISLAND'],
['CC', 'COCOS(KEELING)ISLANDS'],
['CO', 'COLOMBIA'],
['KM', 'COMOROS'],
['CG', 'CONGO'],
['CD', 'CONGO,THEDEMOCRATICREPUBLICOFTHE'],
['CK', 'COOKISLANDS'],
['CR', 'COSTARICA'],
['CI', 'COTEDIVOIRE'],
['HR', 'CROATIA'],
['CU', 'CUBA'],
['CY', 'CYPRUS'],
['CZ', 'CZECHREPUBLIC'],
['DK', 'DENMARK'],
['DJ', 'DJIBOUTI'],
['DM', 'DOMINICA'],
['DO', 'DOMINICANREPUBLIC'],
['TP', 'EASTTIMOR'],
['EC', 'ECUADOR'],
['EG', 'EGYPT'],
['SV', 'ELSALVADOR'],
['GQ', 'EQUATORIALGUINEA'],
['ER', 'ERITREA'],
['EE', 'ESTONIA'],
['ET', 'ETHIOPIA'],
['FK', 'FALKLANDISLANDS(MALVINAS)'],
['FO', 'FAROEISLANDS'],
['FJ', 'FIJI'],
['FI', 'FINLAND'],
['FR', 'FRANCE'],
['GF', 'FRENCHGUIANA'],
['PF', 'FRENCHPOLYNESIA'],
['TF', 'FRENCHSOUTHERNTERRITORIES'],
['GA', 'GABON'],
['GM', 'GAMBIA'],
['GE', 'GEORGIA'],
['DE', 'GERMANY'],
['GH', 'GHANA'],
['GI', 'GIBRALTAR'],
['GR', 'GREECE'],
['GL', 'GREENLAND'],
['GD', 'GRENADA'],
['GP', 'GUADELOUPE'],
['GU', 'GUAM'],
['GT', 'GUATEMALA'],
['GN', 'GUINEA'],
['GW', 'GUINEA-BISSAU'],
['GY', 'GUYANA'],
['HT', 'HAITI'],
['HM', 'HEARDISLANDANDMCDONALDISLANDS'],
['VA', 'HOLYSEE(VATICANCITYSTATE)'],
['HN', 'HONDURAS'],
['HK', 'HONGKONG'],
['HU', 'HUNGARY'],
['IS', 'ICELAND'],
['IN', 'INDIA'],
['ID', 'INDONESIA'],
['IR', 'IRAN,ISLAMICREPUBLICOF'],
['IQ', 'IRAQ'],
['IE', 'IRELAND'],
['IL', 'ISRAEL'],
['IT', 'ITALY'],
['JM', 'JAMAICA'],
['JP', 'JAPAN'],
['JO', 'JORDAN'],
['KZ', 'KAZAKSTAN'],
['KE', 'KENYA'],
['KI', 'KIRIBATI'],
['KP', 'KOREADEMOCRATICPEOPLESREPUBLICOF'],
['KR', 'KOREAREPUBLICOF'],
['KW', 'KUWAIT'],
['KG', 'KYRGYZSTAN'],
['LA', 'LAOPEOPLESDEMOCRATICREPUBLIC'],
['LV', 'LATVIA'],
['LB', 'LEBANON'],
['LS', 'LESOTHO'],
['LR', 'LIBERIA'],
['LY', 'LIBYANARABJAMAHIRIYA'],
['LI', 'LIECHTENSTEIN'],
['LT', 'LITHUANIA'],
['LU', 'LUXEMBOURG'],
['MO', 'MACAU'],
['MK', 'MACEDONIA,THEFORMERYUGOSLAVREPUBLICOF'],
['MG', 'MADAGASCAR'],
['MW', 'MALAWI'],
['MY', 'MALAYSIA'],
['MV', 'MALDIVES'],
['ML', 'MALI'],
['MT', 'MALTA'],
['MH', 'MARSHALLISLANDS'],
['MQ', 'MARTINIQUE'],
['MR', 'MAURITANIA'],
['MU', 'MAURITIUS'],
['YT', 'MAYOTTE'],
['MX', 'MEXICO'],
['FM', 'MICRONESIA,FEDERATEDSTATESOF'],
['MD', 'MOLDOVA,REPUBLICOF'],
['MC', 'MONACO'],
['MN', 'MONGOLIA'],
['MS', 'MONTSERRAT'],
['MA', 'MOROCCO'],
['MZ', 'MOZAMBIQUE'],
['MM', 'MYANMAR'],
['NA', 'NAMIBIA'],
['NR', 'NAURU'],
['NP', 'NEPAL'],
['NL', 'NETHERLANDS'],
['AN', 'NETHERLANDSANTILLES'],
['NC', 'NEWCALEDONIA'],
['NZ', 'NEWZEALAND'],
['NI', 'NICARAGUA'],
['NE', 'NIGER'],
['NG', 'NIGERIA'],
['NU', 'NIUE'],
['NF', 'NORFOLKISLAND'],
['MP', 'NORTHERNMARIANAISLANDS'],
['NO', 'NORWAY'],
['OM', 'OMAN'],
['PK', 'PAKISTAN'],
['PW', 'PALAU'],
['PS', 'PALESTINIANTERRITORY,OCCUPIED'],
['PA', 'PANAMA'],
['PG', 'PAPUANEWGUINEA'],
['PY', 'PARAGUAY'],
['PE', 'PERU'],
['PH', 'PHILIPPINES'],
['PN', 'PITCAIRN'],
['PL', 'POLAND'],
['PT', 'PORTUGAL'],
['PR', 'PUERTORICO'],
['QA', 'QATAR'],
['RE', 'REUNION'],
['RO', 'ROMANIA'],
['RU', 'RUSSIANFEDERATION'],
['RW', 'RWANDA'],
['SH', 'SAINTHELENA'],
['KN', 'SAINTKITTSANDNEVIS'],
['LC', 'SAINTLUCIA'],
['PM', 'SAINTPIERREANDMIQUELON'],
['VC', 'SAINTVINCENTANDTHEGRENADINES'],
['WS', 'SAMOA'],
['SM', 'SANMARINO'],
['ST', 'SAOTOMEANDPRINCIPE'],
['SA', 'SAUDIARABIA'],
['SN', 'SENEGAL'],
['SC', 'SEYCHELLES'],
['SL', 'SIERRALEONE'],
['SG', 'SINGAPORE'],
['SK', 'SLOVAKIA'],
['SI', 'SLOVENIA'],
['SB', 'SOLOMONISLANDS'],
['SO', 'SOMALIA'],
['ZA', 'SOUTHAFRICA'],
['GS', 'SOUTHGEORGIAANDTHESOUTHSANDWICHISLANDS'],
['ES', 'SPAIN'],
['LK', 'SRILANKA'],
['SD', 'SUDAN'],
['SR', 'SURINAME'],
['SJ', 'SVALBARDANDJANMAYEN'],
['SZ', 'SWAZILAND'],
['SE', 'SWEDEN'],
['CH', 'SWITZERLAND'],
['SY', 'SYRIANARABREPUBLIC'],
['TW', 'TAIWAN'],
['TJ', 'TAJIKISTAN'],
['TZ', 'TANZANIA,UNITEDREPUBLICOF'],
['TH', 'THAILAND'],
['TG', 'TOGO'],
['TK', 'TOKELAU'],
['TO', 'TONGA'],
['TT', 'TRINIDADANDTOBAGO'],
['TN', 'TUNISIA'],
['TR', 'TURKEY'],
['TM', 'TURKMENISTAN'],
['TC', 'TURKSANDCAICOSISLANDS'],
['TV', 'TUVALU'],
['UG', 'UGANDA'],
['UA', 'UKRAINE'],
['AE', 'UNITEDARABEMIRATES'],
['GB', 'UNITEDKINGDOM'],
['US', 'UNITEDSTATES'],
['UM', 'UNITEDSTATESMINOROUTLYINGISLANDS'],
['UY', 'URUGUAY'],
['UZ', 'UZBEKISTAN'],
['VU', 'VANUATU'],
['VE', 'VENEZUELA'],
['VN', 'VIETNAM'],
['VG', 'VIRGINISLANDS,BRITISH'],
['VI', 'VIRGINISLANDS,U.S.'],
['WF', 'WALLISANDFUTUNA'],
['EH', 'WESTERNSAHARA'],
['YE', 'YEMEN'],
['YU', 'YUGOSLAVIA'],
['ZM', 'ZAMBIA'],
['ZW', 'ZIMBABWE']
    ];

	// private function
	var _showAddressGrid = function(_layout) {

		var center = _layout.getRegion('center', false);

		// remove the first contentpanel from center region
		center.remove(0);
		
		// add a div, which will bneehe parent element for the grid
		var contentTag = Ext.Element.get('content');
		var outerDivTag = contentTag.createChild({tag: 'div',id: 'outergriddiv'});

		// create the Data Store
		ds = new Ext.data.JsonStore({
			url: 'jsonrpc.php',
			baseParams: {application:'Addressbook_Json', datatype:'address', func:'getData'},
			root: 'results',
			totalProperty: 'totalcount',
			id: 'contact_id',
			fields: [
				{name: 'contact_id'},
				{name: 'contact_tid'},
				{name: 'contact_owner'},
				{name: 'contact_private'},
				{name: 'cat_id'},
				{name: 'n_family'},
				{name: 'n_given'},
				{name: 'n_middle'},
				{name: 'n_prefix'},
				{name: 'n_suffix'},
				{name: 'n_fn'},
				{name: 'n_fileas'},
				{name: 'contact_bday'},
				{name: 'org_name'},
				{name: 'org_unit'},
				{name: 'contact_title'},
				{name: 'contact_role'},
				{name: 'contact_assistent'},
				{name: 'contact_room'},
				{name: 'adr_one_street'},
				{name: 'adr_one_street2'},
				{name: 'adr_one_locality'},
				{name: 'adr_one_region'},
				{name: 'adr_one_postalcode'},
				{name: 'adr_one_countryname'},
				{name: 'contact_label'},
				{name: 'adr_two_street'},
				{name: 'adr_two_street2'},
				{name: 'adr_two_locality'},
				{name: 'adr_two_region'},
				{name: 'adr_two_postalcode'},
				{name: 'adr_two_countryname'},
				{name: 'tel_work'},
				{name: 'tel_cell'},
				{name: 'tel_fax'},
				{name: 'tel_assistent'},
				{name: 'tel_car'},
				{name: 'tel_pager'},
				{name: 'tel_home'},
				{name: 'tel_fax_home'},
				{name: 'tel_cell_private'},
				{name: 'tel_other'},
				{name: 'tel_prefer'},
				{name: 'contact_email'},
				{name: 'contact_email_home'},
				{name: 'contact_url'},
				{name: 'contact_url_home'},
				{name: 'contact_freebusy_uri'},
				{name: 'contact_calendar_uri'},
				{name: 'contact_note'},
				{name: 'contact_tz'},
				{name: 'contact_geo'},
				{name: 'contact_pubkey'},
				{name: 'contact_created'},
				{name: 'contact_creator'},
				{name: 'contact_modified'},
				{name: 'contact_modifier'},
				{name: 'contact_jpegphoto'},
				{name: 'account_id'}
			],
			// turn on remote sorting
			remoteSort: true
		});

		ds.setDefaultSort('contact_id', 'desc');

		ds.load();

		var cm = new Ext.grid.ColumnModel([{
				resizable: true,
				id: 'contact_id',
				header: 'Id',
				dataIndex: 'contact_id',
				width: 30
			},{
				resizable: true,
				id: 'n_family',
				header: 'Family name',
				dataIndex: 'n_family'
			},{
				resizable: true,
				id: 'n_given',
				header: 'Given name',
				dataIndex: 'n_given'
			},{
				resizable: true,
				header: 'Middle name',
				dataIndex: 'n_middle',
				hidden: true
			},{
				resizable: true,
				id: 'n_prefix',
				header: 'Prefix',
				dataIndex: 'n_prefix',
				hidden: true
			},{
				resizable: true,
				header: 'Suffix',
				dataIndex: 'n_suffix',
				hidden: true
			},{
				resizable: true,
				header: 'Full name',
				dataIndex: 'n_fn',
				hidden: true
			},{
				resizable: true,
				header: 'Birthday',
				dataIndex: 'contact_bday',
				hidden: true
			},{
				resizable: true,
				header: 'Organisation',
				dataIndex: 'org_name'
			},{
				resizable: true,
				header: 'Unit',
				dataIndex: 'org_unit'
			},{
				resizable: true,
				header: 'Title',
				dataIndex: 'contact_title',
				hidden: true
			},{
				resizable: true,
				header: 'Role',
				dataIndex: 'contact_role',
				hidden: true
			},{
				resizable: true,
				id: 'addressbook',
				header: "addressbook",
				dataIndex: 'addressbook'
		}]);
		
		cm.defaultSortable = true; // by default columns are sortable

		var grid = new Ext.grid.Grid(outerDivTag, {
			ds: ds,
			cm: cm,
			autoSizeColumns: false,
			selModel: new Ext.grid.RowSelectionModel({multiSelect:true}),
			enableColLock:false,
			loadMask: true,
			enableDragDrop:true,
			ddGroup: 'TreeDD',
			autoExpandColumn: 'n_given'
		});		
		

		grid.render();

		var gridHeader = grid.getView().getHeaderPanel(true);
		
		// add a paging toolbar to the grid's footer
		var pagingHeader = new Ext.PagingToolbar(gridHeader, ds, {
			pageSize: 50,
			displayInfo: true,
			displayMsg: 'Displaying contacts {0} - {1} of {2}',
			emptyMsg: "No contacts to display"
		});

		pagingHeader.insertButton(0, {
			id: 'addbtn',
			cls:'x-btn-icon',
			icon:'images/oxygen/16x16/actions/edit-add.png',
			tooltip: 'add new contact',
			onClick: _openDialog
		});

		pagingHeader.insertButton(1, {
			id: 'editbtn',
			cls:'x-btn-icon',
			icon:'images/oxygen/16x16/actions/edit.png',
			tooltip: 'edit current contact',
			disabled: true,
			onClick: _openDialog
		});

		pagingHeader.insertButton(2, {
			id: 'deletebtn',
			cls:'x-btn-icon',
			icon:'images/oxygen/16x16/actions/edit-delete.png',
			tooltip: 'delete selected contacts',
			disabled: true,
			onClick: _openDialog
		});

		pagingHeader.insertButton(3, new Ext.Toolbar.Separator());

		center.add(new Ext.GridPanel(grid));
		
		grid.on('rowclick', function(gridP, rowIndexP, eventP) {
			var rowCount = grid.getSelectionModel().getCount();
			
			var btns = pagingHeader.items.map;
			
			if(rowCount < 1) {
				btns.editbtn.disable();
				btns.deletebtn.disable();
			} else if(rowCount == 1) {
				btns.editbtn.enable();
				btns.deletebtn.enable();
			} else {
				btns.editbtn.disable();
				btns.deletebtn.enable();
			}
		});

		grid.on('rowdblclick', function(gridPar, rowIndexPar, ePar) {
			var record = gridPar.getDataSource().getAt(rowIndexPar);
			console.log('id: ' + record.data.contact_id);
			try {
				_openDialog(record.data.contact_id);
			} catch(e) {
			//	alert(e);
			}
		});
	}

	var _openDialog = function(_id) {
		appId = 'addressbook';
		var popup = window.open('index.php?application=addressbook&id=' + _id,'popupname','width=900,height=600,directories=no,toolbar=no,location=no,menubar=no,scrollbars=no,status=no,resizable=no,dependent=no');

		return;
	}
	
	var _showEditDialog = function() {
		var addressedit = new Ext.form.Form({
			labelWidth: 75, // label settings here cascade unless overridden
			url:'jsonrpc.php?application=Addressbook_Json&func=saveAddress',
			reader : new Ext.data.JsonReader({root: 'results'}, [
				{name: 'contact_id'},
				{name: 'contact_tid'},
				{name: 'contact_owner'},
				{name: 'contact_private'},
				{name: 'cat_id'},
				{name: 'n_family'},
				{name: 'n_given'},
				{name: 'n_middle'},
				{name: 'n_prefix'},
				{name: 'n_suffix'},
				{name: 'n_fn'},
				{name: 'n_fileas'},
				{name: 'contact_bday'},
				{name: 'org_name'},
				{name: 'org_unit'},
				{name: 'contact_title'},
				{name: 'contact_role'},
				{name: 'contact_assistent'},
				{name: 'contact_room'},
				{name: 'adr_one_street'},
				{name: 'adr_one_street2'},
				{name: 'adr_one_locality'},
				{name: 'adr_one_region'},
				{name: 'adr_one_postalcode'},
				{name: 'adr_one_countryname'},
				{name: 'contact_label'},
				{name: 'adr_two_street'},
				{name: 'adr_two_street2'},
				{name: 'adr_two_locality'},
				{name: 'adr_two_region'},
				{name: 'adr_two_postalcode'},
				{name: 'adr_two_countryname'},
				{name: 'tel_work'},
				{name: 'tel_cell'},
				{name: 'tel_fax'},
				{name: 'tel_assistent'},
				{name: 'tel_car'},
				{name: 'tel_pager'},
				{name: 'tel_home'},
				{name: 'tel_fax_home'},
				{name: 'tel_cell_private'},
				{name: 'tel_other'},
				{name: 'tel_prefer'},
				{name: 'contact_email'},
				{name: 'contact_email_home'},
				{name: 'contact_url'},
				{name: 'contact_url_home'},
				{name: 'contact_freebusy_uri'},
				{name: 'contact_calendar_uri'},
				{name: 'contact_note'},
				{name: 'contact_tz'},
				{name: 'contact_geo'},
				{name: 'contact_pubkey'},
				{name: 'contact_created'},
				{name: 'contact_creator'},
				{name: 'contact_modified'},
				{name: 'contact_modifier'},
				{name: 'contact_jpegphoto'},
				{name: 'account_id'}
			])
		});
		
		addressedit.column({width:280, labelWidth:75});
		
		addressedit.fieldset(
			{legend:'Contact information'},
			new Ext.form.TextField({
				fieldLabel: 'Prefix',
				name: 'n_prefix',
				width:175
			}),
			new Ext.form.TextField({
					fieldLabel: 'First Name',
					name: 'n_given',
					vtype: 'alphanum',
					width:175
	        }),
			new Ext.form.TextField({
					fieldLabel: 'Middle Name',
					name: 'n_middle',
					vtype: 'alphanum',
					width:175,
					allowBlank:false
			}),			

			new Ext.form.TextField({
					fieldLabel: 'Last Name',
					name: 'n_family',
					vtype: 'alphanum',
					width:175,
					allowBlank:false
			}),
	        new Ext.form.TextField({
					fieldLabel: 'Suffix',
					name: 'n_suffix',
					width:175
	        }),
	        new Ext.form.TextField({
					fieldLabel: 'Title',
					name: 'contact_title',
					width:175
	        }),			
	        new Ext.form.TextField({
					fieldLabel: 'Role',
					name: 'contact_role',
					width:175
	        }),
	        new Ext.form.TextField({
					fieldLabel: 'Room',
					name: 'contact_room',
					width:175
	        })



 			
		);

		addressedit.fieldset(
        {legend:'Internet'},		
			new Ext.form.TextField({
				fieldLabel: 'Email',
				name: 'contact_email',
				vtype:'email',
				width:175
			}),
			
			new Ext.form.TextField({
				fieldLabel: 'Email private',
				name: 'contact_email_home',
				vtype:'email',
				width:175
			}),
			new Ext.form.TextField({
				fieldLabel: 'URL',
				name: 'contact_url',
				vtype:'url',
				width:175
			}),
			new Ext.form.TextField({
				fieldLabel: 'URL private',
				name: 'contact_url_home',
				vtype:'url',
				width:175
			})
		);		
		
		
	addressedit.end();
		
	addressedit.column({width:280, style:'margin-left:10px', labelWidth:75});	
		
		addressedit.fieldset(
        {legend:'Business address'},		
			new Ext.form.TextField({
				fieldLabel: 'Firm',
				name: 'org_name',
				width:175
			}),
			
			new Ext.form.TextField({
				fieldLabel: 'Unit',
				name: 'org_unit',
				width:175
			}),			
			new Ext.form.TextField({
				fieldLabel: 'Street',
				name: 'adr_one_street',
				width:175
			}),			

			new Ext.form.TextField({
				fieldLabel: 'Street 2',
				name: 'adr_one_street2',
				width:175
			}),			
			new Ext.form.TextField({
				fieldLabel: 'Postalcode',
				name: 'adr_one_postalcode',
				width:175
			}),						
			new Ext.form.TextField({
				fieldLabel: 'City',
				name: 'adr_one_locality',
				width:175
			}),
			new Ext.form.TextField({
				fieldLabel: 'Region',
				name: 'adr_one_region',
				width:175
			}),				
			new Ext.form.ComboBox({
				fieldLabel: 'Country',
				name: 'adr_one_countryname',
				hiddenName:'countryname',
	            store: new Ext.data.SimpleStore({
	            fields: ['abbr', 'state'],
	            data : Ext.exampledata.states // from states.js
	            }),
	            displayField:'state',
	            typeAhead: true,
	            mode: 'local',
	            triggerAction: 'all',
	            emptyText:'Select a state...',
	            selectOnFocus:true,
					width:175
			})			

		);
		
		addressedit.fieldset(
        {legend:'Privat address'},		
			new Ext.form.TextField({
				fieldLabel: 'Street',
				name: 'adr_two_street',
				width:175
			}),
			new Ext.form.TextField({
				fieldLabel: 'Street2',
				name: 'adr_two_street2',
				width:175
			}),					
			new Ext.form.TextField({
				fieldLabel: 'Postalcode',
				name: 'adr_two_postalcode',
				width:175
			}),			
			new Ext.form.TextField({
				fieldLabel: 'City',
				name: 'adr_two_locality',
				width:175
			}),
			new Ext.form.TextField({
				fieldLabel: 'Region',
				name: 'adr_two_region',
				width:175
			}),			
			new Ext.form.ComboBox({
				fieldLabel: 'Country',
				name: 'adr_two_countryname',
				hiddenName:'countryname',
	            store: new Ext.data.SimpleStore({
	            fields: ['abbr', 'state'],
				data : Ext.exampledata.states // from states.js
	            }),
	            displayField:'state',
	            typeAhead: true,
	            mode: 'local',
	            triggerAction: 'all',
	            emptyText:'Select a state...',
	            selectOnFocus:true,
					width:175
			}),						
			new Ext.form.DateField({
				fieldLabel: 'Birthday',
				name: 'contact_bday',
				width:175
			})
		);
		
	addressedit.end();		
	
	addressedit.column({width:280, style:'margin-left:10px', labelWidth:75});	
		
		addressedit.fieldset(
        {legend:'Business Phone Numbers'},		
			new Ext.form.TextField({
				fieldLabel: 'Phone',
				name: 'tel_work',
				width:175
			}),
			new Ext.form.TextField({
				fieldLabel: 'Cellphone',
				name: 'tel_cell',
				width:175
			}),
			new Ext.form.TextField({
				fieldLabel: 'FAX',
				name: 'tel_fax',
				width:175
			}),
			new Ext.form.TextField({
				fieldLabel: 'Car phone',
				name: 'tel_car',
				width:175
			}),
			new Ext.form.TextField({
				fieldLabel: 'Pager',
				name: 'tel_pager',
				width:175
			})	
		);

		addressedit.fieldset(
        {legend:'Assistent Phone Number'},		
			new Ext.form.TextField({
				fieldLabel: 'Name Assistent',
				name: 'contact_assistent',
				width:175
			}),		
			new Ext.form.TextField({
				fieldLabel: 'Phone',
				name: 'tel_assistent',
				width:175
			})
		);		
		
		addressedit.fieldset(
        {legend:'Privat Phone Numbers'},		
			new Ext.form.TextField({
				fieldLabel: 'Phone',
				name: 'tel_home',
				width:175
			}),
			new Ext.form.TextField({
				fieldLabel: 'Cellphone',
				name: 'tel_cell_private',
				width:175
			}),
			new Ext.form.TextField({
				fieldLabel: 'FAX',
				name: 'tel_fax_home',
				width:175
			})			
		);				
		
		
		
	addressedit.end();		
		
		
		addressedit.addButton('Save', function (){
			if (addressedit.isValid()) {
				addressedit.submit({
					waitMsg:'submitting, please wait...',
					success:function(form, action, o) {
						//Ext.MessageBox.alert("Information",action.result.welcomeMessage);
						window.opener.EGWNameSpace.Addressbook.reload();
						window.close();
					},
					failure:function(form, action) {
						Ext.MessageBox.alert("Error",action.result.errorMessage);
					}
				});
			}else{
				Ext.MessageBox.alert('Errors', 'Please fix the errors noted.');
			}
		}, addressedit);
		
		addressedit.addButton('Cancel', function (){
			window.close()
		});
		
		addressedit.render('content');	
		
		if(editContactID) {
			addressedit.load({url:'jsonrpc.php?application=Addressbook_Json&func=readAddress&id=' + editContactID});
		}
			
	};

	// public stuff
	return {
		// public functions
		show: function(_layout) {
			_showAddressGrid(_layout);
		},
		
		reload: function() {
			ds.load();
		},
		
		handleDragDrop: function(e) {
			alert('Best Regards From Addressbook');
		},
		
		openDialog: function() {
			_openDialog();
		},

		alertme: function() {
			_showEditDialog();
		}
	}
	
}(); // end of application


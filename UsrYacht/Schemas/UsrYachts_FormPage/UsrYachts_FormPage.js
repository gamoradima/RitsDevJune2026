define("UsrYachts_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "SaveButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CancelButton",
				"values": {
					"color": "default",
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "CloseButton",
				"values": {
					"size": "large",
					"iconPosition": "only-text"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYachts"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "5958a0cb-0921-42db-9893-6be27ddc16b2",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "PushMeButton",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMeButton_caption)#",
					"color": "outline",
					"disabled": false,
					"size": "medium",
					"iconPosition": "left-icon",
					"visible": true,
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default",
					"icon": "process-button-icon"
				},
				"parentName": "CardToggleContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto",
					"multiline": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_r310cyl",
					"control": "$PDS_UsrPrice_r310cyl",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "TicketPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTicketPrice_8sthc4h",
					"control": "$PDS_UsrTicketPrice_8sthc4h",
					"readonly": true,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"visible": false
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_rcll3xr",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrDriveType_rcll3xr",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_t8d63t6",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrStatus_t8d63t6",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "PassengersCount",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengersCount_i24fl0n",
					"control": "$PDS_UsrPassengersCount_i24fl0n",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_w5k3w6l",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager_w5k3w6l",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_a9ijuuy",
					"control": "$PDS_UsrComment_a9ijuuy",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "ManagerEmail",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "#ResourceString(ManagerEmail_label)#",
					"control": "$PDS_UsrManagerEmail_ks4z9hg",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_u4jfwr3",
					"control": "$PDS_UsrNumber_u4jfwr3",
					"placeholder": "",
					"tooltip": "",
					"readonly": true,
					"multiline": false,
					"labelPosition": "auto",
					"visible": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "CategoryMultiSelect",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(CategoryMultiSelect_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrParentYacht",
					"selectSchemaName": "UsrYachtCategoryStorage",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"required": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_29gbdku",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_29gbdku_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_7u6bt7s",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_29gbdku",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_wz4ji1o",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_7u6bt7s",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailAddBtn_5zfvc0u",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailAddBtn_5zfvc0u_caption)#",
					"icon": "add-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.CreateRecordRequest",
						"params": {
							"entityName": "UsrYachtRental",
							"defaultValues": [
								{
									"attributeName": "UsrParentYacht",
									"value": "$Id"
								}
							]
						}
					},
					"visible": true,
					"clickMode": "default"
				},
				"parentName": "FlexContainer_wz4ji1o",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_ocdmgcj",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_ocdmgcj_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_wcbqcijDS"
						}
					}
				},
				"parentName": "FlexContainer_wz4ji1o",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_ni12tjy",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_ni12tjy_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_wz4ji1o",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_yoxta4l",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_yoxta4l_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_wcbqcij"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ni12tjy",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_mjszo3x",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_mjszo3x_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRental"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_ni12tjy",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_aj1xuit",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_aj1xuit_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_aj1xuit_GridDetail_wcbqcij",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_wcbqcij"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_aj1xuit_SearchValue",
							"GridDetailSearchFilter_aj1xuit_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_wz4ji1o",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "GridContainer_q0x6cww",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_29gbdku",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_wcbqcij",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_wcbqcij",
					"primaryColumnName": "GridDetail_wcbqcijDS_Id",
					"columns": [
						{
							"id": "c6619601-7e78-0744-d26d-482f6e8aa2f1",
							"code": "GridDetail_wcbqcijDS_UsrStartDate",
							"caption": "#ResourceString(GridDetail_wcbqcijDS_UsrStartDate)#",
							"dataValueType": 8,
							"width": 137
						},
						{
							"id": "c5ea4747-abf6-dcc6-89e1-0791794d7240",
							"code": "GridDetail_wcbqcijDS_UsrEndDate",
							"caption": "#ResourceString(GridDetail_wcbqcijDS_UsrEndDate)#",
							"dataValueType": 8,
							"width": 159
						},
						{
							"id": "54fb3e09-e4f0-a7a0-d563-6e0f82512d02",
							"code": "GridDetail_wcbqcijDS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_wcbqcijDS_UsrCustomer)#",
							"dataValueType": 10,
							"width": 152
						},
						{
							"id": "445c348c-0dc6-2500-a4c3-72327f33509e",
							"code": "GridDetail_wcbqcijDS_UsrComment",
							"caption": "#ResourceString(GridDetail_wcbqcijDS_UsrComment)#",
							"dataValueType": 28,
							"width": 176
						},
						{
							"id": "ce359d10-765b-1d4a-fafb-62b028255844",
							"code": "GridDetail_wcbqcijDS_CreatedOn",
							"caption": "#ResourceString(GridDetail_wcbqcijDS_CreatedOn)#",
							"dataValueType": 7
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_q0x6cww",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrPrice_r310cyl": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 500,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrDriveType_rcll3xr": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrDriveType_rcll3xr_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrStatus_t8d63t6": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrStatus_t8d63t6_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrComment_a9ijuuy": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_w5k3w6l": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_w5k3w6l_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrPassengersCount_i24fl0n": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 2,
									"message": "#ResourceString(PassengersCountCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrNumber_u4jfwr3": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrTicketPrice_8sthc4h": {
						"modelConfig": {
							"path": "PDS.UsrTicketPrice"
						}
					},
					"PDS_UsrManagerEmail_ks4z9hg": {
						"modelConfig": {
							"path": "PDS.UsrManagerEmail_ks4z9hg"
						}
					},
					"GridDetail_wcbqcij": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_wcbqcijDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_aj1xuit_GridDetail_wcbqcij",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "desc",
										"columnName": "CreatedOn"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_wcbqcijDS_UsrStartDate": {
									"modelConfig": {
										"path": "GridDetail_wcbqcijDS.UsrStartDate"
									}
								},
								"GridDetail_wcbqcijDS_UsrEndDate": {
									"modelConfig": {
										"path": "GridDetail_wcbqcijDS.UsrEndDate"
									}
								},
								"GridDetail_wcbqcijDS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_wcbqcijDS.UsrCustomer"
									}
								},
								"GridDetail_wcbqcijDS_UsrComment": {
									"modelConfig": {
										"path": "GridDetail_wcbqcijDS.UsrComment"
									}
								},
								"GridDetail_wcbqcijDS_CreatedOn": {
									"modelConfig": {
										"path": "GridDetail_wcbqcijDS.CreatedOn"
									}
								},
								"GridDetail_wcbqcijDS_Id": {
									"modelConfig": {
										"path": "GridDetail_wcbqcijDS.Id"
									}
								}
							}
						}
					},
					"CategoryMultiSelect_List_Items_Predefined_Filter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"dependencies": {
						"GridDetail_wcbqcijDS": [
							{
								"attributePath": "UsrParentYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYachts",
							"attributes": {
								"UsrManagerEmail_ks4z9hg": {
									"path": "UsrManager.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_wcbqcijDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRental",
							"attributes": {
								"UsrStartDate": {
									"path": "UsrStartDate"
								},
								"UsrEndDate": {
									"path": "UsrEndDate"
								},
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"UsrComment": {
									"path": "UsrComment"
								},
								"CreatedOn": {
									"path": "CreatedOn"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
			{
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPrice_r310cyl;
					console.log("Price = " + price);
					request.$context.PDS_UsrComment_a9ijuuy = "comment from JS code!";
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
				request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      				if (request.attributeName === 'PDS_UsrPrice_r310cyl' || 		        // if Price changed
					   request.attributeName === 'PDS_UsrPassengersCount_i24fl0n' ) { 		// or Passenger count changed
						let price = await request.$context.PDS_UsrPrice_r310cyl;
						let passengers = await request.$context.PDS_UsrPassengersCount_i24fl0n;
						// some changes here
						let ticket_price = 0;
						if (passengers) {
							ticket_price = price / passengers;
						}
						request.$context.PDS_UsrTicketPrice_8sthc4h = ticket_price;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			}

		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			/* The validator type must contain a vendor prefix.
			Format the validator type in PascalCase. */
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}

		}/**SCHEMA_VALIDATORS*/
	};
});
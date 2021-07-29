var form_items = {device_list : [
    { "id": 1, "name": "Device 1", "hasChild": true, "expanded": true },
    { "id": 2, "pid": 1, "name": "Revenue" },
    { "id": 3, "pid": 1, "name": "Fees" },
    { "id": 4, "pid": 1, "name": "Others" },
    { "id": 7, "name": "Device 2", "hasChild": true , "expanded": true},
    { "id": 8, "pid": 7, "name": "Revenue" },
    { "id": 9, "pid": 7, "name": "Fees" },
    { "id": 10, "pid": 7, "name": "Others" },
    { "id": 11, "name": "Device 3", "hasChild": true , "expanded": true},
    { "id": 12, "pid": 11, "name": "Revenue" },
    { "id": 13, "pid": 11, "name": "Fees" },
    { "id": 14, "pid": 11, "name": "Others" },
],

focus_title : ['title1', 'title2', 'title3', 'title4', 'title5'],
info : ['info1', 'info2', 'info3', 'info4', 'info5'],
summary : ['summary_option_1', 'summary_option_2', 'summary_option_3', 'summary_option_4', 'summary_option_5'],
display : ['avg','min','max','N.A.']

}

export default form_items
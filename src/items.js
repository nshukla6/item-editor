const items = [
    {
        id:"abc",
        name:"ABC",
        fields: [
            {
                id:"abc-1",
                fieldName:"First Name",
                fieldType: "text",
                fieldValue:""
            },
            {
                id:"abc-2",
                fieldName:"Last Name",
                fieldType: "text",
                fieldValue:""
            },
            {
                id:"abc-3",
                fieldName:"Graduate",
                fieldType: "toggle",
                fieldValue:false
            },
            {
                id:"abc-4",
                fieldName:"Section",
                fieldType: "option",
                fieldOptions:["A","B","C","D"],
                fieldValue:0
            },

        ],
        isSelected:"selected"
    },
    {
        id:"def",
        name:"DEF",
        fields: [
            {
                id:"def-1",
                fieldName:"Adult",
                fieldType: "toggle",
                fieldValue:false
            },
            {
                id:"def-2",
                fieldName:"Address",
                fieldType: "text",
                fieldValue:""
            },
            {
                id:"def-3",
                fieldName:"Confirm",
                fieldType: "toggle",
                fieldValue:false
            },
            {
                id:"def-4",
                fieldName:"Grade",
                fieldType: "option",
                fieldOptions:["A","B","C","D"],
                fieldValue:0
            }
        ]
    },
    {
        id:"ghi",
        name:"GHI",
        fields: [
            {
                id:"ghi-1",
                fieldName:"Adult",
                fieldType: "toggle",
                fieldValue:false
            },
            {
                id:"ghi-2",
                fieldName:"Address",
                fieldType: "text",
                fieldValue:""
            },
            {
                id:"ghi-3",
                fieldName:"Confirm",
                fieldType: "toggle",
                fieldValue:false
            },
            {
                id:"ghi-4",
                fieldName:"Grade",
                fieldType: "option",
                fieldOptions:["A1","B1","C1","D1"],
                fieldValue:0
            }
        ]
    }
];

export default items;
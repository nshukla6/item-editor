import React from 'react'

const Component = ({id, fieldName, fieldType, fieldValue, fieldOptions, formUpdate }) => {

    switch(fieldType){
        case "text":
            return (
                <div className="field">
                    <div className="margin-y-small"><label htmlFor={id}>{fieldName}</label></div>
                    <div><input onChange={formUpdate} type="text" name={fieldName} value={fieldValue} id={id} /></div>
                </div>
            )
                
        case "toggle":
            return (
                <div className="field">
                    <input onChange={formUpdate} type="checkbox" checked={fieldValue} name={fieldName}  value={fieldValue} />
                    <label className="margin-x-small" htmlFor={id}>{fieldName}</label>
                </div>
            )
            
        default:
            return (
            <div className="field">
                <div className="margin-y-small"><label htmlFor={id}>{fieldName}</label></div>
                <select onChange={formUpdate} name={fieldName} id={id} value={fieldValue} >
                    {fieldOptions.map((option) => <option key={option} value={option}>{option}</option>)}
                </select>
            </div>
            )
            
    }
}

export default Component

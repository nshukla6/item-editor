import React from 'react';
import { connect } from "react-redux";
import Component  from "./Component";

const Aside = ({items, onChangeFieldValue}) => {

    const item = items.find(item => item.isSelected === "selected");
    const {fields} = item;

    const onChange = (e) => {
        let fieldValue;
        const itemName = item.name;
        const fieldName = e.target.name;
        if(e.target.type === "checkbox"){
            fieldValue = e.target.checked;
        }else{
            fieldValue = e.target.value;
        }
        onChangeFieldValue(itemName, fieldName, fieldValue);
    }
    return (
        <div className="aside">
            {
                fields.map(field => <Component key={field.id} {...field} formUpdate={onChange} />)
            }
        </div>
    )
}


const mapStateToProps = state => {

    return{
        items: state.present
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onChangeFieldValue: (itemName, fieldName, fieldValue) => dispatch({ payload:{itemName, fieldName, fieldValue}, type: "CHANGE_FIELD" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Aside);

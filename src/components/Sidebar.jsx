import React from 'react';
import { connect } from "react-redux";

const Sidebar = ({ items, onSelectItem }) => {

    const itemClicked = (e) => {
        const item = e.target.innerText;
        onSelectItem(item);
    }

    return (
        <div className="sidebar">
            {
                items.map(item =>
                    <div 
                        className={`sidebar__item ${item.isSelected}`}
                        onClick={itemClicked}
                        key={item.id}
                    >
                        {item.name}
                    </div>
                    )
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
        onSelectItem: (item) => dispatch({ payload:item, type: "CHANGE_ITEM" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)

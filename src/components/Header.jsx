import React from 'react';
import { connect } from "react-redux";

const Header = ({ heading, items, undo, redo, cancel }) => {

    const save = () => {
        console.log(items);
    }
    return (
        <header className="items-header">
            <div className="heading">{heading}</div>
            <div className="buttons">
                <div className="btn-grp">
                    <button onClick={undo} className="btn">Undo</button>
                    <button onClick={redo} className="btn">Redo</button>
                </div>
                <div className="btn-grp">
                    <button onClick={save} className="btn">Save</button>
                    <button onClick={cancel} className="btn">Cancel</button>
                </div>
            </div>
        </header>
    )
}

const mapStateToProps = state => {
       return{
           items: state.present
       }
   }

const mapDispatchToProps = dispatch => {
    return {
        undo: () => dispatch({ type: "UNDO" }),
        redo: () => dispatch({ type: "REDO" }),
        cancel: () => dispatch({ type: "CANCEL" })
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);

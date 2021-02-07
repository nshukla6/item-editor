import items from "../items";

const initialState = {
    past:[],
    present: [...items],
    future:[]
}

const reducer = (state=initialState, action) => {
    let {past, present, future} = state;
    switch(action.type){
        case "CHANGE_ITEM":
            past = [...past, present];
            const presentState = present.map(item => {
                if(item.name === action.payload){
                    return {...item, isSelected: "selected"};
                }else{
                    return {...item, isSelected: "not-selected"};
                }
            });
            return {...state, past, present:presentState};
        case "CHANGE_FIELD":
            past = [...past, present];
            const {itemName, fieldName, fieldValue} = action.payload;
            const newState= present.map(item => {
                if(item.name === itemName){
                    const fields = item.fields.map((field) => {
                        if(field.fieldName === fieldName){
                            return {...field,fieldValue}
                        }else{
                            return {...field}
                        }
                    });
                    const newItem = {...item, fields}
                    return {...newItem};
                }else{
                    return {...item}
                }
            });
            return {...state, past, present:newState};
        
        case "UNDO":
            if (past.length > 0) {
                const previous = past[past.length - 1];
                const newPast = past.slice(0, past.length - 1);
                return {
                    past: newPast,
                    present: previous,
                    future: [present, ...future]
                }
            }
            return {...state}
        case "REDO":
            if (future.length > 0) {
                const next = future[0]
                const newFuture = future.slice(1)
                return {
                    past: [...past, present],
                    present: next,
                    future: newFuture
                }
            }
            return {...state}
        
        case "CANCEL":
            return {
                ...initialState
            }
            
        default:
            return {...state};
    }
}

export default reducer;
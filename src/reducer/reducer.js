 const defaultState = {
        fruitsModel:['apple','pineapple','banana','strawberry'],
        prices:['11','12','13','14'],
        inputValue:'',
        list:[]
    }

export default (state=defaultState, action) =>{
    
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }
    if(action.type === 'click_btn_add'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.list.push(newState.inputValue);
        newState.inputValue = ''
        return newState
    }
    return state
}
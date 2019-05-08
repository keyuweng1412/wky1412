 const defaultState = {
        fruitsModel:['apple','pineapple','banana','strawberry'],
        prices:['11','12','13','14'],
        inputValue:'',
        list:[]
    }

export default (state=defaultState, action) =>{

    // if(action.type === 'click_dele_item'){
    //     const newState = JSON.parse(JSON.stringify(state))
    //     newState.list.splice(action.value, 1)
    //     return newState
    // }
    
    if(action.type === 'change_input_value'){
        const newState = JSON.parse(JSON.stringify(state))
        newState.inputValue = action.value
        return newState
    }


    if(action.type === 'click_btn_add'){
        const newState = JSON.parse(JSON.stringify(state))
        if(!newState.inputValue){
            alert('数量不能为空')
            return newState
        }
        if(isNaN(newState.inputValue)){
            alert('请输入数字')
            newState.inputValue = ''
            return newState
        }

        const str = '商品名:'+ newState.fruitsModel[action.value] + ',' +
                     '单价:' + newState.prices[action.value] + ',' +
                     '数量:' + newState.inputValue + ',' + 
                     '总价:' + newState.prices[action.value]*newState.inputValue
        newState.list.push(str);
        newState.inputValue = ''
        return newState
    }

    
    return state
}
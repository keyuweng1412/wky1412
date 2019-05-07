import React, {Component} from 'react'
import {connect} from 'react-redux'


var textname = ''
var labelvalue = ''
class OrderManage extends Component{
    
    
    // state = {
    //     fruitsModel:['apple','pineapple','banana','strawberry'],
    //     prices:['11','12','13','14']
    // }

    handleChangeFruits = (e) => {
        document.getElementById('label1').innerHTML = this.props.prices[e.target.value];
        // 获取商品
        var mySelect = document.getElementById('selected')
        var index = mySelect.selectedIndex;
        var textName = mySelect.options[index].text
        textname = textName
        console.log(textname);
        
        // 获取单价
        var label = document.getElementById('label1')
        var labelValue = label.innerText.trim()
        labelvalue = labelValue
        console.log(labelvalue);
    }
    
    render(){
        const {prices} = this.props
        
        return(
            <div>
                <select id='selected' onChange={this.handleChangeFruits}>
                {
                    this.props.fruitsModel.map((item, index) => {
                        return <option value={index} key={item}>{item}</option>
                    })
                }
                </select>
                <label>单价/元:</label>
                <label id='label1'>{prices[0]}</label>
               
                <input placeholder='请输入数量...' 
                    value={this.props.inputValue}
                    onChange={this.props.handleInputChange}></input>
                <button onClick={this.props.clickBtn}>订购</button>
                
                
                <ul>
                {
                    this.props.list.map((item,index)=>{
                        

                        return <li key={item}>{'商品名:' + textname + '单价:' + labelvalue + '数量:' + item + '总价:' + labelvalue*item}</li>
                    })
                }
                </ul>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        fruitsModel:state.fruitsModel,
        prices:state.prices,
        inputValue: state.inputValue,
        list: state.list
    }
}

const mapDispatchToProps =(dispatch) => { 
    return {

        // 输入框改变
        handleInputChange(e){
            // console.log(e.target.value)
            const action ={
                type: 'change_input_value',
                value: e.target.value
            }
            dispatch(action)
        },
        // 点击按钮
        clickBtn(){
            const action = {
                type: 'click_btn_add'
            }
            dispatch(action)
        }
        
    }
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderManage);
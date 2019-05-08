import React, {Component} from 'react'
import {connect} from 'react-redux'

var count = 0
class OrderManage extends Component{

    // state = {
    //     fruitsModel:['apple','pineapple','banana','strawberry'],
    //     prices:['11','12','13','14']
    // }

    handleChangeFruits = (e) => {
        count = e.target.value
        document.getElementById('label1').innerHTML = this.props.prices[count];

        // // 获取商品
        // var mySelect = document.getElementById('selected')
        // var index = mySelect.selectedIndex;
        // var textName = mySelect.options[index].text
        // textname = textName
        // console.log(textname);
        
        // // 获取单价
        // var label = document.getElementById('label1')
        // var labelValue = label.innerText.trim()
        // labelvalue = labelValue
        // console.log(labelvalue);
    }

    render(){
        const {prices} = this.props
        
        return(
            <div>
                <fieldset>
                    <select id='selected' onChange={this.handleChangeFruits}>
                    {
                        this.props.fruitsModel.map((item, index) => {
                            return <option value={index} key={item}>{item}</option>
                        })
                    }
                    </select>
                    <label style={{marginLeft:'10px'}}>单价/元:</label>
                    <label id='label1' style={{marginRight:'10px'}}>{prices[0]}</label>
                    <input placeholder='请输入数量...' 
                        value={this.props.inputValue}
                        onChange={this.props.handleInputChange}></input>

                    <button style={{marginLeft:'10px'}} onClick={this.props.clickBtn}>订购</button>

                </fieldset>
                
                
                <ul>
                {
                    this.props.list.map((item,index)=>{
                        console.log(item,index);
                        return <li key={index}>
                                    {item}
                                </li>
                        
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
        // 点击订购
        clickBtn(){

            const action = {
                type: 'click_btn_add',
                value: count
            }
            dispatch(action)
        },
        
    }
}


export default connect(
    mapStateToProps,
    mapDispatchToProps
)(OrderManage);
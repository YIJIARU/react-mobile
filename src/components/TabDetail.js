import React,{Component} from 'react';
import axios from 'axios';
import { NavBar } from 'antd-mobile';
import { connect } from 'react-redux';
import {getListData,fetchInfo} from '../actions/counter'
import { Button, List } from 'antd-mobile';
import { Card, WingBlank, WhiteSpace } from 'antd-mobile';
import store from '../store';
import {addToCart} from '../actions/carts'



const mapStateToProps = (state)=>{    
  // console.log(state)
  return {
      carts:state.carts
  }
}

class TabDetail extends Component{
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }


  makeRemoteRequests = ()=>{
    axios({
      url   : `http://localhost:3000/product/${this.props.match.params.id}`,
      method: 'get'
    }).then(res=>{
      this.setState({
        list: res.data
      })
    })
  }
  componentDidMount(){
    this.makeRemoteRequests();
    
  }
  componentWillUnmount() {
    this.setState = (state, callback) => {
      return
    }
  }

  render(){
    // console.log(this.state)
    // console.log(this.props)
    const {addToCart}=this.props;
    const {img,name,price,text,time,}=this.state.list;
    return (
      <div style={{backgroundColor:"white",height:1000}}>
      <NavBar mode= "dark" style={{textAlign:"left",padding:"0 15px"}}>商品详情</NavBar>
      <div>
      <img src={img} style={{width:350,padding:10,borderRadius:5}}></img>
      <h3>产品描述</h3>
       <p style={{ fontSize:14, color:"#333",lineHeight:"20px"}}>       
       {text}
       </p>
       <hr></hr>
       <p style={{width:340,textAlign:"center"}}>
       <span style={{float:"left"}}>收藏量:</span>
       <br></br>
       <span style={{float:"right"}}>价格:</span>
       </p>
      </div>
        <Button type="primary" size="small" inline onClick={(product)=>this.props.addToCart(this.state.list)}>加入购物车</Button>
        <Button type='primary' size='small' inline style={{marginLeft:5, backgroundColor:"orange"}}>收藏</Button>
      </div>
    )
  }
}
export default connect(mapStateToProps,{addToCart})(TabDetail);

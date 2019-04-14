import React,{Component} from 'react';
import { NavBar, Icon } from 'antd-mobile';
import { Carousel, WingBlank } from 'antd-mobile';
import { connect } from 'react-redux';
import { fetchCarsouelList } from '../actions'
import { Grid } from 'antd-mobile';
import {fetchList} from '../actions'
import NewsItem from './NewsItem'

const mapStateToProps = state=>{ 
  return {
    carousel: state.carousel,
    lists   : state.counter.lists,
      total   : state.counter.total,
  } 
}


// const data = Array.from().map((_val, i) => ({
//   icon: '../assets/1.jpg',
//   text: `世界${i}`,
// }));

// 数据将我们的12个值进行了map循环。

const data1 = Array.from(new Array(16)).map(() => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));
 
// 1. 轮播
// 2. 轮播图的钩子函数当中，就要请求我们的数据。

 class Tabs1 extends Component{
  componentDidMount(){
    this.props.fetchCarsouelList();
      this.props.fetchList();
  }


//   showList(){ 
//     var lists = this.props.lists;
//     if(!lists){
//         return <li>暂无数据</li>
//     }
//     var jsx = [];
//     for(var i=0;i<lists.length;i++){
//         jsx.push(<NewsItem key={i} product={lists[i]} addToCart={this.props.addToCart}/>)
//     }
//     return jsx;
// }

  // 1. 渲染我们的走马灯
  render(){
    // console.log(this.props)
    // 3. 然后这个时候我们的状态当中的数据传到了组件当中，然后我们的组件进行渲染。
    // 采用的同样h是我们的解构赋值。
        const {lists,fetchList,carousel} = this.props;  

    const data = Array.from(carousel).map((_val, i) => ({
      icon: `${_val.img}`,
      text: `${_val.title}`,
    }));
   
    return (
      <div>
      {/*用的是我们的navBar这个组件 */}
        <NavBar mode= "dark">首页</NavBar>
        <WingBlank>
        <Carousel
        autoplay = {false}
        infinite
        beforeChange = {(from, to) => console.log(`slide from ${from} to ${to}`)}
        afterChange  = {index => console.log('slide to', index)}
              >
              {/*这里对我们的我们的数据进行输出 */}
                {carousel.map(val => (
                  <a
                    key   = {val.id}
                    href  = {val.url}
                    style = {{ display: 'inline-block', width: '100%', height: 200 }}
                  >
                    <img
                      src   = {val.img}
                      alt   = {val.title}
                      style = {{ width: '100%', verticalAlign: 'top' }}
                    />
                  </a>
                ))}
      </Carousel>  
        <div>
              <div className="sub-title">Carousel</div>
              <Grid data={data} isCarousel onClick={_el => console.log(_el)} />
        </div>
        </WingBlank>
      </div>
    )
  }
}

export default connect(mapStateToProps,{fetchCarsouelList,fetchList})(Tabs1);
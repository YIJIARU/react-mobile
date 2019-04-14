import React,{Component} from 'react';
import { ListView } from 'antd-mobile';
import axios from 'axios'
import { NavBar } from 'antd-mobile';
import {NavLink} from 'react-router-dom'

import { Grid } from 'antd-mobile';

const data = Array.from(new Array(8)).map((_val, i) => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/nywPmnTAvTmLusPxHPSu.png',
  text: `name${i}`,
}));

const data1 = Array.from(new Array(8)).map(() => ({
  icon: 'https://gw.alipayobjects.com/zos/rmsportal/WXoqXTHrSnRcUwEaQgXJ.png',
}));


//1. 然后就是我们的产品页面，最重要的就是我们的数据源，和我们的渲染行数据。

export default class Tabs3 extends React.Component {
  constructor(props) {
    super(props);
    const dataSource = new ListView.DataSource({
      rowHasChanged: (row1, row2) => row1 !== row2
    });
    this.state = {
      dataSource,
      list: [],
      page: 1
    };
  }

  // 2. 这个里面的状态就是我们的数据源，还有我们的渲染的数据列表。还有对我们的数据多的时候进行的分页。


  // 3. 这个就是我们的远程请求的时候，我们的axios惊醒我们的数据请求。
  //  然后在我们的返回数据的时候对我们的数据进行我们的赋值，
  // 这个时候设置我们的状态值的用的是setState,这个是一个回调函数。
  // 这个时候我们返回的是一个数组，数组里面好多都是对象的列表。
  // 将我们的list打开，然后让我们的后面的值覆盖后面的，这样子没改变原来的，且这样子我们的值又赋值给我们的list
  // 每每请求一次，请求一次列表，我们的列表就显示了一夜，这个时候我们的页数就增加一页。

  makeRemoteRequest = ()=>{
    axios({
      url   : `http://localhost:3000/product?_page=${this.state.page}&_limit=5&_sort=id&_order=desc`,
      method: 'get'
    }).then(res=>{
      // console.log(res)
      this.setState({
        list: [...this.state.list, ...res.data],
        page: this.state.page + 1
      })
      // console.log(this.state)
    })
  }

  componentDidMount (){
    this.makeRemoteRequest();
  }

  // 4. 当这个组件加载的时候我们的数据请求是为了显示的

  onEndReached = (event)=>{
    this.makeRemoteRequest();
  }

  // 5. 当我们的到达底部需要加载的时候，再请求我们的数据，是为了让我们的数据不断增加的。

  // 6. 渲染每一行
  renderRow = (rowData,sectionID,rowID)=>{
    var productDetailUrl = `/product/${rowData.id}`
    return (
      <div>
              <NavLink to={productDetailUrl}>
                <div key={rowID} style={{ padding: '0 15px',marginBottom:20 }}>
                    <Grid data={data1} 
                      columnNum={2}
                      renderItem={dataItem => (
                        <div style={{ padding: '0',height:"250" }}>
                          <img src={rowData.img} style={{ width: '150px', height: '125px' }} alt="" />
                          <div style={{ color: '#888', fontSize: '14px', marginTop: '0px' }}>
                            <span>{rowData.name}</span>   ¥ {rowData.id}
                          </div>
                        </div>
                      )}
                    />
                </div>
              </NavLink>
      </div>
    )
  }
  render() {
    return (
      <div>
      
      <NavBar mode= "dark" style={{}}>产品列表</NavBar>
      <ListView
        dataSource = {this.state.dataSource.cloneWithRows(this.state.list)}
        renderRow  = {(rowData, sectionID, rowID, highlightRow) => this.renderRow(rowData,sectionID,rowID)}
        style      = {{
          height  : document.documentElement.clientHeight - 50,
          overflow: 'auto',
        }}
        onEndReached          = {this.onEndReached}
        onEndReachedThreshold = {10}
        // 调用这个底部加载的函数的距离底部的临界值，像素为单位。整个我们的高度减去我们的距离底部的tab选项卡的值。
      />
      </div>
    );
  }
}

// 7. 我们的数据类型必须是dataSource类型的，所以要进行转化
// 8. 我们的属性必须要有三个属性，就是我们的数据源，渲染行，还有样式，特别是我们的高度，不然显示不出来。
// 9. 就是我们的一个函数，一个数据类型，一个我们的样式。

// 10，这个我们用的就是我们的内部的状态，并没用redux
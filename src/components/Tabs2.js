import React,{Component} from 'react';
import { connect } from 'react-redux';
import {fetchList} from '../actions'
import NewsItem from './NewsItem'
import { NavBar } from 'antd-mobile';
import {NavLink} from 'react-router-dom'


// 分页
import { Pagination, Icon } from 'antd-mobile';
import { list } from 'postcss';

const locale = {
  prevText: 'Prev',
  nextText: 'Next',
};

const mapStateToProps = (state)=>{
  return {
      lists   : state.counter.lists,
      total   : state.counter.total,
  }
}

class Tabs2 extends Component{
        changePage = (page) =>{  
          console.log(page)
          this.props.fetchList({page: page});
        }
        onChange({current}){
          console.log(current)
          current++;
        }
        showPageList(){
            var jsx = [];
            if(this.props.total >0){
                var pages = Math.ceil(this.props.total / 5)
                for(let i=1;i<=pages;i++){
                    jsx.push(<span key={i} style={{ padding: 5}} onClick={()=>this.changePage(i)}>{i}</span>)
                }
            }
            return jsx;
        }

      //  showList(){ 
      //     var lists = this.props.lists;
      //     if(!lists){
      //         return <li>暂无数据</li>
      //     }
      //     var jsx = [];
      //     for(var i=0;i<lists.length;i++){
      //       // var newstDetailUrl = `/news/${lists[i].id}`
      //         jsx.push(renderNews(lists[i].id));
      //     }
      //     return jsx;
      // }
      render(){
        const {lists,fetchList} = this.props;  


       // console.log(lists)
         var style={position:"relative",bottom:0,marginTop:15}
         var pages = Math.ceil(this.props.total / 5);
        //  var newsUrl = `/news/${}`
        // renderNews=(newsId)=>{
        //  var newsUrl = `/news/${newsId}`;
        //   return (
        //     <NavLink to={`/news/${newsUrl}`} key={i}>
        //            <NewsItem key={i} product={lists[i]} addToCart={this.props.addToCart}/>
        //     </NavLink>
        //   )
        // }
          // {this.showList()} 


          // 传递的是每一个数据，每个数据都是一个对象。
          if(lists.length==0){
            return <li>暂无数据</li>
        }
        else {
        return (
          <div> 
            <NavBar mode= "dark" style={{background:"",color:"black"}}>时事新闻</NavBar>
            

            
                {lists.map((val,i) => (
                    <NavLink to={`/news/${val.id}`} key={i}>
                        <NewsItem key={i}  product={val} addToCart={this.props.addToCart}/>
                    </NavLink>
                  ))}

          {this.showPageList()}  
          
                <div className="pagination-container" style={style}>
                <Pagination total={pages}
                  className="custom-pagination-with-icon"
                  current={pages}
                  locale={{
                    prevText: (<span className="arrow-align" onClick={()=>this.onChange({pages})} ><Icon type="left" />上一页</span>),
                    nextText: (<span className="arrow-align" onClick={()=>this.onChange(pages)} >下一页<Icon type="right" /></span>),
                  }}
                />
              </div>
          </div>
        )


      }
      }
      componentDidMount(){
        this.props.fetchList();
    }
  }
  const NewsContainer=connect(mapStateToProps,{fetchList})(Tabs2)

  export default NewsContainer;



  




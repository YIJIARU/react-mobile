import React, { Component } from "react";
import { connect } from "react-redux";
import { WhiteSpace, Button, Checkbox, Stepper } from "antd-mobile";
import { editNumber } from "../actions/carts";

const mapStateToProps = state => {
  return {
    carts: state.carts
  };
};
const AgreeItem = Checkbox.AgreeItem;

class Carts extends Component {
  toproduct = () => {
    this.props.history.push("/product");
  };

  onChange = (val, i) => {
    this.props.editNumber({ index: i, value: val });
  };

  shopCart() {
    var lists = this.props.carts;
    console.log(lists);
    // 1.惊醒判断，如果有数据，
    if (lists.length < 1) {
      return (
        <div style={{ backgroundColor: "white", height: 1000, paddingTop: 20 }}>
          <span style={{ textAlign: "center", fontSize: "30px" }}>
            购物车没有商品
          </span>
          <img
            src="data:image/jpeg;base64,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"
            style={{ width: "100%" }}
          />
          <WhiteSpace />
          <Button type="primary" onClick={this.toproduct}>
            前往购物
          </Button>
          <WhiteSpace />
        </div>
      );
    }
    // 2.如果有数据，将列表进行循环输出。
    else{
    var jsx = [];
    for (let i = 0; i < lists.length; i++) {
      if (lists[i].quantity > 0) {
        jsx.push(
          <div style={{ padding: "0 15px" }} key={i}>
            <div
              style={{
                lineHeight: "30px",
                color: "#000",
                fontSize: 16,
                borderBottom: "1px solid #F6F6F6",
                textAlign: "left"
              }}
            >
              <AgreeItem
                data-seed="logId"
                onChange={e => console.log("checkbox", e)}
              >
                {lists[i].name}{" "}
              </AgreeItem>
            </div>
            <div
              style={{
                display: "-webkit-box",
                display: "flex",
                padding: "15px 0",
                borderBottom: "1px solid #F6F6F6"
              }}
            >
              <img
                style={{ height: "50px", marginRight: "15px" }}
                src={lists[i].img}
                alt="{lists[i].text}"
              />
              <div style={{ lineHeight: 1 }}>
                <div
                  style={{
                    marginBottom: "8px",
                    fontWeight: "bold",
                    textAlign: "left"
                  }}
                >
                  {lists[i].text}
                </div>
                <div>
                  <span
                    style={{
                      fontSize: "16px",
                      color: "#FF6E27",
                      float: "left"
                    }}
                  >
                    ¥ {lists[i].price.number}
                  </span>
                  {/* 这个步进器  真的是坑爹 API 啥都没写   传参除了用箭头函数 还是可以用es5 bind */}
                  <Stepper
                    style={{ width: "120px", float: "right" }}
                    showNumber
                    max={99}
                    min={1}
                    step={1}
                    defaultValue={lists[i].quantity}
                    onChange={val => this.onChange(val, i)}
                  />
                </div>
              </div>
            </div>
            <div style={{ height: "24px", borderBottom: "1px solid #F6F6F6" }}>
              <span
                style={{ fontSize: "20px", color: "#FF6E27", float: "right" }}
              >
                总价: ¥ {lists[i].subTotal}
              </span>
            </div>
          </div>
        );
      }
    }
    }
    
    return jsx;
  }

  render() {
    // console.log(this.props)
    var lists = this.props.carts;
    const { editNumber } = this.props;
    return <div>{this.shopCart()}</div>;
  }
}

const container = connect(
  mapStateToProps,
  { editNumber }
)(Carts);
export default container;

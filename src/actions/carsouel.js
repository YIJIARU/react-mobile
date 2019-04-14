import axios from 'axios';
export const getCarsouelListData = (data)=>{
    return {
        type   : 'GETCAROUSEL',
        payload: data
    }
}

export function fetchCarsouelList(params={page:1}){
    return dispatch=>{
        var url = `http://localhost:3000/carousel`;
        return axios({
            url   : url,
            method: 'get'
        }).then(res=>{
            // console.log(res.data)
            dispatch(getCarsouelListData(res.data));
        })
    }
}

// 轮播的数据，就是获取我们的轮播图的数据
// 这边需要暴露，需要引入
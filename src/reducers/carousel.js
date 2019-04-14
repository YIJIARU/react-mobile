var initialState = [];
function Carousel(state=initialState,action){
    switch(action.type){
        case 'GETCAROUSEL': 
        return [...action.payload];
        default: 
        return state;
    }
}

export default Carousel;

// 初始化我们的数据，然后暴露我们的这个组件
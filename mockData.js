const Mock=require('mockjs');
const _=require('lodash');


module.exports=function(){
    return {
        people:_.times(100,function(n){
            return {
                id:n,
                name:Mock.Random.cname(),
                img:Mock.Random.image('200x100',Mock.Random.color()),
                text:Mock.Random.cparagraph(),
                time:Mock.Random.date('yyyy-MM-dd'),
                star:Mock.mock({
                'number|1-100':100
                })
            }
        }),
        product:_.times(100,function(n){
            return {
                id:n,
                name:Mock.Random.cname(),
                img:Mock.Random.image('200x100',Mock.Random.color()),
                text:Mock.Random.cparagraph(),
                time:Mock.Random.date('yyyy-MM-dd'),
                price:Mock.mock({
                'number|1-100':100
                })
            }
        }),
        news:_.times(100,function(n){
            return {
                id:n,
                title:Mock.Random.cname(),
                content:Mock.Random.cparagraph(),
                time:Mock.Random.date('yyyy-MM-dd'),
                star:Mock.mock({
                'number|1-100':100
                })
            }
        }),
        carousel:_.times(10,function(n){
            return {
                id:n,
                title:Mock.Random.cname(),
                img:Mock.Random.image('200x100',Mock.Random.color()),
                text:Mock.Random.cparagraph()
            }
        })
    }
}
let count =0;
const navidata=["네이버", "구글", "다음", "깃", "아마존"]

// setInterval(function(){
//     console.log(count);
//     count++;
// }, 500)

setInterval(function(){
    console.log(navidata[count]);
    count++;
    count %= navidata.length;

}, 500)
// let count =0;
// const navidata=["네이버", "구글", "다음", "깃", "아마존"]

// setInterval(function(){
//  console.log(count);
// count++;
// }, 500)

// setInterval(function(){
//     console.log(navidata[count]);
//     count++;
//     count %= navidata.length;
// }, 500)


//자바스크립트 경로는 css와 다르다!!!! 연결된 html 기준으로 처리해야한다!!!!
let count=3;
setInterval(function(){
    count++;
    count %= 5;
    document.querySelector("#bannerimg").setAttribute("src", `/banner/${count}.png`)
}, 1000);


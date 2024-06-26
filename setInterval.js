
// 자바스크립트 경로는 css 다른다!!!! 연결된 html 기준으로 처리해야한다.

// let count  = 3;
// setInterval(function(){
//     count++;
//     count %= 5;
//     document.querySelector("#bannerimg").setAttribute("src",`/banner/${count}.png`)
// }, 1000);

//$("#bannerimg").attr("src","/banner/1.png")

const bannerdata = [
    "/banner2/1.png",
    "/banner/0.png",
    "/banner2/membership.png"
];

//같은 변수 
let num = 0;
document.querySelector("#bannerimg").setAttribute("src",bannerdata[num])

document.querySelector(".bannerwrap").style.background =`
                           url(${bannerdata[num]}) center no-repeat`;


const autobanner = setInterval(function(){
    num++;
    num %= bannerdata.length;
    document.querySelector(".bannerwrap").style.background =`url(${bannerdata[num]}) center no-repeat`;
    document.querySelector("#bannerimg").setAttribute("src",bannerdata[num]) 
}, 3000)

document.querySelector(".bannerwrap button").addEventListener('click', function(){
    clearInterval(autobanner);
    this.innerHTML="PLAY"
})
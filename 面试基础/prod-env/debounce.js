const input1 = document.getElementById('input1');

// let timer = null
// input1.addEventListener('keyup', function () {
//     if (timer) {
//         clearTimeout(timer)
//     }
//     timer = setTimeout(() => {
//         // 模拟触发 change 事件
//         console.log(input1.value)

//         // 清空定时器
//         timer = null
//     }, 500)
// })

// 防抖
function debounce(fn, delay = 500) {
  // timer 是闭包中的
  let timer = null;

  return function () {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

input1.addEventListener(
  'keyup',
  debounce(function (e) {
    console.log(e.target);
    console.log(input1.value);
  }, 600),
);

//字符串中出现次数最多的字符和出现次数
function a(str){
  if(str.length == 1) {
    return str; 
 }
 let charObj = {}; 
 for(let i=0;i<str.length;i++) {
     if(!charObj[str.charAt(i)]) {
       charObj[str.charAt(i)] = 1; 
     }
     else{
       charObj[str.charAt(i)] += 1; 
     } 
 } 
 let maxChar = '', maxValue = 1;
 for(var k in charObj) { 
     if(charObj[k] >= maxValue) { 
       maxChar = k;
        maxValue = charObj[k]; 
     } 
 }
 return `maxchar:${maxChar};maxVal:${maxValue}`
}
console.log(a('1234567890222'))
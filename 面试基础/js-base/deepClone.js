/**
 * 深拷贝
 */

const obj1 = {
  age: 20,
  name: 'xxx',
  address: {
    city: 'beijing',
  },
  arr: ['a', 'b', 'c'],
};

const obj2 = deepClone2(obj1);
obj2.address.city = 'shanghai';
obj2.arr[0] = 'a1';
console.log(obj1.address.city);
console.log(obj1.arr[0]);

/**
 * 深拷贝
 * @param {Object} obj 要拷贝的对象
 */
// function deepClone(obj = {}) {
//   if (typeof obj !== 'object' || obj == null) {
//     // obj 是 null ，或者不是对象和数组，直接返回
//     return obj;
//   }

//   // 初始化返回结果
//   let result;
//   if (obj instanceof Array) {
//     result = [];
//   } else {
//     result = {};
//   }

//   for (let key in obj) {
//     // 保证 key 不是原型的属性
//     if (obj.hasOwnProperty(key)) {
//       // 递归调用！！！
//       result[key] = deepClone(obj[key]);
//     }
//   }

//   // 返回结果
//   return result;
// }

// function deepClone1 (obj){
//   if(typeof obj !== 'object' || obj == null){
//     return obj;
//   }

//   let res;
//   if(Object.prototype.toString.call(obj).slice(8,-1) == "Object"){
//     res = {};
//   }else {
//     res = [];
//   }
//   for(let i in obj){
//保证i不是原型链的属性
//     // if(obj.hasOwnProperty(i)){
//       res[i] = deepClone1(obj[i])
//     // }
//   }
//   return res
// }
function deepClone2(obj) {
  if (typeof obj !== 'object' || obj == null) {
    return obj;
  }
  let res;
  if (Array.isArray(obj)) {
    res = [];
  } else {
    res = {};
  }
  for (let key in obj) {
    if (obj.hasOwnProperty(key)) {
      res[key] = deepClone2(key);
    } else {
      res[key] = key;
    }
  }
  return res;
}

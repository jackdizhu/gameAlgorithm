const huPaiFn = require('./fun.js')

let log = (obj) => {
  let str = typeof obj === 'object' ? JSON.stringify(obj, null, 2) : obj
  console.log(str)
}

// 11-19 万
// 21-29 饼
// 31-39 条
// 41-47 东南西北中发白
let _arr = [41,41,11,11,11,26,28,28]
// 判断是否通过 以及 肯能通过情况
let __obj = huPaiFn(_arr)

log(__obj)

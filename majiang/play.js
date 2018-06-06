const {__paiListAll} = require('./const.js')
const huPaiFn = require('./fun.js')

let log = (obj) => {
  let str = typeof obj === 'object' ? JSON.stringify(obj, null, 2) : obj
  console.log(str)
}
// 用户数据
let _user = {
  u1: {
    paiList: []
  },
  u2: {
    paiList: []
  },
  u3: {
    paiList: []
  },
  u4: {
    paiList: []
  }
}
// 废弃牌
let discarded = []
// 将数组随机 排序
let random_arr_fn = (_arr) => {
  let _arr2 = []
  // 生成随机数
  let r_fn = (min, max) => {
    let R = Math.floor(Math.random() * (max - min)) + min
    return R
  }
  let L = _arr.length
  for (let i = 0; i < L; i++) {
    let k = r_fn(0, L - i)
    _arr2.push(_arr.splice(k, 1)[0])
  }
  return _arr2
}
let _randomPaiListAll = random_arr_fn(JSON.parse(JSON.stringify(__paiListAll)))
// 初始牌 14 张
for (let i = 0; i < 14; i++) {
  _user.u1.paiList.push(_randomPaiListAll[i * 4])
  _user.u2.paiList.push(_randomPaiListAll[i * 4 + 1])
  _user.u3.paiList.push(_randomPaiListAll[i * 4 + 2])
  _user.u4.paiList.push(_randomPaiListAll[i * 4 + 3])
  // 删除数据
  _randomPaiListAll.splice(0, 4)
}
// 记录 废弃牌
discarded = [..._user.u1.paiList, ..._user.u2.paiList, ..._user.u3.paiList, ..._user.u4.paiList]

_user.u1._huPai = huPaiFn(_user.u1.paiList)
_user.u2._huPai = huPaiFn(_user.u2.paiList)
_user.u3._huPai = huPaiFn(_user.u3.paiList)
_user.u4._huPai = huPaiFn(_user.u4.paiList)

log(_user)


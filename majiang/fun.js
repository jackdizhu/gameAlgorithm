const _listenFn = require('./listen.js')

let log = (obj) => {
  let str = typeof obj === 'object' ? JSON.stringify(obj, null, 2) : obj
  console.log(str)
}

// 11-19 万
// 21-29 饼
// 31-39 条
// 41-47 东南西北中发白
// let _arr = [41,41,11,11,11,21,22,24]


// 排序
const __sort = (_arr) => {
  _arr.sort((a, b) => {
    return a - b
  })
}

// 利用 对象去重
const __obj = {}
// 查找重复 对 生成序列
const __checkRepeat = (_arr, el, i) => {
  const groupList = {}
  const repeat2 = []
  const other = []
  let _i = null
  repeat2.push(el)
  for (let j = 0; j < _arr.length; j++) {
    if (j === i) {
      continue
    }
    const _el = _arr[j]
    if (_el === el && (repeat2.length !== 2) && !__obj[_el]) {
      _i = j
      // 去重
      __obj[_el] = true
      repeat2.push(_el)
    } else {
      other.push(_el)
    }
  }
  if (_i) {
    groupList.repeat2 = repeat2
    groupList.repeat3 = []
    groupList.other = other
    _i = groupList
    // 生成 3*4 序列
    let _obj = null
    let otherLength = groupList.other.length
    do {
      otherLength = groupList.other.length
      _obj = __checkRepeatFor3(groupList.other)
      if (_obj) {
        groupList.repeat3.push(..._obj.repeat3)
        groupList.other = _obj.other
      }
    } while (_obj && _obj.other.length !== otherLength)
  }
  return (_i && groupList)
}
// 生成 [2 其他] 序列
const __checkRepeatFor2 = (_arr) => {
  const group = []
  for (let i = 0; i < _arr.length; i++) {
    const el = _arr[i]
    let _i = __checkRepeat(_arr, el, i)
    if (_i) {
      group.push(JSON.parse(JSON.stringify(_i)))
    }
  }
  return group
}

const __Repeat3 = (_n) => {
  // 所有可能情况 字符串
  let _strArr = []
  let _arr = []
  // [123]
  if ((_n > 10 && _n < 18) || (_n >20 && _n < 28) || (_n > 30 && _n < 38)) {
    _arr[0] = _n
    _arr[1] = _n + 1
    _arr[2] = _n + 2
    _strArr.push(_arr.join(',') + ',')
  }
  // [111]
  _arr[1] = _n
  _arr[2] = _n
  _strArr.push(_arr.join(',') + ',')
  return _strArr
}
// 假设 [111 123] 牌列数据
const __RepeatFor3 = (_arr, _str) => {
  let repeat3 = []
  let other = []
  const first = Number(_arr[0])

  let _is = false
  // 所有 [111 123] 字符串
  let _strArr = __Repeat3(first)
  for (let i = 0; i < _strArr.length; i++) {
    let _R = new RegExp('^' + _strArr[i])
    // 存在 [111 123]
    if (_R.test(_str)) {
      repeat3.push(..._strArr[i].substr(0, _strArr[i].length - 1).split(','))
      let __str = _str.replace(_R, '')
      let _otherStr = __str.substr(0, _strArr[i].length - 1)
      _otherStr.length ? other.push(..._otherStr.split(',')) : (other = [])
      _is = true
      break
    }
  }
  return (_is && {repeat3, other})
}
// 生成 3*4 序列
const __checkRepeatFor3 = (_arr) => {
  return __RepeatFor3(_arr, _arr.join(',') + ',')
}

const huPai = (_arr) => {
  // 通过数据
  let _huPai = null
  // 可能通过数据
  let _probablyHuPai = []
  // 听牌
  let _listen = []
  //  牌列表重新排序
  __sort(_arr)
  let group = __checkRepeatFor2(_arr)
  for (let i = 0; i < group.length; i++) {
    if (group[i].other.length === 0) {
      _huPai = group[i]
      break
    } else if (group[i].other.length === 3) {
      // 统计 可能通过数据
      _probablyHuPai.push(group[i])
    }
  }
  // 计算 听牌
  _listen = _listenFn(_probablyHuPai)
  // 数据隔离
  return JSON.parse(JSON.stringify({_huPai, _probablyHuPai, _listen}))
}

module.exports = huPai

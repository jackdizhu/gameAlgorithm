let log = (obj) => {
  let str = typeof obj === 'object' ? JSON.stringify(obj, null, 2) : obj
  console.log(str)
}

// 11-19 万
// 21-29 饼
// 31-39 条
// 41-47 东南西北中发白`
let _arr = [41,41,11,11,11,21,22,23]

const group = []
const groupList = {
  repeat: [],
  other: []
}

// 利用 对象去重
const __obj = {}
// 查找重复 对 生成序列
const __checkRepeat = (el, i) => {
  const groupList = {}
  const repeat = []
  const other = []
  let _i = null
  repeat.push(el)
  for (let j = 0; j < _arr.length; j++) {
    if (j === i) {
      continue
    }
    const _el = _arr[j]
    if (_el === el && (repeat.length !== 2) && !__obj[_el]) {
      _i = j
      // 去重
      __obj[_el] = true
      repeat.push(_el)
    } else {
      other.push(_el)
    }
  }
  if (_i) {
    groupList.repeat = repeat
    groupList.other = other
    _i = groupList
  }
  return _i
}


const huPai = (_arr) => {
  for (let i = 0; i < _arr.length; i++) {
    const el = _arr[i]
    let _i = __checkRepeat(el, i)
    if (_i) {
      group.push(JSON.parse(JSON.stringify(_i)))
    }
  }
}
// 排序
const __sort = (_arr) => {
  _arr.sort((a, b) => {
    return a - b
  })
}

__sort(_arr)

huPai(_arr)
log(group)


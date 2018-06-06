let log = (obj) => {
  let str = typeof obj === 'object' ? JSON.stringify(obj, null, 2) : obj
  console.log(str)
}

// `万饼条 东南西北中发白`
// `123456789`
let _arr = [
  {
    key: 'T',
    val: '1'
  },
  {
    key: 'T',
    val: '1'
  },

  {
    key: 'T',
    val: '2'
  },
  {
    key: 'T',
    val: '3'
  },
  {
    key: 'T',
    val: '4'
  },
  {
    key: 'T',
    val: '5'
  },
  {
    key: 'T',
    val: '5'
  },
  {
    key: 'T',
    val: '5'
  }
]

const group = []
const groupList = {
  repeat: [],
  other: []
}

// 查找重复 对 生成序列
const checkRepeat = (el, i) => {
  const groupList = {}
  const repeat = []
  const other = []
  let _i = null
  repeat.push(i)
  for (let j = 0; j < _arr.length; j++) {
    if (j === i) {
      continue
    }
    const _el = _arr[j]
    if (_el.key === el.key &&　_el.val === el.val && (repeat.length !== 2)) {
      _i = j
      repeat.push(j)
    } else {
      other.push(j)
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
    let _i = checkRepeat(el, i)
    if (_i) {
      group.push(JSON.parse(JSON.stringify(_i)))
    }
  }
}
huPai(_arr)
log(group)


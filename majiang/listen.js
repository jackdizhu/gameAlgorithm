const {__paiList} = require('./const.js')

// 111
const _listen = (_probablyHuPai) => {
  let _listen = []
  for (let i = 0; i < _probablyHuPai.length; i++) {
    let _arr = _probablyHuPai[i].other
    if (_arr[0] === _arr[1] || _arr[2] === _arr[1]) {
      _listen.push({
        have: [_arr[1], _arr[1]],
        missing: _arr[1]
      })
    } else {
      _listen.push(..._listen_123(_arr))
    }
  }
  return _listen
}
// 111
const _listen_123 = (_arr) => {
  for (let i = 0; i < _arr.length; i++) {
    _arr[i] = Number(_arr[i])
  }

  return _RepeatFor_123(_arr, _arr.join(',') + ',')
}

const _Repeat_123 = (first, _arr) => {
  // 所有可能情况 字符串
  let _strArr = []
  let _listen = []
  // 过滤 不合格数据 missing 不在常量列表中的数据
  const _push = (_obj) => {
    let _item = __paiList.find(item => {
      return item === _obj.missing
    })
    if (_item) {
      _listen.push(_obj)
    }
  }
  // [123]
  let _1_0 = _arr[1] - _arr[0]
  let _2_1 = _arr[2] - _arr[1]
  if (_1_0 === 1) {
    _push({
      have: [_arr[0], _arr[1]],
      missing: _arr[1] + 1
    })
    _push({
      have: [_arr[0], _arr[1]],
      missing: _arr[0] - 1
    })
  }
  if (_2_1 === 1) {
    _push({
      have: [_arr[1], _arr[2]],
      missing: _arr[2] + 1
    })
    _push({
      have: [_arr[1], _arr[2]],
      missing: _arr[1] - 1
    })
  }
  if (_1_0 === 2) {
    _push({
      have: [_arr[0], _arr[1]],
      missing: _arr[1] - 1
    })
  }
  if (_2_1 === 2) {
    _push({
      have: [_arr[1], _arr[2]],
      missing: _arr[2] - 1
    })
  }

  return _listen
}
// 假设 [123] 牌列数据
const _RepeatFor_123 = (_arr, _str) => {
  let repeat3 = []
  let other = []
  const first = Number(_arr[0])

  let _is = false
  // 所有 [123] 字符串
  let _listenArr = _Repeat_123(first, _arr)

  return _listenArr
}

module.exports = _listen

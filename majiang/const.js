let log = (obj) => {
  let str = typeof obj === 'object' ? JSON.stringify(obj, null, 2) : obj
  console.log(str)
}
// 11-19 万
// 21-29 饼
// 31-39 条
// 41-47 东南西北中发白
// 基本牌型
const __paiList = [11, 12, 13, 14, 15, 16, 17, 18, 19, 21, 22, 23, 24, 25, 26, 27, 28, 29, 31, 32, 33, 34, 35, 36, 37, 38, 39, 41, 42, 43, 44, 45, 46, 47]
// 花牌 春、夏、秋、冬，梅、兰、竹、菊
const flowerCard = [51, 54, 57, 60, 63, 66, 69, 72]
// 所有牌数 144 张
const __paiListAll = [...__paiList, ...__paiList, ...__paiList, ...__paiList, ...flowerCard]

module.exports = {__paiListAll, __paiList}

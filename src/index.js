module.exports = function towelSort (matrix) {
  if (!matrix) return []
  // console.log('1️⃣ matrix=', matrix)
  let result = []
  matrix.forEach((v,i) => {
    if (i % 2 === 0) {
      // вернуть исходный массив
      result.push(v)
    } else {
      // вернуть развернутый массив
      result.push(v.reverse())
    }
  })
  // console.log('🔥 result=', result.flat())
  return result.flat()
}

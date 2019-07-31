const GeometryUtils = {

  /* Common */
  includes (array, item) {
    return array.some(arrayItem => {
      return JSON.stringify(arrayItem) === JSON.stringify(item)
    })
  },
  isBetween (limitA, limitB, x) {
    return (x - limitA) * (x - limitB) <= 0
  },
  isBetweenByOdd (limits, x) {
    let smallerCount = 0
    let biggerCount = 0
    limits.forEach(limit => {
      if (x >= limit) smallerCount++
      if (x <= limit) biggerCount++
    })
    return !!smallerCount && !!biggerCount &&
           (smallerCount % 2 !== 0 || biggerCount % 2 !== 0)
  },

  /* Basic */
  getDistanceBetweenPoints (pointA, pointB) {
    return ((pointA[0] - pointB[0]) ** 2 + (pointA[1] - pointB[1]) ** 2) ** 0.5
  },
  getRadian (vertex, pointA, pointB) {
    const checkYPositive = vector => {
      let reversed = 0
      if (vector[1] < 0) {
        reversed = 1
        vector = vector.map(x => x * -1)
      }
      return [vector, reversed]
    }
    const [vectorAX, vectorAXReversed] = checkYPositive(
      [pointA[0] - vertex[0], pointA[1] - vertex[1]]
    )
    const radianAX = Math.atan2(vectorAX[1], vectorAX[0]) + Math.PI * vectorAXReversed
    const [vectorBX, vectorBXReversed] = checkYPositive(
      [pointB[0] - vertex[0], pointB[1] - vertex[1]]
    )
    const radianBX = Math.atan2(vectorBX[1], vectorBX[0]) + Math.PI * vectorBXReversed
    let radian = radianBX - radianAX
    if (Math.abs(radian) > Math.PI) {
      radian += Math.PI * 2 * (radian / Math.abs(radian)) * -1
    }
    return radian
  },
  getPointBetweenPointsByX (pointA, pointB, x) {
    if ((x - pointA[0]) * (x - pointB[0]) > 0) {
      return null
    } else if (pointA[0] == pointB[0]) {
      return null
    } else {
      const ratio = (x - pointA[0]) / (pointB[0] - pointA[0])
      const y = pointA[1] + (pointB[1] - pointA[1]) * ratio
      return [x, y]
    }
  },
  getPointBetweenPointsByY (pointA, pointB, y) {
    if ((y - pointA[1]) * (y - pointB[1]) > 0) {
      return null
    } else if (pointA[1] == pointB[1]) {
      return null
    } else {
      const ratio = (y - pointA[1]) / (pointB[1] - pointA[1])
      const x = pointA[0] + (pointB[0] - pointA[0]) * ratio
      return [x, y]
    }
  },

  /* Judge point being in polygon (By intersection) */
  isPointInPolygonByIntersection (vertices, point) {
    const horizontalPointsX = []
    const verticalPointsY = []
    for (let i = 0; i < vertices.length; i++) {
      const thisVertex = vertices[i]
      const nextVertex = i === vertices.length - 1 ? vertices[0] : vertices[i + 1]
      const horizontalPoint = this.getPointBetweenPointsByY(thisVertex, nextVertex, point[1])
      if (horizontalPoint) horizontalPointsX.push(horizontalPoint[0])
      const verticalPoint = this.getPointBetweenPointsByX(thisVertex, nextVertex, point[0])
      if (verticalPoint) verticalPointsY.push(verticalPoint[1])
    }
    return this.isBetweenByOdd(horizontalPointsX, point[0]) &&
           this.isBetweenByOdd(verticalPointsY, point[1])
  },

  /* Judge point being in polygon (By radian) */
  isPointInPolygonByRadian (vertices, point) {
    if (this.includes(vertices, point)) return true
    let totalRadian = 0
    for (let i = 0; i < vertices.length; i++) {
      const thisVertex = vertices[i]
      const nextVertex = i === vertices.length - 1 ? vertices[0] : vertices[i + 1]
      totalRadian += this.getRadian(point, thisVertex, nextVertex)
    }
    return Math.abs(totalRadian) === Math.PI * 2
  }
}

if (module) module.exports = GeometryUtils

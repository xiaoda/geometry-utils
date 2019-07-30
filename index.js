const GeometryUtils = {

  /* Common */
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
    return !!smallerCount && !!biggerCount && smallerCount !== biggerCount
  },

  /* Basic */
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

  /* Judge Point being In Polygon (By Intersection Point) */
  isPointInPolygon (vertices, point) {
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
  }
}

if (module) module.exports = GeometryUtils

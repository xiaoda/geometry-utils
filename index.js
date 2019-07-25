const GeometryUtils = {
  isBetween (limitA, limitB, x) {
    return (x - limitA) * (x - limitB) <= 0
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
  isPointInConvexPolygon (vertices, point) {
    const horizontalPointsX = []
    const verticalPointsY = []
    for (let i = 0; i < vertices.length; i++) {
      const thisVertex = vertices[i]
      let nextVertex = i === vertices.length - 1 ? vertices[0] : vertices[i + 1]
      const horizontalPoint = this.getPointBetweenPointsByY(thisVertex, nextVertex, point[1])
      if (horizontalPoint !== null) horizontalPointsX.push(horizontalPoint[0])
      const verticalPoint = this.getPointBetweenPointsByX(thisVertex, nextVertex, point[0])
      if (verticalPoint !== null) verticalPointsY.push(verticalPoint[1])
    }
    return this.isBetween(...horizontalPointsX, point[0]) &&
           this.isBetween(...verticalPointsY, point[1])
  }
}

if (module) module.exports = GeometryUtils

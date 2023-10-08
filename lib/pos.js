var exports = {
  isAdjacent: function isAdjacent(left, right) {
    var x1 = left.pos.x
    var y1 = left.pos.y

    var x2 = right.pos.x
    var y2 = right.pos.y

    return adj(x1, x2) && adj(y1, y2)
  },

  adj: function adj(l, r) {
    var diff = l - r

    return diff >= 1 && diff <= 1
  }
}

module.exports = exports

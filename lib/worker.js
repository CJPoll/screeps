var position = require("pos");

class Worker {
  constructor(creep) {
    this.creep = creep;
  }

  dropOff(target, resource) {
    this.whenInRange(target, function() {
      this.creep.transfer(target, resource)
    }.bind(this))
  }

  exists() {
    return !(this.creep === null || this.creep === undefined)
  }

  harvest(targetType) {
    var target = this.creep.pos.findClosestByRange(targetType);

    if (target === undefined) {
      console.log("Target:", targetType, "not available in room");
    } else {
      this.whenInRange(target, function() {
        this.creep.harvest(target)
      })
    }
  }

  isAdjacent(target) {
    return position.isAdjacent(this.creep, target)
  }

  isAt(x, y) {
    return this.creep.pos.x === x && this.creep.pos.y === y
  }

  isFull(resource) {
    return this.creep.store.getFreeCapacity(resource) === 0
  }

  move(x, y) {
    this.creep.moveTo(x, y)
  }

  whenInRange(target, action) {
    if (this.creep.pos.inRangeTo(target, 1)) {
      action()
    } else {
      this.creep.moveTo(target)
    }
  }
}

var exports = {
  Worker: Worker
}

module.exports = exports

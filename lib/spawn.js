var position = require("pos");

class Spawn {
  constructor(spawn) {
    this.spawn = spawn;
  }

  exists() {
    return !(this.spawn === null || this.spawn === undefined)
  }

  harvest(target) {
    this.spawn.harvest(target)
  }

  isActive() {
    this.spawn.isActive()
  }

  spawnWorker(name, spec, energyStructures) {
    this.spawn.spawnCreep(spec, name, {})
  }
}

var exports = {
  Spawn: Spawn
}

module.exports = exports

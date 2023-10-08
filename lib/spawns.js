var { Spawn } = require("spawn");

var exports = {
  getSpawn: function getSpawn(name) {
    return new Spawn(Game.spawns[name])
  }
}

module.exports = exports

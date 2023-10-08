var {Worker} = require('worker');

var exports = {
  getWorker: function getWorker(name) {
    return new Worker(Game.creeps[name])
  },
  specs: {
    miner: [WORK, MOVE, CARRY]
  }
}

module.exports = exports

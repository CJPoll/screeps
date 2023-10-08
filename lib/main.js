var hello = require("hello");
var rooms = require("rooms");
var spawns = require("spawns");
var workers = require("workers");

var spawn = spawns.getSpawn("Spawn1");
var worker = workers.getWorker('worker1');
var targetType = FIND_SOURCES_ACTIVE

console.log("Hello")

if (worker.exists()) {
  if (worker.isFull(RESOURCE_ENERGY)) {
    console.log("Full")
    worker.dropOff(spawn.spawn)
  } else {
    worker.harvest(targetType)
  }
} else {
  //spawn.spawnWorker('worker1', workers.specs.miner, [spawn.spawn]);
}

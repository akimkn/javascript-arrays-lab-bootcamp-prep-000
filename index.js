const app = "I don't do much."
//var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens === kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name) {
  kittens === kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten() {
  kittens === kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten() {
  kittens === kittens.shift()
  return kittens
}

function appendKitten(name) {
  var result = [...kittens, name]
  return result
}

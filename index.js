// Add your functions and code here
var kittens=["Milo", "Otis", "Garfield"];

function destructivelyAppendKitten(name){
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name){
  kittens.unshift(name);
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop();
  return kittens;
}

function destructivelyRemoveFirstKitten(){
  kittens.shift();
  return kittens;
}

function appendKitten(name){
  var update = [...kittens, name];
 return update;
}

function prependKitten(name){
  var updateFirstKitten = [name, ...kittens];
  return updateFirstKitten;
}

function removeLastKitten(){
  var updateRemoveLast = kittens.splice(0,2);
  return updateRemoveLast;
}
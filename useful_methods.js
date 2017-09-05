// Array prototype methods

  // #Sample : Returns a random value from the array's collection
  Array.prototype.sample = function(){
    return this[Math.floor(Math.random() * this.length)];
  }
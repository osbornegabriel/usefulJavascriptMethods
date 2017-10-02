// ****General methods****
  // #Demethodize : takes a prototype method and converts it to a binary function

  function demethodize(protoMethod){
    return function(x,y){
      return protoMethod.call(x,y);
    };
  }

  // #Methodize : attaches an existing function for use with a prototype
  function methodize(func){
    return function(y){
      return func(this, y);
    };
  }

// ****Array prototype methods****

  // #Sample : Returns a random value from the array's collection
  Array.prototype.sample = function(){
    return this[Math.floor(Math.random() * this.length)];
  }

  // #ToObject : Converts an array of pairs into an object literal. The keys are the 1st item in each array pair, the values are the 2nd item in each array pair. If the starting array does not follow a pair format, the method returns the original array.
  Array.prototype.toObject = function(){
    var correctPairing = true;
    var newObject = {};
    this.forEach(function(pair){
      newObject[pair[0]] = pair[1];
      if (pair.length !== 2){
        correctPairing = false;
      }
    })
    return correctPairing ? newObject : this;
  }

// ****Object prototype methods****

  // #InvertKeysValues : returns an object with the keys and values inverted
  Object.prototype.invertKeysValues = function(){
    var newObject = {}
    that = Object.entries(this);
    that.forEach(function(x){
      newObject[x[1]] = x[0];
    })
    return newObject;
  }

// ****String prototype methods****

  // #Capitalize: Returns a string with the first letter uppercased
  String.prototype.capitalize = function(){
    return this[0].toUpperCase() + this.slice(1, this.length);
  }

  // #Last : Returns the last nth characters of a string, if no argument is provided returns the last index value of the string
  String.prototype.last = function(n=1){
    n = n > this.length ? this.length : n;
    return this.slice(this.length - n, this.length);
  }

  // #Pop : Returns a string with the last character removed
  String.prototype.pop = function(){
    return this.slice(0, this.length - 1);
  }
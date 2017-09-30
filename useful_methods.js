// ****General methods****
  // #Demethodize : takes a prototype method and converts it to a binary function

  function demethodize(protoMethod){
    return function(that,y){
      return protoMethod.call(that,y);
    };
  }

  // #Methodize : attaches an existing function for use with a prototype
  function methodize(func){
    // var this = that;
    return function(y){
    return func(this, y);
      };
  }

// ****Array prototype methods****

  // #Sample : Returns a random value from the array's collection
  Array.prototype.sample = function(){
    return this[Math.floor(Math.random() * this.length)];
  }



// ****String prototype methods****

  // #Capitalize: Returns a string with the first letter uppercased
  String.prototype.capitalize = function(){
    return this[0].toUpperCase() + this.slice(1, this.length);
  }

  // #Pop : Returns a string with the last character removed
  String.prototype.pop = function(){
    return this.slice(0, this.length - 1);
  }
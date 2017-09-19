// ****General methods****
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


  // #Pop : Returns a string with the last character removed
  String.prototype.pop = function(){
    return this.slice(0, this.length - 1);
  }
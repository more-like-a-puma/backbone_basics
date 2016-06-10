var Movie = Backbone.Model.extend({
  defaults: {
    name: "N/A",
    director: "N/A",
    plot: "N/A",
    duration: "N/A"
  },

  initialize: function() {
    this.on("change", function(){
      // console.log("Something changed");
    });

    this.on( "change:name", function() {
      var changedAttributes = this.previousAttributes();
      var currentAttr = this.toJSON();

      console.log( "Name was changed from: " + changedAttributes.name );
      console.log( "Name was changed to: " + currentAttr.name );
    });

  }

});

var genericMovie = new Movie();

var specificMovie = new Movie({name: "Satan"});
// console.log( genericMovie.toJSON(), specificMovie.toJSON() );

var newMovie = new Movie({
  name: "Satantango",
  duration: 450,
  director: "Bela Tarr"
});

var movieName = newMovie.get("name");
// console.log(movieName);

var anotherMovie = new Movie({
  name: "Toy Story"
});

anotherMovie.set("spaceShip", 42);
anotherMovie.set({
  type: "animated",
  madeBy: "Pixar"
});

// console.log( anotherMovie.toJSON() );

//////////////////////////////////////////////////////

var Animal = Backbone.Model.extend({

  defaults: {
    type: "animal",
    ecosystem: "",
    stripes: 0,
    living: true
  },

  initialize: function(){
    this.on("change", function(){
      // console.log("Something just changed");
    });

    this.on("change:type", function(){
      // console.log("The type just changed");
    });
  }


});

// var genericAnimal = new Animal();
// console.log( genericAnimal.toJSON() );

var kangaroo = new Animal();
var living = kangaroo.get("living");
console.log( living );

kangaroo.set("type", "Kangaroo");
kangaroo.set({
  pouch: true,
  tail: true
});

var kangarooArrts = kangaroo.toJSON();
console.log(kangarooArrts);

kangaroo.set("type", "Giant Kanga");


var butterfly = new Animal({
  type: "Monarch"
});

var badger = new Animal({
  type: "Badger"
});

var penguin = new Animal({
  type: "Penguin",
  ecosystem: "Cold as fuck"
});

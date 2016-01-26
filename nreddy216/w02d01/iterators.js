//where our iterators live
var o_o = {
  each: function(collection, callback) {
    /*
    	**Iterate through the collection and call the callback with each item.**
   		
   		Expect:
   		```
   		var fillMe = [];
   		o_o.each(["words", "are", "here"], function(item) {
   		  fillMe.push(item);
   		});
   		fillMe //`fillMe` should now be full
   		=> ["words", "are", "here"]
    	```
    */

    for(var i = 0; i < collection.length; i++){
      callback(collection[i]);
    }

  },
  map: function(collection, callback){
    /*
    	Iterate through the collection, call the callback with each item,
    	push the output of that result into a new collection,
    	and return the new collection.

    	Expect:
    	```
			var plusOne = function(n){ return n + 1; };
			o_o.map([1,2,3], plusOne);
			=> [2,3,4]
    	```
    */

    var newCollection = [];

    for(var i = 0; i < collection.length; i++){
      newCollection.push(callback(collection[i]));
    }

    return newCollection;

  },
  filter: function(collection, callback) {
    /*
    	Do the same as `map` but anticipate that the callback only returns
    	true or false. If the callback returns true, push it into a new collection;
    	otherwise, do not. Return the new collection.

    	Expect:
    	```
    	var noOdds = function(n) { return n % 2 === 0; };
    	o_o.filter([2,3,4,5,6,8,7], noOdds);
    	=> [2,4,6,8]
    	```
    */

    var newCollection = [];

    if(callback===true){
      for(var i = 0; i < collection.length; i++){
        
          newCollection.push(collection[i]);
      }
      
    }

    return newCollection;

    
  },
  reduce: function(collection, callback){

    var total;

    if(typeof collection[0] === "number"){
      total = 0;
    }
    else if(typeof collection[0] === "string"){
      total = "";
    }
    

    for(var i=0; i<collection.length-1; i+=2){
       total += callback(collection[i], collection[i+1]);
    }

    return total;
  }

 
};

  //TEST REDUCE
  // function add(prev, curr){
  //   return prev + curr;
  // }

  // var numArray = [10, 20, 30, 40];
  // var strArray = ["hi", "how", "are", "you"];

  // console.log(o_o.reduce(strArray, add));

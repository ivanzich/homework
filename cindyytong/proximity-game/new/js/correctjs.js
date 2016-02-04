//elements to be added to the page after start button is clicked on

var formString = "<label for='answer'>Name the restaurant depicted below in the map</label> <input type='answer' class='form-control' id='answer' placeholder='Restaurant Name'>";

var submitString = "<button type='button' id = 'submit' class='btn btn-success viewquestion'>Submit</button>";

var nextString = "<button type='button' id = 'next' class='btn btn-success viewquestion'>Next</button>";

var hintString = "<button type='button' id = 'hint' class='btn btn-success viewquestion'>Hint Please</button>";


//Initialize functions:

$(document).ready(function(){
//when start button is clicked, layout for first question is presented (map is generated and form for submission)
//insertForm, insertSubmit, insertNext
      $("#start").click(function(){
        //create random array of 10
          generateRandomArray();
        //remove instructions
            $("#instructions").html("");
        //add form for question submission and buttons next and submit
            $("#insertAddress").append(addressDisplayed);
            $("#insertForm").html(formString);
            $("#insertSubmit").html(submitString);
            $("#insertHint").html(hintString);
            $("#insertNext").html(nextString);
            $("#start").hide();  
            initialize(); 
            displayHintCount();  
            //when submit clicked
          $("#submit").click(function(){
            //refresh the counter on the hint button
            initialize();
            countHint=0;
            //check if answer is correct
            checkAnswer();
            $("#answer").val("");
              displayWinnings();
        });

          $("#next").click(function(){
            initialize();
            countHint = 0;
            displayWinnings();

        });
        });



//creates google map once anything with class viewquestion is clicked (start, next, submit buttons) 
    // google.maps.event.addDomListener(document.getElementsByClassName('viewquestion'), 'click', initialize);

});

//global variables used to keep track of store
var scoreRight = 0;
var count = 0;
var solution;
var solutionLower;
var solutionArray = [];
var userInput;
var userInputLower;
var userInputArray =[];
var indexNumberUsed = [];
var arrRandomTen = [];
var addressDisplayed;
//for hint displayed
var hintDisplayed;
var countHint = 0;
var solutionInLetters;


//function creates 10 random numbers between 1 to 30 and returns them in array of numbers 

function generateRandomArray(){
  console.log("generateRandomArray called");
  while(arrRandomTen.length<10){
    var randomNumber = Math.ceil(Math.random()*10);
    var found = false;
    for(var i = 0; i<arrRandomTen.length; i++){
      if(arrRandomTen[i]==randomNumber){
        found=true; 
        break;
        }
      }
      if(!found)arrRandomTen[arrRandomTen.length]=randomNumber;
    }
    
  return arrRandomTen;
}
//function checks if user's answer is correct (matches against what google provides); it also updates the solution array and userinput array

function checkAnswer(userInput, solution){
    userInput = $('#answer').val();
    userInputLower = String(userInput).toLowerCase();
    if(solutionLower==userInputLower){
      scoreRight++;
      console.log("You answered correctly " +scoreRight);
    } else {
      console.log("You answered incorrectly");
    }
    solutionArray.push(solution);
    userInputArray.push(userInput);
}

//function creates google map with one location identified based on random number generated by randomten
function initialize() {

//player runs through game five times 
if(count < 5){
      //default location of where map displays
      var generalAssembly = new google.maps.LatLng(37.790841,-122.401280);

      var map = new google.maps.Map(document.getElementById('map'), {
        center: generalAssembly,
        zoom: 15,
        scrollwheel: false,
        
      });

      // Specify location, radius and place types for your Places API search.
      var request = {
        location: generalAssembly,
        radius: '300',
        types: ['restaurant']
      };

    //turn off labels from map
      var stylesArray = [
           {
             featureType: "administrative",
             elementType: "labels",
             stylers: [
               { visibility: "off" }
             ]
           },
           {
             featureType: "poi",
             elementType: "labels",
             stylers: [
               { visibility: "off" }
             ]
           }
         ];

      map.setOptions({styles: stylesArray});

      // Create the PlaceService and send the request.
      // Handle the callback with an anonymous function.
    
      var service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
            var place = results[arrRandomTen[count]];
            console.log(results);
            
            // if(typeof(place.geometry) === undefined){
            //   var place = results[arrRandomTen[1]];
            // } 

            //set the solution for the current place to the name
            solution = results[arrRandomTen[count]].name;
            // solution = place["name"];
            solutionLower = String(solution).toLowerCase();
            console.log(solution);
            //push the answer to the solution array
            solutionArray.push(solutionLower);

            //split name into individual letters to display hint
            solutionInLetters = solution.split("");
            
            //get the address of the solution to be displayed as hint
            addressDisplayed = String(results[arrRandomTen[count]].vicinity);
            console.log(addressDisplayed);
            console.log(typeof(addressDisplayed));
            // alert(addressDisplayed);
            $("#insertAddress").html("The address of this restaurant is: " + addressDisplayed);

            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
              });

            //update the count and use this value for place index
            count++;
            console.log(count);
            indexNumberUsed.push(arrRandomTen[count]);
            console.log(indexNumberUsed);
            arrRandomTen.splice(count,1);
            console.log(arrRandomTen);
            }
      });
  }
}

function displayWinnings(){
  // after five questions, end game and display map with all solutions, put back label on map, hide submit and next buttons
  if(count === 5){
    console.log("End of game");
    $("#insertForm").html("");
    $("#insertSubmit").html("");
    $("#insertNext").html("");
    $("#results").html("<p>You answered " + scoreRight + " correctly!</p>");

    //generate map with all places
    var generalAssembly = new google.maps.LatLng(37.790841,-122.401280);
    var map = new google.maps.Map(document.getElementById('map'), {
        center: generalAssembly,
        zoom: 15,
        scrollwheel: false,
      });
    var request = {
        location: generalAssembly,
        radius: '300',
        types: ['restaurant']
      };
    var stylesArray = [
           {
             featureType: "poi",
             elementType: "labels",
             stylers: [
               { visibility: "on" }
             ]
           }
         ];

      map.setOptions({styles: stylesArray});
    var service = new google.maps.places.PlacesService(map);
      service.nearbySearch(request, function(results, status) {
        if (status == google.maps.places.PlacesServiceStatus.OK) {
          var y;
          var len = indexNumberUsed.length;
          for(y = 0; y<len; y++){
            var place = results[indexNumberUsed[y]];
            var marker = new google.maps.Marker({
              map: map,
              position: place.geometry.location
            });
          }
        }
      });
  }
}

//END OF FUNCTION INITIALIZE 

//generates how many times the hint button has been pressed

function displayHintCount(){
  $("#hint").click(function(){
      console.log("It's been clicked " + countHint);
      countHint++;
  });
}

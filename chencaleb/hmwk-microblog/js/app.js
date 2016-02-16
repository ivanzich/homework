window.onload = function() {

var submitButton = document.getElementById("postButton");
submitButton.addEventListener("click", function(event) {

event.preventDefault();

var oldPosts = document.getElementById("postList");
var newPost = document.createElement("li");
newPost.setAttribute("class", "text");

newPost.innerHTML = document.getElementById("textBox").value;
oldPosts.appendChild(newPost);
document.getElementById("textBox").value = "";
});

};
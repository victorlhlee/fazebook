console.log("hello world");

window.onload = function(){

var newFriends = ["GJetson", "Goku", "bam-bam", "イチロ", "mr.slate", "gazoo", "picalo", "grimmace", "josh", "justice league", "tony"];

for (var i = 0; i<newFriends.length; i++){
  console.log(newFriends[i]);

  var addNewFriend = document.createElement("li");
  addNewFriend.className = "newFriends";
  addNewFriend.innerHTML = newFriends[i];
  list.appendChild(addNewFriend);

}
};

friends = ["Angela", "Jack", "Pam", "James", "Lara", "Jason"]

oneFriend = console.log("One of them is called: " + friends[0]);

allFriends = console.log("We have " + friends.length + " friends in total.");

let guestList = friends;

console.log(guestList);

let userName = prompt("What is your name? [Capitalized initial, and first name only]");

if (guestList.includes(userName)) {
	alert("You are a member of our friends group and also listed on our guest list. Welcome to our party!");
} else {
    alert("You are not a member of our friends group and also not listed on our guest list. Sorry!");
}

let jsonObject = {
	"title" : "Noh Family",
	"description" : "Members of the Noh Family",
	"members": ["Junyong", "Frances", "Haley", "Chloe", "Latte"]
}

console.log(jsonObject['title']);
console.log(jsonObject['description']);
console.log(jsonObject['members'][2]);

for (let i = 0; i < jsonObject['members'].length; i++){
	console.log("Current index: " + i + " - " + jsonObject['members'][i]);
}
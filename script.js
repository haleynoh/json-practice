let outputElement = document.getElementById('outputElement');
let outputParagraph = document.getElementById('outputParagraph');
let contentGridElement = document.getElementById('contentGrid');

let famProfile = [
	{
	"name" : "Junyong Noh",
	"picture_url": "dad.png",
	"age" : "Age: 52",
	"title": "Dad",
	"favorite_color" : "#f7793e",
	"favorite_font" : "Sans-serif",
	"school" : "School: KAIST, USC",
	"hobbies": ["Reading", "Weight Lifting", "Watching Movies"]
}, 
{
	"name" : "Frances Noh",
	"picture_url": "mom.jpg",
	"age" : "Age: 46",
	"title": "Mom",
	"favorite_color" : "#32a852",
	"favorite_font" : "Sans-serif",
	"school" : "School: USC",
	"hobbies": ["Gardening", "Going to Cafés", "Walking"]
},
{
	"name" : "Haley Noh",
	"picture_url": "random.png",
	"age" : "Age: 18",
	"title" : "Oldest daughter",
	"favorite_color" : "#b8d2fc",
	"favorite_font" : "Sans-serif",
	"school" : "School: NYU",
	"hobbies": ["Soccer", "Vlogging", "Taking a walk"]
},
{
	"name" : "Chloe Noh",
	"picture_url": "chloe.png",
	"age" : "Age: 16",
	"title": "Youngest daughter",
	"favorite_color" : "#bb84f5",
	"favorite_font" : "Sans-serif",
	"school" : "School: TCIS",
	"hobbies": ["Soccer", "Netflix", "Tiktok"]
},
{
	"name" : "Latte Noh",
	"picture_url": "latte.png",
	"age" : "Age: 2",
	"title": "dog",
	"favorite_color" : "#f5e7b8",
	"favorite_font" : "Sans-serif",
	"school" : "School: Homeschooled",
	"hobbies": ["Fetch", "Barking at strangers", "Lying in bed"]
}

	]

for (let i = 0; i < famProfile.length; i++) {
	createElementFamily(famProfile[i]);
}

function createElementFamily(incomingJSON) {

	//create whole content item div and set class
	let newContentElement = document.createElement("DIV");
	newContentElement.style.backgroundColor = incomingJSON['favorite_color'];
	newContentElement.style.fontFamily = incomingJSON['favorite_font'];
	newContentElement.classList.add('content');

	//create healding h2, set class, set content
	let newContentHeading = document.createElement("H2");
	newContentHeading.classList.add('contentTitle');
	newContentHeading.innerText = incomingJSON['name'];
	newContentElement.appendChild(newContentHeading);

	//AGE
	let newContentAge = document.createElement("H3");
	newContentAge.classList.add('contentAge');
	newContentAge.innerText = incomingJSON['age'];
	newContentElement.appendChild(newContentAge);

	//TITLE
	let newContentTitle = document.createElement("H3");
	newContentTitle.classList.add('newContentTitle');
	newContentTitle.innerText = incomingJSON['title'];
	newContentElement.appendChild(newContentTitle);

	//SCHOOL
	let newContentSchool = document.createElement("H3");
	newContentSchool.classList.add('newContentSchool');
	newContentSchool.innerText = incomingJSON['school'];
	newContentElement.appendChild(newContentSchool);

	//HOBBIES
	let newContentHobbiesList = document.createElement("UL");
	newContentElement.appendChild(newContentHobbiesList);

	for (var i = 0; i < incomingJSON['hobbies'].length; i++) {
		var currentHobbiesString = incomingJSON['hobbies'][i];
		var newHobbiesItem = document.createElement('LI');
		newHobbiesItem.innerText = currentHobbiesString;
		newContentHobbiesList.appendChild(newHobbiesItem);


	contentGridElement.appendChild(newContentElement);

	}
}
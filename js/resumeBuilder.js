

var bio= {
    "name" : "Julia Hartwig",
    "role" : "Front End Web Developer",
    "contacts" : {
      "mobile" : "213-304-1766",
      "email" : "julia.r.hartwig@gmail.com",
      "github" : "juliaintransit",
      "location" : "Las Vegas"
  },
  "welcomeMessage" : "Welcome to my resume. Below, please find my skills, work history, and education.",
  "skills" : ["JavaScript", "HTML", "CSS", "Graphic Design", "Digital Marketing"],
  "biopic" : "images/Julia_brandedmilk.jpg"
  }


var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%",bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%",bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%",bio.contacts.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%",bio.biopic);


$("#header").prepend(formattedName, formattedRole);
$("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

$("#header").append(formattedBioPic);
$("#header").append(formattedWelcome);

if (bio.skills.length > 0) {
$("#header").append(HTMLskillsStart);
var formattedSkill = HTMLskills.replace("%data%", bio.skills[0]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[1]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[2]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[3]);
$("#skills").append(formattedSkill);
formattedSkill = HTMLskills.replace("%data%", bio.skills[4]);
$("#skills").append(formattedSkill);
}

function inName(name) {
  name = name.trim().split(" ");
  console.log(name);
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() +
  name[0].slice(1).toLowerCase();
  return name[0] +" "+ name[1];
}
$('#main').append(internationalizeButton);


var work = {
  "jobs": [
    {
      "employer": "Branded Milk",
      "title": "Founder",
      "location": "Las Vegas, NV, USA",
      "dates": "January 2016y- Present",
      "description": "Boutique Branding, Graphic Design and Digital Marketing"
    },
    {
      "employer": "HeBS Digital",
      "title": "Account Manager",
      "location": "Las Vegas, NV, USA",
      "dates": "2012",
      "description": "Digital Marketing, SEO, SEM, Website Design"
    },
    {
      "employer": "Healthcare Communications Group",
      "title": "Project Manager",
      "location": "El Segundo, CA, USA",
      "dates": "2010-2011",
      "description": "Patient Recruitment and Rentention for Large Clincal Trials"
    },
    {
      "employer": "Rapid 7 ",
      "title": "Buisness Development",
      "location": "El Segundo, CA, USA",
      "dates": "2010",
      "description": "Developed new buisness through cold, warm and hot refereals"
    },
    {
      "employer": "Beth Israel Deaconess Medical Center",
      "title": "Clinical Research Coordingator",
      "location": "Boston, MA, USA",
      "dates": "2006-2008",
      "description": "Managed and Coordinated Large Clincal Trials"
    }
  ]
}

function displayWork() {
$("#workExperience").append(HTMLworkStart);
$("#workExperience").addClass("center-content");
for (var i = 0; i < work.jobs.length; i++) {
    var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title);
    var formattedWorkLocation = HTMLworkDates.replace("%data%", work.jobs[i].dates) + HTMLworkLocation.replace("%data%", work.jobs[i].location);
    var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
    $(".work-entry ").append(formattedworkEmployer, formattedWorkLocation, formattedWorkDescription);
}
}
displayWork();


var projects = {
	"projects": [{
		"title": "Julia in Transit",
		"dates": "2012 - Present",
		"description": "Personal Travel Blog, documenting my four years spent traveling the world.",
    	"images": ["images/197x148.gif"]
	}, {
		"title": "Interactive Online Portfolio",
		"dates": "December, 2016",
		"description": "A Portfolio built with HTML, and CSS.",
    "images": ["images/197x148.gif"]
	}]
}

projects.display = function() {
  for (project in projects.projects) {
    $("#projects").append(HTMLprojectStart);
    $("#projects").addClass("center-content");

    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);

    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);

    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);

    if (projects.projects[project].images > 0) {
      for (images in projects.projects[project].images) {
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].images);
        $(".project-entry:last").append(formattedImage);
      }

    };
  }
};
projects.display();

var education = {
  "schools" :[
    {
      "name" : "University of Southern California",
      "degree" : "Masters of Arts",
      "dates" : "2009-2010",
      "location" : "Los Angeles, California",
      "major" : "Communication"
    },
    {
      "name" : "University of Massachusetts,Amherst",
      "degree" : "Bachelor of Arts",
      "dates" : "2001-2005",
      "location" : "Amherst, Massachusetts",
      "major" : "Art History"
    }],
    "onlineCourses": [
		{
			"url": "Udacity.com/nanodegree",
			"title": "Intro to HTML and CSS",
			"school": "Udacity",
			"dates": "December 2016"
		},
		{
			"url": "Udacity.com/nanodegree",
			"title": "Intro to Javascript",
			"school": "Udacity",
			"dates": "December 2016"
		},
		{
			"url": "Udacity.com/nanodegree",
			"title": "Intro to jQuery",
			"school": "Udacity",
			"dates": "December 2016"
		},
		{
			"url": "Udacity.com/nanodegree",
			"title": "Version Control with Github",
			"school": "Udacity",
			"dates": "December 2016"
		}
		],

}


function displaySchools() {
$("#education").append(HTMLschoolStart);
$("#education").addClass("center-content");
for (var i = 0; i < education.schools.length; i++) {
    var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name) + HTMLschoolDegree.replace("%data%", education.schools[i].degree);
    var formattedschoolLocation = HTMLschoolDates.replace("%data%", education.schools[i].dates) + HTMLschoolLocation.replace("%data%", education.schools[i].location);
    var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].major);
    $(".education-entry ").append(formattedSchoolName, formattedschoolLocation, formattedSchoolMajor);
}
}
displaySchools();
$("#mapDiv").append(googleMap);

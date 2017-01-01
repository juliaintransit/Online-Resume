var bio = {
    "name": "Julia Hartwig",
    "role": "Front End Web Developer",
    "contacts": {
        "mobile": "213-304-1766",
        "email": "julia.r.hartwig@gmail.com",
        "github": "juliaintransit",
        "location": "Las Vegas"

    },
    "welcomeMessage": "Welcome to my resume. Below, please find my skills, work history, and education.",
    "skills": ["JavaScript", "HTML", "CSS", "Graphic Design", "Digital Marketing"],
    "biopic": "images/Julia_brandedmilk.jpg"
}

bio.display = function() {
var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedMobile = HTMLmobile.replace("%data%", bio.contacts.mobile);
var formattedEmail = HTMLemail.replace("%data%", bio.contacts.email);
var formattedGithub = HTMLgithub.replace("%data%", bio.contacts.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contacts.location);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
var formattedBioPic = HTMLbioPic.replace("%data%", bio.biopic);


$("#header").prepend(formattedName, formattedRole);
$("#topContacts, #footerContacts").append(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

$("#header").append(formattedBioPic);
$("#header").append(formattedWelcome);

$("#header").append(HTMLskillsStart);
for (var i = 0; i < bio.skills.length; i++) {



    formattedSkill = HTMLskills.replace("%data%", bio.skills[i]);
    $("#skills").append(formattedSkill);

};


}
bio.display();

var work = {
    "jobs": [{
            "employer": "Branded Milk",
            "title": "Founder",
            "location": "Las Vegas, NV, USA",
            "dates": "January 2016- Present",
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
work.display = function() {
    $("#workExperience").append(HTMLworkStart);
    $("#workExperience").addClass("center-content");
    for (var i = 0; i < work.jobs.length; i++) {
        var formattedworkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[i].employer) + HTMLworkTitle.replace("%data%", work.jobs[i].title);
        var formattedWorkLocation = HTMLworkDates.replace("%data%", work.jobs[i].dates) + HTMLworkLocation.replace("%data%", work.jobs[i].location);
        var formattedWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[i].description);
        $(".work-entry ").append(formattedworkEmployer, formattedWorkLocation, formattedWorkDescription);
    }
}
work.display();

var projects = {
    "projects": [{
        "title": "Julia in Transit",
        "dates": "2012 - Present",
        "description": "Personal Travel Blog, documenting my four years spent traveling the world.",
        "images": ["images/juliaintransit.jpg"]
    }, {
        "title": "Interactive Online Portfolio",
        "dates": "December, 2016",
        "description": "A Portfolio built with HTML, and CSS.",
        "images": ["images/portfolio.jpg"]
    }]
};

projects.display = function() {

    for (var i = 0; i < projects.projects.length; i++) {
        $('#projects').append(HTMLprojectStart);
        var formattedProjectTitle = HTMLprojectTitle.replace("#", projects.projects[i].url).replace("%data%", projects.projects[i].title);
        var formattedProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].images);
        $('.project-entry:last').append(formattedProjectTitle, formattedProjectDates, formattedProjectDescription, formattedProjectImage);

    }
};


projects.display();

var education = {
    "schools": [{
            "name": "University of Southern California",
            "url": "http://www.usc.edu",
            "degree": "Masters of Arts",
            "dates": "2009-2010",
            "location": "Los Angeles, California",
            "majors": ["Communication"]
        },
        {
            "name": "University of Massachusetts,Amherst",
            "url": "http://www.umass.edu",
            "degree": "Bachelor of Arts",
            "dates": "2001-2005",
            "location": "Amherst, Massachusetts",
            "majors": ["Art History"]
        }
    ],
    "onlineCourses": [{
            "title": "Intro to HTML and CSS",
            "school": "Udacity",
            "url": "Udacity.com/nanodegree",
            "dates": "December 2016"
        },
        {
            "title": "Intro to Javascript",
            "school": "Udacity",
            "url": "Udacity.com/nanodegree",
            "dates": "December 2016"
        },
        {
            "title": "Intro to jQuery",
            "school": "Udacity",
            "url": "Udacity.com/nanodegree",
            "dates": "December 2016"
        },
        {
            "title": "Version Control with Github",
            "school": "Udacity",
            "url": "Udacity.com/nanodegree",
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
        var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors) + HTMLschoolURL.replace("%data%", education.schools[i].url);
        $(".education-entry").append(formattedSchoolName, formattedschoolLocation, formattedSchoolMajor);
    }



$('#education').append(HTMLonlineClasses)
    for (var x = 0; x < education.onlineCourses.length; x++) {

        var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.onlineCourses[x].school);
        var formattedOnlineSchoolTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[x].title) + HTMLonlineURL.replace("%data%", education.onlineCourses[x].url);
        var formattedOnlineSchoolDates = HTMLonlineDates.replace("%data%", education.onlineCourses[x].dates);
        $(".education-entry").append(formattedOnlineSchool, formattedOnlineSchoolTitle, formattedOnlineSchoolDates);
    }
}

displaySchools();
$("#mapDiv").append(googleMap);

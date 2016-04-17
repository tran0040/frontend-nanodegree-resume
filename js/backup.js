/*
This is empty on purpose! Your code to build the resume will go here.
 */
var DATA = '%data%';

var bio = {
	name: 'Tran Ngoc Hieu',
	role: 'Software Engineer',
	contacts: {
		mobile: '+65-97718946',
		email: 'hieu2608@gmail.com',
		github: 'tran0040',
		location: 'Singapore',
	},
	welcomeMessage: 'Welcome to my Interactive Resume',
	skills: [
		'Java', 'JavaScript', 'SAP', 'ABAP',
	],
};

var work = {
	jobs: [{
		title: 'SAP Consultant',
		employer: 'NCS Pte. Ltd.',
		dates: 1596,
		location: 'Singapore',
		description: 'Specialize in BPC and HR',
	}, ],

};

var projects = [{
	title: 'MERIT',
	dates: 1596,
	description: 'Multi-million dollar project for MAS',
	images: [{
		url: 'test.url',
	}, ],
}, ];

var education = {
	schools: [{
		name: 'Master of Technology',
		school: 'National University of Singapore',
		degree: 'Master',
		major: 'Software Engineer',
		minor: 'NA',
		date: new Date(2016, 01, 18),
		year: 1.5,
		graduation: 2017,
		location: 'Singapore',
	}, {
		name: 'Bachelor of Engineering',
		school: 'Nanyang Technological University',
		degree: 'Bachelor',
		major: 'Electronic & Electrical Engineering',
		minor: 'Business',
		date: new Date(2011, 7, 17),
		year: 4,
		graduation: 2011,
		location: 'Singapore',
	}, ],
	onlineCourses: [{
		title: 'Online JavaScript',
		school: 'Udacity',
		dates: new Date(2016, 4, 14),
		url: '',
	}, ],
};

if (bio.name !== null) {
	var formattedName = HTMLheaderName.replace(DATA, bio.name);
	$('#header').append(formattedName);
}

if (bio.role !== null) {
	var formattedRole = HTMLheaderRole.replace(DATA, bio.role);
	$('#header').append(formattedRole);
}

if (bio.contacts !== null) {
	// for (var property in bio.contacts) {
	//   if (bio.contacts.hasOwnProperty(property)) {
	//     var formattedEmail = (property.name == 'email' ? HTMLemail.replace(DATA, property) : null);
	//     $('#header').append((formattedEmail));
	//   }
	// }
	Object.keys(bio.contacts).forEach(function f(key, index) {
		var formattedEmail = (key === 'email' ? HTMLemail.replace(DATA, bio.contacts[key]) : null);
		$('#header').append(formattedEmail);
		var formattedMobile = (key === 'mobile' ? HTMLmobile.replace(DATA, bio.contacts[key]) : null);
		$('#header').append(formattedMobile);
		var formattedTwitter = (key === 'twitter' ? HTMLtwitter.replace(DATA, bio.contacts[key]) : null);
		$('#header').append(formattedTwitter);
		var formattedGithub = (key === 'github' ? HTMLgithub.replace(DATA, bio.contacts[key]) : null);
		$('#header').append(formattedGithub);
		var formattedBlog = (key === 'blog' ? HTMLblog.replace(DATA, bio.contacts[key]) : null);
		$('#header').append(formattedBlog);
		var formattedLocation = (key === 'location' ? HTMLlocation.replace(DATA, bio.contacts[key]) :
			null);
		$('#header').append(formattedLocation);
	});
}

if (bio.skills.length > 0) {
	$('#header').append(HTMLskillsStart);

	bio.skills.forEach(function f(item, i) {
		var formattedSkill = HTMLskills.replace(DATA, item);
		$('#skills').append(formattedSkill);
	});

	console.log(bio.skills);
	console.log(HTMLskillsStart);
	console.log(HTMLskills.replace(DATA, bio.skills));
}
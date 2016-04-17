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
  picture: 'images/fry.jpg',
  skills: [
    'Java', 'JavaScript', 'SAP', 'ABAP',
  ],
};

var work = {
  jobs: [
    {
      title: 'SAP Consultant',
      employer: 'NCS Pte. Ltd.',
      dates: 1596,
      location: 'Singapore',
      description: 'Specialize in BPC and HR',
    },
    {
      title: 'Intern Engineering',
      employer: 'Qualcomm',
      dates: 180,
      location: 'Singapore',
      description: 'Develop an utiltily software to automate the process of chip testing and create report',
    },
  ],
};

var projects = [
  {
    title: 'MERIT',
    dates: 1596,
    description: 'Multi-million dollar project for MAS',
    images: [
      {
        url: 'test.url',
      },
    ],
  },
];

var education = {
  schools: [
    {
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
    },
  ],
  onlineCourses: [
    {
      title: 'Online JavaScript',
      school: 'Udacity',
      dates: new Date(2016, 4, 14),
      url: '',
    },
  ],
};

var formattedName = (bio.name !== null ? HTMLheaderName.replace(DATA, bio.name) : null);
$('#header').append(formattedName);

var formattedRole = (bio.role !== null ? HTMLheaderRole.replace(DATA, bio.role) : null);
$('#header').append(formattedRole);

var formattedPic = (bio.picture !== null ? HTMLbioPic.replace(DATA, bio.picture) : null);
$('#header').append(formattedPic);

var formattedMessage = (bio.welcomeMessage !== null ? HTMLwelcomeMsg.replace(DATA,    bio.welcomeMessage) : null);
$('#header').append(formattedMessage);

if (bio.contacts !== null) {
  Object.keys(bio.contacts).forEach(function f(key, index) {
    var formattedEmail = (key === 'email' ? HTMLemail.replace(DATA, bio.contacts[key]) :
      null);
    $('#header').append(formattedEmail);
    var formattedMobile = (key === 'mobile' ? HTMLmobile.replace(DATA, bio.contacts[key]) :
      null);
    $('#header').append(formattedMobile);
    var formattedTwitter = (key === 'twitter' ? HTMLtwitter.replace(DATA, bio.contacts[key]) :
      null);
    $('#header').append(formattedTwitter);
    var formattedGithub = (key === 'github' ? HTMLgithub.replace(DATA, bio.contacts[key]) :
      null);
    $('#header').append(formattedGithub);
    var formattedBlog = (key === 'blog' ? HTMLblog.replace(DATA, bio.contacts[key]) : null);
    $('#header').append(formattedBlog);
    var formattedLocation = (key === 'location' ? HTMLlocation.replace(DATA, bio.contacts[
        key]) :
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
}

if (work !== null) {
  work.jobs.forEach(function f(job) {
    $('#workExperience').append(HTMLworkStart);

    var formattedWorkEmployer =
      (job.employer !== null ? HTMLworkEmployer.replace(DATA, job.employer) : null);
    console.log(formattedWorkEmployer);
    var formattedWorkTitle = (job.title !== null ? HTMLworkTitle.replace(DATA, job.title) :
      null);
    var formattedWorkDate = (job.dates !== null ? HTMLworkDates.replace(DATA, job.dates) : null);
    var formattedWorkDescription = (job.description !== null ? HTMLworkDescription.replace(DATA,
      job.description) : null);

    $('.work-entry:last').append(formattedWorkEmployer + formattedWorkTitle);
    $('.work-entry:last').append(formattedWorkDate + formattedWorkDescription);
  });
}

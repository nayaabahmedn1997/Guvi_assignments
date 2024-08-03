// Sample JSON resume object
const resume = {
  "personal_information": {
    "name": "John Doe",
    "address": "123 Main St, Anytown, USA",
    "phone": "+1-555-123-4567",
    "email": "john.doe@example.com",
    "linkedin": "https://www.linkedin.com/in/johndoe",
    "website": "https://www.johndoe.com"
  },
  "objective": "Results-driven software engineer with 5 years of experience in developing scalable web applications. Seeking to leverage my expertise in full-stack development at XYZ Corp to create innovative solutions and drive company success.",
  "education": [
    {
      "degree": "Bachelor of Science in Computer Science",
      "institution": "University of Example",
      "graduation_year": 2019,
      "gpa": "3.8"
    }
  ],
  "work_experience": [
    {
      "job_title": "Software Engineer",
      "company": "ABC Tech Solutions",
      "location": "Anytown, USA",
      "start_date": "2020-06-01",
      "end_date": "2024-07-31",
      "responsibilities": [
        "Developed and maintained web applications using React and Node.js.",
        "Implemented RESTful APIs and integrated third-party services.",
        "Collaborated with cross-functional teams to define and deliver project requirements.",
        "Optimized application performance and scalability."
      ]
    },
    {
      "job_title": "Junior Developer",
      "company": "XYZ Innovations",
      "location": "Anytown, USA",
      "start_date": "2019-06-01",
      "end_date": "2020-05-31",
      "responsibilities": [
        "Assisted in the development of internal tools using Python and Django.",
        "Participated in code reviews and contributed to team knowledge sharing.",
        "Wrote unit tests and maintained documentation for existing software."
      ]
    }
  ],
  "skills": [
    "JavaScript",
    "React",
    "Node.js",
    "Python",
    "Django",
    "RESTful APIs",
    "SQL",
    "Git",
    "Agile Methodologies"
  ],
  "certifications": [
    {
      "certification_name": "Certified JavaScript Developer",
      "issuing_organization": "JavaScript Institute",
      "issue_date": "2022-03-15"
    }
  ],
  "projects": [
    {
      "project_name": "E-commerce Platform",
      "description": "Developed a full-stack e-commerce platform using React for the frontend and Node.js for the backend. Integrated payment gateways and implemented features such as user authentication and order management.",
      "technologies_used": [
        "React",
        "Node.js",
        "Express",
        "MongoDB",
        "Stripe"
      ]
    }
  ]
};
  // Traditional for loop
// Education
console.log("\nEducation:");
const education = resume.education;
for (let i = 0; i < education.length; i++) {
  const edu = education[i];
  for (const key in edu) {
    if (edu.hasOwnProperty(key)) {
      console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${edu[key]}`);
    }
  }
  console.log(''); // Add a blank line between entries
}

// Work Experience
console.log("Work Experience:");
const workExperience = resume.work_experience;
for (let i = 0; i < workExperience.length; i++) {
  const job = workExperience[i];
  console.log(`Job Title: ${job.job_title}`);
  console.log(`Company: ${job.company}`);
  console.log(`Location: ${job.location}`);
  console.log(`Start Date: ${job.start_date}`);
  console.log(`End Date: ${job.end_date}`);
  console.log("Responsibilities:");
  for (let j = 0; j < job.responsibilities.length; j++) {
    console.log(`- ${job.responsibilities[j]}`);
  }
  console.log(''); // Add a blank line between entries
}

// Skills
console.log("Skills:");
const skills = resume.skills;
for (let i = 0; i < skills.length; i++) {
  console.log(`- ${skills[i]}`);
}

// Certifications
console.log("\nCertifications:");
const certifications = resume.certifications;
for (let i = 0; i < certifications.length; i++) {
  const cert = certifications[i];
  console.log(`Certification Name: ${cert.certification_name}`);
  console.log(`Issuing Organization: ${cert.issuing_organization}`);
  console.log(`Issue Date: ${cert.issue_date}`);
  console.log(''); // Add a blank line between entries
}

// Projects
console.log("Projects:");
const projects = resume.projects;
for (let i = 0; i < projects.length; i++) {
  const project = projects[i];
  console.log(`Project Name: ${project.project_name}`);
  console.log(`Description: ${project.description}`);
  console.log("Technologies Used:");
  for (let j = 0; j < project.technologies_used.length; j++) {
    console.log(`- ${project.technologies_used[j]}`);
  }
  console.log(''); // Add a blank line between entries
}


// Personal Information
console.log("Personal Information:");
for (const [key, value] of Object.entries(resume.personal_information)) {
  console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
}

// Objective
console.log("\nObjective:");
console.log(resume.objective);

// Education
console.log("\nEducation:");
for (const edu of resume.education) {
  for (const [key, value] of Object.entries(edu)) {
    console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
  }
  console.log(''); // Add a blank line between entries
}

// Work Experience
console.log("Work Experience:");
for (const job of resume.work_experience) {
  console.log(`Job Title: ${job.job_title}`);
  console.log(`Company: ${job.company}`);
  console.log(`Location: ${job.location}`);
  console.log(`Start Date: ${job.start_date}`);
  console.log(`End Date: ${job.end_date}`);
  console.log("Responsibilities:");
  for (const responsibility of job.responsibilities) {
    console.log(`- ${responsibility}`);
  }
  console.log(''); // Add a blank line between entries
}

// Skills
console.log("Skills:");
for (const skill of resume.skills) {
  console.log(`- ${skill}`);
}

// Certifications
console.log("\nCertifications:");
for (const cert of resume.certifications) {
  console.log(`Certification Name: ${cert.certification_name}`);
  console.log(`Issuing Organization: ${cert.issuing_organization}`);
  console.log(`Issue Date: ${cert.issue_date}`);
  console.log(''); // Add a blank line between entries
}

// Projects
console.log("Projects:");
for (const project of resume.projects) {
  console.log(`Project Name: ${project.project_name}`);
  console.log(`Description: ${project.description}`);
  console.log("Technologies Used:");
  for (const technology of project.technologies_used) {
    console.log(`- ${technology}`);
  }
  console.log(''); // Add a blank line between entries
}

//For in loop

// Personal Information
console.log("Personal Information:");
for (const key in resume.personal_information) {
  if (resume.personal_information.hasOwnProperty(key)) {
    console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${resume.personal_information[key]}`);
  }
}

// Objective
console.log("\nObjective:");
console.log(resume.objective);

// Education
console.log("\nEducation:");
for (const edu of resume.education) {
  for (const key in edu) {
    if (edu.hasOwnProperty(key)) {
      console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${edu[key]}`);
    }
  }
  console.log(''); // Add a blank line between entries
}

// Work Experience
console.log("Work Experience:");
for (const job of resume.work_experience) {
  console.log(`Job Title: ${job.job_title}`);
  console.log(`Company: ${job.company}`);
  console.log(`Location: ${job.location}`);
  console.log(`Start Date: ${job.start_date}`);
  console.log(`End Date: ${job.end_date}`);
  console.log("Responsibilities:");
  for (const index in job.responsibilities) {
    if (job.responsibilities.hasOwnProperty(index)) {
      console.log(`- ${job.responsibilities[index]}`);
    }
  }
  console.log(''); // Add a blank line between entries
}

// Skills
console.log("Skills:");
for (const index in resume.skills) {
  if (resume.skills.hasOwnProperty(index)) {
    console.log(`- ${resume.skills[index]}`);
  }
}

// Certifications
console.log("\nCertifications:");
for (const cert of resume.certifications) {
  for (const key in cert) {
    if (cert.hasOwnProperty(key)) {
      console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${cert[key]}`);
    }
  }
  console.log(''); // Add a blank line between entries
}

// Projects
console.log("Projects:");
for (const project of resume.projects) {
  console.log(`Project Name: ${project.project_name}`);
  console.log(`Description: ${project.description}`);
  console.log("Technologies Used:");
  for (const index in project.technologies_used) {
    if (project.technologies_used.hasOwnProperty(index)) {
      console.log(`- ${project.technologies_used[index]}`);
    }
  }
  console.log(''); // Add a blank line between entries
}

// Personal Information
console.log("Personal Information:");
Object.entries(resume.personal_information).forEach(([key, value]) => {
  console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
});

// Objective
console.log("\nObjective:");
console.log(resume.objective);

// Education
console.log("\nEducation:");
resume.education.forEach(edu => {
  Object.entries(edu).forEach(([key, value]) => {
    console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
  });
  console.log(''); // Add a blank line between entries
});

// Work Experience
console.log("Work Experience:");
resume.work_experience.forEach(job => {
  console.log(`Job Title: ${job.job_title}`);
  console.log(`Company: ${job.company}`);
  console.log(`Location: ${job.location}`);
  console.log(`Start Date: ${job.start_date}`);
  console.log(`End Date: ${job.end_date}`);
  console.log("Responsibilities:");
  job.responsibilities.forEach(responsibility => {
    console.log(`- ${responsibility}`);
  });
  console.log(''); // Add a blank line between entries
});

// Skills
console.log("Skills:");
resume.skills.forEach(skill => {
  console.log(`- ${skill}`);
});

// Certifications
console.log("\nCertifications:");
resume.certifications.forEach(cert => {
  Object.entries(cert).forEach(([key, value]) => {
    console.log(`${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`);
  });
  console.log(''); // Add a blank line between entries
});

// Projects
console.log("Projects:");
resume.projects.forEach(project => {
  console.log(`Project Name: ${project.project_name}`);
  console.log(`Description: ${project.description}`);
  console.log("Technologies Used:");
  project.technologies_used.forEach(technology => {
    console.log(`- ${technology}`);
  });
  console.log(''); // Add a blank line between entries
});
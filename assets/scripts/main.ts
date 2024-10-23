const toggleSkillsIcon = document.getElementById('toggleSkillsIcon');
const toggleExperienceIcon = document.getElementById('toggleExperienceIcon');
const togglePersonalIcon = document.getElementById('togglePersonalIcon');
const toggleProjectsIcon = document.getElementById('toggleProjectsIcon');
const toggleEducationIcon = document.getElementById('toggleEducationIcon');


// Correctly selecting the skillsGrid element here
const skillsGrid = document.getElementById('skillsGrid');
const experienceList = document.getElementById('experienceList');
const personalInfoContent = document.getElementById('personalInfoContent');
const projectsList = document.getElementById('projectsList');
const educationContent = document.getElementById('educationContent');

// Toggle function for skills section
toggleSkillsIcon?.addEventListener('click', () => {
    skillsGrid?.classList.toggle('hidden'); // Toggle the hidden class for skillsGrid
    toggleSkillsIcon.classList.toggle('fa-chevron-down');
    toggleSkillsIcon.classList.toggle('fa-chevron-up');
});

// Toggle function for experience section
toggleExperienceIcon?.addEventListener('click', () => {
    experienceList?.classList.toggle('hidden');
    toggleExperienceIcon.classList.toggle('fa-chevron-down');
    toggleExperienceIcon.classList.toggle('fa-chevron-up');
});

// Toggle function for personal info section
togglePersonalIcon?.addEventListener('click', () => {
    personalInfoContent?.classList.toggle('hidden');
    togglePersonalIcon.classList.toggle('fa-chevron-down');
    togglePersonalIcon.classList.toggle('fa-chevron-up');
});

// Toggle function for projects section
toggleProjectsIcon?.addEventListener('click', () => {
    projectsList?.classList.toggle('hidden');
    toggleProjectsIcon.classList.toggle('fa-chevron-down');
    toggleProjectsIcon.classList.toggle('fa-chevron-up');
});

// Toggle function for education section
toggleEducationIcon?.addEventListener('click', () => {
    educationContent?.classList.toggle('hidden');
    toggleEducationIcon.classList.toggle('fa-chevron-down');
    toggleEducationIcon.classList.toggle('fa-chevron-up');
});

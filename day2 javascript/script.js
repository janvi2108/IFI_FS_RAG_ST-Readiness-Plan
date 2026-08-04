const profileName = "Janvi Gaba";
const role = "Intern - AI at IFI Techsolutions Ltd.";

console.log("Profile Name:", profileName);
console.log("Role:", role);

function showWelcomeMessage() {
    alert("Welcome " + profileName + "!\nThanks for visiting my profile.");
}

const welcomeButton = document.createElement("button");
welcomeButton.textContent = "Welcome";
welcomeButton.className = "welcome-btn";
welcomeButton.style.marginTop = "20px";
welcomeButton.style.padding = "12px 30px";
welcomeButton.style.backgroundColor = "#007bff";
welcomeButton.style.color = "white";
welcomeButton.style.border = "none";
welcomeButton.style.borderRadius = "5px";
welcomeButton.style.fontSize = "16px";
welcomeButton.style.cursor = "pointer";
welcomeButton.style.fontWeight = "500";
welcomeButton.style.transition = "background-color 0.3s ease";

welcomeButton.addEventListener("mouseenter", function() {
    welcomeButton.style.backgroundColor = "#0056b3";
});

welcomeButton.addEventListener("mouseleave", function() {
    welcomeButton.style.backgroundColor = "#007bff";
});

const buttonContainer = document.getElementById("welcome-button-container");
buttonContainer.appendChild(welcomeButton);

welcomeButton.addEventListener("click", function() {
    showWelcomeMessage();
});

const profile = {
    name: "Janvi Gaba",
    role: "Intern - AI at IFI Techsolutions Ltd.",
    education: "Computer Science",
    email: "janvi@example.com"
};

console.log("\n===== PROFILE OBJECT =====");
console.log("Name:", profile.name);
console.log("Role:", profile.role);
console.log("Education:", profile.education);
console.log("Email:", profile.email);

const skills = [
    "Python",
    "Java",
    "C++",
    "HTML",
    "CSS",
    "FastAPI",
    "Machine Learning",
    "Deep Learning",
    "RAG",
    "LangChain",
    "Hugging Face",
    "OpenAI APIs",
    "Azure",
    "Git",
    "GitHub",
    "MySQL",
    "PostgreSQL"
];

console.log("\n===== SKILLS ARRAY =====");
console.log("Total Skills:", skills.length);
console.log("Skills List:", skills);

const skillsContainer = document.getElementById("skills-container");
skillsContainer.innerHTML = "";

const skillsCard = document.createElement("div");
skillsCard.className = "card";
skillsCard.style.gridColumn = "1 / -1";

const skillsHeading = document.createElement("h3");
skillsHeading.textContent = "Technical Skills";
skillsCard.appendChild(skillsHeading);

const skillsList = document.createElement("ul");

skills.forEach(function(skill) {
    const listItem = document.createElement("li");
    listItem.textContent = skill;
    skillsList.appendChild(listItem);
});

skillsCard.appendChild(skillsList);

const totalSkillsText = document.createElement("p");
totalSkillsText.textContent = "Total Skills: " + skills.length;
totalSkillsText.style.marginTop = "15px";
totalSkillsText.style.fontWeight = "bold";
totalSkillsText.style.color = "#007bff";
totalSkillsText.style.fontSize = "16px";

skillsCard.appendChild(totalSkillsText);
skillsContainer.appendChild(skillsCard);

const toggleAboutButton = document.createElement("button");
toggleAboutButton.textContent = "Hide About";
toggleAboutButton.style.marginTop = "10px";
toggleAboutButton.style.padding = "10px 20px";
toggleAboutButton.style.backgroundColor = "#28a745";
toggleAboutButton.style.color = "white";
toggleAboutButton.style.border = "none";
toggleAboutButton.style.borderRadius = "5px";
toggleAboutButton.style.fontSize = "14px";
toggleAboutButton.style.cursor = "pointer";
toggleAboutButton.style.marginRight = "10px";
toggleAboutButton.style.fontWeight = "500";

const aboutSection = document.querySelector("#about-content");

toggleAboutButton.addEventListener("click", function() {
    if (aboutSection.style.display === "none") {
        aboutSection.style.display = "block";
        toggleAboutButton.textContent = "Hide About";
    } else {
        aboutSection.style.display = "none";
        toggleAboutButton.textContent = "Show About";
    }
});

const darkModeToggle = document.createElement("button");
darkModeToggle.textContent = "Dark Mode";
darkModeToggle.style.marginTop = "10px";
darkModeToggle.style.padding = "10px 20px";
darkModeToggle.style.backgroundColor = "#6c757d";
darkModeToggle.style.color = "white";
darkModeToggle.style.border = "none";
darkModeToggle.style.borderRadius = "5px";
darkModeToggle.style.fontSize = "14px";
darkModeToggle.style.cursor = "pointer";
darkModeToggle.style.fontWeight = "500";

darkModeToggle.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    
    if (document.body.classList.contains("dark-mode")) {
        darkModeToggle.textContent = "Light Mode";
    } else {
        darkModeToggle.textContent = "Dark Mode";
    }
});

const toggleButtonsContainer = document.getElementById("toggle-buttons-container");
toggleButtonsContainer.appendChild(toggleAboutButton);
toggleButtonsContainer.appendChild(darkModeToggle);

const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.toLocaleString('en-US', { month: 'long' });
const year = currentDate.getFullYear();
const formattedDate = day + " " + month + " " + year;

const footerText = document.getElementById("footer-text");
footerText.innerHTML = "&copy; " + year + " Janvi Gaba. All rights reserved.<br>Today's Date: " + formattedDate;

const emailCard = document.getElementById("email-card");
emailCard.style.cursor = "pointer";

emailCard.addEventListener("mouseenter", function() {
    emailCard.style.transform = "scale(1.05)";
    emailCard.style.transition = "transform 0.2s ease";
});

emailCard.addEventListener("mouseleave", function() {
    emailCard.style.transform = "scale(1)";
});

emailCard.addEventListener("click", function() {
    const emailAddress = "janvi.gaba@ifi.tech";
    
    navigator.clipboard.writeText(emailAddress).then(function() {
        alert("Email copied successfully!");
    }).catch(function(error) {
        console.error("Failed to copy email:", error);
        alert("Failed to copy email. Please try again.");
    });
});

console.log("\n===== ADVANCED FEATURES LOADED =====");
console.log("✓ Show/Hide About Toggle");
console.log("✓ Dark/Light Mode Toggle");
console.log("✓ Dynamic Date Display");
console.log("✓ Email Copy to Clipboard");
console.log("\n===== ALL FEATURES LOADED SUCCESSFULLY =====");

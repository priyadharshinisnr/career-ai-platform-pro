console.log("Career AI Platform Pro Started Successfully");


// ================= REGISTER =================

let registerForm = document.getElementById("registerForm");

if(registerForm){

    registerForm.addEventListener("submit", function(event){

        event.preventDefault();

        // Get student details
        let studentData = {
            name: document.getElementById("studentName").value,
            college: document.getElementById("collegeName").value,
            department: document.getElementById("department").value,
            year: document.getElementById("yearOfStudy").value,
            skills: document.getElementById("currentSkills").value,
            domain: document.getElementById("dreamDomain").value,
            dreamRole: document.getElementById("dreamRole").value
        };

        // Save data
        localStorage.setItem(
            "studentData",
            JSON.stringify(studentData)
        );

        alert("Registration Successful!");

        window.location.href = "login.html";

    });

}

// ================= LOGIN =================

let loginForm = document.getElementById("loginForm");

if(loginForm){

    loginForm.addEventListener("submit", function(event){

        event.preventDefault();

        alert("Login Successful!");

        window.location.href="dashboard.html";

    });

}


// ================= SKILL ANALYSIS =================

let skillForm = document.getElementById("skillForm");


if(skillForm){

skillForm.addEventListener("submit", function(event){

event.preventDefault();


let skills = document.getElementById("analysisSkills").value
.toLowerCase()
.split(",")
.map(skill => skill.trim());


let role = document.getElementById("role").value;


let requiredSkills=[];


// Role based skills

if(role==="AI Engineer"){

requiredSkills=[
"python",
"machine learning",
"tensorflow",
"git",
"sql"
];

}

else if(role==="Java Developer"){

requiredSkills=[
"java",
"sql",
"git",
"spring boot"
];

}

else if(role==="Python Developer"){

requiredSkills=[
"python",
"sql",
"git",
"django"
];

}

else if(role==="Full Stack Developer"){

requiredSkills=[
"html",
"css",
"javascript",
"react",
"node.js"
];

}


// Find missing skills

let missingSkills=[];


for(let skill of requiredSkills){

if(!skills.includes(skill)){

missingSkills.push(skill);

}

}



// Recommendation Lists

let courses=[];

let projects=[];

let certifications=[];



for(let skill of missingSkills){


if(skill==="python"){

courses.push("Python Programming");

projects.push("Student Result Management System");

certifications.push("Python Programming Certification");

}


else if(skill==="machine learning"){

courses.push("Machine Learning Fundamentals");

projects.push("House Price Prediction");

certifications.push("Machine Learning Specialization");

}


else if(skill==="tensorflow"){

courses.push("TensorFlow for Beginners");

projects.push("Image Classification using TensorFlow");

certifications.push("TensorFlow Developer Certificate");

}


else if(skill==="git"){

courses.push("Git & GitHub");

projects.push("GitHub Portfolio Repository");

certifications.push("GitHub Foundations");

}


else if(skill==="sql"){

courses.push("SQL Basics");

projects.push("Student Database Management System");

certifications.push("Oracle SQL Certification");

}


else if(skill==="spring boot"){

courses.push("Spring Boot Development");

projects.push("Employee Management System");

certifications.push("Spring Professional Certification");

}


}

// Calculate Readiness Percentage

let completedSkills = requiredSkills.length - missingSkills.length;

let readiness = Math.round(
    (completedSkills / requiredSkills.length) * 100
);
localStorage.setItem("readiness", readiness);
localStorage.setItem("completedSkills", completedSkills);
localStorage.setItem("totalSkills", requiredSkills.length);
localStorage.setItem("missingSkills", missingSkills.join(", "));
localStorage.setItem("selectedRole", role);
// Final Report

let output = `
<h3>🎯 Career Readiness Score</h3>

<p>
${readiness}% Ready
</p>

<p>
Skills Completed:
${completedSkills}/${requiredSkills.length}
</p>

<h2>🎯 Skill Analysis Report</h2>


<h3>❌ Missing Skills</h3>

<p>${missingSkills.join("<br>")}</p>



<h3>📚 Recommended Courses</h3>

<p>${courses.join("<br>")}</p>



<h3>💻 Recommended Projects</h3>

<p>${projects.join("<br>")}</p>



<h3>🏆 Recommended Certifications</h3>

<p>${certifications.join("<br>")}</p>

`;



document.getElementById("result").innerHTML=output;
localStorage.setItem("skillAnalysisCount", Number(localStorage.getItem("skillAnalysisCount")||0) + 1);


});

}
function generateRoadmap() {

let role = document.getElementById("roadRole").value;

let roadmap = "";

if(role === "AI Engineer"){

roadmap = `
<h2>🎯 AI Engineer Roadmap</h2>

<h3>Month 1</h3>
<p>✅ Python Basics</p>

<h3>Month 2</h3>
<p>✅ Machine Learning</p>

<h3>Month 3</h3>
<p>✅ TensorFlow</p>

<h3>Month 4</h3>
<p>✅ AI Projects</p>

<h3>Month 5</h3>
<p>✅ GitHub Portfolio</p>

<h3>Month 6</h3>
<p>✅ Resume & Interview Preparation</p>
`;

}

else if(role === "Java Developer"){

roadmap = `
<h2>☕ Java Developer Roadmap</h2>

<h3>Month 1</h3>
<p>✅ Java Basics</p>

<h3>Month 2</h3>
<p>✅ OOP Concepts</p>

<h3>Month 3</h3>
<p>✅ SQL</p>

<h3>Month 4</h3>
<p>✅ Spring Boot</p>

<h3>Month 5</h3>
<p>✅ Java Project</p>

<h3>Month 6</h3>
<p>✅ Interview Preparation</p>
`;

}
else if(role === "Python Developer"){

roadmap = `
<h2>🐍 Python Developer Roadmap</h2>

<h3>Month 1</h3>
<p>✅ Python Basics</p>

<h3>Month 2</h3>
<p>✅ Advanced Python & OOP</p>

<h3>Month 3</h3>
<p>✅ SQL & Database</p>

<h3>Month 4</h3>
<p>✅ Django & REST API</p>

<h3>Month 5</h3>
<p>✅ Git & GitHub</p>

<h3>Month 6</h3>
<p>✅ Python Project & Interview Preparation</p>
`;

}
document.getElementById("roadmapResult").innerHTML = roadmap;

}

// ================= CAREER RECOMMENDATION =================

function recommendCareer(){

    let skills = document.getElementById("careerSkills").value
        .toLowerCase()
        .split(",")
        .map(skill => skill.trim());

    let career = "";
    let reason = "";
    let nextSkills = "";

    // AI Engineer
    if(
        skills.includes("python") &&
        (
            skills.includes("machine learning") ||
            skills.includes("tensorflow")
        )
    ){

        career = "🤖 AI Engineer";

        reason = `
        ✔ Python knowledge<br>
        ✔ Machine Learning / AI knowledge
        `;

        nextSkills = `
        • Deep Learning<br>
        • TensorFlow<br>
        • Git<br>
        • SQL
        `;
    }

    // Java Developer
    else if(
        skills.includes("java") &&
        skills.includes("sql")
    ){

        career = "☕ Java Developer";

        reason = `
        ✔ Java knowledge<br>
        ✔ SQL knowledge
        `;

        nextSkills = `
        • Spring Boot<br>
        • Git & GitHub<br>
        • REST APIs<br>
        • DSA
        `;
    }

    // Full Stack Developer
    else if(
        skills.includes("html") &&
        skills.includes("css") &&
        skills.includes("javascript")
    ){

        career = "🌐 Full Stack Developer";

        reason = `
        ✔ HTML knowledge<br>
        ✔ CSS knowledge<br>
        ✔ JavaScript knowledge
        `;

        nextSkills = `
        • React<br>
        • Node.js<br>
        • Database<br>
        • REST APIs
        `;
    }

    // Python Developer
    else if(
        skills.includes("python")
    ){

        career = "🐍 Python Developer";

        reason = `
        ✔ Python programming knowledge
        `;

        nextSkills = `
        • SQL<br>
        • Django / Flask<br>
        • Git & GitHub<br>
        • REST APIs
        `;
    }

    // No matching career
    else{

        career = "🔍 More Information Needed";

        reason = `
        We need more skills to recommend a suitable career.
        `;

        nextSkills = `
        Try entering skills such as:<br>
        Python, Java, SQL, HTML, CSS, JavaScript, Machine Learning
        `;
    }


    // Display Result

    document.getElementById("careerResult").innerHTML = `

        <h2>🎯 Recommended Career</h2>

        <h3>${career}</h3>

        <h3>💡 Why This Career?</h3>

        <p>${reason}</p>

        <h3>📚 Skills to Learn Next</h3>

        <p>${nextSkills}</p>

    `;

}
// ================= RESUME ANALYZER =================

function analyzeResume(){

    let resumeText = document.getElementById("resumeText").value
        .toLowerCase();

    if(resumeText.trim() === ""){

        document.getElementById("resumeResult").innerHTML = `
            <h3>⚠️ Please enter your resume details.</h3>
        `;

        return;
    }


    // Skills to check

    let skills = [
        "python",
        "java",
        "c++",
        "html",
        "css",
        "javascript",
        "sql",
        "machine learning",
        "tensorflow",
        "react",
        "node.js",
        "git"
    ];


    let foundSkills = [];
    let missingSkills = [];


    // Check skills

    for(let skill of skills){

        if(resumeText.includes(skill)){

            foundSkills.push(skill);

        }
        else{

            missingSkills.push(skill);

        }

    }


    // Resume sections

    let sections = [
        "education",
        "skills",
        "projects",
        "certification",
        "experience"
    ];


    let completedSections = 0;


    for(let section of sections){

        if(resumeText.includes(section)){

            completedSections++;

        }

    }


    // Calculate score

    let skillScore = Math.round(
        (foundSkills.length / skills.length) * 60
    );


    let sectionScore = Math.round(
        (completedSections / sections.length) * 40
    );


    let totalScore = skillScore + sectionScore;


    // Suggestions

    let suggestions = [];


    if(!resumeText.includes("projects")){

        suggestions.push("Add a Projects section");

    }


    if(!resumeText.includes("certification")){

        suggestions.push("Add your Certifications");

    }


    if(!resumeText.includes("education")){

        suggestions.push("Add your Education details");

    }


    if(!resumeText.includes("experience")){

        suggestions.push("Add Internship or Experience details");

    }


    if(foundSkills.length < 5){

        suggestions.push("Add more relevant technical skills");

    }


    // Display result

    document.getElementById("resumeResult").innerHTML = `

        <h2>📄 Resume Analysis Report</h2>

        <h3>🎯 Resume Score</h3>

        <p><strong>${totalScore}/100</strong></p>


        <h3>✅ Skills Found</h3>

        <p>
        ${
            foundSkills.length > 0
            ? foundSkills.join(", ")
            : "No technical skills detected"
        }
        </p>


        <h3>❌ Skills You Can Add</h3>

        <p>
        ${
            missingSkills.length > 0
            ? missingSkills.join(", ")
            : "Your listed skills cover all checked skills!"
        }
        </p>


        <h3>💡 Suggestions</h3>

        <p>
        ${
            suggestions.length > 0
            ? suggestions.join("<br>")
            : "Your resume looks well structured!"
        }
        </p>

    `;

}
// ================= LOGOUT =================

function logoutUser(){

    alert("Logged out successfully!");

    window.location.href = "login.html";

}
// ================= ADMIN LOGIN =================

let adminLoginForm = document.getElementById("adminLoginForm");

if(adminLoginForm){

    adminLoginForm.addEventListener("submit", function(event){

        event.preventDefault();

        let username = document.getElementById("adminUsername").value;
        let password = document.getElementById("adminPassword").value;


        if(username === "admin" && password === "admin123"){

            sessionStorage.setItem("adminLoggedIn", "true");

            alert("Admin Login Successful!");

            window.location.href = "admin.html";

        }

        else{

            alert("Invalid Admin Username or Password!");

        }

    });

}
// ================= ADMIN LOGOUT =================

function adminLogout(){

    sessionStorage.removeItem("adminLoggedIn");

    alert("Admin logged out successfully!");

    window.location.href = "admin-login.html";

}
// ================= RESUME ANALYZER =================

function analyzeResume(){

    let role = document.getElementById("resumeRole").value;

    let skills = document.getElementById("resumeSkills").value
        .toLowerCase()
        .split(",")
        .map(skill => skill.trim());

    let requiredSkills = [];

    if(role === "AI Engineer"){

        requiredSkills = [
            "python",
            "machine learning",
            "tensorflow",
            "git",
            "sql"
        ];

    }

    else if(role === "Java Developer"){

        requiredSkills = [
            "java",
            "sql",
            "git",
            "spring boot"
        ];

    }

    else if(role === "Python Developer"){

        requiredSkills = [
            "python",
            "sql",
            "git",
            "django"
        ];

    }

    else if(role === "Full Stack Developer"){

        requiredSkills = [
            "html",
            "css",
            "javascript",
            "react",
            "node.js"
        ];

    }


    let missingSkills = [];

    let matchedSkills = [];


    for(let skill of requiredSkills){

        if(skills.includes(skill)){

            matchedSkills.push(skill);

        }

        else{

            missingSkills.push(skill);

        }

    }


    let readiness = Math.round(
        (matchedSkills.length / requiredSkills.length) * 100
    );
    localStorage.setItem("readiness", readiness);
    localStorage.setItem("completedSkills", matchedSkills.join(", "));
    localStorage.setItem("totalSkills", requiredSkills.length);
    localStorage.setItem("missingSkills", missingSkills.join(", "));
    localStorage.setItem("selectedRole", role);


    let output = `

        <h2>📄 Resume Analysis Result</h2>

        <p>
            <strong>Career Role:</strong> ${role}
        </p>

        <h3>✅ Matched Skills</h3>

        <p>
            ${matchedSkills.length > 0
                ? matchedSkills.join("<br>")
                : "No matching skills found"}
        </p>

        <h3>❌ Missing Skills</h3>

        <p>
            ${missingSkills.length > 0
                ? missingSkills.join("<br>")
                : "No missing skills"}
        </p>

        <h3>🎯 Resume Readiness</h3>

        <p>
            <strong>${readiness}%</strong> Ready
        </p>

    `;


    document.getElementById("resumeResult").innerHTML = output;
    localStorage.setItem("resumeAnalysisCount", Number(localStorage.getItem("resumeAnalysisCount")||0) + 1);

}
// ================= CAREER RECOMMENDATION =================

function recommendCareer(){

    let skills = document.getElementById("careerSkills").value
        .toLowerCase()
        .split(",")
        .map(skill => skill.trim());


    let career = "";
    let reason = "";
    let recommendedSkills = [];


    if(
        skills.includes("python") &&
        (
            skills.includes("machine learning") ||
            skills.includes("tensorflow")
        )
    ){

        career = "AI Engineer";

        reason = "Your Python and AI-related skills match an AI Engineer career.";

        recommendedSkills = [
            "Python",
            "Machine Learning",
            "TensorFlow",
            "SQL",
            "Git"
        ];

    }


    else if(
        skills.includes("java") &&
        skills.includes("sql")
    ){

        career = "Java Developer";

        reason = "Your Java and SQL skills are suitable for Java backend development.";

        recommendedSkills = [
            "Java",
            "OOP",
            "SQL",
            "Spring Boot",
            "Git"
        ];

    }


    else if(
        skills.includes("python") &&
        skills.includes("sql")
    ){

        career = "Python Developer";

        reason = "Your Python and SQL skills are suitable for Python development.";

        recommendedSkills = [
            "Python",
            "SQL",
            "Django",
            "REST API",
            "Git"
        ];

    }


    else if(
        skills.includes("html") &&
        skills.includes("css") &&
        skills.includes("javascript")
    ){

        career = "Full Stack Developer";

        reason = "Your web development skills match a Full Stack Developer career.";

        recommendedSkills = [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Node.js"
        ];

    }


    else{

        career = "Software Developer";

        reason = "Build your programming and database skills to explore software development careers.";

        recommendedSkills = [
            "Programming",
            "OOP",
            "DSA",
            "SQL",
            "Git"
        ];

    }


    let output = `

        <h2>🎯 Recommended Career</h2>

        <h3>${career}</h3>

        <p>
            ${reason}
        </p>

        <h3>📚 Skills to Develop</h3>

        <p>
            ${recommendedSkills.join("<br>")}
        </p>

    `;


    document.getElementById("careerResult").innerHTML = output;
    localStorage.setItem("careerRecommendationCount", Number(localStorage.getItem("careerRecommendationCount")||0) + 1);

}
// ================= DASHBOARD DATA =================

let dashboardReadiness = document.getElementById("dashboardReadiness");

if(dashboardReadiness){

    let readiness = localStorage.getItem("readiness");

    if(readiness !== null){

        dashboardReadiness.innerText = readiness + "% Ready";

    }

}


// Dynamic progress bar

let dashboardProgress = document.getElementById("dashboardProgress");

if(dashboardProgress){

    let readiness = localStorage.getItem("readiness") || 0;

    dashboardProgress.style.width = readiness + "%";

}
// ================= DASHBOARD READINESS =================

document.addEventListener("DOMContentLoaded", function () {

    let readiness = localStorage.getItem("readiness");

    let readinessText = document.getElementById("dashboardReadiness");

    let progressBar = document.getElementById("dashboardProgress");

    if (readiness !== null) {

        if (readinessText) {
            readinessText.innerText = readiness + "% Ready";
        }

        if (progressBar) {
            progressBar.style.width = readiness + "%";
        }

    }

});
// ================= STUDENT PROFILE =================

document.addEventListener("DOMContentLoaded", function () {

    let studentData = JSON.parse(
        localStorage.getItem("studentData")
    );

    if (studentData) {

        document.getElementById("dashboardName").innerText =
            studentData.name;

        document.getElementById("dashboardCollege").innerText =
            studentData.college;

        document.getElementById("dashboardDepartment").innerText =
            studentData.department;

        document.getElementById("dashboardYear").innerText =
            studentData.year;

        document.getElementById("dashboardRole").innerText =
            studentData.dreamRole;

        document.getElementById("dashboardDomain").innerText =
            studentData.domain;

    }

});
// ================= AUTO-FILL SKILLS =================

document.addEventListener("DOMContentLoaded", function () {

    let analysisSkills = document.getElementById("analysisSkills");

    if (analysisSkills) {

        let studentData = JSON.parse(
            localStorage.getItem("studentData")
        );

        if (studentData && studentData.skills) {

            analysisSkills.value = studentData.skills;

        }

    }

});
// ================= AUTO-FILL RESUME ANALYZER =================

document.addEventListener("DOMContentLoaded", function () {

    let resumeRole = document.getElementById("resumeRole");
    let resumeSkills = document.getElementById("resumeSkills");

    if (resumeRole && resumeSkills) {

        let studentData = JSON.parse(
            localStorage.getItem("studentData")
        );

        if (studentData) {

            // Auto-fill skills
            if (studentData.skills) {
                resumeSkills.value = studentData.skills;
            }

            // Auto-select career role
            if (studentData.role) {
                resumeRole.value = studentData.role;
            }

        }

    }

});
// ================= ADMIN STUDENT MANAGEMENT =================

document.addEventListener("DOMContentLoaded", function () {

    let studentTableBody =
        document.getElementById("studentTableBody");

    if (studentTableBody) {

        let studentData = JSON.parse(
            localStorage.getItem("studentData")
        );

        let readiness =
            localStorage.getItem("readiness") || "0";

        if (studentData) {

            studentTableBody.innerHTML = `
                <tr>

                    <td>${studentData.name}</td>

                    <td>Not Provided</td>

                    <td>${studentData.dreamRole}</td>

                    <td>${readiness}%</td>

                    <td>Active</td>

                </tr>
            `;

        } else {

            studentTableBody.innerHTML = `
                <tr>
                    <td colspan="5">
                        No registered students found.
                    </td>
                </tr>
            `;

        }

    }

});
// ================= ADMIN DASHBOARD STATS =================

document.addEventListener("DOMContentLoaded", function () {

    let totalStudents = document.getElementById("totalStudents");

    if (totalStudents) {

        let studentData = localStorage.getItem("studentData");

        if (studentData) {
            totalStudents.innerText = "1";
        } else {
            totalStudents.innerText = "0";
        }

    }

});// ================= ADMIN SKILL ANALYSIS COUNT =================

document.addEventListener("DOMContentLoaded", function () {

    let skillAnalyses = document.getElementById("skillAnalyses");

    if (skillAnalyses) {

        skillAnalyses.innerText =
            localStorage.getItem("skillAnalysisCount") || "0";

    }

});
// ================= ADMIN RESUME COUNT =================

document.addEventListener("DOMContentLoaded", function () {

    let resumesAnalyzed =
        document.getElementById("resumesAnalyzed");

    if (resumesAnalyzed) {

        resumesAnalyzed.innerText =
            localStorage.getItem("resumeAnalysisCount") || "0";

    }

});
// ================= ADMIN CAREER COUNT =================

document.addEventListener("DOMContentLoaded", function () {

    let careerRecommendations =
        document.getElementById("careerRecommendations");

    if (careerRecommendations) {

        careerRecommendations.innerText =
            localStorage.getItem("careerRecommendationCount") || "0";

    }

});
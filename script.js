// Get references to the form and display area
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
// Handle form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var name = document.getElementById('name').value.trim();
    var email = document.getElementById('email').value.trim();
    var phone = document.getElementById('phone').value.trim();
    var education = document.getElementById('education').value.trim();
    var experience = document.getElementById('experience').value.trim();
    var skills = document.getElementById('skills').value.trim();
    // Validate inputs (optional)
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("Please fill in all fields before generating your resume.");
        return;
    }
    // Generate the resume content dynamically
    var resumeHTML = "\n        <h2><b>Resume</b></h2>\n        <div>\n            <h3>Personal Information</h3>\n            <p><b>Name:</b> ".concat(name, "</p>\n            <p><b>Email:</b> ").concat(email, "</p>\n            <p><b>Phone:</b> ").concat(phone, "</p>\n        </div>\n        <div>\n            <h3>Education</h3>\n            <p>").concat(education, "</p>\n        </div>\n        <div>\n            <h3>Experience</h3>\n            <p>").concat(experience, "</p>\n        </div>\n        <div>\n            <h3>Skills</h3>\n            <p>").concat(skills, "</p>\n        </div>\n    ");
    // Display the generated resume with a check for the display element
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        resumeDisplayElement.style.display = "block"; // Ensure visibility if hidden
    }
    else {
        console.error('The resume display element is missing.');
    }
});

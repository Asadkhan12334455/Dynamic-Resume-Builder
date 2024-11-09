// Get references to the form and display area
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;

// Handle form submission
form.addEventListener('submit', (event: Event) => {
    event.preventDefault(); // prevent page reload

    // Collect input values
    const name = (document.getElementById('name') as HTMLInputElement).value.trim();
    const email = (document.getElementById('email') as HTMLInputElement).value.trim();
    const phone = (document.getElementById('phone') as HTMLInputElement).value.trim();
    const education = (document.getElementById('education') as HTMLTextAreaElement).value.trim();
    const experience = (document.getElementById('experience') as HTMLTextAreaElement).value.trim();
    const skills = (document.getElementById('skills') as HTMLTextAreaElement).value.trim();

    // Validate inputs (optional)
    if (!name || !email || !phone || !education || !experience || !skills) {
        alert("Please fill in all fields before generating your resume.");
        return;
    }

    // Generate the resume content dynamically
    const resumeHTML = `
        <h2><b>Resume</b></h2>
        <div>
            <h3>Personal Information</h3>
            <p><b>Name:</b> ${name}</p>
            <p><b>Email:</b> ${email}</p>
            <p><b>Phone:</b> ${phone}</p>
        </div>
        <div>
            <h3>Education</h3>
            <p>${education}</p>
        </div>
        <div>
            <h3>Experience</h3>
            <p>${experience}</p>
        </div>
        <div>
            <h3>Skills</h3>
            <p>${skills}</p>
        </div>
    `;

    // Display the generated resume with a check for the display element
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
        resumeDisplayElement.style.display = "block"; // Ensure visibility if hidden
    } else {
        console.error('The resume display element is missing.');
    }
});

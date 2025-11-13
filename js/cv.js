document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("cvForm");
  const preview = document.getElementById("cvPreview");

  const educationContainer = document.getElementById("educationContainer");
  const experienceContainer = document.getElementById("experienceContainer");
  const addEducationBtn = document.getElementById("addEducation");
  const addExperienceBtn = document.getElementById("addExperience");

  function createEducationField() {
    const div = document.createElement("div");
    div.classList.add("edu-entry");
    div.innerHTML = `
      <input type="text" placeholder="Institution Name" required>
      <input type="text" placeholder="Degree / Program" required>
      <input type="text" placeholder="Date Range (e.g., September 2020 - June 2024)" required>
      <input type="text" placeholder="Location" required>
      <input type="text" placeholder="Additional Info (optional)">
      <hr>
    `;
    educationContainer.appendChild(div);
  }

  function createExperienceField() {
    const div = document.createElement("div");
    div.classList.add("exp-entry");
    div.innerHTML = `
      <input type="text" placeholder="Company Name" required>
      <input type="text" placeholder="Role / Position" required>
      <input type="text" placeholder="Date Range (e.g., 2022 - Present)" required>
      <input type="text" placeholder="Location" required>
      <textarea placeholder="Description / Achievements (optional)" rows="2"></textarea>
      <hr>
    `;
    experienceContainer.appendChild(div);
  }

  addEducationBtn.addEventListener("click", createEducationField);
  addExperienceBtn.addEventListener("click", createExperienceField);

  createEducationField();
  createExperienceField();

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const allRequired = form.querySelectorAll("input[required], textarea[required]");
    for (const field of allRequired) {
      if (!field.value.trim()) {
        alert("Please fill out all required fields before submitting.");
        field.focus();
        return;
      }
    }

    const nameInput = document.getElementById("name");
    if (!/^[A-Za-z\s]+$/.test(nameInput.value)) {
      alert("Name can only contain letters.");
      return;
    }

    const github = document.getElementById("github");
    if (!/^https:\/\/github\.com\/.+/.test(github.value)) {
      alert("GitHub link must start with https://github.com/");
      return;
    }

    const email = document.getElementById("email");
    if (!/^[^\s@]+@[^\s@]+\.[a-z]{2,}$/.test(email.value)) {
      alert("Please enter a valid email address (example@domain.com)");
      return;
    }

    document.getElementById("cvName").textContent = nameInput.value;
    document.getElementById("cvContact").innerHTML = `
      Email: ${email.value} • Phone: ${document.getElementById("phone").value} • 
      <a href="${github.value}" target="_blank">GitHub</a>
    `;

    const eduData = [...educationContainer.querySelectorAll(".edu-entry")].map(div => {
      const inputs = div.querySelectorAll("input");
      const institution = inputs[0].value;
      const degree = inputs[1].value;
      const dates = inputs[2].value;
      const location = inputs[3].value;
      const extra = inputs[4].value;

      return `
        <p>
          <strong>${institution}, ${location}</strong><br>
          ${degree} — ${dates}<br>
          ${extra ? extra : ""}
        </p>
      `;
    }).join("");
    document.getElementById("cvEducation").innerHTML = eduData;

    const expData = [...experienceContainer.querySelectorAll(".exp-entry")].map(div => {
      const inputs = div.querySelectorAll("input");
      const company = inputs[0].value;
      const role = inputs[1].value;
      const dates = inputs[2].value;
      const location = inputs[3].value;
      const desc = div.querySelector("textarea").value;

      return `
        <p>
          <strong>${company}, ${location}</strong><br>
          ${role} — ${dates}<br>
          ${desc ? desc : ""}
        </p>
      `;
    }).join("");
    document.getElementById("cvExperience").innerHTML = expData;

    const skills = document.getElementById("skills");
    const languages = document.getElementById("languages");

    if (!skills.value.trim() || !languages.value.trim()) {
      alert("Please fill out Skills and Languages.");
      return;
    }

    document.getElementById("cvSkills").textContent = skills.value;
    document.getElementById("cvLanguages").textContent = languages.value;

    preview.hidden = false;
    preview.scrollIntoView({ behavior: "smooth" });
  });
});

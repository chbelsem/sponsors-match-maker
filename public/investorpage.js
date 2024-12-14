// Select the investor sign-up form
const investorSignUpForm = document.querySelector("#signupInvestorForm");

// Add an event listener to handle form submission for investor
investorSignUpForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent default form submission (which reloads the page)

  const formData = {
    name: document.getElementById("name").value,
    email: document.getElementById("email").value,
    company: document.getElementById("company").value,
    industry: document.getElementById("industry").value,
    website: document.getElementById("website").value,
    phone: document.getElementById("phone").value,
    location: document.getElementById("location").value,
    password: document.getElementById("password").value,
    funding_required: document.getElementById("funding_required").value,
    description: document.getElementById("description").value,
  };

  fetch("https://localhost:3000/api/creation/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => {
      if (response.status != 200) {
        throw new Error("Network response was not ok " + response.statusText);
      }
      return response.json();
    })
    .then((data) => {
      console.log("Data submitted successfully:", data);
      alert("Your sign-up data has been submitted successfully!");
      //investorSignUpForm.reset();
    })
    .catch((error) => {
      console.error("Error submitting data:", error);
      alert("There was an error submitting your data. Please try again.");
    });
});

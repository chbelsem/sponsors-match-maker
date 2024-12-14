// Select the form element (only once)
const BusinessignUpForm = document.querySelector("#signupBusinessForm");

// Add an event listener to handle form submission
BusinessignUpForm.addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission (which reloads the page)

    // Collect form data from the input fields
    const formData = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        password: document.getElementById("password").value,
        category: document.getElementById("category").value,
        website: document.getElementById("website").value,
        phone: document.getElementById("phone").value,
        funding_required: document.getElementById("funding_required").value,
        description: document.getElementById("description").value,
    };

    // Send the data to the server using fetch
    fetch("https://127.0.0.1/api/signup", {
        method: "POST", // POST request to send data
        headers: {
            "Content-Type": "application/json", // Specify that you're sending JSON data
        },
        body: JSON.stringify(formData), // Convert the form data object to a JSON string
    })
    .then((response) => {
        // Check if the response status is OK (status 200-299)
        if (!response.ok) {
            throw new Error("Network response was not ok " + response.statusText);
        }
        return response.json(); // Parse the JSON response from the server
    })
    .then((data) => {
        console.log("Data submitted successfully:", data);
        alert("Your sign-up data has been submitted successfully!");
        BusinessignUpForm.reset(); // Reset the form after successful submission
    })
    .catch((error) => {
        console.error("Error submitting data:", error);
        alert("There was an error submitting your data. Please try again.");
    });
});

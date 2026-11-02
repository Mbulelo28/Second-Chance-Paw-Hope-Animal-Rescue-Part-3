
const rescueButton = document.getElementById("rescueButton");

const rescueMessage = document.getElementById("rescueMessage");

if (rescueButton && rescueMessage) {

    rescueButton.addEventListener("click", function() {

        if (rescueMessage.hidden === true) {
            // Display the message
            rescueMessage.hidden = false;

            // Change the button text
            rescueButton.textContent = "Hide Message";
        } else {
            // Hide the message
            rescueMessage.hidden = true;

            rescueButton.textContent = "Why Animal Rescue Matters";
        }
    });
}

// ABOUT US PAGE - INTERACTIVE BUTTON

const aboutButton = document.getElementById("aboutButton");

const aboutMessage = document.getElementById("aboutMessage");


if (aboutButton && aboutMessage) {


    aboutButton.addEventListener("click", function() {

        // Check if the message is hidden

        if (aboutMessage.hidden === true) {

            // Display the message

            aboutMessage.hidden = false;

            // Change the button text

            aboutButton.textContent = "Hide Message";

        } else {

            // Hide the message

            aboutMessage.hidden = true;

            // Restore the original button text

            aboutButton.textContent = "Learn More About Our Values";

        }

    });

}

// ADOPTION PAGE - PET SEARCH

// Get the search input

const petSearchInput = document.getElementById("petSearchInput");

// Get all pet cards

const petCards = document.querySelectorAll(".pet-card");

// Get the message displayed when no pets match

const noPetsMessage = document.getElementById("noPetsMessage");


// Check if the elements exist on the current page

if (petSearchInput && noPetsMessage && petCards.length > 0) {

    // Listen for typing in the search field

    petSearchInput.addEventListener("input", function() {

        // Get the search value and convert it to lowercase

        const searchValue = petSearchInput.value.toLowerCase();

        // Keep track of matching pets

        let matchingPets = 0;

        // Check each pet card

        petCards.forEach(function(card) {

            // Get all the text inside the pet card

            const petInformation = card.textContent.toLowerCase();

            // Check if the pet information matches the search

            if (petInformation.includes(searchValue)) {

                card.style.display = "";

                matchingPets++;

            } else {

                card.style.display = "none";

            }

        });

        // Display a message if no pets match

        if (matchingPets === 0) {

            noPetsMessage.hidden = false;

        } else {

            noPetsMessage.hidden = true;

        }

    });

}

// VOLUNTEER PAGE - APPLICATION FORM

const volunteerForm = document.getElementById("volunteerForm");
const volunteerFeedback = document.getElementById("volunteerFeedback");
console.log(volunteerForm);
console.log(volunteerFeedback);
if (volunteerForm && volunteerFeedback) {

    volunteerForm.addEventListener("submit", function(event) {

        event.preventDefault();

        if (volunteerForm.checkValidity()) {

            volunteerFeedback.textContent =
                "Thank you for your interest! Your volunteer application has been completed.";

            volunteerFeedback.hidden = false;

            volunteerForm.reset();

        } else {

            volunteerForm.reportValidity();

        }

    });

}


// DONATE PAGE - DONATION FORM

// Get the donation form and feedback message

const donationForm = document.getElementById("donationForm");

const donationFeedback = document.getElementById("donationFeedback");


// Check if the elements exist

if (donationForm && donationFeedback) {

    // Add submit event to the donation form

    donationForm.addEventListener("submit", function(event) {

        // Prevent the page from reloading

        event.preventDefault();

        // Get the donation amount

        const donationAmount = document.getElementById("amount").value;

        // Check that the amount is greater than zero

        if (Number(donationAmount) > 0) {

            donationFeedback.textContent =
                "Thank you for supporting Second Chance Paw & Hope Animal Rescue! Your donation details have been recorded.";

            donationFeedback.hidden = false;

            donationForm.reset();

        } else {

            donationFeedback.textContent =
                "Please enter a valid donation amount.";

            donationFeedback.hidden = false;

        }

    });

}

// CONTACT PAGE - CONTACT FORM

// Gets the contact form and feedback message

const contactForm = document.getElementById("contactForm");

const contactFeedback = document.getElementById("contactFeedback");


// Checks if the elements exist

if (contactForm && contactFeedback) {

    // Add submit event to the contact form

    contactForm.addEventListener("submit", function(event) {

        // Prevent the page from reloading
        event.preventDefault();
        // Display confirmation message
        contactFeedback.textContent =
            "Thank you for contacting Second Chance Paw & Hope Animal Rescue! Your message has been recorded.";
        contactFeedback.hidden = false;
        // Clear the form
        contactForm.reset();

    });

}


/*  PET PHOTO LIGHTBOX*/

// Find all pet profile images
const petImages = document.querySelectorAll(".pet-profile-image");

// Create the lightbox
const lightbox = document.createElement("div");
lightbox.className = "lightbox";
lightbox.setAttribute("role", "dialog");
lightbox.setAttribute("aria-modal", "true");
lightbox.setAttribute("aria-label", "Enlarged pet photo");

// Create enlarged image
const enlargedImage = document.createElement("img");

// Create close button
const closeButton = document.createElement("button");
closeButton.className = "lightbox-close";
closeButton.textContent = "×";
closeButton.setAttribute("aria-label", "Close enlarged photo");

// Added elements to lightbox
lightbox.appendChild(enlargedImage);
lightbox.appendChild(closeButton);

// Added lightbox to the page
document.body.appendChild(lightbox);

// Function to open the lightbox
function openLightbox(image) {
    enlargedImage.src = image.src;
    enlargedImage.alt = image.alt;

    lightbox.style.display = "flex";
    closeButton.focus();
}

// Function to close the lightbox
function closeLightbox() {
    lightbox.style.display = "none";
}

// Added click and keyboard events to pet images
petImages.forEach(function(image) {

    image.addEventListener("click", function() {
        openLightbox(image);
    });

    image.addEventListener("keydown", function(event) {
        if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            openLightbox(image);
        }
    });

});

// Close using the close button
closeButton.addEventListener("click", closeLightbox);

// Close when clicking the dark background
lightbox.addEventListener("click", function(event) {
    if (event.target === lightbox) {
        closeLightbox();
    }
});

// Close using the Escape key
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeLightbox();
    }
});



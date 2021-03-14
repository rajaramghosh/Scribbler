/* Get Reference of Sign Up and Sign In Modals */
var signUpModal = document.getElementById("signUpModal");
var signInModal = document.getElementById("signInModal");

/* Get Reference of the Sign Up Button, Sign In Button and Sign Up Hyperlink to open the Modals */
var signUpBtn = document.getElementById("signUpBtn");
var signInBtn = document.getElementById("signInBtn");
var signUpLink = document.getElementById("signUpLink");

/* Get Reference of the Close Icons to Close the Modals */
var closeSignUp = document.getElementById("closeSignUp");
var closeSignIn = document.getElementById("closeSignIn");

/* Open the Modal */
openModal = (modal) => {
    modal.style.display = "block";
};

/* Close the Modal */
closeModal = (modal) => {
    modal.style.display = "none";
};

/* Sign Up and Sign In Button Event Handler */
signInBtn.addEventListener("click", () => openModal(signInModal));
signUpBtn.addEventListener("click", () => openModal(signUpModal));

/* Close Icon Event Handler */
closeSignUp.addEventListener("click", () => closeModal(signUpModal));
closeSignIn.addEventListener("click", () => closeModal(signInModal));

/* Handle Sign Up Hyperlink in Sign In Modal */
signUpLink.onclick = function () {
    closeModal(signInModal);
    openModal(signUpModal);
};

/* Close the Modal if clicked outside of it */
window.addEventListener("click", function (event) {
    if (event.target == signUpModal) {
        signUpModal.style.display = "none";
    }
    if (event.target == signInModal) {
        signInModal.style.display = "none";
    }
});


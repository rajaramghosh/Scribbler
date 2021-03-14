/* Get Reference of Post Modal */
var createPostModal = document.getElementById("createPostModal");

/* Get Reference of the Create Post Button to open the Modal */
var createPostBtn = document.getElementById("createPostBtn");

/* Get Reference of the Close Icons to Close the Post Modal */
var closeCreatePost = document.getElementById("closeCreatePost");

/* Open the Modal */
openModal = (modal) => {
    modal.style.display = "block";
};

/* Close the Modal */
closeModal = (modal) => {
    modal.style.display = "none";
};

/* Create Post Button and Close Icon Event Handler */
createPostBtn.addEventListener("click", () => openModal(createPostModal));
closeCreatePost.addEventListener("click", () => closeModal(createPostModal));

/* Close the Modal if clicked outside of it */
window.addEventListener("click", function (event) {
    if (event.target == createPostModal) {
        createPostModal.style.display = "none";
    }
});

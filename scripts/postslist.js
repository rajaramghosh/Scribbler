/* Get Reference of Delecte Icon */
var deletePostModal = document.getElementById("deletePostModal");
var cancelDelete = document.getElementById("cancelDelete");
var confirmDelete = document.getElementById("confirmDelete");

var deleteIcons = document.querySelectorAll(".delete-icon");
var deleteIconsArray = Array.from(deleteIcons);

/* Get Reference of Dot Icon */
var dots = document.querySelectorAll(".dots");
var dotsArray = Array.from(dots);

/* Open Delete Post Modal */
openDeletePostModal = (deletePostModal, clickedIcon) => {
  selectedPost = "";
  openModal(deletePostModal);
  selectedPost = clickedIcon.closest(".post");
};

/* Delete Post */
deletePost = () => {
  selectedPost.remove();
  closeModal(deletePostModal);
};

/* Update Session Storage to view the clicked post */
navigateToPost = postThread => {
  var post = postThread.closest(".post");
  var author = post.querySelector(".username p").textContent.trim();
  var postTitle = post.querySelector(".title p").textContent.trim();
  var postContent = post.querySelector(".content").textContent.trim();
  sessionStorage.setItem("author", author);
  sessionStorage.setItem("postTitle", postTitle);
  sessionStorage.setItem("postContent", postContent);
  window.location.href = "../html/post.html";
};

/* Event Handler for Delete Icon */
deleteIconsArray.map(deleteIcon => {
  deleteIcon.addEventListener("click", e =>
    openDeletePostModal(deletePostModal, e.target)
  );
});

/* Event Handler for Post Modal */
window.addEventListener("click", function (event) {
  if (event.target == deletePostModal) {
    deletePostModal.style.display = "none";
  }
});

/* Event Handler to navigate to a Post */
dotsArray.map(dot => {
  dot.addEventListener("click", e => navigateToPost(e.target));
});

cancelDelete.addEventListener("click", () => closeModal(deletePostModal));
confirmDelete.addEventListener("click", () => deletePost());

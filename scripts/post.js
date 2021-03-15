/* Get Reference of Post Details */
var authorNode = document.getElementById("author");
var titleNode = document.getElementById("postTitle");
var contentNode = document.getElementById("postContent");

/* Keep count of the like! */
var likeCounter = 0;

/* Fetch details of the Post whcih is clicked by the User */
window.onload = function () {
  authorNode.innerHTML = sessionStorage.getItem("author");
  titleNode.innerHTML = sessionStorage.getItem("postTitle");
  contentNode.innerHTML = sessionStorage.getItem("postContent");
};

/* Add Event Handler for Edit, Save, Like and Comment Button */
document.addEventListener(
  "click",
  function (e) {
    if (hasClass(e.target, "saved")) {
      e.target.classList.remove("saved");
      e.target.classList.add("unsaved");
      e.target.innerHTML = 'Save <i class="fa fa-save"></i>';
      titleNode.setAttribute("contenteditable", true);
      titleNode.classList.add("editable");
      contentNode.setAttribute("contenteditable", true);
      contentNode.classList.add("editable");
    } else if (hasClass(e.target, "unsaved")) {
      e.target.classList.remove("unsaved");
      e.target.classList.add("saved");
      e.target.innerHTML = 'Edit <i class="fa fa-edit"></i>';
      titleNode.setAttribute("contenteditable", false);
      titleNode.classList.remove("editable");
      contentNode.setAttribute("contenteditable", false);
      contentNode.classList.remove("editable");
      sessionStorage.setItem("postTitle", titleNode.innerText);
      sessionStorage.setItem("postContent", contentNode.innerText);
    } else if (hasClass(e.target, "like-button")) {
      likeCounter++;
      e.target.innerHTML = '<i class="fa fa-thumbs-up"></i> Liked';
      if (likeCounter == 1) {
        document.getElementById("likeText").innerHTML = "1 person likes this!";
      } else if (likeCounter > 1) {
        document.getElementById("likeText").innerHTML = likeCounter + " people like this!";
      }
    } else if (hasClass(e.target, "comment-button")) {
      var commentText = document.getElementById("commentBox").value.trim();
      if (commentText !== "") {
        document.getElementById("commentsWrapper").innerHTML = "<p>" + commentText + "</p>" +
          document.getElementById("commentsWrapper").innerHTML;
      }
      document.getElementById("commentBox").value = "";
    }
  },
  false
);

function hasClass(elem, className) {
  return elem.classList.contains(className);
}

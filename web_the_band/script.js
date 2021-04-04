const btnMore = document.querySelector(".btn-more");
const subNav = document.querySelector("#sub_nav");
let show = false;

// Toggle subNav function
btnMore.addEventListener("click", function () {
  subNav.style.display = show ? "none" : "block";
  show = !show;
  document.querySelector(".btn-more-content").classList.toggle("text-white");
  document
    .querySelector(".btn-more-content")
    .classList.toggle("sub_nav-active");
});
// End toggle subNav

// Indicator
const marker = document.querySelector("#marker");
const navBtn = document.querySelectorAll(".nav-btn");
const btn = document.querySelectorAll(".btn-nav");
marker.style.width = navBtn[0].offsetWidth + "px";
marker.style.left = navBtn[0].offsetLeft + "px";
btn[0].classList.add("text-white");

function indicator(e) {
  marker.style.width = e.offsetWidth + "px";
  marker.style.left = e.offsetLeft + "px";
}

navBtn.forEach((link) => {
  link.addEventListener("click", (e) => {
    // for (let i = 0; i < navBtn.length; i++) {
    //   btn[i].classList.remove("text-white");
    // }
    btn.forEach((el) => {
      el.classList.remove("text-white");
    });
    indicator(e.target);
    e.target.classList.add("text-white");
  });
});
// End Indicator

// Collapse member-info
const memberItems = document.querySelectorAll(".member-items");
memberItems.forEach((el) => {
  el.classList.add("collapsed");
});
memberItems.forEach((link) => {
  link.addEventListener("click", function () {
    link.classList.toggle("collapsed");
  });
});

// Active blog button
const blogButton = document.querySelectorAll(".blog-button");
const blogContent = document.querySelectorAll(".blog-content");

function showContent(cont) {
  blogContent.forEach((el) => {
    el.classList.remove("show");
  });
  cont.classList.add("show");
}

blogButton.forEach((el, i) => {
  el.addEventListener("click", function (e) {
    blogButton.forEach((el) => {
      el.classList.remove("active-blog-button");
    });
    el.classList.add("active-blog-button");
    showContent(blogContent[i]);
  });
});

// Set underline blog width
const underline = document.querySelector(".underline");
const cover = document.querySelector(".cover");
const blog = document.querySelector(".blog");
underline.style.width = blog.offsetWidth - cover.offsetWidth + "px";

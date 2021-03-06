const btn = document.querySelector(".btn");
const modal = document.querySelector(".modal");
const close = document.querySelector(".m-close");
const keep = document.querySelector("#keep");
const discard = document.querySelector("#discard");
const alertbtn = document.querySelector(".c-alert");
const alert = document.querySelector(".alert");

btn.addEventListener("click", function () {
  //   modal.style.opacity = 1;
  //   modal.style.visibility = "visible";
  //   modal.style.transform = "translateY(0px)";
  //   modal.style.transition = ".5s";

  modal.classList.add("active");
});

close.addEventListener("click", function () {
  //   modal.style.opacity = 0;
  //   modal.style.visibility = "hidden";
  //   modal.style.transform = "translateY(-100px)";
  //   modal.style.transition = ".5s";
  alert.style.display = "flex";
  // modal.classList.remove("active");
});
keep.addEventListener("click", function () {
  alert.style.display = "none";
});
alertbtn.addEventListener("click", function () {
  alert.style.display = "none";
});
discard.addEventListener("click", function () {
  alert.style.display = "none";
  modal.classList.remove("active");
});
modal.addEventListener("click", function (e) {
  if (e.target == this) {
    this.classList.remove("active");
  }
});
// accordion

// const accordionH = document.querySelectorAll(".accordion-header");

// accordionH.forEach((item) => {
//   item.addEventListener("click", function () {
//     accordionH.forEach((data) => {
//       if (data !== this) {
//         data.classList.remove("active");
//         data.nextElementSibling.style.height = "0px";
//       }
//     });
//     item.classList.toggle("active");
//     if (item.classList.contains("active")) {
//       item.nextElementSibling.style.height =
//         item.nextElementSibling.scrollHeight + "px";
//     } else {
//       item.nextElementSibling.style.height = "0px";
//     }
//   });
// });
const accordionH = document.querySelectorAll(".accordion-header");

accordionH.forEach((data) => {
  data.addEventListener("click", function (e) {
    e.preventDefault();
    accordionH.forEach((data) => {
      if (data !== this) {
        data.classList.remove("active");
        data.nextElementSibling.style.height = "0px";
      }
    });

    data.classList.toggle("active");
    if (data.classList.contains("active")) {
      data.nextElementSibling.style.height =
        data.nextElementSibling.scrollHeight + "px";
    } else {
      data.nextElementSibling.style.height = "0px";
    }
  });
});

// tab

// const tabePane = document.querySelectorAll(".tab-header ul li a");
// const tabe = document.querySelectorAll(".tab .tab-pane");

// tabePane.forEach((data) => {
//   data.addEventListener("click", function (e) {
//     e.preventDefault();
//     tabePane.forEach((item) => {
//       item.classList.remove("active");
//     });
//     data.classList.add("active");
//     let att = document.querySelector(this.getAttribute("href"));
//     tabe.forEach((data) => {
//       data.classList.remove("active");
//     });
//     att.classList.add("active");
//   });
// });

const tab_menu = document.querySelectorAll(".tab-header ul li a");
const tab_pane = document.querySelectorAll(".tab-body .tab-pane");

tab_menu.forEach((data) => {
  data.addEventListener("click", function (e) {
    e.preventDefault();
    tab_menu.forEach((data) => {
      data.classList.remove("active");
    });
    data.classList.add("active");
    let att = document.querySelector(this.getAttribute("href"));
    tab_pane.forEach((data) => {
      data.classList.remove("active");
    });
    att.classList.add("active");
  });
});

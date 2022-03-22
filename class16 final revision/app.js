const accordion_header = document.querySelectorAll(".accordion-header");
const paneAll = document.querySelectorAll(".pane");

accordion_header.forEach((item) => {
  item.addEventListener("click", function () {
    accordion_header.forEach((r) => {
      if (r != this) {
        r.classList.remove("active");
        r.nextElementSibling.style.height = "0px";
      }
    });
    this.classList.toggle("active");
    if (item.classList.contains("active")) {
      item.nextElementSibling.style.height =
        item.nextElementSibling.scrollHeight + "px";
    } else {
      item.nextElementSibling.style.height = "0px";
    }
  });
});

// tab app
const tab_header = document.querySelectorAll(".tab-header ul li a");

tab_header.forEach((data) => {
  data.addEventListener("click", function (e) {
    e.preventDefault();
    tab_header.forEach((item) => {
      if (item == this) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
    const pane = document.querySelector(this.getAttribute("href"));
    paneAll.forEach((item) => {
      item.classList.remove("active");
    });
    pane.classList.add("active");
  });
});

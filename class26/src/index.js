import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";

import axios from "axios";
import posts from "./components/Post";
import Alert from "./components/Alert";

// dom loading operation
document.addEventListener("DOMContentLoaded", getpost);

// GET POST
function getpost() {
  axios.get("http://localhost:5050/post").then((res) => {
    posts.showposts(res.data);
  });
}

// creat post from
document.getElementById("createPostForm").addEventListener("submit", creatform);
const msg = document.querySelector(".msg");

// creat post from
function creatform(e) {
  e.preventDefault();
  let formdata = new FormData(e.target);
  let data = Object.fromEntries(formdata.entries());
  if (data.name == "" || data.uimage == "" || data.content == "") {
    msg.innerHTML = Alert.danger("All Field are required!");
  } else {
    axios
      .post("http://localhost:5050/post", {
        name: data.name,
        user_photo: data.uimage,
        content: data.content,
        photo: data.image,
      })
      .then((res) => {
        getpost();
        msg.innerHTML = Alert.success("Post upload Success");
      });
  }
}

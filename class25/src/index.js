import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "boxicons/css/boxicons.min.css";
import "./main.scss";
import sajjad from "./sajjadhossain.png";
import axios from "axios";
import Teacher from "./components/Teacher";
import Student from "./components/Student";
getProducts();
function getProducts() {
  const showData = document.querySelector(".showdata");
  let alldata = "";
  axios.get("http://localhost:5050/products").then((res) => {
    res.data.map((data) => {
      const { name, price, photo } = data;
      alldata += `
         <div class="col-md-3">
          <div class="card shadow ">
            <img style="height: 250px; object-fit: cover;"
              class="card-img"
              src="${photo}"
              alt=""
            />
            <div class="card-body">
              <h3>${name}</h3>
              <span>Price : ${price} taka</span>
            </div>
          </div>
          </div>
      `;
    });
    showData.innerHTML = alldata;
  });
}

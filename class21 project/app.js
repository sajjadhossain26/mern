import Alert from "./src/Alert.js";
import Storage from "./src/Storage.js";

const dev_add_form = document.querySelector("#dev_add_form");
const show_data = document.querySelector(".show_data");

dev_add_form.addEventListener("submit", function (e) {
  e.preventDefault();
  const msg = document.querySelector(".msg");

  let form_data = new FormData(e.target);
  let data = Object.fromEntries(form_data.entries());
  const { name, email, cell, photo } = data;
  if (name == "" || email == "" || cell == "") {
    msg.innerHTML = Alert.danger("All field are required!");
  } else {
    Storage.set("staff", data);
    dev_add_form.reset();
    getstaff_data();
  }
});
getstaff_data();
function getstaff_data() {
  let get_staff = Storage.get("staff");
  let st_all = "";
  get_staff.map((data, index) => {
    let { name, email, photo, cell } = data;
    st_all += `
    
     <tr>
                  <td>${index + 1}</td>
                  <td>${name}</td>
                  <td>${email}</td>
                  <td>${cell}</td>
                  <td><img style="width:50px;height: 50px; object-fit: cover;" src="${
                    photo
                      ? photo
                      : "https://www.w3schools.com/howto/img_avatar.png"
                  }" alt=""></td>
                  <td>
                    <button class="btn btn-info btn-sm">
                      <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn btn-primary btn-sm">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-danger btn-sm">
                      <i class="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
    
    `;
  });
  show_data.innerHTML = st_all;
}

const developer_form = document.querySelector("#developer_form");
const showdata = document.querySelector(".show_single_data");
const skills = document.querySelector(".skills");
const view = document.querySelector(".view");
const edit = document.querySelector(".edit");
const delete_btn = document.querySelector(".delete");
const data_add = document.querySelector(".data-add");

const loadskill = () => {
  fetch("https://my-json-server.typicode.com/sajjadhossain26/mern/skill")
    .then((data) => data.json())
    .then((data) => {
      let skill_list = "";
      data.map((skill) => {
        skill_list += `
           <option value="${skill.name}">${skill.name}</option>
        `;
      });
      skills.insertAdjacentHTML("beforeend", skill_list);
    });
};
loadskill();
// add table data
getdevelopers();

function getdevelopers() {
  axios
    .get("https://my-json-server.typicode.com/sajjadhossain26/mern/devs")
    .then((res) => {
      let single_table_data = "";
      res.data.map((d, index) => {
        single_table_data += `
         <tr>
                  <td>${index + 1}</td>
                  <td>${d.name}</td>
                  <td>${d.email}</td>
                  <td>${d.skillId}</td>
                  <td>
                    <img style="width:50px; height:50px;object-fit:cover;" src="${
                      d.photo
                    }" alt="" />
                  </td>
                  <td>
                    <button
                      class="btn btn-primary btn-sm view"
                      data-bs-toggle="modal"
                      href="#viewmodal"
                    >
                      <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn btn-info btn-sm edit">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-danger btn-sm delete delete(${index})">
                      <i class="fas fa-trash"></i>
                    </button>
                  </td>
                </tr>
      `;
      });
      showdata.innerHTML = single_table_data;
    });
}

developer_form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.querySelector("input[placeholder='Name']");
  let email = document.querySelector("input[placeholder='Email']");
  let photo = document.querySelector("input[placeholder='Photo']");
  let skill = document.querySelector(".skills");
  if (
    name.value == "" ||
    email.value == "" ||
    photo.value == "" ||
    skill.value == ""
  ) {
    alert("All field are Required!");
  } else {
    axios
      .post("https://my-json-server.typicode.com/sajjadhossain26/mern/devs", {
        id: "",
        name: name.value,
        email: email.value,
        photo: photo.value,
        skillId: skill.value,
      })
      .then((res) => {
        name.value == "";
        email.value == "";
        photo.value == "";
        skillId.value == "";
        getdevelopers();
      });
  }
});

// devs_add_form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let name = this.querySelector("#name");
//   let email = this.querySelector("#email");
//   let photo = this.querySelector("#photo");
//   let skill = this.querySelector("#skill_list");

//   if (name.value == "") {
//     alert("All fields are required !");
//   } else {
//     axios
//       .post("https://my-json-server.typicode.com/sajjadhossain26/mern/devs", {
//         id: "",
//         name: name.value,
//         email: email.value,
//         photo: photo.value,
//         skillId: skill.value,
//       })
//       .then((res) => {
//         name.value = "";
//         email.value = "";
//         photo.value = "";
//         skill.value = "";

//         getDevelopers();
//       });
//   }
// });

// get elements
// const skills = document.querySelector("#skill_list");
// const devs_add_form = document.querySelector("#devs_add_form");
// const devs_edit_form = document.querySelector("#devs_edit_form");
// const devs_data_list = document.querySelector("#devs_data_list");
// const devs_edit_btns = document.querySelectorAll(".devs_edit_btn");

// console.log(skills);

// // load all skills form api
// const loadSkills = () => {
//   axios.get("http://localhost:2020/skill").then((skill) => {
//     let skill_list = "";
//     skill.data.map((skill) => {
//       skill_list += `
//                 <option value="${skill.id}">${skill.name}</option>
//             `;
//     });
//     skills.insertAdjacentHTML("beforeend", skill_list);
//   });
// };
// loadSkills();

// /**
//  * All devs Load
//  */
// getDevelopers();
// function getDevelopers() {
//   axios.get("http://localhost:2020/developers").then((res) => {
//     let dev_data = "";
//     res.data.map((dev, index) => {
//       dev_data += `
//             <tr>
//                 <td>${index + 1}</td>
//                 <td>${dev.name}</td>
//                 <td>${dev.email}</td>
//                 <td><img style="object-fit:cover; width:50px;height:50px;" src="${
//                   dev.photo
//                 }" alt=""></td>
//                 <td>
//                     <a data-bs-toggle="modal" class="btn btn-info btn-sm" href="#modal_view"><i class="fa fa-eye"></i></a>
//                     <a data-bs-toggle="modal" class="btn btn-warning btn-sm" onclick="editDeveloper(${
//                       dev.id
//                     })"  href="#modal_edit"><i class="fa fa-edit"></i></a>
//                     <a data-bs-toggle="modal" class="btn btn-danger btn-sm" href="#modal_delete"><i class="fa fa-trash"></i></a>
//                 </td>
//             </tr>
//             `;
//     });

//     devs_data_list.innerHTML = dev_data;
//   });
// }

// /**
//  * Add new devs
//  */
// devs_add_form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let name = this.querySelector("#name");
//   let email = this.querySelector("#email");
//   let photo = this.querySelector("#photo");
//   let skill = this.querySelector("#skill_list");

//   if (name.value == "" || email.value == "" || skill.value == "") {
//     alert("All fields are required !");
//   } else {
//     axios
//       .post("http://localhost:2020/developers", {
//         id: "",
//         name: name.value,
//         email: email.value,
//         photo: photo.value,
//         skillId: skill.value,
//       })
//       .then((res) => {
//         name.value = "";
//         email.value = "";
//         photo.value = "";
//         skill.value = "";

//         getDevelopers();
//       });
//   }
// });

// /**
//  * Develoeprs Data Edit
//  */
// function editDeveloper(id) {
//   let name = document.getElementById("ename");
//   let email = document.getElementById("eemail");
//   let photo = document.getElementById("ephoto");
//   let skill = document.getElementById("eskill_list");
//   let preview = document.getElementById("epreview");
//   let edit_id = document.getElementById("edit_id");

//   axios.get(`http://localhost:2020/developers/${id}`).then((res) => {
//     name.value = res.data.name;
//     email.value = res.data.email;
//     photo.value = res.data.photo;
//     skill.value = res.data.skillId;
//     edit_id.value = id;
//     preview.setAttribute("src", res.data.photo);
//   });
// }

// devs_edit_form.addEventListener("submit", function (e) {
//   e.preventDefault();

//   let name = this.querySelector("#ename");
//   let email = this.querySelector("#eemail");
//   let photo = this.querySelector("#ephoto");
//   let skill = this.querySelector("#eskill_list");
//   let edit_id = this.querySelector("#edit_id");

//   axios
//     .patch(`http://localhost:2020/developers/${edit_id.value}`, {
//       id: "",
//       name: name.value,
//       email: email.value,
//       photo: photo.value,
//       skillId: skill.value,
//     })
//     .then((res) => {
//       name.value = "";
//       email.value = "";
//       photo.value = "";
//       skill.value = "";

//       getDevelopers();
//     });
// });

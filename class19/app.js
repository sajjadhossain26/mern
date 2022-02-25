const developer_form = document.querySelector("#developer_form");
const showdata = document.querySelector(".show_single_data");
const skills = document.querySelector(".skills");
const view = document.querySelector(".view");
const edit = document.querySelector(".edit");
const delete_btn = document.querySelector(".delete");
const data_add = document.querySelector(".data-add");
const developer_edit_form = document.querySelector("#developer_edit_form");

const loadskill = () => {
  fetch("http://localhost:2020/skill")
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
  axios.get("http://localhost:2020/developers").then((res) => {
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
                      data-bs-toggle="modal" onclick="view_data(${d.id})"
                      href="#viewmodal"
                    >
                      <i class="fas fa-eye"></i>
                    </button>
                    <button class="btn btn-info btn-sm edit" data-bs-toggle="modal" href="#editmodal" onclick="edit_dev(${
                      d.id
                    })">
                      <i class="fas fa-edit"></i>
                    </button>
                    <button class="btn btn-danger btn-sm delete" data-bs-toggle="modal" href="#deletemodal" onclick="datadelete(${
                      d.id
                    })">
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
      .post("http://localhost:2020/developers", {
        id: "",
        name: name.value,
        email: email.value,
        photo: photo.value,
        skillId: skill.value,
      })
      .then((res) => {
        name.value = "";
        email.value = "";
        photo.value = "";

        getdevelopers();
      });
  }
});
// view developer data

function view_data(id) {
  const viewdata = document.querySelector(".viewdata");

  axios.get(`http://localhost:2020/developers/${id}`).then((res) => {
    viewdata.innerHTML = `
   <img src="${res.data.photo}" alt="">
            <h5>${res.data.name}</h5>
            <h5>${res.data.skillId}</h5>
            <h5>${res.data.email}</h5>
  `;
  });
}
// edit developer form

function edit_dev(id) {
  let name = document.querySelector("input[placeholder='eName']");
  let email = document.querySelector("input[placeholder='eEmail']");
  let photo = document.querySelector("input[placeholder='ePhoto']");
  let editId = document.querySelector("input[placeholder='editId']");
  let skill = document.querySelector(".eskills");
  let preview = document.querySelector(".epreview");
  axios.get(`http://localhost:2020/developers/${id}`).then((res) => {
    name.value = res.data.name;
    email.value = res.data.email;
    photo.value = res.data.photo;
    skill.value = res.data.skillId;
    editId.value = res.data.id;
    preview.setAttribute("src", res.data.photo);
  });
}
developer_edit_form.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.querySelector("input[placeholder='eName']");
  let email = document.querySelector("input[placeholder='eEmail']");
  let photo = document.querySelector("input[placeholder='ePhoto']");
  let editId = document.querySelector("input[placeholder='editId']");
  let skill = document.querySelector(".eskills");
  let preview = document.querySelector(".epreview");

  axios
    .patch(`http://localhost:2020/developers/${editId.value}`, {
      id: "",
      name: name.value,
      email: email.value,
      photo: photo.value,
      skillId: skill.value,
    })
    .then((res) => {
      name.value = "";
      email.value = "";
      photo.value = "";
      skill.value = "";
      getdevelopers();
    });
});

// delete data
let d_data = document.querySelector(".m-delete");

function datadelete(id) {
  d_data.setAttribute("delid", id);
}
d_data.addEventListener("click", function () {
  let d_id = this.getAttribute("delid");
  axios.delete(`http://localhost:2020/developers/${d_id}`).then((res) => {
    getdevelopers();
  });
});

const add_devs = document.querySelector("#add_devs");
let skill = document.querySelector(".skill");
const devtable = document.querySelector(".devtable");
const edit = document.querySelector("#edit");

const loadskill = () => {
  axios.get("http://localhost:2020/skill").then((data) => {
    let skill_list = "";
    data.data.map((item) => {
      skill_list += `
                <option class="form-control" value="${item.id}">${item.name}</option>
      `;
    });
    skill.insertAdjacentHTML("beforeend", skill_list);
  });
};
loadskill();

// developer table
add_devs.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.querySelector(".name");
  let email = document.querySelector(".email");
  let skill = document.querySelector(".skill");
  let photo = document.querySelector(".photo");

  if (
    name.value == "" ||
    email.value == "" ||
    skill.value == "" ||
    photo.value == ""
  ) {
    alert("All field are required");
  } else {
    axios
      .post("http://localhost:2020/developers", {
        id: "",
        name: name.value,
        email: email.value,
        skillId: skill.value,
        photo: photo.value,
      })
      .then((res) => {
        (name.value = ""),
          (email.value = ""),
          (skill.value = ""),
          (photo.value = ""),
          get_developers();
      });
  }
});

// get data from json
get_developers();
function get_developers() {
  axios.get("http://localhost:2020/developers").then((res) => {
    let single_data = "";
    res.data.map((single, index) => {
      single_data += `
        <tr>
                <td>${index + 1}</td>
                <td>${single.name}</td>
                <td>${single.email}</td>
                <td>${single.skillId}</td>
                <td>
                  <img
                    style="width: 50px; height: 50px; object-fit: cover"
                    src="${single.photo}"
                    alt=""
                  />
                </td>
                
                <td>
                  <button class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#modalEdit" onclick=editId(${
                    single.id
                  })>
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalView" onclick="viewId(${
                    single.id
                  })">
                    <i class="fas fa-eye"></i>
                  </button>
                  <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#modalDelete" onclick="delete_data(${
                    single.id
                  })">
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
      
      `;
    });
    devtable.innerHTML = single_data;
  });
}

function editId(id) {
  let name = document.querySelector(".ename");
  let email = document.querySelector(".eemail");
  let skill = document.querySelector(".eskill");
  let photo = document.querySelector(".ephoto");
  let preview = document.querySelector(".preview");
  let edit_id = document.querySelector(".edit_id");

  axios.get(`http://localhost:2020/developers/${id}`).then((res) => {
    name.value = res.data.name;
    email.value = res.data.email;
    edit_id.value = id;

    skill.value = res.data.skillId;
    photo.value = res.data.photo;
    preview.setAttribute("src", res.data.photo);
  });
}

edit.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = document.querySelector(".ename");
  let email = document.querySelector(".eemail");
  let skill = document.querySelector(".eskill");
  let photo = document.querySelector(".ephoto");
  let preview = document.querySelector(".preview");
  let edit_id = document.querySelector(".edit_id");

  axios
    .patch(`http://localhost:2020/developers/${edit_id.value}`, {
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
      get_developers();
    });
});

// view data

function viewId(id) {
  const view = document.querySelector(".view");

  axios.get(`http://localhost:2020/developers/${id}`).then((res) => {
    view.innerHTML = `
        <img src="${res.data.photo}" alt="">
             <h5 class="text-dark">${res.data.name}</h5>
             <h5 class="text-dark">${res.data.email}</h5>
             <h5 class="text-dark">${res.data.skillId}</h5>
    `;
  });
}

// delete data
const catch_delId = document.querySelector(".catch_delId");
function delete_data(id) {
  catch_delId.setAttribute("delId", id);
}
catch_delId.addEventListener("click", function () {
  let d_id = this.getAttribute("delId");
  axios.delete(`http://localhost:2020/developers/${d_id}`).then((res) => {
    get_developers();
  });
});

// searce devs

const searce_devs = document.querySelector(".searce_devs");

searce_devs.addEventListener("keyup", function () {
  axios.get("http://localhost:2020/developers").then((res) => {
    let single_data = "";
    res.data.map((single, index) => {
      if (single.name == searce_devs.value || searce_devs.value == "") {
        single_data += `
        <tr>
                <td>${index + 1}</td>
                <td>${single.name}</td>
                <td>${single.email}</td>
                <td>${single.skillId}</td>
                <td>
                  <img
                    style="width: 50px; height: 50px; object-fit: cover"
                    src="${single.photo}"
                    alt=""
                  />
                </td>
                
                <td>
                  <button class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#modalEdit" onclick=editId(${
                    single.id
                  })>
                    <i class="fas fa-edit"></i>
                  </button>
                  <button class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#modalView" onclick="viewId(${
                    single.id
                  })">
                    <i class="fas fa-eye"></i>
                  </button>
                  <button class="btn btn-danger btn-sm" data-bs-toggle="modal" data-bs-target="#modalDelete" onclick="delete_data(${
                    single.id
                  })">
                    <i class="fas fa-trash"></i>
                  </button>
                </td>
              </tr>
      
      `;
      }
    });
    devtable.innerHTML = single_data;
  });
});

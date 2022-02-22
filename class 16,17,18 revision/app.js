const student_form = document.querySelector("#student-form");
const st_data = document.querySelector(".st-data");

student_form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.querySelector(
    "input[placeholder='Student name']"
  ).value;
  const roll = document.querySelector("input[placeholder='Roll']").value;
  const stclass = document.querySelector("input[placeholder='Class']").value;
  const gender = document.querySelector("input[type='radio']").value;
  const photo = document.querySelector("input[placeholder='Photo']").value;
  const bn = document.querySelector("input[placeholder='Bangla']").value;
  const en = document.querySelector("input[placeholder='English']").value;
  const math = document.querySelector("input[placeholder='Math']").value;
  const s = document.querySelector("input[placeholder='Science']").value;
  const ss = document.querySelector(
    "input[placeholder='Social Science']"
  ).value;
  const religion = document.querySelector(
    "input[placeholder='Religion']"
  ).value;

  if (
    name == ""
    // roll == "" ||
    // stclass == "" ||
    // photo == "" ||
    // bn == "" ||
    // en == "" ||
    // math == "" ||
    // s == "" ||
    // ss == "" ||
    // religion == ""
  ) {
    alert("all field are required");
  } else {
    let all_data = [];
    if (getdata("app-data")) {
      all_data = getdata("app-data");
    }
    all_data.push({
      name: name,
      roll: roll,
      stclass: stclass,
      photo: photo,
      gender: gender,
      bn: bn,
      en: en,
      math: math,
      s: s,
      ss: ss,
      religion: religion,
    });

    setdata("app-data", all_data);
  }
  showdata();
});
showdata();
function showdata() {
  let sdata = getdata("app-data");
  let stordata = "";
  sdata.map((data, index) => {
    stordata += `
        <tr>
                    <td>${data.name}</td>
                    <td>${data.roll}</td>
                    <td>${data.stclass}</td>
                    <td>${data.gender}</td>
                    <td>${data.bn}</td>
                    <td>${data.en}</td>
                    <td>${data.math}</td>
                    <td>${data.s}</td>
                    <td>${data.ss}</td>
                    <td>${data.religion}</td>
                    <td><img style="width: 50px;height:50px;object-fit:cover;" src="${data.photo}"/></td>

                    <td class="d-flex">
                      <button onclick="single(${index})" class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#student_modal">View</button>
                      <button class="btn btn-danger btn-sm" onclick="deletest(${index})">Delete</button>
                    </td>
                  </tr>

    `;
  });
  st_data.innerHTML = stordata;
}

// modal data
const modal_data = document.querySelector(".modal-data");
function single(index) {
  let all_data = getdata("app-data");
  modal_data.innerHTML = `
   <img
                class="shadow"
                src="${all_data[index].photo}"
                alt=""
              />
              <h2>${all_data[index].name}</h2>
              <table class="table text-center table-striped table fa-border">
                <thead class="thead-dark">
                  <tr>
                    <td>SUBJECT</td>
                    <td>MARK</td>
                    <td>GPA</td>
                    <td>GRADE</td>
                    <td>CGPA</td>
                    <td>RESULT</td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Bangla</td>
                    <td>${all_data[index].bn}</td>
                  </tr>
                  <tr>
                    <td>English</td>
                    <td>${all_data[index].eng}</td>
               
                  </tr>
                  <tr>
                    <td>Math</td>
                    <td>${all_data[index].math}</td>
      
                  </tr>
                  <tr>
                    <td>Science</td>
                    <td>${all_data[index].s}</td>
            
                  </tr>
                  <tr>
                    <td>Social Science</td>
                    <td>${all_data[index].ss}</td>
       
                  </tr>
                  <tr>
                    <td>Religion</td>
                    <td>${all_data[index].religion}</td>
     
                  </tr>
                </tbody>
              </table>
 
 `;
}

function deletest(id) {
  let conf = confirm("are you sure?");
  if (conf) {
    let d = getdata("app-data");
    d.splice(id, 1);
    setdata("app-data", d);
    showdata();
  } else {
    return false;
  }
}

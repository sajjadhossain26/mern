const student_form = document.querySelector(".student-form");
const show_table = document.querySelector(".show-table");

student_form.addEventListener("submit", function (e) {
  e.preventDefault();
  const name = document.querySelector("input[placeholder='Student Name']");
  const roll = document.querySelector("input[placeholder='Student Roll']");
  const student_class = document.querySelector("input[placeholder='Class']");
  const photo = document.querySelector("input[placeholder='Photo']");
  const gender = document.querySelector("input[type='radio']:checked");
  const bangla = document.querySelector("input[placeholder='Bangla']");
  const english = document.querySelector("input[placeholder='English']");
  const math = document.querySelector("input[placeholder='Math']");
  const science = document.querySelector("input[placeholder='Science']");
  const ss = document.querySelector("input[placeholder='Social science']");
  const religion = document.querySelector("input[placeholder='Religion']");
  if (
    name.value == "" ||
    roll.value == "" ||
    student_class.value == "" ||
    photo.value == ""
  ) {
    name.style.border = "1px solid red";
    roll.style.border = "1px solid red";
    student_class.style.border = "1px solid red";
    photo.style.border = "1px solid red";
  } else {
    let student_data = [];
    if (get_data("student_app")) {
      student_data = get_data("student_app");
    }
    student_data.push({
      name: name.value,
      roll: roll.value,
      class: student_class.value,
      photo: photo.value,
      gender: gender.value,
      ban: bangla.value,
      eng: english.value,
      math: math.value,
      s: science.value,
      ss: ss.value,
      religion: religion.value,
    });
    set_data("student_app", student_data);
    document.querySelector("input[placeholder='Student Name']").value = "";
    document.querySelector("input[placeholder='Student Roll']").value = "";
    document.querySelector("input[placeholder='Class']").value = "";
    document.querySelector("input[placeholder='Photo']").value = "";
    document.querySelector("input[type='radio']:checked");
    document.querySelector("input[placeholder='Bangla']").value = "";
    document.querySelector("input[placeholder='English']").value = "";
    document.querySelector("input[placeholder='Math']").value = "";
    document.querySelector("input[placeholder='Science']").value = "";
    document.querySelector("input[placeholder='Social science']").value = "";
    document.querySelector("input[placeholder='Religion']").value = "";
  }
  showdata();
});
showdata();
function showdata() {
  let all_data = get_data("student_app");
  let show = "";
  all_data.map((data, index) => {
    show += `

              <tr>
                <td>${index + 1}</td>
                <td>${data.name}</td>
                <td>${data.roll}</td>
                <td>${data.class}</td>
                <td>${data.gender}</td>
                <td>A</td>
                <td>4.50</td>
                <td><img style="width: 50px;height:50px;object-fit:cover;" src="${
                  data.photo
                }"/></td>
                <td>
                <button class="btn btn-info btn-sm" onclick="single_result(${index})"data-bs-toggle="modal" data-bs-target="#student_modal">view</button>
                <button onclick="delete_data(${index})" class="btn btn-danger btn-sm">Delete</button>
                </td>
              </tr>

     `;
  });
  show_table.innerHTML = show;
}

function delete_data(id) {
  let conf = confirm("are you sure?");
  if (conf) {
    let getdata = get_data("student_app");
    getdata.splice(id, 1);
    set_data("student_app", getdata);
    showdata();
  } else {
    return false;
  }
}
// single exam result
const modal_data = document.querySelector(".modal-data");
function single_result(index) {
  let result = new FullResult();
  let all_data = get_data("student_app");
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
                    <td>${all_data[index].ban}</td>
                    <td>${result.gpa(all_data[index].ban)}</td>
                    <td>${result.grade(all_data[index].ban)}</td>
                    <td rowspan="6">A+</td>
                    <td rowspan="6">5.00</td>
                  </tr>
                  <tr>
                    <td>English</td>
                    <td>${all_data[index].eng}</td>
                    <td>${result.gpa(all_data[index].eng)}</td>
                    <td>${result.grade(all_data[index].eng)}</td>
                  </tr>
                  <tr>
                    <td>Math</td>
                    <td>${all_data[index].math}</td>
                    <td>${result.gpa(all_data[index].math)}</td>
                    <td>${result.grade(all_data[index].math)}</td>
                  </tr>
                  <tr>
                    <td>Science</td>
                    <td>${all_data[index].s}</td>
                    <td>${result.gpa(all_data[index].s)}</td>
                    <td>${result.grade(all_data[index].s)}</td>
                  </tr>
                  <tr>
                    <td>Social Science</td>
                    <td>${all_data[index].ss}</td>
                    <td>${result.gpa(all_data[index].ss)}</td>
                    <td>${result.grade(all_data[index].ss)}</td>
                  </tr>
                  <tr>
                    <td>Religion</td>
                    <td>${all_data[index].religion}</td>
                    <td>${result.gpa(all_data[index].religion)}</td>
                    <td>${result.grade(all_data[index].religion)}</td>
                  </tr>
                </tbody>
              </table>
  `;
}
const searce_data = document.querySelector("#searce-data");
searce_data.addEventListener("keyup", function () {
  let all_data = get_data("student_app");
  let show = "";
  all_data.map((data, index) => {
    if (
      data.roll == searce_data.value ||
      data.name == searce_data.value ||
      data.class == searce_data.value ||
      searce_data.value == ""
    ) {
      show += `

              <tr>
                <td>${index + 1}</td>
                <td>${data.name}</td>
                <td>${data.roll}</td>
                <td>${data.class}</td>
                <td>${data.gender}</td>
                <td>A</td>
                <td>4.50</td>
                <td><img style="width: 50px;height:50px;object-fit:cover;" src="${
                  data.photo
                }"/></td>
                <td><button class="btn btn-info btn-sm"  data-bs-toggle="modal" data-bs-target="#student_modal">view</button>
                <button onclick="delete_data(${index})" class="btn btn-danger btn-sm">Delete</button></td>
              </tr>

     `;
    }
  });
  show_table.innerHTML = show;
});
// const student_form = document.querySelector(".student-form");
// const show_table = document.querySelector(".show-table");

// student_form.addEventListener("submit", function (e) {
//   e.preventDefault();
//   const name = document.querySelector("input[placeholder='Student Name']");
//   const roll = document.querySelector("input[placeholder='Student Roll']");
//   const student_class = document.querySelector("input[placeholder='Class']");
//   const photo = document.querySelector("input[placeholder='Photo']");
//   const gender = document.querySelector("input[type='radio']:checked");
//   const bangla = document.querySelector("input[placeholder='Bangla']");
//   const english = document.querySelector("input[placeholder='English']");
//   const math = document.querySelector("input[placeholder='Math']");
//   const science = document.querySelector("input[placeholder='Science']");
//   const ss = document.querySelector("input[placeholder='Social science']");
//   const religion = document.querySelector("input[placeholder='Religion']");
//   let student_arr = [];
//   if (getdata("student_app")) {
//     student_arr = getdata("student_app");
//   }
//   student_arr.push({
//     name: name.value,
//     roll: roll.value,
//     class: student_class.value,
//     photo: photo.value,
//     gender: gender.value,
//     ban: bangla.value,
//     eng: english.value,
//     math: math.value,
//     s: science.value,
//     ss: ss.value,
//     religion: religion.value,
//   });
//   setdata("student_app", student_arr);

//   document.querySelector("input[placeholder='Student Name']").value = "";
//   document.querySelector("input[placeholder='Student Roll']").value = "";
//   document.querySelector("input[placeholder='Class']").value = "";
//   document.querySelector("input[placeholder='Photo']").value = "";
//   document.querySelector("input[type='radio']:checked");
//   document.querySelector("input[placeholder='Bangla']").value = "";
//   document.querySelector("input[placeholder='English']").value = "";
//   document.querySelector("input[placeholder='Math']").value = "";
//   document.querySelector("input[placeholder='Science']").value = "";
//   document.querySelector("input[placeholder='Social science']").value = "";
//   document.querySelector("input[placeholder='Religion']").value = "";
//   show_data();
// });
// show_data();
// function show_data() {
//   let all_data = getdata("student_app");
//   let s_data = "";
//   all_data.map((data, index) => {
//     s_data += `
//    <tr>
//                  <td>${index + 1}</td>
//                  <td>${data.name}</td>
//                  <td>${data.roll}</td>
//                  <td>${data.class}</td>
//                  <td>${data.gender}</td>
//                 <td>A</td>
//                 <td>4.50</td>
//                  <td><img style="width: 50px;height:50px;object-fit:cover;" src="${
//                    data.photo
//                  }"/></td>
//                 <td>
//                 <button class="btn btn-info btn-sm" data-bs-toggle="modal" data-bs-target="#student_modal">view</button>
//                 <button onclick="delete_data(${index})" class="btn btn-danger btn-sm">Delete</button>
//                 </td>
//               </tr>

//    `;
//   });
//   show_table.innerHTML = s_data;
// }
// function delete_data(id) {
//   let conf = confirm("are you sure?");
//   if (conf) {
//     let get_data = getdata("student_app");
//     get_data.splice(id, 1);
//     setdata("student_app", get_data);
//     show_data();
//   } else {
//     return false;
//   }
// }

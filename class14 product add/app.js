const devsForm = document.querySelector(".devs-form");
const showdevs = document.querySelector(".showdev");

devsForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let name = document.querySelector("input[name='name']").value;
  let gender = document.querySelector("input[name='gender']:checked").value;
  let skills = document.querySelectorAll("input[name='skill']:checked");
  let photo = document.querySelector("input[name='photo']").value;

  let skills_arr = [];

  for (let i = 0; i < skills.length; i++) {
    skills_arr.push(skills[i].value);
  }

  let data_arr;
  if (getdata("devs")) {
    data_arr = getdata("devs");
  } else {
    data_arr = [];
  }

  data_arr.push({
    name: name,
    gender: gender,
    skills: skills_arr,
    photo: photo,
  });

  senddata("devs", data_arr);
  alldevs();
});
alldevs();
function alldevs() {
  let getdevs = getdata("devs");
  let data = "";

  getdevs.map((d) => {
    let lists = "";
    d.skills.map((list) => {
      lists += '<li class="list-group-item">' + list + "</li>";
    });

    data += `
    <div class="col-md-4 my-2">
              <div class="card">
                <img
                  style="height: 250px; object-fit: cover"
                  src="${d.photo}"
                  alt=""
                />
                <div class="card-body">
                  <h3>${d.name}</h3>
                  <h6>Gender: male</h6>

                  skill
                  <hr />
                  <ul class="list-group">
                    ${lists}
                  </ul>
                </div>
              </div>
            </div>
   `;
  });
  showdevs.innerHTML = data;
}

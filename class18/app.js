const devs = document.querySelector(".devs");
fetch("https://my-json-server.typicode.com/sajjadhossain26/mern/devs")
  .then((data) => data.json())
  .then((data) => {
    let devs_data = "";
    data.map((data) => {
      devs_data += `
          <div class="col-md-3 my-3">
          <div class="card shadow">
          <a href="#" onclick="single_devs(${data.id})" class="w-100" data-bs-toggle="modal" data-bs-target="#student_modal" >  <img style="object-fit: cover;"  class="w-100"
              src="${data.photo}"
              alt=""
            /></a>
            <div class="card-body">
              <h3>${data.name}</h3>
               <span>${data.skill}</span><br>
                 
               <span>Age: ${data.age}</span>
            </div>
          </div>
        </div>
          
          
          `;
    });
    devs.innerHTML = devs_data;
  });
function single_devs(id) {
  const modal_data = document.querySelector(".modal-data");
  modal_data.innerHTML = "";
  fetch("https://my-json-server.typicode.com/sajjadhossain26/mern/devs/" + id)
    .then((data) => data.json())
    .then((data) => {
      modal_data.innerHTML = `
      <div class="single_devs_data">
       <div class="row">
                <div class="col-md-6 p-0">
                  <img class="w-100"
                    src="${data.photo}"
                    alt=""
                  />
                </div>
                <div class="col-md-6 p-5">
                  <h3>${data.name}</h3>
                  <h3>Age: ${data.age}</h3>
                  <h3>Location: ${data.location}</h3>
                  <h3>Skill: ${data.skill}</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Temporibus, quaerat!
                  </p>
                </div>
              </div>
      </div>
      

      `;
    });
}

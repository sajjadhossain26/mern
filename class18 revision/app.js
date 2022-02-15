const devs = document.querySelector(".devs");
fetch("https://my-json-server.typicode.com/sajjadhossain26/mern/devs")
  .then((data) => data.json())
  .then((data) => {
    let devs_data = "";
    data.map((data) => {
      devs_data += `
         <div class="col-md-3">
          <div class="card shadow">
               <a href="#">
              <img onclick="single_id(${data.id})"
                class="w-100"
                data-bs-toggle="modal"
                data-bs-target="#single_data"
                src="${data.photo}"
                alt=""
            /></a>
            <div class="card-body">
              <h6>${data.name}</h6>
              <h6>${data.skill}</h6>
              <h6>${data.location}</h6>
            </div>
          </div>
        </div>
        
        `;
    });
    devs.innerHTML = devs_data;
  });

function single_id(id) {
  const single_devs = document.querySelector(".single_devs");
  single_devs.innerHTML = "";
  fetch("https://my-json-server.typicode.com/sajjadhossain26/mern/devs/" + id)
    .then((data) => data.json())
    .then((data) => {
      single_devs.innerHTML = `
          <div class="col-md-6">
                  <img
                    class="w-100"
                    src="${data.photo}"
                    alt=""
                  />
                </div>
                <div class="col-md-6">
                  <h4>NAME: ${data.name}</h4>
                  <h4>AGE:  ${data.age}</h4>
                  <h4>SKILL: ${data.skill}</h4>
                  <h4>LOCATION: ${data.location}</h4>
                </div>
        `;
    });
}

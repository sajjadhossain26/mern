// const h1 = document.querySelector("h1");
// h1.setAttribute("width", "50px");
// h1.className = "hossain";

// console.log(h1.getAttribute("width"));
// if (h1.hasAttribute) {
//   console.log("ace");
// } else {
//   console.log("nai");
// }

const team = document.querySelector(".team");
devs.map((data) => {
  team.innerHTML += `
 
   <div class="team-item">
      <img
        src="${data.photo}"
        alt=""
      />
      <h1>${data.name}</h1>
      <h3>${data.skill}</h3>
      <h3>${data.location}</h3>
    </div>
  
`;
});

const phoneBook = document.querySelector(".phonebook .member tbody");
familyPhone.map((data, index) => {
  phoneBook.innerHTML += `
 
      <tr>
        <td>${index + 1}</td>
        <td>${data.name}</td>
        <td>${data.age}</td>
        <td>${data.relation}</td>
        <td>${data.phone}</td>
        <td><img src="${data.photo}"></td>
      </tr>
      </thead>
    </table>
    
  
  `;
});

const students = document.querySelector(".students-data");
devs.map((data, index) => {
  students.innerHTML += `
    <div class="team-item">
      <img
        src="${data.photo}"
        alt=""
      />
     <h5>ROLL Number :  ${index + 1}</h5>
      <h1>${data.name}</h1>
      <h3>${data.skill}</h3>
      <h3>${data.location}</h3>
    </div>
  
  `;
});

const counter = document.querySelector(".counter");
const clockForm = document.querySelector(".clock-form");
clockForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let date = this.querySelector("input[type='date']").value;
  let time = this.querySelector("input[type='time']").value;

  setInterval(() => {
    let startDate = new Date();
    let endDate = new Date(date + " " + time);
    let different = Math.floor(endDate.getTime() - startDate.getTime());
    let tsec = Math.floor(different / 1000);
    let tmin = Math.floor(tsec / 60);
    let thour = Math.floor(tmin / 60);
    let tday = Math.floor(thour / 24);

    let hours = thour - tday * 24;
    let min = tmin - tday * 24 * 60 - hours * 60;
    let sec = tsec - tday * 24 * 60 * 60 - hours * 60 * 60 - min * 60;
    counter.innerHTML = `${tday < 10 ? "0" + tday : tday} : ${
      hours < 10 ? "0" + hours : hours
    } : ${min < 10 ? "0" + min : min} : ${sec < 10 ? "0" + sec : sec}`;
  }, 1000);
});

// to do app

const todoForm = document.querySelector(".todo");
const addli = document.querySelector(".addli");
todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let task = this.querySelector("input[name='name']").value;
  let select = this.querySelector("select[name='select']").value;

  if (task == "" || select == "") {
    alert("all field are required");
  } else {
    let li = document.createElement("li");
    li.className = "list-group-item";
    let textnode = document.createTextNode(task);
    let btn = document.createElement("button");
    btn.className = "close";
    btn.innerHTML = "&times;";
    li.appendChild(btn);
    li.insertBefore(textnode, btn);
    addli.appendChild(li);
    this.querySelector("input[name='name']").value = "";
    this.querySelector("select[name='select']").value = "";

    btn.addEventListener("click", function () {
      this.parentElement.remove();
    });
  }
});

// product add

const addProduct = document.querySelector(".add-product");
const productCard = document.querySelector(".product-card");
const closebtn = document.querySelector(".closebtn");
const productrow = document.querySelector(".product-row");
const productform = document.querySelector(".product-form");

addProduct.addEventListener("click", function () {
  productCard.style.display = "block";
});
closebtn.addEventListener("click", function () {
  productCard.style.display = "none";
});

productform.addEventListener("submit", function (e) {
  e.preventDefault();
  let name = this.querySelector("input[name='name']").value;
  let rprice = this.querySelector("input[name='rprice']").value;
  let sprice = this.querySelector("input[name='sprice']").value;
  let photo = this.querySelector("input[name='pimage']").value;

  let arrayData;
  if (getdata("products")) {
    arrayData = getdata("products");
  } else {
    arrayData = [];
  }

  arrayData.push({
    name: name,
    price: rprice,
    saleprice: sprice,
    photo: photo,
  });
  senddata("products", arrayData);
  allproducts();
});
allproducts();
function allproducts() {
  let get = getdata("products");
  let data = "";
  get.map((pdata) => {
    data += `
    <div class="col-md-4 my-2">
          <div class="card">
            <img
              class="card-image"
              src="${pdata.photo}"
              alt=""
            />
            <div class="card-body">
              <h2>${pdata.name}</h2>
              <p>
                <span class="regular-price">${pdata.price}$</span
                ><span class="sale-price">${pdata.saleprice}$</span>
              </p>
              <button class="btn btn-success">Add to cart</button>
            </div>
          </div>
        </div>
  
  `;
  });

  productrow.innerHTML = data;
}

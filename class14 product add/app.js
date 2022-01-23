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

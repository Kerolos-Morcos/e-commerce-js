(function () {
  "use strict";

  var tinyslider = function () {
    var el = document.querySelectorAll(".testimonial-slider");

    if (el.length > 0) {
      var slider = tns({
        container: ".testimonial-slider",
        items: 1,
        axis: "horizontal",
        controlsContainer: "#testimonial-nav",
        swipeAngle: false,
        speed: 700,
        nav: true,
        controls: true,
        autoplay: true,
        autoplayHoverPause: true,
        autoplayTimeout: 3500,
        autoplayButtonOutput: false,
      });
    }
  };
  tinyslider();

  var sitePlusMinus = function () {
    var value,
      quantity = document.getElementsByClassName("quantity-container");

    function createBindings(quantityContainer) {
      var quantityAmount =
        quantityContainer.getElementsByClassName("quantity-amount")[0];
      var increase = quantityContainer.getElementsByClassName("increase")[0];
      var decrease = quantityContainer.getElementsByClassName("decrease")[0];
      increase.addEventListener("click", function (e) {
        increaseValue(e, quantityAmount);
      });
      decrease.addEventListener("click", function (e) {
        decreaseValue(e, quantityAmount);
      });
    }

    function init() {
      for (var i = 0; i < quantity.length; i++) {
        createBindings(quantity[i]);
      }
    }

    function increaseValue(event, quantityAmount) {
      value = parseInt(quantityAmount.value, 10);

      console.log(quantityAmount, quantityAmount.value);

      value = isNaN(value) ? 0 : value;
      value++;
      quantityAmount.value = value;
    }

    function decreaseValue(event, quantityAmount) {
      value = parseInt(quantityAmount.value, 10);

      value = isNaN(value) ? 0 : value;
      if (value > 0) value--;

      quantityAmount.value = value;
    }

    init();
  };
  sitePlusMinus();
})();

////////////////////////////////////////////////////////////
// OUR WORK
document.body.addEventListener("click", function (event) {
  event.target.classList.toggle("active");
});

////////////////////////////////////////
var products = new XMLHttpRequest(); //
var arr = []; // global
var div2 = document.getElementsByClassName("products")[0];
// console.log(div);
products.open("GET", "https://dummyjson.com/products"); // open connecation  0
products.send(); // send  req //1
// 2 arrive
// 3 process
// 4 response

products.onreadystatechange = function () // event fire every change of state
{
  // console.log(data);

  if (products.readyState == 4) {
    var data = JSON.parse(products.responseText).products; // convert from type string to type object
    // console.log(data );
    arr = data; // assgin
    for (var i = 0; i < 12; i++) {
      // console.log(data[i].title);
      div2.innerHTML += `		
			<div class="col-12 col-md-4 col-lg-3 mb-5">
			<a  onclick="details(${i})"class="product-item" href="checkout.html">
							<img src=${data[i].thumbnail} class="img-fluid   product-thumbnail">
							<h3 class="product-title">${data[i].title}</h3>		
							<strong class="product-price">${data[i].price}</strong>
							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid">
							</span>
						</a>
						
					</div>`;
    }
  }
};

var x = 1;

function add(index) {
  alert("you purchased  " + x + " product(s)");
  x++;
  var newdata = JSON.parse(localStorage.getItem("product")) || [];

  console.log(newdata);
  newdata.push(arr[index]);
  console.log(newdata);

  // newdata.push(arr[index]);
  localStorage.setItem("product", JSON.stringify(newdata)); //overwrite
}

///
function filter() {
  var _min = document.getElementById("min-price").value - 0;
  var _max = document.getElementById("max-price").value - 0;
  var filteredData = [];
  var div2 = document.getElementById("products");
  div2.innerHTML = "";
  
  for (let i = 0; i < 12; i++) {
    console.log(arr[i].id);
    if (arr[i].price >= _min && arr[i].price <= _max) {
      filteredData.push(arr[i]);
    }
  }

  for (let i = 0; i < filteredData.length; i++) {
    div2.innerHTML += `
		<div class="col-12 col-md-4 col-lg-3 mb-5">
		  <a onclick="details(${filteredData[i].id-1})" class="product-item" data-product-id="${filteredData[i].id}" href="checkout.html">
			<img src="${filteredData[i].thumbnail}" class="img-fluid product-thumbnail">
			<h3 class="product-title">${filteredData[i].title}</h3>
			<strong class="product-price">${filteredData[i].price}</strong>
			<span class="icon-cross">
			  <img src="images/cross.svg" class="img-fluid">
			</span>
		  </a>
		</div>`;
  }
}

function sortAscending() {
  var _min = document.getElementById("min-price").value - 0;
  var _max = document.getElementById("max-price").value - 0;
  var filteredData = [];
  var div2 = document.getElementById("products");

  div2.innerHTML = "";

  for (let i = 0; i < 12; i++) {
    if (arr[i].price >= _min && arr[i].price <= _max) {
      filteredData.push(arr[i]);
    }
  }
  // alert();
  // console.log(filteredData)

  filteredData.sort(function (a, b) {
    return a.price - b.price;
  });

  for (let i = 0; i < 12; i++) {
    div2.innerHTML += `
		<div class="col-12 col-md-4 col-lg-3 mb-5">
		  <a onclick="details(${filteredData[i].id-1})" class="product-item" data-product-id="${filteredData[i].id}" href="checkout.html">
			<img src="${filteredData[i].thumbnail}" class="img-fluid product-thumbnail">
			<h3 class="product-title">${filteredData[i].title}</h3>
			<strong class="product-price">${filteredData[i].price}</strong>
			<span class="icon-cross">
			  <img src="images/cross.svg" class="img-fluid">
			</span>
		  </a>
		</div>
	  `;
  }
}

function sortDescending() {
  var _min = document.getElementById("min-price").value - 0;
  var _max = document.getElementById("max-price").value - 0;
  var filteredData = [];
  var div2 = document.getElementById("products");

  div2.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].price >= _min && arr[i].price <= _max) {
      filteredData.push(arr[i]);
    }
  }

  filteredData.sort(function (a, b) {
    return b.price - a.price;
  });

  for (let i = 0; i < filteredData.length; i++) {
    div2.innerHTML += `
		<div class="col-12 col-md-4 col-lg-3 mb-5">
		  <a onclick="details(${filteredData[i].id-1})" class="product-item" data-product-id="${filteredData[i].id}" href="checkout.html">
			<img src="${filteredData[i].thumbnail}" class="img-fluid product-thumbnail">
			<h3 class="product-title">${filteredData[i].title}</h3>
			<strong class="product-price">${filteredData[i].price}</strong>
			<span class="icon-cross">
			  <img src="images/cross.svg" class="img-fluid">
			</span>
		  </a>
		</div>
	  `;
  }
}

var arr = JSON.parse(localStorage.getItem("product"));
var _sec = document.getElementById("tbody");
// if (document.getElementById("product") != null) {
//   var idPost = document.getElementById("gon").innerHTML;
//   var arr = JSON.parse(localStorage.getItem("product"));
for (var i = 0; i < 12; i++) {
  _sec.innerHTML += `
		  <tr>
						<td class="product-thumbnail">
						  <img src=${arr[i].thumbnail} alt="Image" class="img-fluid">
						</td>
						<td class="product-name">
						  <h2 class="h5 text-black">${arr[i].title}</h2>
						</td>
						<td>${arr[i].price}</td>
						<td>
						  <div class="input-group mb-3 d-flex align-items-center quantity-container" style="max-width: 120px;">
							<div class="input-group-prepend">
							  <button class="btn btn-outline-black decrease" type="button">&minus;</button>
							</div>
							<input type="text" class="form-control text-center quantity-amount" value="1" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
							<div class="input-group-append">
							  <button class="btn btn-outline-black increase" type="button">&plus;</button>
							</div>
						  </div>
	  
						</td>
						<td>${arr[i].price}</td>
						<td><a   onclick="remove(${i})"  class="btn btn-black btn-sm">X</a></td>
					  </tr>
		`;
}

function remove(index) {
  var y = confirm(" Are you sure to delete this item ?");
  // alert(y)
  if (y == false) {
    return 0;
  } else if (y == true) {
    arr = JSON.parse(localStorage.getItem("product"));
    arr.splice(index, 1);
    localStorage.setItem("product", JSON.stringify(arr));
    window.location.reload();
  }
}

function details(index) {
  var newdata = [arr[index]];
  console.log(arr[index]);
  localStorage.setItem("myObj", JSON.stringify(newdata));
  alert("The Product Added To Checkout !");
}

/////////////////////////////////////////////
// Function Search
function search() {
  var text = document.getElementById("search").value;
  div2.innerHTML = "";
  for (var i = 0; i < 12; i++) {
    if (arr[i].title.indexOf(text) > -1) {
      div2.innerHTML += `		
			<div class="col-12 col-md-4 col-lg-3 mb-5">		   
			<a  onclick="details(${i})"class="product-item" href="checkout.html">
							<img src=${arr[i].thumbnail} class="img-fluid   product-thumbnail">
							<h3 class="product-title">${arr[i].title}</h3>		
							<strong class="product-price">${arr[i].price}</strong>
							<span class="icon-cross">
								<img src="images/cross.svg" class="img-fluid">
							</span>
						</a>
					</div>`;
    }
  }
}


let product1 = new Sneaker("Air Force 1 '07","Nike","White","10US/9UK","$110","Ảnh/Airforce1.png");
let product2 = new Sneaker("Blazer Mid '77 Vintage","Nike","Black","9US/8UK","$105","Ảnh/Blazer mid.png");
let product3 = new Sneaker("KD15","Nike","Red","9.5US/8.5UK","$150","Ảnh/KD15.png");
let product4 = new Sneaker("Air Force 1 '07 Premium","Nike","Blue","10US/9UK","$150","Ảnh/AF1 Premium.png");
let product5 = new Sneaker("ZoomX Invincible Run Flyknit 2","Nike","Black","8.5US/7.5UK","$180","Ảnh/ZoomX.png");
let product6 = new Sneaker("Air Jordan 1 mid","Air Jordan","Black","10US/9UK","$125","Ảnh/Jordan1 mid.png");
let product7 = new Sneaker("Air Jordan 4 Retro SE","Air Jordan","Black","9US/8UK","$210","Ảnh/Jordan4 retro.png");
let product8 = new Sneaker("Air Jordan 11 Retro Low","Air Jordan","Black","10US/9UK","$190","Ảnh/Jordan11 retro.png");
let product9 = new Sneaker("Air Jordan XXXVI 'Taco Jay'","Air Jordan","Yellow","9US/8UK","$195","Ảnh/JordanXXXVI.png");
let product = [[product1,product2,product3],[product4,product5,product6],[product7,product8,product9]];
function display(arr) {
    let data = "";
    data += "<table>"
    for (let i = 0; i < arr.length; i++) {
        data += "<tr>";
        for (let j = 0; j < arr[i].length; j++) {
            data += `<td>
                    <div class="all">
                    <div class="image">
                    <img src="${arr[i][j]._image}" alt=""></div>
                    
                    <div class="name" >
                    <span>${arr[i][j]._name}</span></div>
              
                    <div class="brand" style="color: #707070"> 
                    <span>${arr[i][j]._brand}</span></div>
                   
                    <div class="color" style="color: #707070">Color:
                    <span>${arr[i][j]._color}</span></div>
                    
                    <div class="size" style="color: #707070">Size: 
                    <span>${arr[i][j]._size}</span></div>
                    
                    <div class="price">
                    <span>${arr[i][j]._price}</span></div>
                    
                    <button type="button" class="btn btn-cart">Thêm Vào Giỏ</button>
                                                                        
                    </div>
                    </td>`
        }
        data += "</tr>";
    }
    data += "</table>";
    document.getElementById("sanpham").innerHTML = data;
}

//Giỏ hàng
let modal = document.getElementById("myModal");
let btn = document.getElementById("cart");
let close_footer = document.getElementsByClassName("close-footer")[0];
let order = document.getElementsByClassName("order")[0];
btn.onclick = function () {
    modal.style.display = "block";
}

close_footer.onclick = function () {
    modal.style.display = "none";
}
order.onclick = function () {
    alert("Cảm ơn bạn đã thanh toán đơn hàng")
}
window.onclick = function (event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
}

//Checkbox
display(product);
let brands =document.getElementById("a")
let brands1 =document.getElementById("Air Jordan")
let colors =document.getElementById("Black")
let colors1 =document.getElementById("White")
let sizes =document.getElementById("10US/9UK")
let sizes1 =document.getElementById("9US/8UK")

function filterBrands() {
    let arrBrand = []
    if (brands.checked === true) {
        arrBrand[0] = [];
        for (let i = 0; i < product.length; i++) {
            for (let j = 0; j < product[i].length; j++) {
                if (product[i][j].brand === "Nike") {
                    arrBrand[0].push(product[i][j]);
                }
            }
        }
        brands1.checked = false;
        colors.checked = false;
        colors1.checked = false;
        sizes.checked = false;
        sizes1.checked = false;
        display(arrBrand);
    } else {
        display(product)
    }
}

function filterBrands1() {
    let arrBrands1 = []
    if (brands1.checked === true) {
        arrBrands1[0] = [];
        for (let i = 0; i < product.length; i++) {
            for (let j = 0; j < product[i].length; j++) {
                if (product[i][j].brand === "Air Jordan") {
                    arrBrands1[0].push(product[i][j])
                }
            }
        }
        brands.checked = false;
        colors.checked = false;
        colors1.checked = false;
        sizes.checked = false;
        sizes1.checked = false;
        display(arrBrands1);
    } else {
        display(product);
    }
}
function filterColor() {
    let arrColor = []
    if (colors.checked === true) {
        arrColor[0] = [];
        for (let i = 0; i < product.length; i++) {
            for (let j = 0; j < product[i].length; j++) {
                if (product[i][j].color === "Black") {
                    arrColor[0].push(product[i][j])
                }
            }
        }
        brands1.checked = false;
        brands.checked = false;
        colors1.checked = false;
        sizes.checked = false;
        sizes1.checked = false;
        display(arrColor)
    } else {
        display(product)
    }
}
function filterColor1() {
    let arrColor1 = []
    if (colors1.checked === true) {
        arrColor1[0] = [];
        for (let i = 0; i < product.length; i++) {
            for (let j = 0; j < product[i].length; j++) {
                if (product[i][j].color === "White") {
                    arrColor1[0].push(product[i][j])
                }
            }
        }
        brands1.checked = false;
        brands.checked = false;
        colors.checked = false;
        sizes.checked = false;
        sizes1.checked = false;
        display(arrColor1)
    } else {
        display(product)
    }
}
function filterSize1() {
    let arrSize1 = []
    if (sizes1.checked === true) {
        arrSize1[0] = [];
        for (let i = 0; i < product.length; i++) {
            for (let j = 0; j < product[i].length; j++) {
                if (product[i][j].size === "9US/8UK") {
                    arrSize1[0].push(product[i][j])
                }
            }
        }
        brands1.checked = false;
        brands.checked = false;
        colors.checked = false;
        colors1.checked = false;
        sizes.checked = false;
        display(arrSize1)
    } else {
        display(product)
    }
}
function filterSize() {
    let arrSize = []
    if (sizes.checked === true) {
        arrSize[0] = [];
        for (let i = 0; i < product.length; i++) {
            for (let j = 0; j < product[i].length; j++) {
                if (product[i][j].size === "10US/9UK") {
                    arrSize[0].push(product[i][j])
                }
            }
        }
        brands1.checked = false;
        brands.checked = false;
        colors.checked = false;
        colors1.checked = false;
        sizes.checked = false;
        display(arrSize)
    } else {
        display(product)
    }
}

//Đăng nhập
function login() {
    let data1=" "
    data1 += "<input type='text' id='loginID' placeholder='Tên đăng nhập' style='width: 500px; height: 50px;margin-left: 500px'>" +
        "<label for='loginID'></label><br>";
    data1 += "<input type='text' id='password' placeholder='Mật khẩu' style='width: 500px; height: 50px;margin-left: 500px'>" +
        "<label for='password'></label><br>";
    data1 += "<button type='submit' onclick='confirm()' style='width: 250px;height: 50px;margin-left: 500px;background-color: #0275d8' >Xác nhận</button>";
    data1 += "<button type='submit' onclick='reset()' style='width: 250px;height: 50px;background-color: #0275d8'>Đóng</button>";
    document.getElementById("formlogin").innerHTML = data1;
}
function reset() {
    let data2="";
    document.getElementById("formlogin").innerText = data2;

}
function confirm() {
    let id = "tung";
    let pass = "1234";
    let a = document.getElementById("loginID");
    let b = document.getElementById("password");
    if (a.value === id && b.value === pass){
        document.getElementById('login').innerHTML="lqtung"
    } else {
        alert("Tên đăng nhập hoặc mật khẩu không đúng")
    }
    reset();
}
confirm();








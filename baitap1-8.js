
let xinchao = "xin chào";

alert(xinchao)

//baitap2

let i = 10;
console.log(i);
let f = 20.5;
console.log(f);
let b = true;
console.log(b);
let s = "Hà Nội";
console.log(s);

//baitap3
let rectangle_width = 20;
let rectangle_height = 10;
let area = rectangle_width * rectangle_height;
console.log("dientich=" + area);

//baitap4

confirm("Bạn đã đủ 18 tuổi chưa?");

//baitap5

let vatly = +prompt("Hãy nhập điểm môn vật lý");
let hoahoc = +prompt("Hãy nhập điểm môn hóa học");
let sinhhoc = +prompt("Hãy nhập điểm môn sinh học");

let tongdiem = vatly + hoahoc + sinhhoc;
let diemtrungbinh = tongdiem / 3;

console.log("tongdiem=" + tongdiem);
console.log("diemtrungbinh=" + diemtrungbinh);

//baitap6

let Celsius = +prompt("Hãy nhập 1 giá trị là độ C")
let Fahrenheit = Celsius * 9 / 5 + 32;

console.log("doF =" + Fahrenheit);

//baitap7

let dai = +prompt("Hãy nhập vào chiều dài hình chữ nhật");
let rong = +prompt("Hãy nhập vào chiều rộng hình chữ nhật");

let chuvicn = 2 * (dai + rong);
let dientichcn = dai * rong;

console.log("chu vi cn = " + chuvicn);
console.log("dien tich cn=" + dientichcn);

//baitap8

const PI = Math.PI;
let r = +prompt("Hãy nhập vào bán kính hình tròn");

let chuvi = 2 * PI * r;
let dientich = PI * r * r;

console.log(" Chu vi = " + chuvi);
console.log("Dien tich = " + dientich);









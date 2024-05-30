//baitap10
let a = 6;
let result = ++a + a + a++ + ++a + a;

console.log(result);

// biểu thức a++ sẽ tăng giá trị của a lên 1 đơn vị sau khi nó được gọi
// còn biểu thức ++a sẽ tăng giá trị của a lên 1 đơn vị ngay khi nó được gọi
//vì vậy, phép tính ở trên sẽ là: 7+7+7+9+9=39
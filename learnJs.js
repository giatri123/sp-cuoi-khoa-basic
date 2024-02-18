
// Có 3 cạh khai báo biế: var / let / const //
// var a = 5; // Khai báo 1 biến a với kiểu a và gán giá trị 5 cho a
// a = 10 + 5;
// console.log(a);
// let b = 10; // Không cần khai báo giá trị trước
// console.log(b);
// const pi = 3.14 ; // Giá trị của biến không thay đổi, phải khai báo giá trị khi khai báo biến
// console.log(pi);

// function sum() {
//     let x = false;
//     let y = [];
//     console.log(typeof(y));
//     if ( x == true) {
//         console.log('x đúng');
//     }
//     else {
//         console.log('x sai');
//     }
// }
// sum();

// Toán tử trong JavaScript
// let x = 5;
// let y = 10;
// console.log(x != y);

// Câu điều kiện trong JS
// if (điều kiện) {
//      code
// }

// if (x < 0) {
//     console.log('x là số âm');
// }

// else if (x == 0) {
//     console.log('x = 0');
// }
// else {
//     console.log('x là số nguyên dương');
// }

// // Bài 2

// let a = 0;
// let b = 10;
// let c = 15;
// let max = 0

// if (a > max ){
//     max = a;
// }
// if (b > max) {
//     max = b;
// }
// if (c > max){
//     max = c
// }

// function sum (){
//     let a = 5;
//     let b = 10;
//     console.log(a + b);
// }
// sum();



// function xephang (dtb){
//     if(dtb >= 9.0){
//         console.log('hang A');
//     }
//     else if (dtb >= 7 && dtb <9){
//         console.log('hang B');
//     }
//     else if (dtb >= 5 && dtb < 7){
//         console.log('hang C');
//     }
//     else {
//         console.log('Hang F');
//     }
// }
// xephang(9.0)
// xephang(6.0)
// xephang(4)

// function phanbietnam (nam){
//     if(nam % 400 == 0){
//         console.log('nam nhuan');
//     }
//     else if (nam % 4 == 0 % nam % 100 != 0){
//         console.log('nam nhuan');
//     }
//     else {
//         console.log('nam le');
//     }
// }

// phanbietnam(2000)
// phanbietnam(2001)
// phanbietnam(2002)
// phanbietnam(2003)


// function giaiptb2 (a, b, c){
//     let delta = b*b - 4*a*c;
//     let x, y;
//     if (delta > 0){
//         x = (-b + Math.sqrt(delta)) / (2 * a);
//         y = (-b + Math.sqrt(delta)) / (2 * a);
//         console.log('pt co 2 nghiem la: ' + x + ',' + y);
//     }
//     else if (delta == 0){
//         x = -b / (2 * a);
//         console.log('pt co nghiem kep' + x);
//     }
//     else{
//         console.log('pt vo nghiem');
//     }
    
// }

//DOM
// let h1Mess = document.getElementById('mess');
// h1Mess.innerText = 'Chao'
// h1Mess.style.color = 'red'
// console.log(h1Mess);


let bulb = document.getElementsByClassName('bulb');
bulb[0].src ='https://www.w3schools.com/js/pic_bulbon.gif'
// alert("javascript is working");

// var arr=["ritik", "boby", "sunny"];

// var newarr= arr;
// newarr[0]= "shuyeb";

// console.log(newarr, arr);



// var employe = {
//      name:"shuyeb",
//       id:007,
//       address:"Noida"
// }

// var newemployee= employe;

// newemployee.id=001;
// newemployee.name="junid";


// console.log(employe);
// console.log(newemployee);


// var a=8;



// var person= {name:"shuyeb"} ;

// var oldperson=Object.assign({},person);

// person.name="junaid";

// console.log("person",person);

// console.log("oldperson", oldperson);




// simple copy
// var obj1={
//     name:"shuyeb"
// }

// var obj2= obj1;
// obj2.name="junaid";

// // console.log(obj2);
// console.log(obj1);



// shallow copy
// var obj1={
//     name:"shuyeb"
// };

// obj2=Object.assign({},obj1);
// obj2.name="junaid";

// console.log(obj1,obj2);
// console.log(obj1);


// shallow copy problem
// var obj1={
//     name:"shuyeb",
//     address:{
//         city:"delhi"
//     }
// };

// var obj2=Object.assign({},obj1);
// obj2.name="junaid";
// obj2.address.city="mumbai";

// console.log(obj1,obj2);


// deep copy 

// var obj1={
//     name:"shuyeb",
//     address:{
//         city:'delhi'
//     }
// }

// var obj2=JSON.parse(JSON.stringify(obj1));

// obj2.name='junaid';
// obj2.address.city="mumbai";

// console.log(obj1, obj2);


// let fname="shuyeb";

// let lname= fname;
// lname="saifi";

// console.log(fname);
// console.log(lname);


// function sum(num1,num2,n3,n4,n5){
//     console.log(num1+num2+n3+n4+n5)
// }

// sum(1,2,3,4,5)
// // sum(10,20,30,10);
// console.log("h");





// function sum (a,b){
//     console.log(a+b)
// }

// sum(1,2);

// function sum(...theArgs) {
//     let total = 0;
//     for (const arg of theArgs) {
//       total += arg;
//     }
//     return total;
//   }

//   console.log(sum(1, 2, 3,8,6));
//   // expected output: 6

//   console.log(sum(1, 2, 3, 4,1));
//   // expected output: 10


// function sum (a,b){
//       document.write(a+b);
//       console.log(a+b+c)       
// }
// sum(10,20,30);



// function sum (){

//     let sum=0;

//     for(let i in arguments){
//         sum+=arguments[i];
//     }
//     console.log(sum);
//     document.write(sum + "<br>");

// }

// sum(10,20,30,40,50,50);
// sum(1,2,3,4,5);




// function sum(name,course,...age){
//         document.write(`Hello ${name} ${course} : `);
//         let sum=0;

//         for(let i in age){
//             sum +=age[i];
//         }

//          document.write(sum +"<br>");
// }

// sum("shuyeb","b.tech",18,2,3);
// sum("junaid","BCA", 10,3,5);



// function sum(...input){
//     // console.log(...input);
//     let sum=0;

//     for(let i in input){
//         sum +=input[i];

//     }
//         document.write(sum +"<br>");
// }





// function sum(name,...rest){
//         sum=0;
//         document.write(`my name ${name} `);
//         for(let i in rest){
//             sum+=rest[i];
//         }
//         document.write(sum);
// }

// var arr=[10,20,30];
// var arr1=[50,50];

// // sum("shuyeb",...arr);
// sum("junaid",...arr1);


// var arr1=[10,20,30,40];

// // var arr2=arr1;
// var arr2=[...arr1]
//    arr1.push(50);
// console.log(arr1)
// console.log(arr2)




// var arr1=[10,20,30,40];
// var arr2=[50,60,70,80,90];

// var arr3= arr1.concat(arr2);
// console.log(arr3);



// var arr1=[10,20,30,40,50];
// var arr2=[60,1,2,3,4,5,6];
// var arr4=[100,90,40,50,67,80,1,0];

// var arr3=[...arr1,...arr2,...arr4];
// console.log(arr3);


// var obj1={
//     name:"shuyeb",
//     course:"BCA"
// }

// var obj2={
//     city:"delhi"
// }

// var obj3={
//     age:21
// }


// obj4={...obj1,...obj2,...obj3};
// console.log(obj4);



// let n= "name";

// let obj={
//     [n]:"shuyeb",
//     course:"BCA"
// }

// console.log(obj);



// let n="shtudent";

// var obj={
//     [n+ " " + "name"]  : "shuyeb khan",
// }

// console.log(obj);




// let n= "student";
// var obj={
//     [n + "name"] : "shuyeb khan",
//     course :"BCA" ,
//     dtail: function(){

//          return `${this.studentname} is  student of ${this.course}`

//     }
// };


// console.log(obj.dtail());




// let fname="shuyeb";
// let lname="khan";
// let course="BCA";

// function student(){

//      let fullname= fname + " " +lname;

//      return {
//           fullname,course
//      };

// }


// console.log(student(fname,lname,course));




// var user=["shuyeb", 23];

// var name=user[0];
// console.log(name);

// var age=user[1];
// console.log(age);



// var user=["shuyeb", 23,"noida"];

// let [name,age, city]=user;

// console.log(name);
// console.log(age);
// console.log(city);






//    destructuring array

// let user=["shuyeb",23 , "noida", ["male", 25000]];
// let [name,age,city,[gender,salary]]=user;
// console.log(name);
// console.log(age);
// console.log(city);
// console.log(gender);
// console.log(salary);



// let user=["shuyeb",23,"noida"];

// let [name,...rest]=user;

// console.log(name);
// console.log(rest);



// function user([name,age,city]){
//        console.log(name);
//        console.log(age);
//        console.log(city);
// }

// user(["junaid",23,"noida"]);



// var obj={
//     name:"shuyeb",
//      age:22
// }

// console.log(obj.name);
// console.log(obj.age);




//      class student{
//         constructor(){
//             console.log("i am constructor");
//         }
//      }

// let a=new student();
// let b=new student();


// a.massage();
// a.sorry();


// class student{

//     constructor(name,age){
//       this.studentname=name;
//       this.studentage=age;
//         console.log("constructor function");

//     }

//       hello(){
//         console.log(`hello prototype my name ${this.studentname} my age is ${this.studentage}`);
//       }
//       static staticmetod(){

//         console.log("i am static method");
//       }

// }

// let a= new student("shuyeb", 23);

// let b= new student("junaid", 18);
// student.staticmetod();
// a.hello();
// b.hello();




// class cls{
//     static mth(){
//         console.log("i am second static method");
//     }
// }


// cls.mth();



// class employee{
//   constructor(name,age,salary){
//     this.empname=name;
//     this.empage=age;
//     this.empsalary=salary;

//   }
//   info(){



//     document.write(`<h3>Employee class </h3> 
//                       Name:${this.empname}<br>
//                        age:${this.empage}<br>
//                        salary:${this.empsalary}
//     `)
//   }
// }




// class manager extends employee{
//     info(){
//       let ta =1000;
//       let pa=500;
//       let totalsalary=this.empsalary+ta+pa;

//          document.write(`<h3>manager class</h3>
//                         name:${this.empname}<br>
//                         age:${this.empage}<br>
//                         salary:${totalsalary}<br>

//          `)
//     }
// }

// let a = new manager("shuyeb", 23,25000);
// let b=  new employee("junaid",18,12000);

// a.info();
// b.info();




// const outer=(eng,math)=>{
//  let sci=50;
//    console.log(`outer fn ${eng} ${math} ${sci}`);

//    const inner=()=>{
//           let practical=100;
//           let total= eng+ math+sci+practical;       
//              console.log(`total of inner function ${total}`);
//              return total;
//   }
//      return inner; 
// }

// // outer(70,80);

// let getMarks=outer(80,90); 
//   let mkTotal=getMarks();

//   console.log(mkTotal);






// let arr=[5,6,7];

// let a= arr.map((value)=>{
//   // console.log(value)

//   return value +1;
// })
// console.log(arr);
// console.log(a); 






// let arr = [2, 3, 4, 5, 6,];

// let arr1 = [];

// for (let i = 0;
//   i < arr.length; i++) {

//   arr1[i] = arr[i] * 2;
// }

// console.log(arr1);



// let arr=[2,3,4,5,6];

// let arr1=arr.map(function(value){
//   return value*3;
// })

// console.log(arr1);




// let arr=[2,3,4,5,6];

// let arr1=arr.map((val)=>val-1);

// console.log(arr1);




// // const num=[1,2,3,4,5,6,7,8,9];

// // const evenmum=num.map((n)=>{
// //   if(n%2===0){
// //     return n;
// //   }
// // });

// // console.log(evenmum)




// // let team= [
// //   {
// //     name:"shuyeb",
// //     position:"developer"
// //   },

// //   {
// //     name:"junaid",
// //     position:"manager"
// //   },

// //   {
// //     name:"mairaj",
// //     position:"ui ux desiner"
// //   },

// //   {
// //     name:"javed",
// //     position:"developer"
// //   }
// // ,
// //   {
// //     name:"shavez",
// //     position:"developer"
// //   }
// // ];

// // let dev=team.filter(val => val.position == "developer");

// // console.log(dev);


// // const thapa = {
// //   name: "shuyeb khan",
// //   qualification: "MCA",

// //   sum: function () {
// //     var add = 2 + 2;

// //     console.log(`this is a add of sum fumction ${add}`);
// //     console.log(this);
// //     // console.log(this.name);
// //     console.log(this.qualification);
// // //   }
// // // }




// // // var x=100;
// // // var y=10;
// // // var a=200;
// // // var b=20;

// // // var result;
// // // result=x+y;
// // // document.write(result);
// // // result=a+b;
// // // document.write('<br>');
// // // document.write(result);




// // // "use strict";

// // // let promiseCount = 0;

// // // function testPromise() {
// // //   const thisPromiseCount = ++promiseCount;
// // //   const log = document.getElementById("log");
// // //   // begin
// // //   log.insertAdjacentHTML("beforeend", `${thisPromiseCount}= Started<br>`);
// // //   // We make a new promise: we promise a numeric count of this promise,
// // //   // starting from 1 (after waiting 3s)
// // //   const p1 = new Promise((resolve, reject) => {
// // //     // The executor function is called with the ability
// // //     // to resolve or reject the promise
// // //     log.insertAdjacentHTML(
// // //       "beforeend",
// // //       `${thisPromiseCount}= Promise constructor<br>`
// // //     );
// // //     // This is only an example to create asynchronism
// // //     setTimeout(() => {
// // //       // We fulfill the promise
// // //        resolve(thisPromiseCount);
// // //     }, Math.random() * 2000 + 1000);
// // //   });

// // //   // We define what to do when the promise is resolved with the then() call,
// // //   // and what to do when the promise is rejected with the catch() call
// // //   p1.then((vale) => {
// // //     // Log the fulfillment value
// // //     log.insertAdjacentHTML("beforeend", `${vale}=> Promise fulfilled<br>`);
// // //   }).catch((reason) => {
// // //     // Log the rejection reason
// // //     console.log(`Handle rejected promise (${reason}) here.`);
// // //   });
// // //   // end
// // //   log.insertAdjacentHTML("beforeend", `${thisPromiseCount}) Promise made<br>`);
// // // }

// // // const btn = document.getElementById("make-promise");
// // // btn.addEventListener("click"



// // function GEEKFORGEEKS() {
// //     var name =
// //         document.forms.RegForm.Name.value;
// //     var email =
// //         document.forms.RegForm.EMail.value;
// //     var phone =
// //         document.forms.RegForm.Telephone.value;
// //     var what =
// //         document.forms.RegForm.Subject.value;
// //     var password =
// //         document.forms.RegForm.Password.value;
// //     var address =
// //         document.forms.RegForm.Address.value;
// //     var regEmail=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g; //Javascript reGex for Email Validation.
// //     var regPhone=/^\d{10}$/;									 // Javascript reGex for Phone Number validation.
// //     var regName = /\d+$/g;								 // Javascript reGex for Name validation

// //     if (name == "" || regName.test(name)) {
// //         window.alert("Please enter your name properly.");
// //         name.focus();
// //         return false;
// //     }

// //     if (address == "") {
// //         window.alert("Please enter your address.");
// //         address.focus();
// //         return false;
// //     }
    
// //     if (email == "" || !regEmail.test(email)) {
// //         window.alert("Please enter a valid e-mail address.");
// //         email.focus();
// //         return false;
// //     }
    
// //     if (password == "") {
// //         alert("Please enter your password");
// //         password.focus();
// //         return false;
// //     }

// //     if(password.length <6){
// //         alert("Password should be atleast 6 character long");
// //         password.focus();
// //         return false;

// //     }
// //     if (phone == "" || !regPhone.test(phone)) {
// //         alert("Please enter valid phone number.");
// //         phone.focus();
// //         return false;
// //     }

// //     if (what.selectedIndex == -1) {
// //         alert("Please enter your course.");
// //         what.focus();
// //         return false;
// //     }

// //     return true;
// // }





// // function navSlide() {
// //     const burger = document.querySelector(".burger");
// //     const nav = document.querySelector(".nav-links");
// //     const navLinks = document.querySelectorAll(".nav-links li");
    
// //     burger.addEventListener("click", () => {
// //         //Toggle Nav
// //         nav.classList.toggle("nav-active");
        
// //         //Animate Links
// //         navLinks.forEach((link, index) => {
// //             if (link.style.animation) {
// //                 link.style.animation = ""
// //             } else {
// //                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.5}s`;
// //             }
// //         });
// //         //Burger Animation
// //         burger.classList.toggle("toggle");
// //     });
    
// // }

// // navSlide();




// const form = document.querySelector("form");
// eField = form.querySelector(".email"),
// eInput = eField.querySelector("input"),
// pField = form.querySelector(".password"),
// pInput = pField.querySelector("input");

// form.onsubmit = (e)=>{
//   e.preventDefault(); //preventing from form submitting
//   //if email and password is blank then add shake class in it else call specified function
//   (eInput.value == "") ? eField.classList.add("shake", "error") : checkEmail();
//   (pInput.value == "") ? pField.classList.add("shake", "error") : checkPass();

//   setTimeout(()=>{ //remove shake class after 500ms
//     eField.classList.remove("shake");
//     pField.classList.remove("shake");
//   }, 500);

//   eInput.onkeyup = ()=>{checkEmail();} //calling checkEmail function on email input keyup
//   pInput.onkeyup = ()=>{checkPass();} //calling checkPassword function on pass input keyup

//   function checkEmail(){ //checkEmail function
//     let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/; //pattern for validate email
//     if(!eInput.value.match(pattern)){ //if pattern not matched then add error and remove valid class
//       eField.classList.add("error");
//       eField.classList.remove("valid");
//       let errorTxt = eField.querySelector(".error-txt");
//       //if email value is not empty then show please enter valid email else show Email can't be blank
//       (eInput.value != "") ? errorTxt.innerText = "Enter a valid email address" : errorTxt.innerText = "Email can't be blank";
//     }else{ //if pattern matched then remove error and add valid class
//       eField.classList.remove("error");
//       eField.classList.add("valid");
//     }
//   }

//   function checkPass(){ //checkPass function
//     if(pInput.value == ""){ //if pass is empty then add error and remove valid class
//       pField.classList.add("error");
//       pField.classList.remove("valid");
//     }else{ //if pass is empty then remove error and add valid class
//       pField.classList.remove("error");
//       pField.classList.add("valid");
//     }
//   }

//   //if eField and pField doesn't contains error class that mean user filled details properly
//   if(!eField.classList.contains("error") && !pField.classList.contains("error")){
//     window.location.href = form.getAttribute("action"); //redirecting user to the specified url which is inside action attribute of form tag
//   }
// }






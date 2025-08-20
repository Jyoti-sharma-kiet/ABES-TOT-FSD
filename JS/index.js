// // // // //var a=12;
// // // // //console.log("hiee="+a);
// // // //  let a=10;
// // // // console.log(typeof a);
// // // // if(a==10){
// // // //     let a=30;
// // // //     console.log("inside if a="+a);
// // // // }
// // // // console.log(a);
// // // let a= 10;
// // // let b = "Jyoti";
// // // if(a===b){
// // //     console.log("inside")
// // // }
// // // else console.log("outside")
// // let val = sum(20,30);
// // function sum(a,b)
// // {
// //     return a+b;
// // }

// // console.log("val ="+val)
// // let data = function(){
// //     console.log("hiee")
// // }
// // data();
// const data=()=>{return "function expression"}
// console.log(data())
// const sum = (a,b)=>{
//     return a+b;
// }

// console.log(sum(20,30))
// const add = (a,b)=>a+b;
// console.log(add(23,40));
// (()=>{console.log("method 1")})();
// (function(){console.log("method 2")})();
// function greet(msg="Hello"){return "method 3 "+msg;}
// console.log(greet());
function selectlanguage(lang)
{
    let data;
    if(lang == "java"){
    function javacompiler(){console.log("Java");}
 data = javacompiler();}
 else if(lang =="c"){function ccompiler(){console.log("C")}
data = ccompiler();}
else{
    console.log("nothing found");
}
}
selectlanguage("python");
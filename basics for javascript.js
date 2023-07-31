const var1 = document.createElement("h1");
const var2 = document.createTextNode("BASICS FOR JAVASCRIPT");

var1.append(var2);

const var3 = document.querySelector("body");

var3.append(var1);

var3.style.color="red";
var3.style.backgroundColor="white";
var3.style.fontFamily="arial";
var3.style.textAlign="center";
var3.style.marginTop="80px";
var1.style.textDecoration="underline";

const var4= document.createElement("img");

var4.setAttribute(
    "src","data:image/png;base64,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"
);
 var4.style.marginTop="40px";
 var4.style.height="70%";
 var4.style.width="70%";

 var5 = document.createElement("marquee");
 var5.append(var1);
 var3.append(var5);
 


var3.append(var4);

// array basics

console.log("************* ARRAY BASICS ******************");
const arr=[1,2,3,4,5,6,7,8,9];

// 1) for each(call back function)

console.log("********* FOREACH **********");
arr.forEach((value,index,currArr)=>{
    console.log(value,index,currArr);
})

// 2)map function

console.log("********* MAP **********");
const newArr=[];

arr.map((value,index,currArr)=>{
    newArr.push(value*10);
})

console.log(newArr);

// 3)filter function

console.log("********* FILTER **********");
const newArr1=[];
arr.filter((value,index,currArr)=>{
    if(value<=5){
        newArr1.push(value*10);
    }
})
console.log(newArr1);

// 4) reduce function

console.log("********* REDUCE **********");
const newArr2 =arr.reduce((preArr,currArr)=>{
    console.log(preArr,currArr);
    return currArr*10;
},0);
console.log("\t");

//inheritance concept:

class Vehicles{
    constructor(){
    
    }
    printdata(){
        console.log("************** INHERITANCE *****************************");
        console.log("vehicles are very helpful to human :");
    
    }
}

class FourWheel extends Vehicles{
    constructor(){
        super();
        super.printdata();
        console.log("********************************************************");
        console.log("four Wheels are high costly product:");
    }
}

class Hyundai extends FourWheel{
    constructor(name,year,owner_name){
        super();
        this.name=name;
        this.year= year;
        this.owner_name=owner_name;
    }
    printdata(){
        console.log(`vehicle name is: ${this.name}`);
        console.log(`started year: ${this.year}`);
        console.log(`owner_name is: ${this.owner_name}`);
    }
}

class TwoWheel extends Vehicles{
    constructor(){
        super();
        console.log("*********************************************************");
        console.log("two wheels are less costly product;");
    }
}

class TVS extends TwoWheel{
    constructor(name,year,owner_name){

        super();
        this.name=name;
        this.year= year;
        this.owner_name=owner_name;
    }
    printdata(){
        console.log(`vehicle name is: ${this.name}`);
        console.log(`started year: ${this.year}`);
        console.log(`owner_name is: ${this.owner_name}`);
    }
}
const vehicle=new Vehicles();

const vehicleData1 = new Hyundai("Hyundai",1996," chung ju-yung");

vehicleData1.printdata();

const vehicleData2 = new TVS("TVS",1987," venu srinivasan");

vehicleData2.printdata();
console.log("\t");

// copy by value:

console.log("******** COPY BY VALUE *************");
console.log();

const std1={
    name:"jack",
    age:20,
    roll_no:1
}

const student1 = std1;
console.log(`your name : ${student1.name}`);
console.log(`your age : ${student1.age}`);
console.log(`your roll_no : ${student1.roll_no}`);
console.log("\t");


//copy by reference:(using seperate operator(...))

console.log("******** COPY BY REFERENCE *************");

const std2={
    name:"john",
    age:20,
    roll_no:2
}

const student2={
    ...std2
}

console.log(`your name : ${student2.name}`);
console.log(`your age : ${student2.age}`);
console.log(`your roll_no : ${student2.roll_no}`);
console.log("\t");

// closure
console.log("****** CLOSURE *****************");

let name1 = "muhesh";

function print(){
    const name2 = "kanna";
    return name2;
}

const full_name=print();

console.log(`your name is : ${name1} ${full_name}`);

console.log("\t");

//by using function for accesing property:

console.log("*********** PROPERTY ACCESSING BY USING FUNCTION ***********************");

function Student(name,age,roll_no){
    this.name =name ;
    this.age = age;
    this.roll_no = roll_no;
}

Student.prototype.print=function(){

    console.log(`your name is : ${this.name}`);
    
    console.log(`your age is : ${this.age}`);
    
    console.log(`your roll_no is : ${this.roll_no}`);
}

const std = new Student("malai",20,0o7);

std.print();


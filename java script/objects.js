// let lecture = 10;
// let section = 3;
// let title = 'javascript';


// 
// // const price =9999;

// const course = {
//     lecture : 10,
//     section : 3,
//     title : 'javascript',
//     notes : {
//         introduction : "welcome to js course"
//     },
//     enroll(){
//         console.log('you are successfully enrolled');
//     }
// }

// // function enroll(){
// //     console.log('you are successfully enrolled');
// // }

// course.enroll()

// console.log(course)

// course.price = 999


//second method to declare class

functioncreateCourse(){
    const course ={
        lecture : 10,
        section:3,
        title: 'javascript',
        notes:{
            introduction: "welcome to js course"
        },
        enroll(){
            console.log('you are successfully enrolled');
        }
    }
    return course;
}

const course = createCourse('javascript');
course.enroll()
course.log(course)

//constructor function

function Course(){
    this.title = title;
    this.enroll = function(){
        console.log("you are successfully enrolled");
    }
}

// const course = new Course ('javascript');
// //delete course.title;
// course.checkEnrollment = function(){
//     console.log('30 users are enrolled');
// }
// course.enroll()

const course = new Course(' javascript');
console.log(course.constructor);
console.log(newCourse.constructor)

const course = {
    title : title,
    enroll(){
        console.log('you are successfully enrolled');

    }
}

const course = new Object ({
    title : title,
    enroll(){
        console.log('you are successfully enrolled');
})

const Course_1 = new Function('title', `
this.title = title,
this.enroll = function(){
    console.log('you are successfully enrolled');
}`)

const course_2 = new Course_1('javascript');
course.enroll();

let no1=10; //pass by value
let no2=no1;
console.log(no1);
console.log(no_2);

//refrence datatype
let obj = (no1 : 10); //memory location is passed
//in backend obj constructor is used
//pass by reference
let obj2 = obj;
obj.no1 = 15;
console.log(obj);
console.log(obj2);

//pass by value

const course = {
    title : title,
    enroll(){
        console.log('you are successfully enrolled');
}
   
}

// // const course_1 = {...course}
// // course_1.title = "c++";

// const course_1 = Object.assign((),course)
// course_1.title = 'c++';

f0r( let key in course){
    console.log(key,course[key]);
}

const course_1 = {};
for (let value of Object.keys(course)){
    // console.log(key,course[key]);
    course_1[key]= course[key]
}
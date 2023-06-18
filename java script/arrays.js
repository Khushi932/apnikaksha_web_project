const array = [1,2,3,4,5,6,7,8,9];
console.log(array)
console.log(array[5])
console.log(array[array.length-1])

const num = new Array[1,2,3,4,5,6,7,8,9];

//push
num.push(10);
console.log(num[num.length-1])

//unshift
num.unshift(0)
console.log(num.push(10))

//pop
num.pop();
console.log(num.pop())

//shift
num.shift()
console.log(num.shift())

num[0] = {num:80}
console.log(num)

const name = ['Khushi','Donna','Kashish','Bhavar','Ankit','Jay','Donna']
console.log(name)
console.log(names.indexOf('Jay'))
console.log(names.indexOf('Donna',3))
name.lastIndexOf('Donna')

names.includes('Bhavar')
let channels = [{
    name:'Apana college',
    Subscriber:1000
},{
    name:'Apani Kaksha',
    Subscriber:3000
},{
    name:'Aman dhattarwal',
    Subscriber:10000
}];

console.log(channels.includes({
    name: 'Apana College'
    Subscriber:1000
}))

console.log(channels.find(function(element){
    return element.Subscriber === 3000
}))

console.log(channels.find(element =>
    return element.name === 'Apni Kaksha'

))

console.log(channels.find(element =>
    return element.name === 'Apni Kaksha'

))

let names1 = ['Khushi','Donna','Kashish','Bhavar']
let names2 = [,'Ankit','Jay','Donna']
let names3 = names1.concat(names2)
console.log (names1.concat('Yash','Suraj'))
//console.log (names1.concat(names2))

//slice
console.log (names3.slice(3,5))

//spread operator 

let names4 = [...names1,...names2]

//for loop
for(let i=0;i<names.length;i++){
    console.log(names[i])
}

//forof
for(let name of names){
    console.log(name)
}

//for each
names.forEach(function(name,index){
    console.log(name,index);
})

//join
let student = ['s','h','i','v']
console.log(student.join('_'))
student = student.join('-');

//split
console.log(student.split(''))
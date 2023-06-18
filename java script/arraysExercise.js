const characters = [
    {
        name: 'Tarak Mehta',
        height : '172',
        mass:'77',
        eye_colour:'brown',
        gender:'male',
    },
    {
        name: 'Jethalal',
        height : '145',
        mass:'136',
        eye_colour:'black',
        gender:'male',
    },{
        name: 'Babita ji',
        height : '150',
        mass:'49',
        eye_colour:'grey',
        gender:'female',
    },{
        name: 'Krishnan Iyer',
        height : '168',
        mass:'84',
        eye_colour:'black',
        gender:'male',
    }
];

//get array of all names
const names = characters.map((ch) => {return ch.name});
console.log(names);
//get an array of objects with just name height properties
const properties = characters.map((ch) => {
    return { name: ch.name, height:ch.height}
});
console.log(properties);

//get the total height of all characters
const totalH = characters.reduce((preh,character)=>{
    return preh + Number(character.height);
});
console.log(totalH);

//get characters with mass greater than 100
const greaterthanMass = characters.filter ((character) =>
{
    return character.mass > 100
})
console.log(greaterthanMass);
//get all male charaters
const maleCh = characters.filter ((character) =>
{
    return character.gender =='male'
})
console.log(maleCh);

//sort by gender
const sortByGender = characters.sort ((character1,character2) =>
{
    if(character1.gender < character2.gender){
        return -1;
    }
    if(character1.gender > character2.gender){
        return 1;
    }
    return 0;
})
console.log(sortByGender);
//sort by name
const sortByName = characters.sort ((character1,character2) =>
{
    if(character1.name < character2.name){
        return -1;
    }
    if(character1.name > character2.name){
        return 1;
    }
    return 0;
})
console.log(sortByName);

//does every character have mass more than 40
console.log(characters.every((character) => character.mass > 40))
//does every character have blue eyes
console.log(characters.every((character) => character.eyes == 'blue'))

//is there atleat one male character
console.log(characters.some((character) => character.gender))
//is there atleat one character taller than 200
console.log(characters.some((character) => character.height > 200))
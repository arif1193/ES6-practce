const person = {name:'Jack William', Age : 30, Job: 'programming', gfName: 'Unknown', PhoneNumber: +01723792475, friendsName: ['Jamal', 'kamal','hasem']}

const {PhoneNumber,Job, Age} = person;
// const Job = person.Job;
// const PhoneNumber = person.PhoneNumber;



// console.log( Job, PhoneNumber, Age );
// console.log(Job);
// console.log(Job);
const friends = ['amir khan', 'salman khan', 'sharuk khan', 'arbaj khan'];
const [firstFriend, ...last ] = friends;
console.log(last);
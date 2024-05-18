
const age = 20;
console.log(Number(age), Boolean(age), String(age));
const name = 'Alex';
console.log(Number(name), Boolean(name), String(name));
const man = true;
console.log(Number(man), Boolean(man), String(man));
const ownCar = null;
console.log(Number(ownCar), Boolean(ownCar), String(ownCar));
const marriage = undefined;
console.log(Number(marriage), Boolean(marriage), String(marriage));
const alexey = {
    age,
    name
};
console.log(Number(alexey), Boolean(alexey), String(alexey));
const course = Symbol('id');
console.log(Boolean(course), String(course));
const intBigNumber = 300n;
console.log(Number(intBigNumber), Boolean(intBigNumber), String(intBigNumber));

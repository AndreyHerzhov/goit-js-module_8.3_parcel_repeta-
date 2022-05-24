/*
 * stringify, parse
 */

const user = {
    name: "Mango",
    age: "16"
}

console.log(JSON.stringify(user)) // {"name":"Mango","age":"16"}

const savedUserData = '{"name":"Mango","age":"16"}'

console.log(JSON.parse(savedUserData)) // {name: 'Mango', age: '16'}


/*
 *  localStorage
 */

console.log(localStorage)

localStorage.setItem('my-data', JSON.stringify({name: 'Poly', age: '16'}))

const savedData = localStorage.getItem('my-data')
console.log(savedData)

const parsedData = JSON.parse(savedData)
console.log(parsedData)
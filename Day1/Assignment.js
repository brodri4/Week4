//Palindrome Check
function palindromeCheck(str){
    let re = /[\W]/g //removes non-alphanumeric characters
    let lowRegStr = str.toLowerCase().replace(re, '')
    let reverseStr = lowRegStr.split('').reverse().join('')
    return reverseStr === lowRegStr
}

let word = "racecar"
console.log(palindromeCheck(word))

//Remove Duplicates
function duplicateRemove(array){
    return [...new Set(array)]
}

let names = ["John","Mary", "Alex", "Steve", "Mary", "John"] 
console.log(duplicateRemove(names))

//Item in array
function inArray(item, array){
    if (array.includes(item)){
        return true
    }   
    else {
        return false
    }
}

let array = ["a", "e", "i", "o", "u"]
console.log(inArray("r",array))
console.log(inArray("o",array))

//Largest number
function largestNumber(array){
    let n = array.length
    let newArray = array.sort(function(a,b){return a - b})
    return newArray[n-1]
}

let numberArray = [4,6,3,1,55,34,7]
console.log(largestNumber(numberArray))

//Smallest Number
function smallestNumber(array){
    let newArray = array.sort(function(a,b){return a - b})
    return newArray[0]
}

console.log(smallestNumber(numberArray))

//Fizzbuzz
function fizzBuzz(number) {
    if (number % 3 == 0 && number % 5 != 0) {
        return "FIZZ"
    }
    else if (number % 3 != 0 && number % 5 == 0) {
        return "BUZZ"
    }
    else if (number % 3 == 0 && number % 5 == 0) {
        return "FIZZBUZZ"
    }
    else{}
}

console.log(fizzBuzz(33))
console.log(fizzBuzz(35))
console.log(fizzBuzz(30))

//Even or Odd
function evenOdd(number){
    if (number % 2 == 0){
        return "Even"
    }
    else{
        return "Odd"
    }
}

console.log(evenOdd(44))
console.log(evenOdd(33))
console.log(evenOdd(-1))

//Ascending Sort
function sortAscend(array) {
    let n = array.length
    for (let j = 0; j < n - 1; j++) {
        for (let i = 0; i < n; i++) {
            if (array[i] > array[i + 1]) {
                let dummy = array[i]
                array[i] = array[i + 1]
                array[i + 1] = dummy
            }
        }
    }
    return array
}

testArray = [3,4,5,6,7,8,1]
console.log(sortAscend(testArray))

//Descending Sort
function sortDescend(array) {
    let n = array.length
    for (let j = 0; j < n - 1; j++) {
        for (let i = 0; i < n; i++) {
            if (array[i] < array[i + 1]) {
                let dummy = array[i]
                array[i] = array[i + 1]
                array[i + 1] = dummy
            }
        }
    }
    return array
}

console.log(sortDescend(testArray))

//Bank Example
class bankAccount {
    constructor(firstName, lastName, middleName, accountType){
        this.firstName = firstName
        this.lastName = lastName
        this.middleName = middleName
        this.balance = 100
        this.accountType = accountType
        this.status = "Opened"
    }
 
    overcharge(){
        if (this.balance < 0){
            this.balance -= 35
        }
    }
    withdraw(number) {
        this.balance -= number
        this.overcharge()
    }

    deposit(number) {
        this.balance += number
    }

    transferToAnother(number, accountTo) {
        this.withdraw(number)
        accountTo.deposit(number)  
    }
    transferFromAnother(number, accountFrom){
        this.deposit(number)
        accountFrom.withdraw(number)
    }
}


let accountSav = new bankAccount("John","Doe","Smith", "Savings")
let accountCheck = new bankAccount("Mary", "Sue", "Jane", "Checking")

//accountCheck.withdraw(150)
//console.log(accountCheck.balance)

accountSav.transferFromAnother(200, accountCheck)

console.log(accountSav.balance)
console.log(accountCheck.balance)


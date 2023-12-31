// Dev Console Commands

// regular
console.log('hello');

// interpolated
console.log('hello, i am a %s string', 'CRAZY');

// styled
console.log('%c hello, i am wacky text', 'font-size: 40px; background: red; text-shadow: 10px 10px 0 blue')

// warning
console.warn('LOOK BEHIND YOU');

// error
console.error('stop... error time');

// info
console.info('i am 6 feet and 1.5 inches tall');

// testing values and attributes
console.assert(1 === 2, 'yikes, try again');

const p = document.querySelector('p');
console.assert(p.classList.contains('lol'), 'wrong class buddy');

// clearing
console.clear();

// viewing DOM elements
console.log(p);
console.dir(p);

// grouping together
dogs.forEach(dog => {
  // console.group(`${dog.name}`); // auto-displays logged data
  console.groupCollapsed(`${dog.name}`);
  console.log(`this dog is named ${dog.name}`);
  console.log(`${dog.name} is ${dog.age} human years old`);
  console.log(`${dog.name} is ${dog.age * 7} dog years old`);
  console.groupEnd(`${dog.name}`);
});

// counting
console.count('test');
console.count('test');
console.count('test');
console.count('test');

// timing
console.time('fetching data...');
fetch('https://api.github.com/users/zackvf')
  .then(data => data.json())
  .then(data => {
    console.timeEnd('fetching data...');
    console.log(data);
  });



// Recursion Examples

// countdown function
function countdown(n) {
  if (n < 1) {
    return [];
  } else {
    const arr = countdown(n - 1);
    arr.unshift(n);
    return arr;
  }
}

// create a range of numbers
function rangeOfNumbers(startNum, endNum) {
  if (startNum > endNum) {
    return [];
  } else {
    const rangeArr = rangeOfNumbers(startNum + 1, endNum);
    rangeArr.unshift(startNum);
    return rangeArr;
  }
}

// adding all array elements together, where arr is the array of numbers passed and n is the array length to capture a desired result
function sum(arr, n) {
    if (n <= 0) return 0;
    return sum(arr, n - 1) + arr[n - 1];
}

// return the factorial of the provided integer, where the integer is greater than or equal to zero, using "tail recursion" for optimized stack performace/memory usage
function factorialize(num, factorial = 1) {
  if (num <= 0) return factorial;
  return factorialize(num - 1, factorial * num);
}



// General Examples

// basic keylogger/keystroke evaluator
const pressedKeys = [];
const keyCode = 'van';

// This listener is the basis for a key logger if the array simply stored each pressed key instead of doing something with the entries like splicing
window.addEventListener('keyup', (e) => {
    console.log("Key pressed: ", e.key);
    pressedKeys.push(e.key);
    // Splicing here trims the length of the array to the number of characters the key code has, while starting from the end of the array and going forward instead of from the beginning and going inwards
    pressedKeys.splice(-keyCode.length - 1, pressedKeys.length - keyCode.length);
    // 'If' here takes the string of the user input and checks for the key code inside of that joined string
    if (pressedKeys.join('').includes(keyCode)) {
        console.log('you win!');
    }
    console.log("Keys: ", pressedKeys);
});

// basic calculator
const calculator = {
    add: function(x, y) {
        return x + y;
    },
    subtract: function(x, y) {
        return x - y;
    },
    multiply: function(x, y) {
        return x * y;
    },
    divide: function(x, y) {
        return x / y;
    }
}

// basic clock
function clock() {
    setInterval(() => {
        console.clear();
        console.log(new Date().toLocaleTimeString());
    }, 1000);
}

// basic stopwatch
function Stopwatch() {
    let startTime;
    let endTime;
    let running;
    let duration = 0;
    // can also be written as let startTime, endTime, running, duration = 0

    this.start = function () {
        if (running)
            throw new Error("Stopwatch already started.");
        running = true;
        startTime = new Date();
    }

    this.stop = function () {
        if (!running)
            throw new Error("Timer already stopped.");
        running = false;
        endTime = new Date();
        let seconds = (endTime.getTime() - startTime.getTime()) / 1000;
        duration += seconds;
    }
    
    this.reset = function() {
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;
    }

    // read-only property, being a getter function, of the Stopwatch constructor function so as to not accidentally overwrite the duration outside of the timer
    Object.defineProperty(this, 'duration', {
        get: function() { return duration; }
    });
}

// mimic css pesticide extension (basic functionality)
function highlightDivs() {
    const alldivs = document.getElementsByTagName("*");
    for (let div in alldivs) {
        alldivs[div].style.border = "thin solid blue";
        console.log(alldivs[div]);
    }
}

// older version of Node file system create/read/update/delete operations
const fs = require('fs');
// Create a new file and write to it
fs.writeFile('./hello.txt', 'qwer', err => {
    if (err) {
        console.log(err);
    }
})
// Read an existing file
fs.readFile('./hello.txt', (err, data) => {
 if (err) {
     console.log('err');
 }
 console.log('Async', data.toString('utf8'));
})
const file = fs.readFileSync('./hello.txt');
console.log('Sync', file.toString());
// Append an existing file
fs.appendFile('./hello.txt', ' 123', err => {
 if (err) {
     console.log(err);
 }
})
// Delete an existing file
fs.unlink('./hello.txt', err => {
 if (err) {
     console.log(err);
 }
 console.log('File has been deleted.');
})

// convert celsius temperature value to fahrenheit and vice versa
function convertCtoF(c) {
  return c * 9/5 + 32;
}
function convertFtoC(f) {
  return (f - 32) * 5/9;
}

// reverse a string
function reverseString(str) {
  let newStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

// check for the presense of an element in an array
function arrayChecker(arr, elem) {
  if (arr.indexOf(elem) !== -1) { // if the index of the user-passed element is not equal to -1, meaning if the index is zero or a postive number, then it exists in the array
    return true;
  } 
  return false; // return false by default
}

// sort an array of numbers in ascending order without mutating the original array
function nonMutatingSort(arr) {
  return arr
    .concat([]) // can also use slice() here to copy the passed array
    .sort((a, b) => a - b);
}

// remove special characters and punctuation from a string with split()
function onlyString(str) {
  return str.split(/[^a-zA-Z0-9/s]/);
}

// turn a string with random whitespace into a hyphenated url
function onlyURL(title) {
  return title
    .toLowerCase()
    .trim()
    .split(/\s+/)
    .join("-");
}

// take a string parameter (which may contain special characters and punctuation) and return only a string
function onlySentence(str) {
  return str
    .split(/[^a-zA-Z0-9\s]/)
    .join(" "); // using a space adds a space between words, whereas using ("") would put all the words in the sentence together to form one long word
}



// Async Examples

// create a promise that resolves in 4 seconds and returns "success" string
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("success");
  }, 4000)
});

// run the above promise and make it console.log "success"
promise.then(console.log)
// or
promise.then(resp => console.log(resp))

// make the above promise shorter with Promise.resolve()
const promise = Promise.resolve(
  setTimeout(() => {
    console.log("success");
  }, 4000)
);

// convert the below promise into async function
fetch('https://swapi.co/api/starships/9/')
  .then(response => response.json())
  .then(console.log)
// result:
async function fetchStarship() {
  const response = await fetch('https://swapi.co/api/starships/9/')
  const data = await response.json();
  console.log(data);
}

// use Promise.all to fetch people from Star Wars API (SWAPI)
const urls = [
  'https://swapi.co/api/people/1',
  'https://swapi.co/api/people/2',
  'https://swapi.co/api/people/3',
  'https://swapi.co/api/people/4'
]

Promise.all(urls.map(url =>
    fetch(url).then(people => people.json())
))
    .then(array => {
        console.log('1', array[0])
        console.log('2', array[1])
        console.log('3', array[2])
        console.log('4', array[3])
      })
    .catch(err => console.log('ughhhh fix it!', err));

// rewrite the below async function to no longer user .then() from Promise
const urls = [
  'https://jsonplaceholder.typicode.com/users',
  'https://jsonplaceholder.typicode.com/posts',
  'https://jsonplaceholder.typicode.com/albums'
]

const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(url =>
      fetch(url).then(resp => resp.json())
  ));
  console.log('users', users);
  console.log('posts', posts);
  console.log('albums', albums);
}
// result:
const getData = async function() {
  const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
      const response = await fetch(url);
      return response.json();
  }));
  console.log('users', users);
  console.log('posts', posts);
  console.log('albums', albums);
}

// add a try catch block to the above solution to catch errors
const getData = async function() {
  try {
    const [ users, posts, albums ] = await Promise.all(urls.map(async function(url) {
        const response = await fetch(url);
        return response.json();
    }));
    console.log('users', users);
    console.log('posts', posts);
    console.log('albums', albums);
  } catch (err) {
    console.log('Error: ', err);
  }
}


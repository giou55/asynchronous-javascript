// CALLBACKS-------------------------------------------------------------------

function firstAction(callback, message, anotherCallback) {
  setTimeout(() => console.log(message), 1000);
  setTimeout(callback, 2000);
  anotherCallback();
}

function secondAction(message) {
  console.log(message);
}

function thirdAction() {
  console.log("I am the third action");
}

setTimeout(
  () =>
    firstAction(
      () => secondAction("I am the second action"),
      "I am the first action",
      thirdAction
    ),
  3000
);
// it prints
// I am the third action
// I am the first action
// I am the second action

// PROMISES--------------------------------------------------------------------
fetch("https://jsonplaceholder.typicode.com/users")
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    let users = jsonData;
    console.log(users);
  })
  .catch((error) => {
    console.log(error);
  });

const recordVideo1 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Video 1 Recorded");
  }, 3000);
});

const recordVideo2 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Video 2 Recorded");
  }, 1000);
});

const recordVideo3 = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve("Video 3 Recorded");
  }, 2000);
});

Promise.all([recordVideo1, recordVideo2, recordVideo3]).then((messages) => {
  console.log(messages);
});

// prints the message from the first finished promise
Promise.race([recordVideo1, recordVideo2, recordVideo3]).then((message) => {
  console.log(message);
});

// ASYNC/AWAIT--------------------------------------------------------------------

// print function became asynchronous, so it will retutn a Promise than a value
async function print(){
  return "Hello";
}

print().then(response => console.log(response));

// getData function also became asynchronous, so it will retutn a Promise than a value
async function getData(){
  const response = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await response.json();
  return data;
}

// because getData returns a Promise, we can use then() to consume the Promise
getData()
  .then(data => console.log(data))
  .catch(error => console.log(error));
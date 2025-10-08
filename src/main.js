//use jsonplaceholder.typicode.com, which gives fake user data.
//use the fetch () and .then() and .catch() to consume the promise
fetch("https://jsonplaceholder.typicode.com/users")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  })
  .catch(function (error) {
    console.log("There was an error");
    console.log(error);
  });
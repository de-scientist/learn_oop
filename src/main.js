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


// use async/await to consume the promise
async function fetchUser() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/users/1",
    );
    const data = await response.json(); // Convert response to JSON
    console.log(data); // Display user data
  } catch (error) {
    console.error("Error:", error); // Handle errors
  }
}

fetchUser();
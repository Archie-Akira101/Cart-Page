//Task 1
//Iterating with Async/Await: Write an async function iterateWithAsyncAwait that takes an array of values and logs each value with a delay of 1 second between logs.

const iterateWithAsyncAwait = async (array) => {
    for (value of array) {
        console.log(value);
        await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 1 second
    }
}

// Example usage:
iterateWithAsyncAwait([1, 2, 3, 4, 5]);






/******************************/
//Task 2
//Awaiting a Call: Create an async function awaitCall that simulates fetching data from an API. Use await to wait for the API response and then log the data.

//create awaitCall function
const awaitCall = async () => {
    // Fetch data from API
    try {
        const data = await fetchDataFromAPI();
        console.log(data);
    } catch (error) {
        console.error("Failed to fetch data:", error.message);
    }
}

//create fetchDataFromAPI function
const fetchDataFromAPI = async () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            // Simulate successful response
            // resolve("Data from API");
            // Simulate error response
            reject(new Error("API request failed"));
        }, 1000);
    });
}

// Example usage:
awaitCall();




//Task 3
//Handling Errors with Async/Await: Modify the awaitCall function to handle errors gracefully. If the API call fails, catch the error and log a user-friendly error message.
const chainedAsyncFunctions = async () => {
    await asyncFunction1();
    await asyncFunction2();
    await asyncFunction3();
}

const asyncFunction1 = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Async function 1 completed");
}

const asyncFunction2 = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Async function 2 completed");
}

const asyncFunction3 = async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log("Async function 3 completed");
}

// Example usage:
chainedAsyncFunctions();
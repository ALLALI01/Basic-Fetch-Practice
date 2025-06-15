async function fetchAPI() { // Function to fetch data from the API
    try {
        const response = await fetch('https://dan-collins-dev.github.io/dummy-data-fetching-repo/data/users.json'); // Fetch data from the API
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`); // Check if the response is OK
        }
        const data = await response.json(); // Parse the JSON response
        console.log(data); // Log the fetched data to the console for debugging
        return data; // Return the parsed JSON data
    } catch (error) {
        console.error('Fetch error:', error);
        return []; // Return an empty array on error to prevent further errors
    }
}

const userContainer = document.getElementById("users-container"); // Get the container where user data will be displayed
const getUsers = document.getElementById("fetch-users"); // Get the button to fetch users
const underTen = document.getElementById("under-ten-years"); // Get the button to filter users with less than 10 years employed
const reset = document.getElementById("reset-button"); // Get the button to reset the user list

getUsers.addEventListener("click", () => {
    fetchAPI().then(data => {
        userContainer.innerHTML = ""; // Clear previous content
        data.forEach(user => {
            const ul = document.createElement('ul'); // Create a new unordered list for each user
            ul.classList.add('user-list'); // Add a class to the unordered list for styling
            const li1 = document.createElement('li'); // Create list items for user details
            const li2 = document.createElement('li');
            const li3 = document.createElement('li');
            const li4 = document.createElement('li');
            li1.textContent = `Name: ${user.firstName} ${user.lastName}`; // Set text content for each list item
            li2.textContent = `Email: ${user.email}`;
            li3.textContent = `Company: ${user.companyName}`;
            li4.textContent = `Years Employed: ${user.yearsEmployed}`;
            userContainer.appendChild(ul); // Append the unordered list to the container
            ul.appendChild(li1); // Append list items to the unordered list
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
        });
    });
});

underTen.addEventListener("click", () => {
    fetchAPI().then(data => {
        userContainer.innerHTML = ""; // Clear previous content
        const filteredUsers = data.filter(user => user.yearsEmployed < 10);
        filteredUsers.forEach(user => {
            const ul = document.createElement('ul'); // Create a new unordered list for each user
            ul.classList.add('user-list'); // Add a class to the unordered list for styling
            const li1 = document.createElement('li'); // Create list items for user details
            const li2 = document.createElement('li');
            const li3 = document.createElement('li');
            const li4 = document.createElement('li');
            li1.textContent = `Name: ${user.firstName} ${user.lastName}`; // Set text content for each list item
            li2.textContent = `Email: ${user.email}`;
            li3.textContent = `Company: ${user.companyName}`;
            li4.textContent = `Years Employed: ${user.yearsEmployed}`;
            userContainer.appendChild(ul); // Append the unordered list to the container
            ul.appendChild(li1); // Append list items to the unordered list
            ul.appendChild(li2);
            ul.appendChild(li3);
            ul.appendChild(li4);
        });
    });
});

reset.addEventListener("click", () => {
    userContainer.innerHTML = ""; // Clear the list
});
//Write DOM code that changes the "placeholder" text in my headers <h1>-tagg and <h2>-tagg to whatever we decide to type

const headerh1 = document.getElementById("h1-header");
headerh1.textContent="Webb24 final Javascript task"

const headerh2 = document.getElementById("h2-header");
headerh2.textContent="Press the button to generate a nametag!"


document.addEventListener('DOMContentLoaded', function() {
    const userContainer = document.getElementById("user-container");    // Element with ID "user container" gets stored in a var
    const fetchButton = document.getElementById("fetchButton");         // Element with ID "fetchButton" gets stored in a var

    //Define a function to fetch data from our API, make a GET request and check if our response status is ok or not. If not shows "network response not ok"

    function fetchUserData() {
        fetch("https://randomuser.me/api/")
            .then(response => {
                if (!response.ok) {
                    throw new Error("Network response not ok");
                }
                return response.json();                             // Convert response to JSON format
            })
            .then(data => {
                displayUserData(data.results[0]);
            })
            .catch(error => {
                console.error("Error fetching user data", error);
            });
    }

    // Function to display all the collected user data from the API in different Divs
    function displayUserData(user) {
        
        userContainer.innerHTML = ""; // Clear the content of "user-container"
        
        const userElement = document.createElement("div");
        userElement.className = "user-item";
        
        const imgDiv = document.createElement("div");
        imgDiv.className = "user-image";
        imgDiv.innerHTML = `<img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">`;

        const nameDiv = document.createElement("div");
        nameDiv.className = "user-name";
        nameDiv.innerHTML = `<h3>${user.name.first} ${user.name.last}</h3>`;

        const genderDiv = document.createElement("div");
        genderDiv.className = "user-gender";
        genderDiv.innerHTML = `<p><strong>Gender:</strong> ${user.gender}</p>`;

        const emailDiv = document.createElement("div");
        emailDiv.className = "user-email";
        emailDiv.innerHTML = `<p><strong>Email:</strong> ${user.email}</p>`;

        const phoneDiv = document.createElement("div");
        phoneDiv.className = "user-phone";
        phoneDiv.innerHTML = `<p><strong>Phone:</strong> ${user.phone}</p>`;
        
        
        // Append all the newly created divs to my "userElement" div.
        userElement.appendChild(imgDiv);
        userElement.appendChild(nameDiv);
        userElement.appendChild(genderDiv);
        userElement.appendChild(emailDiv);
        userElement.appendChild(phoneDiv);

        // Append my userElement div to my "userContainer".
        userContainer.appendChild(userElement);
    }
    
    //EventListener added to my fetchButton to trigger my function when clicked.
    fetchButton.addEventListener("click", fetchUserData);
});



 
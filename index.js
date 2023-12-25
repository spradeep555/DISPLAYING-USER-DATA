document.getElementById("fetchusersbtn").addEventListener("click",FetchUsers);

function FetchUsers(){
    fetch("https://reqres.in/api/users")
    .then(response => response.json())
    .then(data => {
        let output = "";
        let finalData = (data.data)
        finalData.forEach(user => {
            output += `
            <div class ="user-card">
                <img src="${user.avatar}" alt ="User Avatar"/>
                <div class ="user-details">
                    <span class ="name">${user.first_name}</span>
                    <span class="email">${user.email}</span>
                </div>
            </div>
            `;
        });
        document.getElementById("usersList").innerHTML = output;
    })
    .catch(error => {
        console.error("There was an error fetching users : " , error);
    });
    }




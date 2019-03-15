export async function getAllUsers() {
    return fetch('http://localhost:3000/api/userlist').then(function(response) {
        return response.json();
    });
}

export async function addNewUser(userObject) {
    debugger;
    return fetch('http://localhost:3000/api/addUser', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(userObject)
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        return data;
    });
}

export async function updateExistingUser(userObject) {
    debugger;
    return fetch('http://localhost:3000/api/addUser', {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(userObject)
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        return data;
    });
}

export async function deleteUser(userObject) {
    return fetch('http://localhost:3000/api/deleteUser', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(userObject)
    }).then(function(response) {
        return response.json();
    }).then(function(data) {
        return data;
    });
}
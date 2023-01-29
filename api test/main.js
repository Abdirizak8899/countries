async function loadData (){
    const url = 'https://jsonplaceholder.typicode.com/users';
    const response = await fetch(url);
    const data = await response.json();
    let userInfo = document.querySelector(".tbody");
    
    
    data.forEach(element => {
        const {id , name , username , email} = element;
        let newRow = 
        `
        <tr>
        <td>${id}</td>
        <td>${name}</td>
        <td>${username}</td>
        <td>${email}</td>
        </tr>
        `
        userInfo.innerHTML += newRow
   
    });
}

loadData()



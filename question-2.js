const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
  .then(response => response.json())
//   .then (json => console.log(json))
  .then(data =>{
    const newUsers = data.map(user => user.name);
    const longName = newUsers.filter(name => name.length >= 17);

    console.log(longName);
  })
  .catch(error => console.error(`Error: Unable to fetch data. ${error.message}`));

  
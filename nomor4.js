const tampilkanData = () => {
    
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
        console.log("Data nama user")
        data.forEach((item, index) => {
        console.log(`${index + 1}. ${item.name}`);
        return data;
    });
    });
}

tampilkanData()
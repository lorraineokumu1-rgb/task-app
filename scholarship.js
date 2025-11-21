let applications = [];

document.getElementById("scholarForm").addEventListener("submit", function(e){
    e.preventDefault();

    let name = document.getElementById("name").value;
    let age = document.getElementById("age").value;
    let parent = document.getElementById("parent").value;
    let essay = document.getElementById("essay").value;

    if(name === "" || age === "" || parent === "" || essay === ""){
        document.getElementById("msg").textContent = "Please fill out all fields.";
        return;
    }

    let application = {
        name: name,
        age: age,
        parent: parent,
        essay: essay
    };

    applications.push(application);

    document.getElementById("msg").textContent = "Application submitted successfully!";

    document.getElementById("scholarForm").reset();

    console.log(applications);
    function displayApplications() {
    let list = document.getElementById("applicationsList");
    list.innerHTML = ""; // clear old list

    for (const app of applications) {
        let listItem = document.createElement("li");
        listItem.textContent = `Name: ${app.name}, Age: ${app.age}, Parent: ${app.parent}, Essay: ${app.essay}`;
        list.appendChild(listItem);
    }
}
// applications.push(application);

displayApplications();

document.getElementById("msg").textContent = "Application submitted successfully!";
document.getElementById("scholarForm").reset();
console.log(applications);


});

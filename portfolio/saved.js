const savedItems = JSON.parse(sessionStorage.getItem("saved-items"));
console.log(savedItems[0]);

const savedDiv = document.getElementById("saved");
const marlonImage = document.createElement("img");

savedDiv.append(marlonImage);

marlonImage.src = savedItems[0];

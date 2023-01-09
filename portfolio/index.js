const savedItems = [];

const saveMarlonPicture = () => {
  const marlonImage = document.getElementById("marlon-image").src;
  console.log(marlonImage);
  savedItems.push(marlonImage);
  sessionStorage.setItem("saved-items", JSON.stringify(savedItems));
};

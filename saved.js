const dataList = [];

const sessionStorageData = "saved-data";

const getSavedData = (value) => {
  const mySavedData = JSON.parse(sessionStorage.getItem(`${value}`));
  return mySavedData;
};

const savedData = getSavedData(sessionStorageData);

if (savedData !== null) {
  for (let i = 0; i < savedData.length; i++) {
    dataList.push(savedData[i]);
  }

  const container = document.getElementById("container");

  for (let i = 0; i < savedData.length; i++) {
    if (savedData[i].id === "header-image") {
      const img = document.createElement("img");
      img.src = savedData[i].value;
      container.append(img);
    }
    if (savedData[i].id === "about-me-paragraph") {
      const paragraph = document.createElement("p");
      paragraph.innerHTML = savedData[i].value;
      container.append(paragraph);
    }
    if (savedData[i].id === "my-photos-1") {
      const img = document.createElement("img");
      img.src = savedData[i].value;
      container.append(img);
    }
    if (savedData[i].id === "my-photos-2") {
      const img = document.createElement("img");
      img.src = savedData[i].value;
      container.append(img);
    }
    if (savedData[i].id === "my-photos-3") {
      const img = document.createElement("img");
      img.src = savedData[i].value;
      container.append(img);
    }
    if (savedData[i].id === "my-photos-4") {
      const img = document.createElement("img");
      img.src = savedData[i].value;
      container.append(img);
    }
    if (savedData[i].id === "my-photos-5") {
      const img = document.createElement("img");
      img.src = savedData[i].value;
      container.append(img);
    }
  }
}

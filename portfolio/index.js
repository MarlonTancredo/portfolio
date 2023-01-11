const dataList = [];
let plan;
let isCommentig = false;

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
}

const saveForLater = (id, value) => {
  const mySavedData = getSavedData(sessionStorageData);

  const data = {
    id: id,
    value: value,
  };

  let isEqual = false;
  for (const obj in mySavedData) {
    isEqual = _.isEqual(mySavedData[obj], data);

    if (isEqual) {
      return;
    }
  }

  dataList.push(data);
  sessionStorage.setItem("saved-data", JSON.stringify(dataList));

  getSavedDataQuantity();
};

const getSavedDataQuantity = () => {
  const mySavedData = getSavedData(sessionStorageData);

  alert(
    `You have added an item into save for later\nYou have ${mySavedData.length} itens`
  );
};

const likeButton = () => {
  console.log("like");
};

const sendMessage = () => {
  const name = document.getElementById("name-form");
  const email = document.getElementById("email-form");
  const subject = document.getElementById("subject-form");
  const message = document.getElementById("message-form");

  if (
    name.value === "" ||
    email.value === "" ||
    subject.value === "" ||
    message.value === ""
  ) {
    return;
  }

  alert("Message sent!");

  name.value = "";
  email.value = "";
  subject.value = "";
  message.value = "";
};

const formSelected = (value) => {
  plan = value;
};

const signUpButton = () => {
  alert(`You have chosed "${plan}" plan`);

  const myValue = document.getElementById(plan);
  myValue.checked = false;
};

const leaveAComment = () => {
  const myReputation = document.getElementById("my-reputation");

  const div = document.createElement("div");
  div.id = "comment";
  div.classList.add("user-comment");

  const userComment = document.createElement("input");
  userComment.id = "user-comment-input";

  const myCommentButton = document.createElement("button");
  myCommentButton.classList.add("button");
  myCommentButton.classList.add("dark-grey-button");
  myCommentButton.onclick = () => commentButton();

  const icon = document.createElement("i");
  icon.classList.add("fa");
  icon.classList.add("fa-commenting-o");

  myCommentButton.append(icon);

  div.append(userComment);
  div.append(myCommentButton);

  if (isCommentig) {
    return;
  }

  myReputation.append(div);

  isCommentig = true;
};

const commentButton = () => {
  const userCommentInput = document.getElementById("user-comment-input").value;

  const divMyReputation = document.getElementById("my-reputation");

  const divContainer = document.createElement("div");
  divContainer.classList.add("my-reputation-comments");

  const divImage = document.createElement("div");

  const img = document.createElement("img");
  img.src = "../img/dog-doctor.jpg";

  divImage.append(img);

  const divP = document.createElement("div");

  const p = document.createElement("p");

  p.append(userCommentInput);
  divP.append(p);

  divContainer.append(divImage);
  divContainer.append(divP);

  divMyReputation.append(divContainer);

  isCommentig = false;
  const divComment = document.getElementById("comment");
  divComment.remove(divComment);
};

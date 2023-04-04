const formDataDisplay = document.querySelector("#formData");
console.log(formDataDisplay);
const form = document.querySelector("#form");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const formData = new FormData(form);

  formData.forEach((value, key) => {
    console.log(key, value);
  });
});

function createListItem() {
  const list = document.getElementById("list");

  const listItem = document.createElement("div");
  listItem.className = "listItem";
  //h2 or Name
  const h2 = document.createElement("h2");
  const nameTextNode = document.createTextNode("3.Vaishnavi Nikam");
  h2.appendChild(nameTextNode);
  listItem.appendChild(h2);
  // Email
  const emailElement = document.createElement("a");
  emailElement.href = "mailto:vaishnavinikam36@gmail.com";
  const emailTextNode = document.createTextNode("vaishnavinikam36@gmail.com");
  emailElement.appendChild(emailTextNode);
  listItem.appendChild(emailElement);
  // Gender
  const genderElement = document.createElement("div");
  genderElement.classList.add("female");
  const genderTextNode = document.createTextNode("Female");
  genderElement.appendChild(genderTextNode);
  listItem.appendChild(genderElement);
  //Employement
  const employment = document.createElement("mark");
  const employementText = document.createTextNode("Unemployed");
  employment.appendChild(employementText);
  listItem.appendChild(employment);
  //ParaText
  const notesElement = document.createElement("p");
  const notesTextNode = document.createTextNode("Health is wealth");
  notesElement.appendChild(notesTextNode);
  listItem.appendChild(notesElement);

  list.appendChild(listItem);
}

createListItem();

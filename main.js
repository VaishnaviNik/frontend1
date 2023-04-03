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
  const a = document.createElement("a");
  a.href = "mailto:vaishnavinikam36@gmail.com";
  const emailTextNode = document.createTextNode("vaishnavinikam36@gmail.com");
  a.appendChild(emailTextNode);
  listItem.appendChild(a);
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
  const para = document.createElement("p");
  const paraText = document.createTextNode("Health is wealth");
  para.appendChild(paraText);
  listItem.appendChild(para);

  list.appendChild(listItem);
}
createListItem();

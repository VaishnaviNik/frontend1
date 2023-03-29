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
  listItem.id = "listItem";
  //h2 or Name
  const h2 = document.createElement("h2");
  const textNode = document.createTextNode("3.Vaishnavi Nikam");
  h2.appendChild(textNode);
  listItem.appendChild(h2);
  // Email
  const a = document.createElement("a");
  a.href = "mailto:vaishnavinikam36@gmail.com";
  const emailTextNode = document.createTextNode("vaishnavinikam36@gmail.com");
  a.appendChild(emailTextNode);
  listItem.appendChild(a);
  // Gender
  const gender = document.createElement("div");
  gender.classList.add("female");
  const genderTextNode = document.createTextNode("Female");
  gender.appendChild(genderTextNode);
  listItem.appendChild(gender);
  //Employement
  const mark = document.createElement("mark");
  const markText = document.createTextNode("Unemployed");
  mark.appendChild(markText);
  listItem.appendChild(mark);
  //ParaText
  const para = document.createElement("p");
  const paraText = document.createTextNode("Health is wealth");
  para.appendChild(paraText);
  listItem.appendChild(para);

  list.appendChild(listItem);
}
createListItem();

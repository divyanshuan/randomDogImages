const btn = document.getElementById("btn");
const imgsrc = document.getElementById("imggg");
btn.addEventListener("click", () => {
  const url = "https://dog.ceo/api/breeds/image/random";
  console.log("clicked");
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      console.log(data);
      imgsrc.src = data.message;
    })
    .catch((error) => {
      console.log(error);
    });
});

let form = document.querySelector("form");
let select = document.querySelector("select");
let input = document.querySelector("input");
let image = document.querySelector("img");

const getQR = async (e) => {
  e.preventDefault();
  const resposne = await fetch(
    `https://api.qrserver.com/v1/create-qr-code/?size=${select.value}&data=${input.value}`
  );
  image.setAttribute("src", resposne.url);
  form.reset();
};

form.addEventListener("submit", getQR);

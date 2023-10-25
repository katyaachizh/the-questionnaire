const form = document.querySelector(".form");
const userName = document.querySelector('#name');
const userSecondName = document.querySelector('#secondName');
const userEmail = document.querySelector('#email');
const userPhone = document.querySelector('#phone');
const userAgree = document.querySelector('#agree');
const sendButton = document.querySelector('#button');
const clearButton = document.querySelector('#clear');

form.addEventListener("submit", (event) => {
  event.preventDefault();
  
  fetch(`https://polinashneider.space/user`, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'Authorization': 'Bearer: katyaachizh'
    },
    body: JSON.stringify({
      name: `${userName.value}`,
      secondName: `${userSecondName.value}`,
      email: `${userEmail.value}`,
      phone: `${userPhone.value}`,
      agree: `${userAgree.checked}`
    }),
  })
  
  .then((result) => {
    return result.json();
  })
  .then((data) => {
    console.log(data);
    alert('Регистрация прошла успешно!');
    form.reset()
  })
  .catch((err) => {
    alert('Ошибка!');
  });
});

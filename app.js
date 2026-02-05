const form = document.querySelector(".form");
const successMessage = document.querySelector(".success__message");
const inputs = document.querySelectorAll(".form__part");
const radios = document.querySelectorAll('.form__radio');


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let submit = true;
  const inputsArray = Array.from(inputs);
  const radioChecked = [...radios].some(radio => radio.checked);
  const textError = radios[0].parentElement.parentElement.nextElementSibling;
  console.log(radioChecked);
  console.log(textError);
 
  if(!radioChecked){
    textError.classList.remove('hide');
    submit = false;
  } else{
    textError.classList.add('hide')
  }


  inputsArray.forEach((element) => {
  let tagName = element.tagName;
  let validationText = element.nextElementSibling;
  let inputValue = element.value;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

    if (element.type === "text") {
      if (inputValue.trim() === "") {
        validationText.classList.remove("hide");
        submit = false
      } else {
        validationText.classList.add("hide");
      }
    } else if (element.type === "email") {
      if (!emailRegex.test(inputValue.trim())) {
        validationText.nextElementSibling.classList.remove("hide");
        submit =  false;
      } else {
        validationText.nextElementSibling.classList.add("hide");
      }

      if (inputValue.trim() === "") {
        validationText.classList.remove("hide");
        submit = false
      } else {
        validationText.classList.add("hide");
      }
    }  else if (tagName === "TEXTAREA") {
      if (inputValue.trim() === "") {
        validationText.classList.remove("hide");
        submit = false
      } else {
        validationText.classList.add("hide");
      }
    } else if (element.type === "checkbox") {
      if (element.checked === false) {
        validationText.nextElementSibling.nextElementSibling.classList.remove("hide");
        submit = false;
      } else {
        validationText.nextElementSibling.nextElementSibling.classList.add("hide");
      }
    }
  });


  if (submit) {
    successMessage.classList.remove("hide");
  }
});

form.addEventListener("input", (e) => {
  e.preventDefault();
  let element = e.target;
  let tagName = e.target.tagName;
  let validationText = element.nextElementSibling;
  let inputValue = e.target.value;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (element.type === "text") {
    if (inputValue.trim() === "") {
      validationText.classList.remove("hide");
    } else {
      validationText.classList.add("hide");
    }
  } else if (element.type === "email") {
    if (!emailRegex.test(inputValue.trim())) {
      validationText.nextElementSibling.classList.remove("hide");
    } else {
      validationText.nextElementSibling.classList.add("hide");
    }

    if (inputValue.trim() === "") {
      validationText.classList.remove("hide");
    } else {
      validationText.classList.add("hide");
    }
  } else if (tagName === "TEXTAREA") {
    if (inputValue.trim() === "") {
      validationText.classList.remove("hide");
    } else {
      validationText.classList.add("hide");
    }
  }
});

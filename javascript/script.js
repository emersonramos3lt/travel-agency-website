// MENU
const mainMenu = document.getElementById("mainMenu");
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const items = document.querySelectorAll("nav .mainMenu li a");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

items.forEach(item => {
    item.addEventListener("click", function() {
        close();
    });
});

function show() {
    mainMenu.style.display = "flex";
    mainMenu.style.top = "0";
    document.body.style.overflow = "hidden";
}

function close() {
    mainMenu.style.top = "-110%";
    document.body.style.overflow = "auto";
}

// EMAIL VALIDATE
const validator = new JustValidate('#email-form');

validator 
    .addField('#email', [
        {
            rule: 'required',
        },
        {
            rule: 'email',
        }
    ])





    validator
  .addField('#basic_name', [
    {
      rule: 'required',
    },
    {
      rule: 'minLength',
      value: 3,
    },
    {
      rule: 'maxLength',
      value: 15,
    },
  ])
  .addField('#basic_email', [
    {
      rule: 'required',
    },
    {
      rule: 'required',
    },
    {
      rule: 'email',
    },
  ])
  .addField('#basic_password', [
    {
      rule: 'required',
    },
    {
      rule: 'password',
    },
  ])
  .addField('#basic_age', [
    {
      rule: 'required',
    },
    {
      rule: 'number',
    },
    {
      rule: 'minNumber',
      value: 18,
    },
    {
      rule: 'maxNumber',
      value: 150,
    },
  ]);
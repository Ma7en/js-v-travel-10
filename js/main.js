

/*
==============================================
==============================================
*/

/* ====== start header ===== */

const header = document.querySelector("header");

window.addEventListener("scroll", function() {
	header.classList.toggle("sticky", window.scrollY > 0);
});

let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menu.addEventListener("click", () => {
	menu.classList.toggle('bx-x');
	navbar.classList.toggle('open');
});

window.addEventListener("scroll", () => {
	menu.classList.remove('bx-x');
	navbar.classList.remove('open');
});


/* ====== end header ===== */

/*
==============================================
==============================================
*/

/* ====== start footer ===== */

let dateYear = document.querySelector(".dateYear");
let newData = new Date();

window.addEventListener("load", () => {
	dateYear.innerHTML = newData.getFullYear();
});


/* ====== end footer ===== */

/*
==============================================
==============================================
*/









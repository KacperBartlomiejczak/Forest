const burgerBtn = document.querySelector(".hamburger")
const navItems = document.querySelector(".nav__items")
const navItem = document.querySelectorAll(".nav__item")
const yearEl = document.querySelector(".footer__year")

let year = new Date().getFullYear()
//Nav toggle
let isNavOpen = false
const toggleNavHandler = event => {
	if (isNavOpen === false) {
		navItems.classList.add("nav__items--open")
		burgerBtn.classList.add("hamburger--open")
		isNavOpen = true
	} else {
		navItems.classList.remove("nav__items--open")
		burgerBtn.classList.remove("hamburger--open")
		isNavOpen = false
	}
}


yearEl.textContent = year
//Event listners
burgerBtn.addEventListener("click", toggleNavHandler) //BurgerEvent
navItem.forEach(item =>
	item.addEventListener("click", () => {
		navItems.classList.remove("nav__items--open")
		burgerBtn.classList.remove("hamburger--open")
		isNavOpen = false
	})
)

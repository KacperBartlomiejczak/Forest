const burgerBtn = document.querySelector(".hamburger")
const navItems = document.querySelector(".nav__items")

//Nav toggle
let isNavOpen = false

const toggleNavHandler = params => {
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

//Event listners
burgerBtn.addEventListener("click", toggleNavHandler) //BurgerEvent
ham = document.querySelector(".hamburger")

ham.addEventListener("click", () => {
	ham.classList.toggle("active")
})

const Theme = {
	LIGHT: 'light-theme',
	DARK: 'dark-theme',
};

const body = document.querySelector("body");
const checkBox = document.querySelector(".theme-switch__toggle");
const checkBoxTest = document.querySelector("#test-toggle");

const updateTheme = () => {
	if (localStorage.getItem("theme") === Theme.DARK) {
		body.classList.remove(Theme.LIGHT);
		body.classList.add(Theme.DARK);
		checkBox.checked = true;
	} else {
		body.classList.remove(Theme.DARK);
		body.classList.add(Theme.LIGHT);
	}
}

const setTheme = (evt) => {
	localStorage.setItem("theme", evt.target.checked ? Theme.DARK : Theme.LIGHT);
	updateTheme();
}

updateTheme();

checkBox.addEventListener("change", setTheme);

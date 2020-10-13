const Theme = {
	LIGHT: 'light-theme',
	DARK: 'dark-theme',
};

const body = document.querySelector("body");
const checkBox = document.querySelector(".theme-switch__toggle");
const checkBoxTest = document.querySelector("#test-toggle");

const updateTheme = () => {
	if (!localStorage.getItem("theme")) {
		body.classList.add(Theme.LIGHT);
		checkBox.checked = false;
		localStorage.setItem("theme", Theme.LIGHT);
	} else {
		if (localStorage.getItem("theme") === Theme.LIGHT) {
			body.classList.remove(Theme.DARK);
			body.classList.add(Theme.LIGHT);
			checkBox.checked = false;
		} else {
			body.classList.remove(Theme.LIGHT);
			body.classList.add(Theme.DARK);
			checkBox.checked = true;
		}
	}
}

const setTheme = () => {
	localStorage.setItem("theme", (localStorage.getItem("theme") === Theme.LIGHT) ? Theme.DARK : Theme.LIGHT);
	updateTheme();
}

updateTheme();

checkBox.addEventListener("change", setTheme);

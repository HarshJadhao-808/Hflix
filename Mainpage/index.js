let user_info = document.getElementById("user_info");
let search = document.getElementById("search");
let nav_2 = document.getElementById("nav_2");
const default_nav = () => {
	let button = document.createElement("button");
	let signin = document.createElement("img");
	signin.src = "../Images/signin.svg";
	button.append(signin);
	user_info.append(button);
	user_info.addEventListener("click", () => {
		window.location.href = "../SigninPage/signin.html";
	});
};

default_nav()

const signined_nav = () => {
    user_info.style.display="flex"
    user_info.style.gap="30px"
    user_info.style.width="260px"
    nav_2.style.width="63%"
    let user =document.createElement("div")
    user.setAttribute("id","user")
    let coin = document.createElement("div")
    search.style.marginTop="2px"



    coin.setAttribute("id","coin")
    user_info.append(coin,user)
};

// signined_nav();
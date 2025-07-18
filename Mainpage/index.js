let user_info = document.getElementById("user_info");
let search = document.getElementById("search");
let nav_2 = document.getElementById("nav_2");
const default_nav = () => {
    nav_2.style.width="56%"
    let button = document.createElement("button");
    button.setAttribute("id","signin")
	let signin = document.createElement("img");
	signin.src = "../Images/signin.svg";
	button.append(signin);
	user_info.append(button);
	user_info.addEventListener("click", () => {
		window.location.href = "../SigninPage/signin.html";
	});
};

// default_nav()

const signined_nav = () => {
    user_info.style.display="flex"
    user_info.style.gap="15px"
    nav_2.style.width="69%"
    let user =document.createElement("div")
    user_info.style.width="400px"
    // user_info.style.border="3px solid white"

    user.setAttribute("id","user")
    let coin = document.createElement("div")
    search.style.marginTop="2px"
    
    // H-coin div 
    
    let H_coin = document.createElement("img")
    H_coin.src="../Images/H logo.svg";
    let amount=document.createElement("h3")
    amount.innerText="500"
    let down_arrow=document.createElement("img")
    down_arrow.src = "../Images/arrow-down.svg";
    down_arrow.setAttribute("id","down_arrow")
    coin.append(H_coin,amount,down_arrow)
    
    // user div
    
    let profile=document.createElement("img") 
    profile.src = "../Images/profile.png";
    profile.setAttribute("id", "profile");
    let info_div = document.createElement("div"); 
    
    // temp name
    
    let  user_name= document.createElement("p"); 
    user_name.innerText="Harsh404"
    user_name.style.fontSize="18px"
    let  user_mail= document.createElement("p"); 
    user_mail.innerText="Harsh404@gmail.com"
    user_mail.style.fontSize="10px"
    user_mail.style.color = "rgba(245, 198, 28, 1)";
    info_div.style.padding="30px 0px"
    info_div.append(user_name,user_mail)
    let downarrow=document.createElement("img") 
    downarrow.src = "../Images/arrow-down.svg";
    downarrow.setAttribute("id","downarrow")
    user.append(profile,info_div,downarrow)
    
    coin.setAttribute("id","coin")
    user_info.append(coin,user)
};

signined_nav();
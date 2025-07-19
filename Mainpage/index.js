let user_info = document.getElementById("user_info");
let coinbuy = document.getElementById("buycoin");
let search = document.getElementById("search");
let login_amount="500";
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

const buycoin = () => {
    down_arrow.removeEventListener("mouseenter", buycoin);
    coinbuy.style.border = "3px solid rgba(245, 198, 28, 1)";
    let div=document.createElement("div")
    div.innerHTML = `
    <div id=first> 
    <img id="coinbuy_coin" src="../Images/H logo.svg">
    <h3>${login_amount}</h3>
    <h3>balance</h3>
    <img id="closecoin" src="../Images/arrow-square-left.svg">
    </div>
    <div id="second">
    
    <div id="buying_div">
    <img id="coinbuy_second_coin" src="../Images/H logo.svg">
    <h2>
    <input id="enteramount" placeholder="1000...">
    </h2>  
    <button>
    <img id="topup" src="../Images/Topup.svg">
    </button>
    </div>
    <div id="buyingoptions">
    <h2 class="bestbuy">100</h2>
    <h2 class="bestbuy">200</h2>
    <h2 class="bestbuy">500</h2>
    <h2 class="bestbuy">1000</h2>

    </div>

    </div>
    `;
  
    
    coinbuy.append(div)
}

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
    amount.innerText=login_amount
    let down_arrow=document.createElement("img")
    down_arrow.src = "../Images/arrow-down.svg";
    down_arrow.setAttribute("id","down_arrow")
    coin.append(H_coin,amount,down_arrow)
    down_arrow.addEventListener("mouseenter",buycoin)
    
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

// buycoin()


const close_coindiv=() =>{
 console.log("hello");
    
}
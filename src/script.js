let createButton = document.getElementById("createBtnM")
let walletName = document.getElementById("walletName")
let balance = document.getElementById("balance")
let desc = document.getElementById("desc")
createButton.addEventListener('click', (e)=>{
    e.preventDefault()
    console.log(desc.value);
})


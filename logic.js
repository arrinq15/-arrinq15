function scrollDown() { //функция для скрола
    window.scrollTo({top: window.innerHeight, behavior: 'smooth' });
}
let search_button = document.querySelector(".button-search")
let main = document.querySelector(".main")
let iphone = document.querySelector(".iphone")
let holodos = document.querySelector(".holodos")
let sigma = document.querySelector(".sigma")
let pc = document.querySelector(".pc")
let button_buy = document.querySelectorAll(".button-buy")
// 1 - первый телефон, 2 - компьютер, 3- сигма телефон, 4- холодильник
search_button.addEventListener('click', function(){
    let ser_number =document.querySelector("input").value
    if(ser_number == 1 || ser_number=="телефон iphone" || ser_number=="iphone"){
        holodos.style.display = 'none'
        sigma.style.display = 'none'
        pc.style.display = 'none'
        iphone.style.display = 'contents'
    }else{
        if(ser_number==2 || ser_number=="компьютер"){
            iphone.style.display ="none"
            holodos.style.display = 'none'
            sigma.style.display = 'none'
            pc.style.display = 'contents'
        }else{
            if(ser_number==3 || ser_number=="телефон сигма" || ser_number=="sigma"){
                iphone.style.display ="none"
                holodos.style.display = 'none'
                pc.style.display = 'none'
                sigma.style.display = 'contents'
            }else{
                if(ser_number==4 || ser_number=="холодильник" || ser_number=='холодильники'){
                    iphone.style.display ="none"
                    sigma.style.display = 'none'
                    pc.style.display = 'none'
                    holodos.style.display = 'contents'
                }else{
                    if(ser_number=="телефоны" || ser_number=="телефон"){
                        holodos.style.display = 'none'
                        pc.style.display = 'none'
                        iphone.style.display = 'contents'
                        sigma.style.display = 'contents'
                    }else{
                        if(ser_number=='всё' || ser_number=='ничего' || ser_number==" " || ser_number=="все"){
                            holodos.style.display = 'contents'
                            pc.style.display = 'contents'
                            iphone.style.display = 'contents'
                            sigma.style.display = 'contents'
                        }else{
                            alert("Товар не найден")}
                    }
                }
            }
        }
    }
    
})
for(let i=button_buy.length;i!=0;i-=1){
    button_buy[i-1].addEventListener("click",function(){
        alert("Товара нет на складе")
    })
}

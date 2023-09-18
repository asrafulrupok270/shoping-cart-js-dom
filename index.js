let value = 0;
let total = 0;
document.getElementById("first-btn").addEventListener("click",function(){
    value = value+1;
    const  count = value




    const firstElement = document.getElementById("first-card").innerText
    const firstPrice = document.getElementById("first-price").innerText
    const firstQuantity = document.getElementById("first-quantity").innerText
    const priceTotal = parseInt(firstPrice)*parseInt(firstQuantity)
    console.log(typeof priceTotal)
    const total = priceTotal+1;

 
  

    // const container = document.getElementById("table-container")
    // const tr = document.createElement("tr")
    // tr.innerHTML = `
    // <td>${1}</td>
    // `;
    // container.appendChild(tr)
    displayData(count,firstElement,firstPrice,firstQuantity,priceTotal)
    document.getElementById("first-btn").setAttribute("disabled",true)
    total()


})
document.getElementById("second-btn").addEventListener("click",function(){
    value = value+1;
    const  count = value


    const firstElement = document.getElementById("second-card").innerText
    const firstPrice = document.getElementById("second-price").innerText
    const firstQuantity = document.getElementById("second-quantity").innerText
    const priceTotal = parseInt(firstPrice)+parseInt(firstQuantity)
    console.log(typeof priceTotal)

 
  

    // const container = document.getElementById("table-container")
    // const tr = document.createElement("tr")
    // tr.innerHTML = `
    // <td>${1}</td>
    // `;
    // container.appendChild(tr)
    displayData(count,firstElement,firstPrice,firstQuantity,priceTotal)
    document.getElementById("second-btn").setAttribute("disabled",true)


})
document.getElementById("third-btn").addEventListener("click",function(e){
    value = value+1
     const count = value;
     
    const firstElement = e.target.parentNode.parentNode.children[0].innerText
 
    const firstPrice =  e.target.parentNode.parentNode.children[2].children[0].innerText
    // console.log(firstPrice)
    const firstQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText
    const priceTotal = parseFloat(firstPrice)/parseFloat(firstQuantity)
    displayData(count,firstElement,firstPrice,firstQuantity,priceTotal)
    document.getElementById("third-btn").setAttribute("disabled",true)

    

    // const priceTotal =  



})
document.getElementById("fourth-btn").addEventListener("click",function(e){
    value = value+1
     const count = value;
     
    const firstElement = e.target.parentNode.parentNode.children[0].innerText
 
    const firstPrice =  e.target.parentNode.parentNode.children[2].children[0].innerText
    // console.log(firstPrice)
    const firstQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText
    const priceTotal = parseFloat(firstPrice) - parseFloat(firstQuantity)
    displayData(count,firstElement,firstPrice,firstQuantity,priceTotal)
    document.getElementById("fourth-btn").setAttribute("disabled",true)

    

    // const priceTotal =  



})
document.getElementById("fifth-btn").addEventListener("click",function(e){
    value = value+1
     const count = value;
     
    // const firstElement = e.target.parentNode.parentNode.children[0].innerText
 
    // const firstPrice =  e.target.parentNode.parentNode.children[2].children[0].innerText
    // // console.log(firstPrice)
    // const firstQuantity = e.target.parentNode.parentNode.children[3].children[0].innerText
    // const priceTotal = parseFloat(firstPrice)/parseFloat(firstQuantity)
    // displayData(count,firstElement,firstPrice,firstQuantity,priceTotal)

    const firstElement = document.getElementById("text").innerText
    const firstPrice = document.getElementById("price").value 
    const firstQuantity  = document.getElementById("quantity").value
    
    if(firstPrice == "" || firstQuantity =="" || firstPrice == 0 ){
        return alert("valid number please")
    }
    
    const priceTotal = firstPrice*firstQuantity
    displayData(count,firstElement,firstPrice,firstQuantity,priceTotal)
    document.getElementById("fifth-btn").setAttribute("disabled",true)


    

    // const priceTotal =  



})



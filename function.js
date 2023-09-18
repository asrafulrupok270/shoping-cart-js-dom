function displayData(count,firstElement,firstPrice,firstQuantity,priceTotal){
    const table = document.getElementById("table-container")
    const tr = document.createElement("tr");
    tr.innerHTML = `
    <td>${count}</td>
 
     <td >${firstElement}</td>
     <td> ${firstPrice}</td>
      <td>${firstQuantity}</td>
      <td>${priceTotal}</td>
    `
    table.appendChild(tr)  
}














  // function total(){

  //   const total = document.getElementById("total")
  //   const all = document.getElementsByClassName("totali")
  //   for(item of all){
  //     item.addEventListener("click",function(){


  //     })
  //   }
  //   total.innerText(all)

  // }
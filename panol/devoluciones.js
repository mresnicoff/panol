"strict mode";
let table = document.getElementById("tableBody");
const handleClick=(number,i)=>{console.log(number)
  axios.delete(`http://localhost:3001/prestamo?id=${number}/`)
  .then(response => {
    llenarTabla(response.data)
      // Actualizar tabla o realizar otras acciones necesarias
  })
  .catch(error => {
     console.error("Error al agregar herramienta:", error);
  });
  table.removeChild(table.children[i])
}
const llenarTabla=(data)=>{console.log(data)

for (let i=0;i<data.length;i++){
  let row = document.createElement("tr")
  let c1 = document.createElement("td")
  let c2 = document.createElement("td")
  let c3 = document.createElement("td")
  let c4 = document.createElement("td")
  let c5 = document.createElement("td")
  c1.innerText = data[i].profesor
  c2.innerText = data[i].curso
  c3.innerText = data[i].herramienta
  c4.innerText = data[i].cantidad
  row.appendChild(c1);
  row.appendChild(c2);
  row.appendChild(c3);
  row.appendChild(c4);
  var btn = document.createElement('input');
btn.type = "button";
btn.className = "btn";
btn.value = "Devolver";
btn.onclick = function(){handleClick(data[i].id, i)} 
c5.appendChild(btn);
row.appendChild(c5);
  table.appendChild(row)
}



}
axios.get(`http://localhost:3001/prestamo/`)
.then(response => {
  llenarTabla(response.data)
    // Actualizar tabla o realizar otras acciones necesarias
})
.catch(error => {
   console.error("Error al agregar herramienta:", error);
});

// let table = document.getElementById("tableBody");
//   let row = document.createElement("tr")
//   let c1 = document.createElement("td")
//   let c2 = document.createElement("td")
//   let c3 = document.createElement("td")
//   let c4 = document.createElement("td")
//   let c5 = document.createElement("td")
//   c1.innerText = "Martin"
//   c2.innerText = "6 02"
//   c3.innerText = "Serrucho"
//   c4.innerText = "4"
//   row.appendChild(c1);
//   row.appendChild(c2);
//   row.appendChild(c3);
//   row.appendChild(c4);
//   var btn = document.createElement('input');
// btn.type = "button";
// btn.className = "btn";
// btn.value = "Devolver";
// //btn.onclick = (function(entry) {return function() {chooseUser(entry);}})(entry);
// c5.appendChild(btn);
// row.appendChild(c5);
//   table.appendChild(row)







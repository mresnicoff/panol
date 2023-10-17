"strict mode";
  const apellidoSelect = document.getElementById('apellido');
  const cursoSelect = document.getElementById('curso');
  const divisionSelect = document.getElementById('division');
  const herramientaSelect = document.querySelector(".herramienta");
  const cantidadSelect = document.getElementById('cantidad');
  
  const handleSubmit=()=>{console.log(listaHerramientas.children)
  var herramientasPrestadas=[]
  var myLenght=listaHerramientas.children.length
  for(var i = 0; i < listaHerramientas.children.length; i++) {
    herramientasPrestadas.push({herramienta:listaHerramientas.children[i].children[1].innerHTML,cantidad:listaHerramientas.children[i].children[3].innerHTML, profesor:listaHerramientas.children[i].children[5].innerHTML,  curso:listaHerramientas.children[i].children[7].innerHTML})

  
  }
  for(var i = 0; i < myLenght; i++) {
  listaHerramientas.removeChild(listaHerramientas.children[0]);}
console.log(herramientasPrestadas)
axios.post(`http://localhost:3001/prestamo/`, herramientasPrestadas)
.then(response => {

 alert("Prestamo Creado")

     // Actualizar tabla o realizar otras acciones necesarias

 }).catch(error => {
     alert("Error al crear el prestamo");
 });
//hacer llamada a axios  se le pasa herramientasPrestadas, que se debe modificar para agregarle el profesor y el curso, con la función que cree el préstamos
}

  function llenarSelect(selectElement, data) {
    selectElement.innerHTML = "";
    
    data.forEach(item => {
      const option = document.createElement('option');
      option.text = item.nombre || item.nombre_apellido || item.cantidad;
      selectElement.appendChild(option);
    })  
    
  }

  function cantidadHerramientas(select, herr){
    cantidadSelect.innerHTML = "";
    let cont = 1;
    herr.forEach(nombre=>{
      if(select.value === nombre.nombre){
        for(let j=0 ; j<nombre.cantidad ; j++){
          const option = document.createElement('option');
          // option.text = cont;
          option.text=4
          cantidadSelect.appendChild(option);
          cont++;
        }
      }
    })
  }
  axios.get(`http://localhost:3001/herramienta/`)
  .then(response => {
    console.log(response.data)
    llenarSelect(herramientaSelect,response.data)
      // Actualizar tabla o realizar otras acciones necesarias
  })
 .catch(error => {
     console.error("Error al agregar herramienta:", error);
 });

 axios.get(`http://localhost:3001/curso/`)
 .then(response => {
   console.log(response.data)
   llenarSelect(cursoSelect,response.data)
     // Actualizar tabla o realizar otras acciones necesarias
 })
.catch(error => {
    console.error("Error al agregar herramienta:", error);
});

axios.get(`http://localhost:3001/profesor/`)
.then(response => {
  console.log(response.data)
  llenarSelect(apellidoSelect,response.data)
    // Actualizar tabla o realizar otras acciones necesarias
})
.catch(error => {
   console.error("Error al agregar herramienta:", error);
});

 // llenarSelect(apellidoSelect, [{id:1,nombre_apellido:"Martin"}]);
 // llenarSelect(cursoSelect, [{idcurso:1,nombre:"6°2°"},{idcurso:2,nombre:"2°4°" }]);
 // llenarSelect(herramientaSelect, misHerramientas);
  //axios('panol.php')
    //.then(res => {
    //  const datos = res.data;
    //  const herramienta = datos.herramientas;
    //  llenarSelect(apellidoSelect, data.profesores);
    //  llenarSelect(cursoSelect, datos.curso);
    //  llenarSelect(herramientaSelect, datos.herramientas);
    //  cantidadHerramientas(herramientaSelect,herramienta);
    //  herramientaSelect.addEventListener("change", ()=>{
     //   cantidadHerramientas(herramientaSelect,herramienta);
     // });


   // })
   // .catch(err => console.error('Error al obtener los datos:', err));


const agregarHerramienta = document.getElementById("agregar-herramienta");
const listaHerramientas = document.getElementById("lista-herramientas");

agregarHerramienta.addEventListener("click", (e) => {
  e.preventDefault();
  const herramientaSeleccionada = herramientaSelect.options[herramientaSelect.selectedIndex].text;
  const cantidadSeleccionada = cantidadSelect.value;
  const apellidoSeleccionado = apellidoSelect.options[apellidoSelect.selectedIndex].text;
  const cursoSeleccionado = cursoSelect.options[cursoSelect.selectedIndex].text;
  
  const htmlLista = `
    <div>
      <label>Herramienta: </label>
      <span>${herramientaSeleccionada}</span>
      <label>Cantidad: </label>
      <span>${cantidadSeleccionada}</span>
      <label>Apellido: </label>
      <span>${apellidoSeleccionado}</span>
      <label>Curso: </label>
      <span>${cursoSeleccionado}</span>
    </div>
  `;

  listaHerramientas.innerHTML += htmlLista;
});

    
const agregarTabla = (apellido, curso, fi,ff) => {
    const fechaActual = new Date();
    const dia = fechaActual.getDate();
    const mes = fechaActual.getMonth() + 1;
    const anio = fechaActual.getFullYear();
    const hora = fechaActual.getHours();
    const minutos = fechaActual.getMinutes();

    const fechaCompleta = dia + '/' + mes + '/' + anio;
    const horaCompleta = hora + ':' + minutos + ' hrs';

    fi = fechaCompleta;
    ff = horaCompleta;

    let htmlCode=
    `
    <tr>
    <td class="apellido" >${apellido}</td>
    <td class="curso">${curso}</td>
    <td class="fecha">${herramienta}</td>
    <td class="fecha">${cantidad}</td>
    <td class="devolucion"></td>
    <td class="inventario">
        <button>ver</button>
        <button>devolver</button>
        <button>modificar</button>
    </td>
    </tr>
    `
    document.querySelector("table").innerHTML += htmlCode;
}




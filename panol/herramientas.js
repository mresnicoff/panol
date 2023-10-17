document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    const agregarButton = document.querySelector("button[name='agregar']");
    const modificarButton = document.querySelector("button[name='modificar']");
    const eliminarButton = document.querySelector("button[name='eliminar']");
    
    agregarButton.addEventListener("click", (event) => {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
        
        const formData = new FormData(form);
        const herramienta = formData.get("input-herramienta");
        const cantidad = formData.get("input-cantidad");;
        
        if (herramienta === "") {
            alert("Es necesario ingresar un nombre de herramienta.");
        } else if (!Number.isInteger(Number(cantidad)) || cantidad <= 0) {
            alert("La cantidad debe ser un número entero mayor a 0.");
        } else {
            const requestBody = [{
                agregar: true,
                nombre: herramienta,
                cantidad: cantidad
            }];
            
            axios.post(`http://localhost:3001/herramienta/`, requestBody)
                 .then(response => {
                    alert(`Herramienta ${requestBody[0].nombre} creada con exito` );
                     // Actualizar tabla o realizar otras acciones necesarias
                 })
                .catch(error => {
                    console.error("Error al agregar herramienta:", error);
                });
        }
    });
    

    modificarButton.addEventListener("click", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const id = formData.get("input-id");
        const herramienta = formData.get("input-herramienta");
        const cantidad = formData.get("input-cantidad");
        
        if (herramienta === "") {
            alert("Es necesario ingresar un nombre de herramienta.");
        } else if (!Number.isInteger(Number(cantidad)) || cantidad <= 0) {
            alert("La cantidad debe ser un número entero mayor a 0.");
        } else {
            const requestBody = {
                modificar: true,
                id: id,
                herramienta: herramienta,
                cantidad: cantidad
            };
    
            axios.post("herramientas.php", requestBody)
                .then(response => {
                    alert(response.data.message);
                    // Actualizar tabla o realizar otras acciones necesarias
                })
                .catch(error => {
                    console.error("Error al modificar herramienta:", error);
                });
        }
    });

    eliminarButton.addEventListener("click", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const id = formData.get("input-id");
        
        const requestBody = {
            eliminar: true,
            id: id
        };

        axios.post("herramientas.php", requestBody)
            .then(response => {
                console.log(response.data.message);
                // Actualizar tabla o realizar otras acciones necesarias
            })
            .catch(error => {
                console.error("Error al eliminar herramienta:", error);
            });
    });

// ...


    function llenarModificacion(id,herramienta,cantidad,data){
        let existe;
        inputId.addEventListener("keyup",()=>{
            data.forEach((herr)=>{
                if (id.value === herr.idherramientas) {
                    herramienta.value = herr.nombre;
                    cantidad.value = herr.cantidad;
                   existe = true;
                }
    
                if (id.value == "") {
                    herramienta.value = "";
                    cantidad.value = "";
                }
    
            })
            if(existe == false){
                herramienta.value = "";
                cantidad.value = "";
            }
           existe = false;
        })
    }
    
    
    
    function buscar(data){
        let buscarNombre = document.getElementById("input-buscar");
        buscarNombre.addEventListener("keyup",()=>{
            let htmlCode = 
            `    <caption>
                   <th>ID</th>
                   <th>Herramienta</th>
                </caption>
            `
            document.querySelector("table").innerHTML = htmlCode;
    
            data.forEach((herr)=>{
                if (herr.nombre.toLowerCase().includes(buscarNombre.value.toLowerCase())) {
                    let htmlCode = 
                    `
                    <tr>
                      <td>${herr.idherramientas}</td>
                      <td>${herr.nombre}</td>
                    </tr>
                    `
                    document.querySelector("table").innerHTML += htmlCode;
                   existe = true;
                }
    
            })
            if(existe == false){
                let htmlCode = 
                `    <caption>
                       <th>ID</th>
                       <th>Herramienta</th>
                    </caption>
                `
                document.querySelector("table").innerHTML = htmlCode;
            }
           existe = false;
        })
    
    }
    
    function llenarTabla(data){
        const tableBody = document.getElementById("tbody");
        tableBody.innerHTML = ""; // Borrar el contenido del cuerpo de la tabla primero
        data.forEach(herr => {
            let htmlCode = `    
            <tr>
                  <td class="id-herramienta">${herr.idherramientas}</td>
                  <td class="nombre-herramienta">${herr.nombre}</td>
            </tr>
            `;
            tableBody.insertAdjacentHTML("beforeend", htmlCode);
        });
    }
    
    const inputId = document.getElementById("input-id");
    const inputHerramienta = document.getElementById("input-herramienta");
    const inputCantidad = document.getElementById("input-cantidad");
    
    axios("panol.php")
        .then(res =>{
            const data = res.data.herramientas;
            llenarModificacion(inputId,inputHerramienta,inputCantidad,data);
            llenarTabla(data);
            buscar(data);
           existe = false;
        })
        
});

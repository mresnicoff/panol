document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    const agregarButton = document.querySelector("button[name='agregar']");
    const modificarButton = document.querySelector("button[name='modificar']");
    const eliminarButton = document.querySelector("button[name='eliminar']");
    
    agregarButton.addEventListener("click", (event) => {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente
    
        const formData = new FormData(form);
        const dni = formData.get("input-dni"); 
        const profesor = formData.get("input-nombre");
        const domicilio = formData.get("input-domicilio");
        const telefono = formData.get("input-telefono");
        
        if (!Number.isInteger(Number(dni)) || dni.length < 8 || dni.length > 8) {
            alert("El DNI debe ser un número entero de 8 dígitos.");
            return;
        }

        // Validación de nombre
        if (profesor.trim().length < 2 || /\d|\W/.test(profesor)) {
            alert("El nombre debe tener al menos 2 caracteres y no debe contener números ni signos.");
            return;
        }

        // Validación de domicilio
        if (domicilio.trim() === "" || /[^a-zA-Z0-9\s]/.test(domicilio)) {
            alert("El domicilio no puede estar vacío y solo puede contener letras, números y espacios.");
            return;
        }

        // Validación de teléfono
        if (!Number.isInteger(Number(telefono)) || telefono.length < 10 || telefono.length > 10) {
            alert("El teléfono debe ser un número entero de 10 dígitos, codigo de area + numero");
            return;
        }
        
        const requestBody = [{
            agregar: true,
            documento: dni,
            nombre_apellido: profesor,
            domicilio: domicilio,
            telefono: telefono
        }];
    
        axios.post(`http://localhost:3001/profesor/`, requestBody)
            .then(response => {
                alert(`Profesor ${requestBody[0].nombre_apellido} cargado con exito`);
                // Actualizar tabla o realizar otras acciones necesarias
            })
            .catch(error => {
                console.error("Error al agregar herramienta:", error);
            });
    });

    modificarButton.addEventListener("click", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const id = formData.get("input-id")
        const dni = formData.get("input-dni"); 
        const profesor = formData.get("input-nombre");
        const domicilio = formData.get("input-domicilio");
        const telefono = formData.get("input-telefono");
        
        if (!Number.isInteger(Number(dni)) || dni.length < 8 || dni.length > 8) {
            alert("El DNI debe ser un número entero de 8 dígitos.");
            return;
        }

        // Validación de nombre
        if (profesor.trim().length < 2 || /\d|\W/.test(profesor)) {
            alert("El nombre debe tener al menos 2 caracteres y no debe contener números ni signos.");
            return;
        }

        // Validación de domicilio
        if (domicilio.trim() === "" || /[^a-zA-Z0-9\s]/.test(domicilio)) {
            alert("El domicilio no puede estar vacío y solo puede contener letras, números y espacios.");
            return;
        }

        // Validación de teléfono
        if (!Number.isInteger(Number(telefono)) || telefono.length < 10 || telefono.length > 10) {
            alert("El teléfono debe ser un número entero de 10 dígitos, codigo de area + numero");
            return;
        }

        const requestBody = {
            modificar: true,
            id: id,
            dni: dni,
            nombre_apellido: profesor,
            domicilio: domicilio,
            telefono: telefono
        };

        axios.post("profesores.php", requestBody)
            .then(response => {
                alert(response.data.message);
                // Actualizar tabla o realizar otras acciones necesarias
            })
            .catch(error => {
                console.error("Error al modificar herramienta:", error);
            });
    });

    eliminarButton.addEventListener("click", (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        const id = formData.get("input-id");
        
        const requestBody = {
            eliminar: true,
            id: id
        };

        axios.post("profesores.php", requestBody)
            .then(response => {
                alert(response.data.message);
                // Actualizar tabla o realizar otras acciones necesarias
            })
            .catch(error => {
                console.error("Error al eliminar herramienta:", error);
            });
    });

    
    function llenarModificacion(id,dni,nombre,domicilio,telefono,data){
        let existe = false;
        inputId.addEventListener("keyup",()=>{
            data.forEach((prof)=>{
                if (id.value === prof.idprofesores) {
                    dni.value = prof.documento;
                    nombre.value = prof.nombre_apellido;
                    domicilio.value = prof.domicilio;
                    telefono.value = prof.telefono;
                   existe = true;
                }
    
                if (id.value == "") {
                    dni.value = "";
                    nombre.value = "";
                    domicilio.value = "";
                    telefono.value = "";
                }
    
            })
            if(existe == false){
                dni.value = "";
                nombre.value = "";
                domicilio.value = "";
                telefono.value = "";
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
                   <th>Nombre</th>
                </caption>
            `
            document.querySelector("table").innerHTML = htmlCode;
    
            data.forEach(prof=>{
                if (prof.nombre_apellido.toLowerCase().includes(buscarNombre.value.toLowerCase())) {
                    let htmlCode = 
                    `
                    <tr>
                      <td>${prof.idprofesores}</td>
                      <td>${prof.nombre_apellido}</td>
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
                       <th>Nombre</th>
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
        data.forEach(prof => {
            let htmlCode = `
                <tr>
                  <td class="id-herramienta">${prof.idprofesores}</td>
                  <td class="nombre-herramienta">${prof.nombre_apellido}</td>
                </tr>
            `;
            tableBody.insertAdjacentHTML("beforeend", htmlCode);
        });
    }
    
    const inputId = document.getElementById("input-id");
    const inputDni = document.getElementById("input-dni");
    const inputNombre = document.getElementById("input-nombre");
    const inputDomicilio = document.getElementById("input-domicilio");
    const inputTelefono = document.getElementById("input-telefono");
    
    axios("panol.php")
        .then(res =>{
            const data = res.data.profesores;
            console.log(data);
            llenarModificacion(inputId,inputDni,inputNombre,inputDomicilio,inputTelefono,data);
            llenarTabla(data);
            buscar(data);
           existe = false;
        })
});


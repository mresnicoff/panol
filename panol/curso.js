document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("form");

    const agregarButton = document.querySelector("button[name='agregar']");
    const modificarButton = document.querySelector("button[name='modificar']");
    const eliminarButton = document.querySelector("button[name='eliminar']");
    
    agregarButton.addEventListener("click", (event) => {
        event.preventDefault(); // Evita que el formulario se envíe automáticamente

        const formData = new FormData(form);
        const curso = formData.get("input-nombre");

        if (!/^\d+\s\d+$/.test(curso)) {
            alert("Debe ser en el formato 'número espacio número', por ejemplo: '6 2'")
            return;
        }

        cursoConcat = curso.replace(/\s/g, "°").concat("°");

        const requestBody = [{
              nombre: cursoConcat
        }];
    
        axios.post(`http://localhost:3001/curso/`, requestBody)
               .then(response => {

                alert("curso "+requestBody[0].nombre+" creado")
            
                    // Actualizar tabla o realizar otras acciones necesarias

                }).catch(error => {
                    alert("Error al crear el curso:", error);
                });

    });

    modificarButton.addEventListener("click", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const id = formData.get("input-id");
        const curso = formData.get("input-nombre");
        
        if (!/^\d+\s\d+$/.test(curso)) {
            alert("Debe ser en el formato 'número espacio número', por ejemplo: '6 2'");
            return;
        }

        const requestBody = {
            modificar: true,
            id: id,
            nombre: curso
        };


        axios.put(`http://localhost:3001/curso/`, requestBody)
            .then(response => {
                console.log(response)
                alert(response.data);
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
        console.log("Hola!",requestBody)

        axios.delete(`http://localhost:3001/curso?id=${requestBody.id}`)
            .then(response => {
                alert(response.data.message);
                // Actualizar tabla o realizar otras acciones necesarias
            })
            .catch(error => {
                console.error("Error al eliminar herramienta:", error);
            });
    });


    function llenarModificacion(id,curso,data){
        let existe = false;
        inputId.addEventListener("keyup",()=>{
            data.forEach((cur)=>{
                if (id.value === cur.idcurso) {
                    curso.value = cur.nombre;
                   existe = true;
                }
    
                if (id.value == "") {
                    curso.value = "";
                }
    
            })
            if(existe == false){
                curso.value = "";
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
                   <th>Curso</th>
                </caption>
            `
            document.querySelector("table").innerHTML = htmlCode;
    
            data.forEach(curso=>{
                if (curso.nombre.toLowerCase().includes(buscarNombre.value.toLowerCase())) {
                    let htmlCode = 
                    `
                    <tr>
                      <td>${curso.idcurso}</td>
                      <td>${curso.nombre}</td>
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
                       <th>Curso</th>
                    </caption>
                `
                document.querySelector("table").innerHTML = htmlCode;
            }
           existe = false;
        })
    
    }
    
    function llenarTabla(data) {
        const tableBody = document.getElementById("tbody");
        tableBody.innerHTML = ""; // Borrar el contenido del cuerpo de la tabla primero
        data.forEach(curso => {
            let htmlCode = `
                <tr>
                  <td class="id-herramienta">${curso.idcurso}</td>
                  <td class="nombre-herramienta">${curso.nombre}</td>
                </tr>
            `;
            tableBody.insertAdjacentHTML("beforeend", htmlCode);
        });
    }
    
    
    const inputId = document.getElementById("input-id");
    const inputCurso = document.getElementById("input-curso");
    
    axios("panol.php")
        .then(res =>{
            const data = res.data.curso;
            console.log(data);
            llenarModificacion(inputId,inputCurso,data);
            llenarTabla(data);
            buscar(data);
           existe = false;
        })
});



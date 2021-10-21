console.log('aguante olvoy');
document.querySelector('#boton').addEventListener('click',traerDatos);



function traerDatos(){

    //console.log('adentro1234delafuncion');
    const xhttp = new XMLHttpRequest();
    xhttp.open('GET','datos.json', true);
    xhttp.send();
    xhttp.onreadystatechange = function(){

        if(this.readyState == 4 && this.status == 200){

            console.log(this.responseText);
            let datos = JSON.parse(this.responseText);
            //console.log(datos);

            let respuestas = document.querySelector('#respuestas');
            respuestas.innerHTML +='' 
            
            

            for(let lera of datos){
                //console.log(lera.Nombre);
                respuestas.innerHTML += `
                <tr>
                    <th>${lera.nombre}</th>
                    <th>${lera.apellido}</th>
                    <th>${lera.dni}</th>
                    <th>${lera.fecha}</th>
                </tr>

                `
            }
                
        }
    }

}















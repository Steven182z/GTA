
//Reglas de negocio llevadas a cabo por funciones independientes
//Se generan los Arrays
const Familias = [{valor: 0, texto: '...'}, {valor: 1, texto: 'Datacenter'}, {valor: 2, texto: 'Digitales'}, {valor: 3, texto: 'Verticales'}]; //Array "Familias" 
const Datacenter = ['Acondicionamiento DC', 'Almacenamiento', 'Backup', 'Colocation', 'Email Protection', 'Hosting', 'SMDM - Seg Movil Empresarial', 'Seguridad Gestionada', 'Trafico/Internet Seguro', 'VDC - Virtual Datacenter']; //Array "Productos Datacenter" 
const Digitales = ['Azure Backup', 'Kaspersky', 'Loggro - ERP En La Nube', 'Marketing Wifi', 'McAfee - Antivirus', 'Office 365', 'Tu Web', 'UCaaS - HCS', 'Wifi Gestionado']; //Array "Productos Digitales" 
const Verticales = ["Smart M2M", "MEPE - Mensajeria Empresarial", "Gestion Vehicular", "OMV - Operadores Movil Virtuales", "Team Talk"]; //Array "Productos Verticales"

//Tipos de Requerimiento
const descripcionesTipoReq = [  { valor: 1, texto: 'Requerimiento' }, { valor: 2, texto: 'Mantenimiento' },{ valor: 3, texto: 'Falla' }]

const selectFamily = document.getElementById('SelectFamily');
const selectProduct = document.getElementById('SelectProduct');
const selectTypeReq = document.getElementById('tipo_Requerimiento');
// Obtener referencias a los elementos del DOM del fomulario del roll Front
const reqTypeCall = document.getElementById("reqType_Call");//trae el boton Opc. Llamada
const reqTypeEmail = document.getElementById("reqType_Email");//trae el boton Opc. Correo
const codeAtis = document.getElementById("CodeAtis");//trae el Codigo Atis



//BARRA DE NAVEGACION 
// COPIAR NUMEROS DE PESTAÑA DATACENTER.
// Recorre todos los elementos que tienen un ID que comienza con "copynumber"
document.querySelectorAll('[id^="copynumber"]').forEach(element => {

  element.addEventListener("click", function() {
    
    // Obtén el texto del elemento clicado
    const textToCopy = element.textContent;

    // Utiliza el API Clipboard para copiar al portapapeles 
    navigator.clipboard.writeText(textToCopy)
      .then(() => {
        
      });

  });

});

// Obtener referencia a los enlaces
const linkCrearCaso = document.getElementById("OpcNavFront");
const linkBack = document.getElementById("OpNavBack");
const linkPrincipal = document.getElementById("OpcNavPrincipal")

// Agregar listener a los enlaces
linkCrearCaso.addEventListener("click", () => {
  // Mostrar "Front Digital" y ocultar "Back Datacenter"
  document.getElementById("sectionfront").style.display = "block";
  document.getElementById("sectionback").style.display = "none";
  document.getElementById("sectionprincipal").style.display = "none";
});

linkBack.addEventListener("click", () => {
  // Mostrar "Back Datacenter" y ocultar "Front Digital"
  document.getElementById("sectionfront").style.display = "none";
  document.getElementById("sectionback").style.display = "block";
  document.getElementById("sectionprincipal").style.display = "none";
});

linkPrincipal.addEventListener("click", () => { 
  document.getElementById("sectionfront").style.display = "none";
  document.getElementById("sectionback").style.display = "none";
  document.getElementById("sectionprincipal").style.display = "block";
})


/**======================================================
*    Funcion para Mostrar la lista "Tipo de Requerimiento"
*=====================================================**/
descripcionesTipoReq.forEach(function(opcion) {
  let optionElement = document.createElement('option');
  optionElement.value = opcion.valor;
  optionElement.text = opcion.texto;
  selectTypeReq.appendChild(optionElement);
});
/**=====================  FIN FUNCION =================================**/


/**======================================================
*    Funcion para Mostrar la lista de "Familias"
*=====================================================**/
Familias.forEach(function(option) {
  let optionElement = document.createElement('option')
  optionElement.value = option.valor;
  optionElement.text = option.texto;
  selectFamily.appendChild(optionElement);
})
/**=====================  FIN FUNCION =================================**/


/**======================================================
*    Funcion para Mostrar la lista de productos
*=====================================================**/
selectFamily.addEventListener('change', function() {
  const selectedValue = this.value;
  let options = [];
   //condiciones
  if (selectedValue === '0') {
      options = "";
  } else if (selectedValue === '1') {
      options = Datacenter;
  } else if (selectedValue === '2') {
      options = Digitales;
  } else if (selectedValue === '3') {
      options = Verticales;
  } else {
      options = options;
  }

   // Limpiar las opciones anteriores
  selectProduct.innerHTML = '';
   // Agregar las nuevas opciones
  options.forEach(function(option) {
      const optionElement = document.createElement('option');
      optionElement.value = option;
      optionElement.textContent = option;
      selectProduct.appendChild(optionElement);
  });
});
/**=====================  FIN FUNCION =================================**/
/**=================  FUNCION  PLANTILLAS =============================**/


// Obtener referencia al botón submit
const btnSubmit = document.getElementById("btn-submitfront");

btnSubmit.addEventListener("click", () => {

  bodyPlantillas.style.display = "block";
  // Obtener valores del formulario
  const nit = document.getElementById("Nit").value;
  const empresa = document.getElementById("enterprise").value;
  const nombreCliente = document.getElementById("customerName").value;
  const correoCliente = document.getElementById("customerEmail").value;
  const numeroContacto = document.getElementById("customerPhone").value;
  const fallaReportada = document.getElementById("TittleReq").value;
  const fechaCorreo = document.getElementById("codeAtis").value;

  // Vaciar div de plantillas
  document.getElementById("bodyplantillas").innerHTML = "";
  const plantillaContainer = document.getElementById("plantillas-container");
  // Generar plantilla 1

  const plantilla1 = `
<div id="plantilla-1">
<h3>Primer avance</h3>
<ul>
  <li>► Datos de correo:</li>
  <br>
  <li>• NIT: ${nit}</li>
  <li>• Empresa: ${empresa}</li>
  <li>• Nombre del cliente autorizado: ${nombreCliente}</li>
  <li>• Correo del cliente: ${correoCliente}</li>
  <li>• Número de contacto: ${numeroContacto}</li>
  <li>• Falla reportada: ${fallaReportada}</li>
  <li>• Fecha de correo: ${fechaCorreo}</li>
</ul>
</div>
`;

  // Generar plantilla 2
  const plantilla2 = `
<div id="plantilla-2">
  <h3>Facturación</h3>
  <ul>
    <li>Resumen herramientas de facturación y trámites postventa:</li>
    <br>
    <li>• Se valida que el cliente se encuentra como contacto autorizado en la base CMBD.</li>
    <li>• Se valida el servicio en las herramientas de facturación y no registra novedades.</li>
    <li>• Se validan trámites en gestión que afecten la funcionalidad del servicio y no registra novedades.</li>
    <li>• Información Davox: Activo - Sin suspensión.</li>
    <li>• Validación Salesforce: Activo - Sin peticiones.</li>
  </ul>
</div>
  `;

  // Generar plantilla 3
  const plantilla3 = `
<div id="plantilla-3">
  <h3>Guión del problema</h3>
    <p>Estimado(a) Sr(a) ${nombreCliente}</p>
    <br>
    <p>A continuación, brindamos resumen de la afectación presentada del servicio de ${selectProduct.value} bajo el incidente citado en el asunto del presente correo.</p>
    <br>
    <p>Falla reportada: ${fallaReportada}</p>
    <p>De acuerdo con las pruebas realizadas: Se escala con el área de Datacenter.</p>
</div>
  `;

  const plantilla1SinEspacios = plantilla1.replace(/^\s+/gm,"");
  const plantilla2SinEspacios = plantilla2.replace(/^\s+/gm,"");
  const plantilla3SinEspacios = plantilla3.replace(/^\s+/gm,"");

  // Agregar al div vacío las plantillas
  document.getElementById("bodyplantillas").innerHTML += plantilla1SinEspacios;
  document.getElementById("bodyplantillas").innerHTML += plantilla2SinEspacios; 
  document.getElementById("bodyplantillas").innerHTML += plantilla3SinEspacios;

});

/**=================  FUNCION  CORREO =============================**/

// Obtener referencia al botón de Correo
const btnCorreo = document.getElementById("btnCorreo");


// Agregar listener de click al botón
btnCorreo.addEventListener("click", () => {
  
  bodyCorreo.style.display = "block";

  // Obtener datos del formulario
  const empresa = document.getElementById("enterprise").value;
  const numeroCaso = document.getElementById("customerINC").value;
  const nombre = document.getElementById("customerName").value;
  const tipoRequerimientoElement = document.getElementById("tipo_Requerimiento");
  const tiporeqValue = tipoRequerimientoElement.options[tipoRequerimientoElement.selectedIndex].text;
  const resumen = document.getElementById("TittleReq").value;
  
  

  document.getElementById("bodycorreo").innerHTML = "";
  const plantillaContainer = document.getElementById("correo-container");
  
  

    // Generar plantilla de correo
    const plantillaCorreo = `

    <p>Buen día,</p>
  
    <p>Señores ${empresa}</p>
  
    <p>Cordial saludo, para atender su caso se genera número de reporte ${numeroCaso} con la siguiente información:</p>
  
    <div id="contenido-correo">
  
      <p>Tipo: ${tiporeqValue}</p>
      <p>Nombre usuario: ${nombre}</p>
      <p>Cliente: ${empresa}</p>
      <p>Descripción de la solicitud: ${resumen}</p>
  
    </div>
  
  `;


 
  
  // Insertar plantilla
  document.getElementById("bodycorreo").innerHTML = plantillaCorreo;
});
//FUNCION CERRAR CORREO
// Obtener referencia al botón de cierre de Correo
const toggleCorreo = document.getElementById("toggleCorreo");
const bodyCorreo = document.getElementById("bodycorreo");

// Agregar listener de click al botón de cierre de Correo
toggleCorreo.addEventListener("click", () => {
  // Ocultar el body de la cardcorreo
  bodyCorreo.style.display = "none";
});

//FUNCION CERRAR PLANTILLAS

// Obtener referencia al botón de cierre de Plantillas
const togglePlantillas = document.getElementById("togglePlantillas");
const bodyPlantillas = document.getElementById("bodyplantillas");

// Agregar listener de click al botón de cierre de Plantillas
togglePlantillas.addEventListener("click", () => {
  // Ocultar el body de la cardplantillas
  bodyPlantillas.style.display = "none";
});



//FUNCION COPIAR CORREO

// Obtener referencia al botón "copycorreo"
const copyCorreoButton = document.getElementById("copycorreo");

// Agregar evento de clic al botón "copycorreo"
copyCorreoButton.addEventListener("click", function() {
  // Obtener el contenido del correo generado en la constante plantillaCorreo
  const correoContenido = document.getElementById("bodycorreo").innerText;

  // Copiar el contenido al portapapeles
  navigator.clipboard.writeText(correoContenido)
    .then(() => {
      // Acción adicional si la copia se realiza con éxito
   
    });
});

// FUNCION COPIAR PLANTILLAS 

// Obtener referencias a los botones de copia de plantillas
const copyPlantilla1Button = document.getElementById("copyplantilla-1");
const copyPlantilla2Button = document.getElementById("copyplantilla-2");
const copyPlantilla3Button = document.getElementById("copyplantilla-3");

// Agregar eventos de clic a los botones de copia de plantillas
copyPlantilla1Button.addEventListener("click", function() {
  copiarPlantillaAlPortapapeles("plantilla-1");
  contenidoPlantilla.querySelector("h3").remove(); // Eliminar el título
});

copyPlantilla2Button.addEventListener("click", function() {
  copiarPlantillaAlPortapapeles("plantilla-2");
});

copyPlantilla3Button.addEventListener("click", function() {
  console.log()
  copiarPlantillaAlPortapapeles("plantilla-3");
});

// Función para copiar la plantilla al portapapeles sin espacios en blanco y sin el título h3
function copiarPlantillaAlPortapapeles(plantillaId) {
  const plantilla = document.getElementById(plantillaId);

  if (plantilla) {
    // Clonar la plantilla para no afectar la original
    const plantillaClon = plantilla.cloneNode(true);

    // Buscar y eliminar el título h3 dentro del clon
    const tituloH3 = plantillaClon.querySelector("h3");
    if (tituloH3) {
      tituloH3.remove();
    }

    // Obtener el contenido del clon sin el título y sin espacios en blanco adicionales
    const contenidoPlantilla = plantillaClon.textContent.trim();

    // Crear un elemento temporal para copiar el contenido al portapapeles
    const tempElement = document.createElement("textarea");
    tempElement.value = contenidoPlantilla;

    // Agregar el elemento temporal al DOM
    document.body.appendChild(tempElement);

    // Seleccionar y copiar el contenido
    tempElement.select();
    document.execCommand("copy");

    // Eliminar el elemento temporal del DOM
    document.body.removeChild(tempElement);
      
  } else {
    console.error(`La plantilla con ID ${plantillaId} no fue encontrada.`);
  }
}

//FUNCION COMUNICACION CLIENTE FRONT


const btnComunicacion = document.getElementById("btn-comunicacionFront");

btnComunicacion.addEventListener("click", () => {

  bodyComunicacion.style.display = "block";

  // Obtener datos del formulario
  const numeroCaso = document.getElementById("customerINC").value; 
  const fallaReportada = document.getElementById("TittleReq").value;

  // Vaciar div contenedor
  document.getElementById("comunicacion-container").innerHTML = "";

  // Generar plantilla
  const plantillaComunicacion = `
    <div>
      Se realiza la apertura de ticket ${numeroCaso} para atender su solicitud de: ${fallaReportada}
    </div>
  `;

  // Agregar al div
  document.getElementById("comunicacion-container").innerHTML = plantillaComunicacion;

});

//FUNCION CERRAR COMUNICACION CLIENTE FRONT

// Obtener referencia al botón de cierre 
const toggleComunicacion = document.getElementById("cerrarcomunicacion");

// Obtener referencia al body que contiene la plantilla
const bodyComunicacion = document.getElementById("comunicacion-container");

// Agregar listener al botón de cierre
toggleComunicacion.addEventListener("click", () => {

  console.log()

  // Ocultar body al hacer click
  bodyComunicacion.style.display = "none";

});
//FUNCION COPIAR COMUNICACION CLIENTE FRONT

// Obtener referencia al botón copycomunicacioncliente
const copyComunicacionButton = document.getElementById("copycomunicacioncliente");

// Agregar event listener al botón
copyComunicacionButton.addEventListener("click", () => {

  // Obtener contenido generado en communicacion-container
  const comunicacionContenido = document.getElementById("comunicacion-container").innerText;

  // Copiar al portapapeles
  navigator.clipboard.writeText(comunicacionContenido)

});
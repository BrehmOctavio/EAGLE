//PROGRAMAR-AVISO

const aviso = document.querySelector(".alarma");
const cerrar2 = document.querySelector(".close2");
const divProgramarAviso = document.querySelector(".div-programar-aviso");
const cventas = document.querySelector(".cventas");
const crollos = document.querySelector(".crollos");
const cmts2 = document.querySelector(".cmts2");
const cdinero = document.querySelector(".cdinero");
const cancelarAviso = document.querySelector(".cancelar-aviso");

let alerta = false;


cerrar2.addEventListener("click",()=>{
    divProgramarAviso.style.transform = "translateX(1500px)";
    divProgramarAviso.style.opacity = "0";
});

aviso.addEventListener("click",()=>{
    divProgramarAviso.style.transform = "translateX(-60px)";
    divProgramarAviso.style.opacity = "10";
});

cventas.addEventListener("click",()=>{
    cventas.style.backgroundColor = "white";
    cventas.style.color = "rgb(112, 101, 167)";
    crollos.style.backgroundColor = "transparent";
    crollos.style.color = "white";
    cmts2.style.backgroundColor = "transparent";
    cmts2.style.color = "white";
    cdinero.style.backgroundColor = "transparent";
    cdinero.style.color = "white";
    cancelarAviso.textContent = "Cancelar aviso";
});

crollos.addEventListener("click",()=>{
    cventas.style.backgroundColor = "transparent";
    cventas.style.color = "white";
    crollos.style.backgroundColor = "white";
    crollos.style.color = "rgb(112, 101, 167)";
    cmts2.style.backgroundColor = "transparent";
    cmts2.style.color = "white";
    cdinero.style.backgroundColor = "transparent";
    cdinero.style.color = "white";
    cancelarAviso.textContent = "Cancelar aviso";
});

cmts2.addEventListener("click",()=>{
    cventas.style.backgroundColor = "transparent";
    cventas.style.color = "white";
    crollos.style.backgroundColor = "transparent";
    crollos.style.color = "white";
    cmts2.style.backgroundColor = "white";
    cmts2.style.color = "rgb(112, 101, 167)";
    cdinero.style.backgroundColor = "transparent";
    cdinero.style.color = "white";
    cancelarAviso.textContent = "Cancelar aviso";

});

cdinero.addEventListener("click",()=>{
    cventas.style.backgroundColor = "transparent";
    cventas.style.color = "white";
    crollos.style.backgroundColor = "transparent";
    crollos.style.color = "white";
    cmts2.style.backgroundColor = "transparent";
    cmts2.style.color = "white";
    cdinero.style.backgroundColor = "white";
    cdinero.style.color = "rgb(112, 101, 167)";
    cancelarAviso.textContent = "Cancelar aviso";
});

cancelarAviso.addEventListener("click",()=>{
    alerta = false;
    cancelarAviso.textContent = "No tienes avisos";
    cventas.style.backgroundColor = "transparent";
    cventas.style.color = "white";
    crollos.style.backgroundColor = "transparent";
    crollos.style.color = "white";
    cmts2.style.backgroundColor = "transparent";
    cmts2.style.color = "white";
    cdinero.style.backgroundColor = "transparent";
    cdinero.style.color = "white";
});

//ESTADISTICAS

const close = document.querySelector(".close");
const divMenu = document.querySelector(".div-menu");
const menu = document.querySelector(".menu");

menu.addEventListener("click",()=>{
    divMenu.style.opacity = "10";
    divMenu.style.transform = "translateX(1068px)";
});

close.addEventListener("click",()=>{
    divMenu.style.transform = "translateX(1600px)";
    divMenu.style.opacity = "0";
});

//FECHAS

const date = new Date();
const fecha = document.querySelector(".fecha");

setInterval(()=>{
    const dia = date.getDay();
    const mes = date.getMonth();
    const año = date.getFullYear();

    fecha.textContent = `${dia + 24} - ${mes + 1} - ${año}`;
},0);



//FUNCIONAMEINTO

const nombre = document.querySelector(".nombre");
const ubicacion = document.querySelector(".ubicación");
const cantidad = document.querySelector(".cantidad");
const ancho = document.querySelector(".ancho");
const color = document.querySelector(".color");
const reload = document.querySelector(".reload");
const punto = document.querySelector(".punto");
const guardar = document.querySelector(".guardar");
const body = document.querySelector(".body");
const form = document.querySelector("formulario");
const ul = document.querySelector(".ul");
const empty = document.querySelector(".empty");
let numeroCliente = 1;
const clear = document.querySelector(".clear-storage");


guardar.addEventListener("click",()=>{

    const n = nombre.value;
    const u = ubicacion.value;
    const ca = cantidad.value;
    const a = ancho.value;
    const c = color.value;

   if(puntoVenta == false){
    if(n !== ""){ 
        const li = document.createElement("LI");
        const p = document.createElement("P");
        p.textContent = `${n} | ${u} | ${ca} mts2 | ${a} mm | ${c}`;
        localStorage.setItem(`cliente ${numeroCliente}`,p.textContent);

        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
    
        empty.style.display = "none";
        numeroCliente += 1;
        clear.style.display = "block";
    };
   };

   if(puntoVenta == true){
    if(n !== ""){ 
        const li = document.createElement("LI");
        const p = document.createElement("P");
        p.textContent = `${n} | ${u} | ${ca} mts2 | ${a} mm | ${c}`;
        localStorage.setItem(`cliente ${numeroCliente}`,p.textContent);
        li.style.background = "linear-gradient(to right, rgb(124, 43, 216), transparent";
        li.style.border = "none";
        li.style.color = "white";
        li.style.borderRadius = "10px"
        
        li.appendChild(p);
        li.appendChild(addDeleteBtn());
        ul.appendChild(li);
    
        empty.style.display = "none";
        numeroCliente += 1;
        clear.style.display = "block";
    };
   };
});

function addDeleteBtn(){
    const deleteBtn = document.createElement("BUTTON");
    
    deleteBtn.textContent = "X";
    deleteBtn.className = "btn-delete";
    

    deleteBtn.addEventListener("click",(e)=>{
        const item = e.target.parentElement;
        item.style.transform = "translateX(3000px)";
        item.style.transition = "all 0.9s";
        setTimeout(()=>{
            ul.removeChild(item);
            const items = document.querySelectorAll("li");
            if(items.length === 0){
                empty.style.display = "block";
            };
        },900);
    });
    return deleteBtn;
};

clear.addEventListener("click",()=>{
    localStorage.clear();
    numeroCliente = 1;
    clear.style.display = "none";
});


const numeroDividir = document.querySelector(".numero-dividir");
const resultado = document.querySelector(".resultado");
const dividir = document.querySelector(".dividir");

const dividirNumero = ()=>{
    let res = numeroDividir.value / 20 + " " + "rollos";
    resultado.textContent = res;
};

dividir.addEventListener("click",()=>{
    dividirNumero();
});

//CALCULADORA

const calculadora = document.querySelector(".calculadora");

calculadora.addEventListener("click",()=>{
    const operacion = prompt("1 SUMAR - 2 RESTAR - 3 DIVIDIR - 4 MULTIPLICAR");
    if(operacion == 1){
        let numero1 = parseInt(prompt("Primer número"));
        let numero2 = parseInt(prompt("Segundo número"));
        alert(numero1 + numero2);
    };
    if(operacion == 2){
        let numero1 = prompt("Primer número");
        let numero2 = prompt("Segundo número");
        alert(numero1 - numero2);
    };
    if(operacion == 3){
        let numero1 = prompt("Primer número");
        let numero2 = prompt("Segundo número");
        alert(numero1 / numero2);
    };
    if(operacion == 4){
        let numero1 = prompt("Primer número");
        let numero2 = prompt("Segundo número");
        alert(numero1 * numero2);
    };
});

//PUNTO

let puntoVenta = false;

punto.addEventListener("click",()=>{
    punto.style.opacity = "10";
    puntoVenta = true;
    li.style.color = "white";
});

reload.addEventListener("click",()=>{
    formulario.reset();
    puntoVenta = false;
    punto.style.opacity = "0.3";
    li.style.color = "lightgrey";
});

//DARK-LIGHT

const dark = document.querySelector(".dark");
const light = document.querySelector(".light");
const divCalculadora = document.querySelector(".div-calculadora");
const info = document.querySelector(".info");
const divData = document.querySelector(".div-data");
const logo = document.querySelector(".logo");
const registro = document.querySelector(".registro");
const e1 = document.querySelector(".e1");
const e2 = document.querySelector(".e2");
const e3 = document.querySelector(".e3");
const e4 = document.querySelector(".e4");
const venta = document.querySelector(".ventas");
const mts2 = document.querySelector(".mts2");
const rollos = document.querySelector(".rollos");
const dinero = document.querySelector(".dinero");
const conteo1 = document.querySelector(".conteo1");
const conteo2 = document.querySelector(".conteo2");
const conteo3 = document.querySelector(".conteo3");
const conteo4 = document.querySelector(".conteo4");
const registroInputs = document.querySelector(".registro-inputs");
const registrar = document.querySelector(".registrar");
const reloadR = document.querySelector(".reload-r");
const nombrePerfil = document.querySelector(".nombre-perfil");



dark.addEventListener("click",()=>{
    dark.style.display = "none";
    light.style.display = "block";
    body.style.backgroundColor = "rgb(44, 44, 44)";
    guardar.style.backgroundColor = "transparent";
    guardar.style.color = "white";
    reload.style.filter = "invert(2)";
    divCalculadora.style.backgroundColor = "rgb(59, 59, 59)";
    divCalculadora.style.boxShadow = "0px 0px 0px 0px transparent";
    info.style.boxShadow = "0px 0px 0px 0px transparent";
    info.style.backgroundColor = "rgb(59, 59, 59)";
    divData.style.boxShadow = "0px 0px 0px 0px transparent";
    divData.style.backgroundColor = "rgb(59, 59, 59)";
    clear.style.filter = "invert(2)";
    logo.style.opacity = "0.7";
    divMenu.style.backgroundColor = "rgb(59, 59, 59)";
    menu.style.filter = "invert(2)";
    registro.style.color = "lightgray";
    e1.style.backgroundColor = "rgb(68, 68, 68)";
    e2.style.backgroundColor = "rgb(68, 68, 68)";
    e3.style.backgroundColor = "rgb(68, 68, 68)";
    e4.style.backgroundColor = "rgb(68, 68, 68)";
    e1.style.boxShadow = "0px 5px 14px 0px rgb(32, 32, 32)";
    e2.style.boxShadow = "0px 5px 14px 0px rgb(32, 32, 32)";
    e3.style.boxShadow = "0px 5px 14px 0px rgb(32, 32, 32)";
    e4.style.boxShadow = "0px 5px 14px 0px rgb(32, 32, 32)";
    venta.style.color = "lightgray";
    mts2.style.color = "lightgray";
    rollos.style.color = "lightgray";
    dinero.style.color = "lightgray";
    conteo1.style.color = "lightgray";
    conteo2.style.color = "lightgray";
    conteo3.style.color = "lightgray";
    conteo4.style.color = "lightgray";
    close.style.filter = "invert(2)";
    divMenu.style.boxShadow = "0px 3px 16px 0px rgb(26, 26, 26)";
    fecha.style.color = "white";
    registroInputs.style.boxShadow = "0px 0px 0px 0px transparent";
    registroInputs.style.backgroundColor = "rgb(59, 59, 59)";
    registrar.style.color = "white";
    reloadR.style.filter = "invert(2)";
    nombrePerfil.style.color = "white";
    aviso.style.filter = "invert(2)";
    divProgramarAviso.style.boxShadow = "0px 3px 9px 0px rgb(27, 27, 27)";
    calculadora.style.filter = "invert(2)";
});

light.addEventListener("click",()=>{
    dark.style.display = "block";
    light.style.display = "none";
    body.style.backgroundColor = "rgb(235, 235, 235)";
    guardar.style.backgroundColor = "transparent";
    guardar.style.color = "rgb(158, 158, 158)";
    divCalculadora.style.backgroundColor = "white";
    divCalculadora.style.boxShadow = "0px 2px 12px 0px rgb(224, 224, 224)";
    info.style.boxShadow = "0px 3px 12px 0px rgb(224, 224, 224)";
    info.style.backgroundColor = "white";
    divData.style.boxShadow = "0px 3px 12px 0px rgb(224, 224, 224)";
    divData.style.backgroundColor = "white";
    reload.style.filter = "invert(0)";
    divMenu.style.backgroundColor = "rgb(240, 240, 240)";
    menu.style.filter = "invert(0)";
    registro.style.color = "gray";
    e1.style.backgroundColor = "rgb(246, 246, 246)";
    e2.style.backgroundColor = "rgb(246, 246, 246)";
    e3.style.backgroundColor = "rgb(246, 246, 246)";
    e4.style.backgroundColor = "rgb(246, 246, 246)";
    e1.style.boxShadow = "0px 5px 14px 0px rgb(214, 214, 214)";
    e2.style.boxShadow = "0px 5px 14px 0px rgb(214, 214, 214)";
    e3.style.boxShadow = "0px 5px 14px 0px rgb(214, 214, 214)";
    e4.style.boxShadow = "0px 5px 14px 0px rgb(214, 214, 214)";
    venta.style.color = "rgb(165, 165, 165)";
    mts2.style.color = "rgb(165, 165, 165)";
    rollos.style.color = "rgb(165, 165, 165)";
    dinero.style.color = "rgb(165, 165, 165)";
    conteo1.style.color = "rgb(165, 165, 165)";
    conteo2.style.color = "rgb(165, 165, 165)";
    conteo3.style.color = "rgb(165, 165, 165)";
    conteo4.style.color = "rgb(165, 165, 165)";
    close.style.filter = "invert(0)";
    divMenu.style.boxShadow = " 0px 3px 14px 0px rgb(155, 155, 155)";
    fecha.style.color = "grey";
    registroInputs.style.boxShadow = "0px 3px 12px 0px rgb(224, 224, 224)";
    registrar.style.color = "rgb(158, 158, 158)";
    reloadR.style.filter = "invert(0)";
    registroInputs.style.backgroundColor = "white";
    nombrePerfil.style.color = "rgb(148, 148, 148)";
    aviso.style.filter = "invert(0)";
    divProgramarAviso.style.boxShadow = "0px 3px 9px 0px rgb(149, 149, 149)";
    calculadora.style.filter = "invert(0)";
});

//BODY.WIDTH

if(window.screen.width >= "1536"){
    divMenu.style.opacity = "0";
}

//REGISTRAR

const ventasR = document.querySelector(".ventas-r");
const mts2R = document.querySelector(".mts2-r");
const rollosR = document.querySelector(".rollos-r");
const dineroR = document.querySelector(".dinero-r");

let sumaVentas = 0;
let sumaMts2 = 0;
let sumaRollos = 0;
let sumaDinero = 0;

registrar.addEventListener("click",()=>{

    sumaVentas += parseInt(ventasR.value);
    sumaMts2 += parseInt(mts2R.value);
    sumaRollos += parseInt(rollosR.value);
    sumaDinero += parseInt(dineroR.value);

    conteo1.textContent = sumaVentas;
    conteo2.textContent = sumaMts2;
    conteo3.textContent = sumaRollos;
    conteo4.textContent = sumaDinero;
});


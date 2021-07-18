
// Los datos de los pacientes se vacían manualmente en tres arreglos de objetos.
// Todos los objetos tienen la misma estructura, el arreglo se llena con los datos ordenados por fecha
const datosRadiologia = [
    {
     hora: "11:00",
     especialista: "IGNACIO SCHULZ",
     paciente: "FRANCISCA ROJAS",
     rut: "9878782-1",
     prevision: "FONASA"
    },

    {
     hora: "11:30",
     especialista: "FEDERICO SUBERCASEAUX",
     paciente: "PAMELA ESTRADA",
     rut: "15345241-3",
     prevision: "ISAPRE"
    },

    {
     hora: "15:00",
     especialista: "FERNANDO WURTHZ",
     paciente: "ARMANDO LUNA",
     rut: "16445345-9",
     prevision: "ISAPRE"
    },

    {
     hora: "15:30",
     especialista: "ANA MARIA GODOY",
     paciente: "MANUEL GODOY",
     rut: "17666419-0",
     prevision: "FONASA"
    },

    {
     hora: "16:00",
     especialista: "PATRICIA SUAZO",
     paciente: "RAMON ULLOA",
     rut: "14989389-K",
     prevision: "FONASA"
    }
]

const datosTraumatologia = [
    {
     hora: "08:00",
     especialista: "MARIA PAZ ALTUZARRA",
     paciente: "PAULA SANCHEZ",
     rut: "15554774-5",
     prevision: "FONASA"
    },

    {
     hora: "10:00",
     especialista: "RAUL ARAYA",
     paciente: "ANGÉLICA NAVAS",
     rut: "15444147-9",
     prevision: "ISAPRE"
    },

    {
     hora: "10:30",
     especialista: "MARIA ARRIAGADA",
     paciente: "ANA KLAPP",
     rut: "17879423-9",
     prevision: "ISAPRE"
    },

    {
     hora: "11:00",
     especialista: "ALEJANDRO BADILLA",
     paciente: "FELIPE MARDONES",
     rut: "1547423-6",
     prevision: "ISAPRE"
    },

    {
     hora: "11:30",
     especialista: "CECILIA BUDNIK",
     paciente: "DIEGO MARRE",
     rut: "16554741-K",
     prevision: "FONASA"
    },

    {
     hora: "12:00",
     especialista: "ARTURO CAVAGNARO",
     paciente: "CECILIA MENDEZ",
     rut: "9747535-8",
     prevision: "ISAPRE"
    },

    {
     hora: "12:30",
     especialista: "ANDRES KANACRI",
     paciente: "MARCIAL SUAZO",
     rut: "11254785-5",
     prevision: "ISAPRE"
    }
]

const datosDental = [
    {
     hora: "08:30",
     especialista: "ANDREA ZUÑIGA",
     paciente: "MARCELA RETAMAL",
     rut: "11123425-6",
     prevision: "ISAPRE"
    },

    {
     hora: "11:00",
     especialista: "MARIA PIA ZAÑARTU",
     paciente: "ANGEL MUÑOZ",
     rut: "9878789-2",
     prevision: "ISAPRE"
    },

    {
     hora: "11:30",
     especialista: "SCARLETT WITTING",
     paciente: "MARIO KAST",
     rut: "7998789-5",
     prevision: "FONASA"
    },

    {
     hora: "13:00",
     especialista: "FRANCISCO VON TEUBER",
     paciente: "KARIN FERNANDEZ",
     rut: "18887662-K",
     prevision: "FONASA"
    },

    {
     hora: "13:30",
     especialista: "EDUARDO VIÑUELA",
     paciente: "HUGO SANCHEZ",
     rut: "17665461-4",
     prevision: "FONASA"
    },

    {
     hora: "14:00",
     especialista: "RAQUEL VILLASECA",
     paciente: "ANA SEPULVEDA",
     rut: "14441281-0",
     prevision: "ISAPRE"
    }
]



// Se agrega un nuevo arreglo con datos de pacientes de Traumatología, los cuales deben ser agregados al arreglo original

const datosNuevosTraumatologia = [
    {hora: '09:00',
     especialista: 'RENÉ POBLETE',
     paciente: 'ANA GELLONA',
     rut: '13123329-7',
     prevision: 'ISAPRE'},

    {hora: '09:30',
     especialista: 'MARIA SOLAR',
     paciente: 'RAMIRO ANDRADE',
     rut: '12221451-K',
     prevision: 'FONASA'},

    {hora: '10:00',
     especialista: 'RAUL LOYOLA',
     paciente: 'CARMEN ISLA',
     rut: '10112348-3',
     prevision: 'ISAPRE'},

    {hora: '10:30',
     especialista: 'ANTONIO LARENAS',
     paciente: 'PABLO LOAYZA',
     rut: '13453234-1',
     prevision: 'ISAPRE'},

    {hora: '12:00',
     especialista: 'MATIAS ARAVENA',
     paciente: 'SUSANA POBLETE',
     rut: '14345656-6',
     prevision: 'FONASA'}
];



// 1: Agregar a la lista de Traumatología el listado con los nuevos pacientes:
//    Se usará CONCAT para unir ambos arreglos y SORT para mostrarlos ordenados según hora
const datosTraumatologiaActualizados = datosTraumatologia.concat(datosNuevosTraumatologia);

// Se muestra el nuevo listado por cónsola y se deja ordenado para mejor visualización de la información
console.log(datosTraumatologiaActualizados.sort((primerDato, segundoDato) => (parseInt(primerDato.hora.substring(0, 2)) +
                                                                              parseInt(primerDato.hora.substring(3, 5)) / 100) - 
                                                                             (parseInt(segundoDato.hora.substring(0, 2)) + 
                                                                              parseInt(segundoDato.hora.substring(3, 5)) / 100)));



//2: Eliminar el primer y el último ellemento del arreglo de Radiología
//   Se usará SHIFT y POP respectivamente

// primero se mostrará el arreglo original de Radiología y se copia en otro arreglo para no hacer cambios permanentes en el original
console.log(datosRadiologia);

const datosRadiologiaCopia = datosRadiologia;

// luego se quitarán ambos extremos utilizando los métodos mencionados
datosRadiologia2.pop()   // se quita el últiimo elelemnto
datosRadiologia2.shift() // se quita el primer elemento
console.log(datosRadiologia2);


//3: Imprimir enel documento la lista de pacientes de Dental, separando con un guión cada item y cada paciente en una línea
//   se usará FOREACH para revisar cada uno y una interpolación para escribir cada valor

document.write("<strong>LISTADO DE PACIENTES DENTAL:</strong><br>")
datosDental.forEach(function(dato) {
    document.write(`${dato.hora} - ${dato.especialista} - ${dato.paciente} - ${dato.rut} - ${dato.prevision} <br>`)
})

document.write("<br><hr><br>")


//4: IMprimir un listado de todos los pacientes que se atendieron en el centro médico
//   Primero se crea un nuevo arreglo con todos los listados de los pacoentes con CONCAT 
//   y luego se usa REDUCE para obtener solo el listado de nombres
const todosLosPacientes = datosRadiologia2.concat(datosTraumatologiaActualizados.concat(datosDental))
const nombresPacientes = todosLosPacientes.reduce(function(listado, dato){
    return listado + " <br> " + dato.paciente
}, "")

document.write("<strong>LISTADO DE TODOS LOS PACIENTES DEL CENTRO: </strong><br>")
document.write(nombresPacientes);
document.write("<br><hr><br>")



//5. Filtrar pacientes de ISAPRE en la lista DENTAL
//   Se usará FOREACH para revisar todo el arreglo y FILTER para obtener solo los necesarios
const dentalIsapre = datosDental.filter(function(dato){
    return dato.prevision.toUpperCase() == "ISAPRE"
})

console.log(dentalIsapre);
document.write("<strong>LISTADO DE PACIENTES DENTAL CON PREVISION ISAPRE: </strong><br>")
dentalIsapre.forEach(function(dato){
    document.write(dato.paciente + " - " + dato.prevision + "<br>")
});
document.write("<br><hr><br>")



//6. Filtrar pacientes de FONASA en la lista TRAUMATOLOGIA
//   Se usará FOREACH para revisar todo el arreglo y FILTER para obtener solo los necesarios
const traumatologiaFonasa = datosTraumatologiaActualizados.filter(function(dato){
    return dato.prevision.toUpperCase() == "FONASA"
})

document.write("<strong>LISTADO DE PACIENTES DE TRAUMATOLOGÍA CON PREVISION FONASA: </strong><br>")
traumatologiaFonasa.forEach(function(dato){
    document.write(dato.paciente + " - " + dato.prevision + "<br>")
});
document.write("<br><hr><br>")






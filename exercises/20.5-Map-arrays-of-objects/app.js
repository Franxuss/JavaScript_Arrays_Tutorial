let people = [
	{ name: 'Joe', birthDate: '1986,10,24' },
	{ name: 'Bob', birthDate: '1975,5,24' },
	{ name: 'Erika', birthDate: '1989,6,12' },
	{ name: 'Dylan', birthDate: '1999,12,14' },
	{ name: 'Steve', birthDate: '2003,4,24' }
];

let simplifier = function(person){
	return 'Hello, my name is '+person.name+' and I am '+calculate_age(person.birthDate)+' years old';
};

console.log(people.map(simplifier));


function calculate_age(fecha)
{
    var hoy = '2020,12,13';
    var array_hoy = hoy.split(',');
    var hoy_año = array_hoy[0];
    var hoy_mes = array_hoy[1];
    var hoy_dia = array_hoy[2];

    //calculo la fecha que recibo
    //La descompongo en un array

    var array_fecha = fecha.split(',');

    //si el array no tiene tres partes, la fecha es incorrecta
    if (array_fecha.length!=3)
       return false;

    //compruebo que los ano, mes, dia son correctos
    var año = (array_fecha[0]);
    if (isNaN(año))
       return false;

    var mes = (array_fecha[1]);
    if (isNaN(mes))
       return false;

    var dia = (array_fecha[2]);
    if (isNaN(dia))
       return false;


    //si el año de la fecha que recibo solo tiene 2 cifras hay que cambiarlo a 4
    if (año<=99)
       año +=1900;

    //resto los años de las dos fechas
    var edad = hoy_año - año - 1; //-1 porque no se si ha cumplido años ya este año

    //si resto los meses y me da menor que 0 entonces no ha cumplido años. Si da mayor si ha cumplido
    if (hoy_mes + 1 - mes < 0){ //+ 1 porque los meses empiezan en 0
       return edad;
    }if (hoy_mes + 1 - mes > 0){
       return edad+1;
    }

    //entonces es que eran iguales. miro los dias
    //si resto los dias y me da menor que 0 entonces no ha cumplido años. Si da mayor o igual si ha cumplido
    if (hoy_dia - dia >= 0){
       return edad + 1;
    }

    return edad;
}


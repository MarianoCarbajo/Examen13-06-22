/*Dados estos 5 arreglos que representan las ventas semanales del primer trimestre, 
correspondientes a 5 vendedores de la empresa: 
Camila, Franco, Sofía, Matías y Agustina, respectivamente.
vendedor1 [32558, 36165, 34240, 39273, 34360, 21347, 20869, 21493, 23062, 31908, 30369, 30652] 
vendedor2 [27520, 31480, 24053, 34823, 32942, 38477, 23756, 21413, 26699, 22045, 25625, 26855] 
vendedor3 [20584, 33473, 34300, 24598, 33955, 24040, 39173, 25542, 25105, 26759, 29790, 36218] 
vendedor4 [27243, 38774, 21246, 30691, 24542, 39771, 31807, 31641, 20850, 29837, 37182, 28006] 
vendedor5 [23334, 32687, 25217, 26844, 27033, 35244, 25702, 25781, 35525, 34874, 38842, 20562]
Escribir un programa que permita determinar:
Para cada vendedor mostrar su nombre y 
1- su venta máxima indicando semana y mes de la misma.
2- su venta mínima indicando semana y mes de la misma.
3- su promedio trimestral de ventas.
4- su promedio mensual de ventas.
Entre todos los vendedores calcular:
5- nombre y monto vendido del mejor vendedor de cada semana.
6- nombre y suma de montos vendidos del mejor vendedor de cada mes
7- nombre y suma de montos vendidos del peor vendedor de cada mes
8- nombre y suma de montos vendidos de peor vendedor del trimestre
Tenga en cuenta que cada valor en los arreglos es la venta de una semana, 
y que cuatro semanas forman un mes.*/
let vendedoresNombres: string[] = [
  "Camila",
  "Franco",
  "Sofía",
  "Matías",
  "Agustina"
];
let vendedor1: number[] = [
  32558,
  36165,
  34240,
  39273,
  34360,
  21347,
  20869,
  21493,
  23062,
  31908,
  30369,
  30652
];
let vendedor2: number[] = [
  27520,
  31480,
  24053,
  34823,
  32942,
  38477,
  23756,
  21413,
  26699,
  22045,
  25625,
  26855
];
let vendedor3: number[] = [
  20584,
  33473,
  34300,
  24598,
  33955,
  24040,
  39173,
  25542,
  25105,
  26759,
  29790,
  36218
];
let vendedor4: number[] = [
  27243,
  38774,
  21246,
  30691,
  24542,
  39771,
  31807,
  31641,
  20850,
  29837,
  37182,
  28006
];
let vendedor5: number[] = [
  23334,
  32687,
  25217,
  26844,
  27033,
  35244,
  25702,
  25781,
  35525,
  34874,
  38842,
  20562
];
let mes: string[] = [
  "1er semana de enero",
  "2da semana de enero",
  "3ra semana de enero",
  "4ta semana de enero",
  "1er semana de febrero",
  "2da semana de febrero",
  "3ra semana de febrero",
  "4ta semana de febrero",
  "1er semana de marzo",
  "2da semana de marzo",
  "3ra semana de marzo",
  "4ta semana de marzo"
];
let indice: number = 0;
//función que muestra venta maxima
function ventaMaxima(vendedor: number[], semanas: string[]) {
  let mayor: number = 0;
  let mesMayor: string = "";
  let texto: string = "";

  for (indice = 0; indice < vendedor.length; indice++) {
    if (vendedor[indice] > mayor) {
      mayor = vendedor[indice];
      mesMayor = semanas[indice];
    }
  }
  texto = " es $" + mayor + " en la " + mesMayor;
  return texto;
}
console.log(
  "La mayor venta de " + vendedoresNombres[0] + ventaMaxima(vendedor1, mes)
);
console.log(
  "La mayor venta de " + vendedoresNombres[1] + ventaMaxima(vendedor2, mes)
);
console.log(
  "La mayor venta de " + vendedoresNombres[2] + ventaMaxima(vendedor3, mes)
);
console.log(
  "La mayor venta de " + vendedoresNombres[3] + ventaMaxima(vendedor4, mes)
);
console.log(
  "La mayor venta de " + vendedoresNombres[4] + ventaMaxima(vendedor5, mes)
);

//función que muestra venta minima
function ventaMinima(vendedor: number[], semanas: string[]) {
  let menor: number = 1000000;
  let mesMenor: string = "";
  let texto: string = "";
  for (indice = 0; indice < vendedor.length; indice++) {
    if (vendedor[indice] < menor) {
      menor = vendedor[indice];
      mesMenor = semanas[indice];
    }
  }
  texto = " es $" + menor + " en la " + mesMenor;
  return texto;
}
console.log(
  "La menor venta de " + vendedoresNombres[0] + ventaMinima(vendedor1, mes)
);
console.log(
  "La menor venta de " + vendedoresNombres[1] + ventaMinima(vendedor2, mes)
);
console.log(
  "La menor venta de " + vendedoresNombres[2] + ventaMinima(vendedor3, mes)
);
console.log(
  "La menor venta de " + vendedoresNombres[3] + ventaMinima(vendedor4, mes)
);
console.log(
  "La menor venta de " + vendedoresNombres[4] + ventaMinima(vendedor5, mes)
);
//Función que devuelve el promedio trimestral
function promedioTrimestral(vendedor: number[]): number {
  let suma: number = 0;
  let promedio: number = vendedor.length;
  for (indice = 0; indice < vendedor.length; indice++) {
    suma += vendedor[indice];
  }
  return suma / promedio;
}
console.log(
  "El promedio trimestral de " +
    vendedoresNombres[0] +
    " es $" +
    promedioTrimestral(vendedor1)
);
console.log(
  "El promedio trimestral de " +
    vendedoresNombres[1] +
    " es $" +
    promedioTrimestral(vendedor2)
);
console.log(
  "El promedio trimestral de " +
    vendedoresNombres[2] +
    " es $" +
    promedioTrimestral(vendedor3)
);
console.log(
  "El promedio trimestral de " +
    vendedoresNombres[3] +
    " es $" +
    promedioTrimestral(vendedor4)
);
console.log(
  "El promedio trimestral de " +
    vendedoresNombres[4] +
    " es $" +
    promedioTrimestral(vendedor5)
);

//Función que devuelve el promedio mensual
function promedioMensual(vendedor: number[], semana: number): number {
  let suma: number = 0;
  for (indice = semana - 1; indice < semana + 3; indice++) {
    suma += vendedor[indice];
  }
  return suma / 4;
}
console.log(
  "Para " +
    vendedoresNombres[0] +
    " el promedio de enero es $" +
    promedioMensual(vendedor1, 1) +
    ", el de febrero es $" +
    promedioMensual(vendedor1, 5) +
    " y el de marzo es $" +
    promedioMensual(vendedor1, 9)
);
console.log(
  "Para " +
    vendedoresNombres[1] +
    " el promedio de enero es $" +
    promedioMensual(vendedor2, 1) +
    ", el de febrero es $" +
    promedioMensual(vendedor2, 5) +
    " y el de marzo es $" +
    promedioMensual(vendedor2, 9)
);
console.log(
  "Para " +
    vendedoresNombres[2] +
    " el promedio de enero es $" +
    promedioMensual(vendedor3, 1) +
    ", el de febrero es $" +
    promedioMensual(vendedor3, 5) +
    " y el de marzo es $" +
    promedioMensual(vendedor3, 9)
);
console.log(
  "Para " +
    vendedoresNombres[3] +
    " el promedio de enero es $" +
    promedioMensual(vendedor4, 1) +
    ", el de febrero es $" +
    promedioMensual(vendedor4, 5) +
    " y el de marzo es $" +
    promedioMensual(vendedor4, 9)
);
console.log(
  "Para " +
    vendedoresNombres[4] +
    " el promedio de enero es $" +
    promedioMensual(vendedor5, 1) +
    ", el de febrero es $" +
    promedioMensual(vendedor5, 5) +
    " y el de marzo es $" +
    promedioMensual(vendedor5, 9)
);

//Función con el mejor vendedor de cada semana
function elMejorDeLaSemana(
  nombre: string[],
  v1: number[],
  v2: number[],
  v3: number[],
  v4: number[],
  v5: number[]
): string {
  let texto: string = "";
  for (indice = 0; indice < v1.length; indice++) {
    if (
      v1[indice] > v2[indice] &&
      v1[indice] > v3[indice] &&
      v1[indice] > v4[indice] &&
      v1[indice] > v5[indice]
    ) {
      texto +=
        "En la semana " +
        (indice + 1) +
        " el mejor fue " +
        nombre[0] +
        " con un total de $ " +
        v1[indice] +
        ". ";
    } else if (
      v2[indice] > v1[indice] &&
      v2[indice] > v3[indice] &&
      v2[indice] > v4[indice] &&
      v2[indice] > v5[indice]
    ) {
      texto +=
        "En la semana " +
        (indice + 1) +
        " el mejor fue " +
        nombre[1] +
        " con un total de $ " +
        v2[indice] +
        ". ";
    } else if (
      v3[indice] > v1[indice] &&
      v3[indice] > v2[indice] &&
      v3[indice] > v4[indice] &&
      v3[indice] > v5[indice]
    ) {
      texto +=
        "En la semana " +
        (indice + 1) +
        " el mejor fue " +
        nombre[2] +
        " con un total de $ " +
        v3[indice] +
        ". ";
    } else if (
      v4[indice] > v1[indice] &&
      v4[indice] > v2[indice] &&
      v4[indice] > v3[indice] &&
      v4[indice] > v5[indice]
    ) {
      texto +=
        "En la semana " +
        (indice + 1) +
        " el mejor fue " +
        nombre[3] +
        " con un total de $ " +
        v4[indice] +
        ". ";
    } else {
      texto +=
        "En la semana " +
        (indice + 1) +
        " el mejor fue " +
        nombre[4] +
        " con un total de $ " +
        v5[indice] +
        ". ";
    }
  }
  return texto;
}

console.log(
  elMejorDeLaSemana(
    vendedoresNombres,
    vendedor1,
    vendedor2,
    vendedor3,
    vendedor4,
    vendedor5
  )
);

//Función mejor vendedor de cada mes
function elMejorDeCadaMes(
  nombre: string[],
  v1: number[],
  v2: number[],
  v3: number[],
  v4: number[],
  v5: number[],
  sem: number
): string {
  let ven1: number = promedioMensual(vendedor1, sem);
  let ven2: number = promedioMensual(vendedor2, sem);
  let ven3: number = promedioMensual(vendedor3, sem);
  let ven4: number = promedioMensual(vendedor4, sem);
  let ven5: number = promedioMensual(vendedor5, sem);
  let texto: string = "";

  if (ven1 > ven2 && ven1 > ven3 && ven1 > ven4 && ven1 > ven5) {
    texto = " es " + nombre[0] + " con un monto de $ " + ven1;
  } else if (ven2 > ven1 && ven2 > ven3 && ven2 > ven4 && ven2 > ven5) {
    texto = " es " + nombre[1] + " con un monto de $ " + ven2;
  } else if (ven3 > ven1 && ven3 > ven2 && ven3 > ven4 && ven3 > ven5) {
    texto = " es " + nombre[2] + " con un monto de $ " + ven3;
  } else if (ven4 > ven1 && ven4 > ven2 && ven4 > ven3 && ven4 > ven5) {
    texto = " es " + nombre[3] + " con un monto de $ " + ven4;
  } else {
    texto = " es " + nombre[4] + " con un monto de $ " + ven5;
  }
  return texto;
}
console.log(
  "El mejor de enero " +
    elMejorDeCadaMes(
      vendedoresNombres,
      vendedor1,
      vendedor2,
      vendedor3,
      vendedor4,
      vendedor5,
      1
    )
);
console.log(
  "El mejor de febrero " +
    elMejorDeCadaMes(
      vendedoresNombres,
      vendedor1,
      vendedor2,
      vendedor3,
      vendedor4,
      vendedor5,
      5
    )
);
console.log(
  "El mejor de marzo " +
    elMejorDeCadaMes(
      vendedoresNombres,
      vendedor1,
      vendedor2,
      vendedor3,
      vendedor4,
      vendedor5,
      9
    )
);

//Función peor vendedor de cada mes
function elPeorDeCadaMes(
  nombre: string[],
  v1: number[],
  v2: number[],
  v3: number[],
  v4: number[],
  v5: number[],
  sem: number
): string {
  let ven1: number = promedioMensual(vendedor1, sem);
  let ven2: number = promedioMensual(vendedor2, sem);
  let ven3: number = promedioMensual(vendedor3, sem);
  let ven4: number = promedioMensual(vendedor4, sem);
  let ven5: number = promedioMensual(vendedor5, sem);
  let texto: string = "";

  if (ven1 < ven2 && ven1 < ven3 && ven1 < ven4 && ven1 < ven5) {
    texto = " es " + nombre[0] + " con un monto de $ " + ven1;
  } else if (ven2 < ven1 && ven2 < ven3 && ven2 < ven4 && ven2 < ven5) {
    texto = " es " + nombre[1] + " con un monto de $ " + ven2;
  } else if (ven3 < ven1 && ven3 < ven2 && ven3 < ven4 && ven3 < ven5) {
    texto = " es " + nombre[2] + " con un monto de $ " + ven3;
  } else if (ven4 < ven1 && ven4 < ven2 && ven4 < ven3 && ven4 < ven5) {
    texto = " es " + nombre[3] + " con un monto de $ " + ven4;
  } else {
    texto = " es " + nombre[4] + " con un monto de $ " + ven5;
  }
  return texto;
}
console.log(
  "El peor de enero " +
    elPeorDeCadaMes(
      vendedoresNombres,
      vendedor1,
      vendedor2,
      vendedor3,
      vendedor4,
      vendedor5,
      1
    )
);
console.log(
  "El peor de febrero " +
    elPeorDeCadaMes(
      vendedoresNombres,
      vendedor1,
      vendedor2,
      vendedor3,
      vendedor4,
      vendedor5,
      5
    )
);
console.log(
  "El peor de marzo " +
    elPeorDeCadaMes(
      vendedoresNombres,
      vendedor1,
      vendedor2,
      vendedor3,
      vendedor4,
      vendedor5,
      9
    )
);

//Función del peor vendedor del trimestre
function elPeorDelTrimestre(
  nombre: string[],
  v1: number[],
  v2: number[],
  v3: number[],
  v4: number[],
  v5: number[]
): string {
  let ven1: number = promedioTrimestral(vendedor1);
  let ven2: number = promedioTrimestral(vendedor2);
  let ven3: number = promedioTrimestral(vendedor3);
  let ven4: number = promedioTrimestral(vendedor4);
  let ven5: number = promedioTrimestral(vendedor5);
  let texto: string = "";

  if (ven1 < ven2 && ven1 < ven3 && ven1 < ven4 && ven1 < ven5) {
    texto = " es " + nombre[0] + " con un monto de $ " + ven1;
  } else if (ven2 < ven1 && ven2 < ven3 && ven2 < ven4 && ven2 < ven5) {
    texto = " es " + nombre[1] + " con un monto de $ " + ven2;
  } else if (ven3 < ven1 && ven3 < ven2 && ven3 < ven4 && ven3 < ven5) {
    texto = " es " + nombre[2] + " con un monto de $ " + ven3;
  } else if (ven4 < ven1 && ven4 < ven2 && ven4 < ven3 && ven4 < ven5) {
    texto = " es " + nombre[3] + " con un monto de $ " + ven4;
  } else {
    texto = " es " + nombre[4] + " con un monto de $ " + ven5;
  }
  return texto;
}
console.log(
  "El peor del trimestre" +
    elPeorDelTrimestre(
      vendedoresNombres,
      vendedor1,
      vendedor2,
      vendedor3,
      vendedor4,
      vendedor5
    )
);

setInterval(()=>{

// ACA OBTENGO EL ELEMENTO JS, Y LE AGREGA EL [0] PORQUE SI YO HAGO UN CONSOLE.LOG(RELOJ), ME VA A DEVOLVER UN ARRRAY
//DE UNA SOLA POSICION, POR ESO MUESTRO ESA POSICION

  let reloj = document.getElementsByClassName("reloj")[0];

  let tiempoActual = new Date(); // para obetenr la hora actual

  //SE AGREGAN LOS "0" PORQUE EL METODO DE ARRIBA DEVUELVE VALORES NUMERICOS SON CEROS PARA LOS NUMEROS MENORES A 10

  let hora = tiempoActual.getHours(); //CON ESTO VOY OBTENIENDO LA HORA, MINUTOS Y SEGUNDOS ACTUALES
  if(hora < 10) {
    hora = `0${hora}`
  }

  let minutos = tiempoActual.getMinutes();
  if(minutos < 10) {
    minutos = `0${minutos}`
  }

  let segundos = tiempoActual.getSeconds();
  if(segundos < 10) {
    segundos = `0${segundos}`
  }

  reloj.innerHTML = `${hora}:${minutos}:${segundos}`

},1000)
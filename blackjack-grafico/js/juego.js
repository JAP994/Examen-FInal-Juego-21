class Juego {

    /*mezclar = (deck) => {
        var i, j, temp;
        for (i = deck.length - 1; i > 0; i--) {
            j = Math.floor(Math.random() * (i + 1));
            temp = deck[i];
            deck[i] = deck[j];
            deck[j] = temp;
        }
        return deck;

    }
*/
    mezclar2 = (deck) => {
        var i = deck.length - 1;
        var j;
        var temp;
        mover(i, j, temp, deck);

        function mover(i, j, temp, deck) {
            if (i > 0) {
                j = Math.floor(Math.random() * (i + 1));
                temp = deck[i];
                deck[i] = deck[j];
                deck[j] = temp;
                i--;
                mover(i, j, temp, deck);
            }
            return deck;
        }
    }
    pedirCartaJugador = (mazo) => {

        if (mazo[cont].texto === 'A') {

            mazo[cont].valor = 1;
            let cartaJugada = 'carta = ' + ' valor = ' + mazo[cont].valor + ' palo = ' + mazo[cont].palo.figura + ' texto = ' + mazo[cont].texto;
            console.log(cartaJugada);
            let num = parseInt(mazo[cont].valor);
            puntajeJugardor.push(num);
            document.getElementById('cambioCarta').src = mazo[cont].imagen;
            cont++;
            puntajeJugardor.forEach(function(numero) {
                suma += numero;
            });

            document.getElementById('result').innerHTML = "Resultado : " + suma;
            suma = 0;


        } else {
            let cartaJugada = 'carta = ' + ' valor = ' + mazo[cont].valor + ' palo = ' + mazo[cont].palo.figura + ' texto = ' + mazo[cont].texto;
            console.log(cartaJugada);
            let num = parseInt(mazo[cont].valor);
            puntajeJugardor.push(num);
            console.log(mazo[cont].palo.figura);
            document.getElementById('cambioCarta').src = mazo[cont].imagen;
            cont++;

            puntajeJugardor.forEach(function(numero) {
                suma += numero;
            });
            document.getElementById('result').innerHTML = "Resultado : " + suma;
            suma = 0;


        }
        puntajeJugardor.forEach(function(numero) {
            suma += numero;
        });
        document.getElementById('result').innerHTML = "Resultado : " + suma;
        suma = 0;




    }
    pedirCartaCpu = (mazo) => {
        puntajeCPU.forEach(function(n) {
            console.log(n);
            suma1 += n;
        });
        if (suma1 <= 21) {
            if (mazo[cont].texto === 'A') {
                mazo[cont].valor = 1;
                let cartaJugada = 'carta = ' + ' valor = ' + mazo[cont].valor + ' palo = ' + mazo[cont].palo.figura + ' texto = ' + mazo[cont].texto;
                console.log(cartaJugada);
                let numer = parseInt(mazo[cont].valor);
                puntajeCPU.push(numer);
                cont++;
                suma1 = 0;

                this.pedirCartaCpu(mazo);
            } else {
                let cartaJugada = 'carta = ' + ' valor = ' + mazo[cont].valor + ' palo = ' + mazo[cont].palo.figura + ' texto = ' + mazo[cont].texto;
                console.log(cartaJugada);
                let numer = parseInt(mazo[cont].valor);
                puntajeCPU.push(numer);
                cont++;
                suma1 = 0;
                this.pedirCartaCpu(mazo);
            }
        } else if (suma1 > 21) {
            suma1 = 0;
            puntajeCPU.pop();
            this.validar();

        }

    }
    validar = () => {
        puntajeCPU.forEach(function(n) {
            console.log(n);
            suma1 += n;
        });
        puntajeJugardor.forEach(function(numero) {
            console.log(numero);
            suma += numero;
        });
        console.log(puntajeCPU);
        document.getElementById('resultadoJuga').innerHTML = 'Resultado Jugador :' + suma;
        document.getElementById('resultadoCPU').innerHTML = 'Resultado CPU :' + suma1;

        console.log(suma);
        console.log(suma1);
        if (suma <= 21 && suma1 < suma) {
            console.log('ganaste');
            document.getElementById('res').innerHTML = 'Ganaste';


        } else if (suma > 21) {
            console.log('perdiste');
            document.getElementById('res').innerHTML = 'Perdiste';


        } else if (suma === suma1 && suma <= 21 && suma1 <= 21) {
            console.log('empate');
            document.getElementById('res').innerHTML = 'Empate';


        } else if (suma < suma1 && suma <= 21 && suma1 <= 21) {
            console.log('perdiste');
            document.getElementById('res').innerHTML = 'Perdiste';



        }
    }

}
class Baraja {
    constructor() {
        this.palo = [new Palo('trébol', 'negro', '♣'), new Palo('corazón', 'negro', '♠'), new Palo('corazón', 'rojo', '♥'), new Palo('diamante', 'rojo', '♦')];
        this.texto = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
        this.mazo = [];
        this.imagenes = ['cartas/trebol/TA.png', 'cartas/trebol/T2.png', 'cartas/trebol/T3.png', 'cartas/trebol/T4.png', 'cartas/trebol/T5.png', 'cartas/trebol/T6.png',
            'cartas/trebol/T7.png', 'cartas/trebol/T8.png', 'cartas/trebol/T9.png', 'cartas/trebol/T10.png', 'cartas/trebol/TJ.png', 'cartas/trebol/TQ.png', 'cartas/trebol/TK.png',
            'cartas/corazon negro/CNA.png', 'cartas/corazon negro/CN2.png', 'cartas/corazon negro/CN3.png', 'cartas/corazon negro/CN4.png', 'cartas/corazon negro/CN5.png', 'cartas/corazon negro/CN6.png', 'cartas/corazon negro/CN7.png',
            'cartas/corazon negro/CN8.png', 'cartas/corazon negro/CN9.png', 'cartas/corazon negro/CN10.png', 'cartas/corazon negro/CNJ.png', 'cartas/corazon negro/CNQ.png', 'cartas/corazon negro/CNK.png', 'cartas/corazon rojo/CRA.png',
            'cartas/corazon rojo/CR2.png', 'cartas/corazon rojo/CR3.png', 'cartas/corazon rojo/CR4.png', 'cartas/corazon rojo/CR5.png', 'cartas/corazon rojo/CR6.png', 'cartas/corazon rojo/CR7.png', 'cartas/corazon rojo/CR8.png', 'cartas/corazon rojo/CR9.png',
            'cartas/corazon rojo/CR10.png', 'cartas/corazon rojo/CRJ.png', 'cartas/corazon rojo/CRQ.png', 'cartas/corazon rojo/CRK.png', 'cartas/brillo/BA.png', 'cartas/brillo/B2.png', 'cartas/brillo/B3.png', 'cartas/brillo/B4.png', 'cartas/brillo/B5.png',
            'cartas/brillo/B6.png', 'cartas/brillo/B7.png', 'cartas/brillo/B8.png', 'cartas/brillo/B9.png', 'cartas/brillo/B10.png', 'cartas/brillo/BJ.png', 'cartas/brillo/BQ.png', 'cartas/brillo/BK.png'
        ];
    }
    crear = () => {
        let i = 0;
        this.palo.forEach(function(p) {
            this.texto.forEach(function(r) {
                if (r === 'A') {
                    this.mazo.push(new Carta(p, r, [1, 11], this.imagenes[i]));
                    i++;
                } else if (r === 'J' || r === 'Q' || r === 'K') {
                    this.mazo.push(new Carta(p, r, [10], this.imagenes[i]));
                    i++;

                } else {
                    let numero = parseInt(r);
                    this.mazo.push(new Carta(p, r, [numero], this.imagenes[i]));
                    i++;
                }
            }, this);
        }, this);
    }
}
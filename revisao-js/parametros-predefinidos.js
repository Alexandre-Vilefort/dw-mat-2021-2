function areaForma(base, altura, tipo) {
    let area

    switch (tipo) {
        case 'R': // retângulo
            area = base * altura
            break
        case 'T': // triângulo 
            area = balse * altura / 2
            break
        case 'E': //elipse
            area = (base/2) * (altura/2) *Math.PI
            break
        default: //forma não reconhecida
            area = null
    }
    return area
}

console.log(`A área de um terreno com 16m x 27m é ${areaForma(16,27,'R')}m².`)
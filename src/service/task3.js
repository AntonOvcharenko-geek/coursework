function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}

export function getYMax(min, max, equation){
    let maximum = 0
    for(let i = min; i < max; i += 0.1) if(equation(i) > maximum) maximum = equation(i)
    return maximum
}

export function equation(x) {
    return Math.exp(x)
}

export function rectangle(interval, iters) {
    let {max, min} = interval
    if(min > max) throw new Error('Min не може бути більше max')
    if(iters <= 0) throw new Error('Кількість ітерацій не може бути менше 0')
    let area = 0
    let d = (max - min)/iters
    let xStart = min
    for(let i = 0; i < iters; i++) {
        let xEnd = xStart + d
        let xMiddle = (xStart + xEnd) / 2
        area = area + d * equation(xMiddle)
        xStart = xEnd
    }
    return area
}

export function trap(interval, iters) {
    let {max, min} = interval
    if(min > max) throw new Error('Min не може бути більше max')
    if(iters <= 0) throw new Error('Кількість ітерацій не може бути менше 0')
    let area = (equation(min) + equation(max)) / 2
    let height =  (max-min)/iters
    for(let x = min + height; x < max; x += height) area += equation(x)
    return area*height
}

export function simpson(interval, iters) {
    let {max, min} = interval
    if(min > max) throw new Error('Min не може бути більше max')
    if(iters <= 0) throw new Error('Кількість ітерацій не може бути менше 0')
    let height =  (max-min)/iters
    let area = (equation(min) + equation(max)) / 2 + 2 * equation(min+height/2)
    for(let x = min + height; x < max; x += height) area += 2 * equation(x+height/2) + equation(x)
    return area*height/3
}

export function monteCarlo(interval, amountOfDots) {
    let {xMax, xMin} = interval
    let yMin = 0
    let yMax = getYMax(xMin, xMax, equation)
    if(xMin > xMax || yMin > yMax) throw new Error('Min не може бути більше max')
    if(amountOfDots <= 0) throw new Error('Кількість точок не може бути менше 0')
    let validDot = 0
    let dots = []
    let area = (yMax - yMin) * (xMax - xMin)
    for(let i = 0; i < amountOfDots; i++) {
        let rndX = getRandom(xMin, xMax)
        let rndY = getRandom(yMin, yMax)
        let dot = {x: rndX, y: rndY, valid: false}
        if(rndY <= equation(rndX)) {
            dot.valid = true
            validDot++
        }
        dots.push(dot)
    }
    return {area: validDot / amountOfDots * area, dots: dots}
}
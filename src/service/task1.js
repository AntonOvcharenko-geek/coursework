import {query, WOLFRAM_URL} from "../config/config";

export function calculateEquation(x) {
    return  Math.pow(x,3) - Math.sqrt(x) - 9.5 /*Math.pow(x,2) + Math.log(x) - 4*/ /*Math.pow(x,3) - Math.exp(4*x) + 5.5*/
}

export function getAmountAfterDot(n) {
    return n > 0 && n < 1 ? n.toString().length - 2 : 0
}

export function generateGraph(interval, n, equation) {
    let {min, max} = interval
    if(min > max) throw new Error('Min не може бути більше max')
    if(n <= 0) throw new Error('Крок не може бути менше 0')
    let result = []
    let afterDot = getAmountAfterDot(n)
    for(let i = min; i <= max; i += n) {
        let j = +i.toFixed(afterDot)
        result.push({'Y': equation(j), 'X': j})
    }
    return result
}

export function findSolutionByDichotomy(interval, n) {
    let {min, max} = interval
    if(min > max) throw new Error('Min не може бути більше max')
    if(n <= 0) throw new Error('Крок не може бути менше 0')
    let result = []
    let center
    for(let i = 0; i < n; i++) {
        let obj = {'Нижня точка': min, 'Верхня точка': max}
        center = (min + max) / 2
        obj['Центр'] = center
        if(calculateEquation(center) * calculateEquation(max) >= 0) {
            max = center
            obj['Напрямок'] = 'Лівіше'
        } else {
            min = center
            obj['Напрямок'] = 'Правіше'
        }
        result.push(obj)
    }
    return result
}

export async function findSolutionByNewton(interval, e) {
    let result = []
    if(interval.min > interval.max) throw new Error('Min не може бути більше max')
    if(e <= 0) throw new Error('Точність не може бути менше 0')
    let x1 = interval.max
    let x2 = undefined
    while(!(Math.abs(Math.abs(x2) - Math.abs(x1)) < e)) {
        let res = await getInfo(query + x1)
        let equation = res.queryresult.pods[0].subpods[0].plaintext
        x2 = x1
        x1 = +calculateRootAtZero(equation).toFixed(getAmountAfterDot(e))
        let obj = {'Рівняння дотичної': equation, 'Точка перетину Оси X': x1}
        result.push(obj)
    }
    if( x1 < interval.min || x1 > interval.max ) return null
    return result
}

export function findSolutionByIteration(dots) {
    let closest = [0, 0]
    let prevDot = dots[0]
    dots.forEach((dot) => {
        if(prevDot.Y * dot.Y <= 0) {
            closest[0] = prevDot.X
            closest[1]++
        }
        prevDot = dot
    })
    return closest
}

export async function getInfo(input) {
    let response = await fetch(WOLFRAM_URL + input + '&output=json', {
        headers: {
            "Origin": "http://localhost:3000"
        }
    })
    if(response.status >= 400 && response.status <= 600) throw Error(await response.json());
    return response.json()
}

export function calculateRootAtZero(equation) {
    let trimedEquation = equation.split('=')[1].trim().split(' ')
    console.log(trimedEquation, 'trimedEquation')
    trimedEquation.splice(1, 2)
    let [first, second] = trimedEquation
    console.log(first, "first")
    console.log(second, "second")
    return second / first
}




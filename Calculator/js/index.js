let p = document.getElementById('resultado')
let arrn = []
let sinal = ''
let onof = false

//Array dos numeros

let num = [

    document.getElementById("zero"),
    document.getElementById('num1'),
    document.getElementById("num2"),
    document.getElementById('num3'),
    document.getElementById("num4"),
    document.getElementById('num5'),
    document.getElementById("num6"),
    document.getElementById('num7'),
    document.getElementById("num8"),
    document.getElementById('num9'),

]

//Array das funcionalidades

let met = [

    document.getElementById('on'),
    document.getElementById('off'),
    document.getElementById('abrep'),
    document.getElementById('fechap'),
    document.getElementById('raizq'),
    document.getElementById('potencia'),
    document.getElementById('apagar'),
    document.getElementById('soma'),
    document.getElementById('subtracao'),
    document.getElementById('multiplicacao'),
    document.getElementById('divisao'),
    document.getElementById('restodivisao'),
    document.getElementById('porcentagem'),
    document.getElementById('igual'),
    document.getElementById('zerozero')

]

//adiciona na tela

for(let i = 0; i < num.length; i++){
    num[i].addEventListener('click',function(){
        if(onof){
            num[i] = i
            p.innerHTML += `${num[i]}`
        }
    })
}

 met[0].addEventListener('click',function() {
    p.innerHTML = "0"
    onof = true
 })

 met[1].addEventListener('click',function(){
     p.innerHTML = ""
     onof = false
 })

 met[2].addEventListener('click',function(){
    if(onof){
        p.innerHTML += "("
    }
})

 met[3].addEventListener('click',function(){
    if(onof){
        p.innerHTML += ")"
    }
})

met[4].addEventListener('click', function(){
    if(onof){
        addar()
        p.innerHTML = ""
        sinal = '√'
    }
})
met[5].addEventListener('click',function(){
    if(onof){
        addar()
        p.innerHTML = ""
        sinal = '^'
    }
})
met[6].addEventListener('click',function(){
    if(onof){
        p.innerHTML = ''
        sinal = ''
        arrn = []
    }
})
met[7].addEventListener('click',function(){
    if(onof){
        addar()
        sinal = '+'
        p.innerHTML = ' '
    }
})
met[8].addEventListener('click',function(){
    if(onof){
        addar()
        sinal = '-'
        p.innerHTML = ''
    }
})
met[9].addEventListener('click',function(){
    if(onof){
        addar()
        sinal = '/'
        p.innerHTML = ''
    }
})
met[10].addEventListener('click',function(){
    if(onof){
        addar()
        sinal = 'X'
        p.innerHTML = ''
    }
})
met[11].addEventListener('click',function(){
    if(onof){
        addar()
        p.innerHTML = ''
        sinal = '//'
    }
})
met[12].addEventListener('click',function(){
    if(onof){
        addar()
        sinal = '%'
        p.innerHTML = ''
    }
})


//funções dos itens adicionados

function addar(){
        arrn.push(p.innerText.split('+',1))
}
function soma(){
    let soma = 0
    for(let i = 0; i < arrn.length; i++){
        soma += Number(arrn[i])
    }
    console.log(arrn)
    p.innerHTML = soma
    arrn = []
}

function sub(){
    let sub = 0
    for(let i = 0; i < arrn.length; i++){
        sub = maior() - Number(arrn[i])
    }
    p.innerHTML = sub 
    arrn = []
}

function maior(){
    let maior = 0
    for(let i = 0; i < arrn.length; i++){
        if(Number(arrn[i]) > maior){
            maior = Number(arrn[i])
            
        }
        return maior
    }
    
}

function mult(){
    let mult = 1
    for(let i = 0; i < arrn.length; i++){
        mult *= Number(arrn[i]) 
    }
    p.innerHTML = mult
    arrn = []
}

function div(){
    let div = 0
    for(let i = 0; i < arrn.length; i++){
        div = (maior()/Number(arrn[i]))
    }
    p.innerHTML = div
    arrn = []
}

function porc(){
    let porc = 0
    let arr0 = parseFloat(arrn[0]).toFixed(1)
    let total = 0
    porc = arr0/100
    for(let i = 0; i< arrn.length; i++){
        total = porc*arrn[i]
    }
    p.innerHTML = total
    arrn = []

}

function pot(){
    let resul = 1
    let cont = Number(arrn[1])
    for(let i = 0; i < cont; i++){
        resul *= arrn[0]
    }
    p.innerHTML = resul
    arrn = []
}

function raizq(){
    let resul = Math.sqrt(Number(arrn[0]))
    p.innerHTML = resul
    arrn = []
}

function restod(){
    let resul = 0
    for(let i = 0; i < arrn.length; i++){
        resul = (maior()%Number(arrn[i]))
    }
    p.innerHTML = resul
    arrn = []
}

//resultado

met[13].addEventListener('click',function(){
    switch(sinal){
        case '+':
            addar()
            soma()
            break
        case '-':
            addar()
            sub()
            break
        case 'X':
            addar()
            mult()
            break
        case '/':
            addar()
            div()
            break
        case '%':
            addar()
            porc()
            break
        case '^':
            addar()
            pot()
            break
        case '√':
            addar()
            raizq()
            break
        case '//':
            addar()
            restod()
            break
    }
})

met[14].addEventListener('click',function(){
    if(onof){
        p.innerHTML += "00"
    }
})
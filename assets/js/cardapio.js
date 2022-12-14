//https://www.mundoboaforma.com.br/50-alimentos-com-poucas-calorias-e-saudaveis/#1-rucula
//14 calorias alface

//https://www.uol.com.br/vivabem/album/2019/05/04/7-tipos-de-carnes-saudaveis-em-seus-melhores-preparos.htm?foto=3
const botoes = document.querySelectorAll('.botoes')
const botaoADD = document.querySelector('#add')
const pratos = document.querySelector('.pratos')
const pratosMontados = document.querySelector('#pratos-montados')


const aiContagem = document.getElementById('aiContagem')
const brContagem = document.getElementById('brContagem')
const fjContagem = document.getElementById('fjContagem')
const reContagem = document.getElementById('reContagem')
const afContagem = document.getElementById('afContagem')
const fgContagem = document.getElementById('fgContagem')
const mgContagem = document.getElementById('mgContagem')
const sgContagem = document.getElementById('sgContagem')
const cfContagem = document.getElementById('cfContagem')

var countAI = 0
var countBR = 0
var countFJ = 0
var countRE = 0
var countAF = 0
var countFG = 0
var countMG = 0
var countSG = 0
var countCF = 0

botoes.forEach((botao) => {
    botao.addEventListener("click", () => {
        const diminuirAI = botao.classList.contains("diminuirAI")
        const aumentarAI = botao.classList.contains("aumentarAI")
        
        const diminuirBR = botao.classList.contains("diminuirBR")
        const aumentarBR = botao.classList.contains("aumentarBR")

        const diminuirFJ = botao.classList.contains("diminuirFJ")
        const aumentarFJ = botao.classList.contains("aumentarFJ")

        
        const diminuirRE = botao.classList.contains("diminuirRE")
        const aumentarRE = botao.classList.contains("aumentarRE")

        const diminuirAF = botao.classList.contains("diminuirAF")
        const aumentarAF = botao.classList.contains("aumentarAF")

        const diminuirFG = botao.classList.contains("diminuirFG")
        const aumentarFG = botao.classList.contains("aumentarFG")

        const diminuirMG = botao.classList.contains("diminuirMG")
        const aumentarMG = botao.classList.contains("aumentarMG")

        const diminuirSG = botao.classList.contains("diminuirSG")
        const aumentarSG = botao.classList.contains("aumentarSG")

        const diminuirCF = botao.classList.contains("diminuirCF")
        const aumentarCF = botao.classList.contains("aumentarCF")

        if(diminuirAI){
            
            if(countAI <= 0){
                countAI = 0

            }else{
                countAI -= 1
                aiContagem.innerHTML = countAI
            }
        }

        if(aumentarAI){

            countAI += 1
            aiContagem.innerHTML = countAI
        }

        if(diminuirBR){
            
            if(countBR <= 0){
                countBR = 0

            }else{
                countBR -= 1
                brContagem.innerHTML = countBR
            }
        }

        if(aumentarBR){

            countBR += 1
            brContagem.innerHTML = countBR
        }

        if(diminuirFJ){
            
            if(countFJ <= 0){
                countFJ = 0

            }else{
                countFJ -= 1
                fjContagem.innerHTML = countFJ
            }
        }

        if(aumentarFJ){

            countFJ += 1
            fjContagem.innerHTML = countFJ
        }

        if(diminuirRE){
            
            if(countRE <= 0){
                countRE = 0

            }else{
                countRE -= 1
                reContagem.innerHTML = countRE
            }
        }

        if(aumentarRE){

            countRE += 1
            reContagem.innerHTML = countRE
        }

        if(diminuirAF){
            
            if(countAF <= 0){
                countAF = 0

            }else{
                countAF -= 1
                afContagem.innerHTML = countAF
            }
        }

        if(aumentarAF){

            countAF += 1
            afContagem.innerHTML = countAF
        }

        if(diminuirFG){
            
            if(countFG <= 0){
                countFG = 0

            }else{
                countFG -= 1
                fgContagem.innerHTML = countFG
            }
        }

        if(aumentarFG){

            countFG += 1
            fgContagem.innerHTML = countFG
        }

        if(diminuirMG){
            
            if(countMG <= 0){
                countMG = 0

            }else{
                countMG -= 1
                mgContagem.innerHTML = countMG
            }
        }

        if(aumentarMG){

            countMG += 1
            mgContagem.innerHTML = countMG
        }

        if(diminuirSG){
            
            if(countSG <= 0){
                countSG = 0

            }else{
                countSG -= 1
                sgContagem.innerHTML = countSG
            }
        }

        if(aumentarSG){

            countSG += 1
            sgContagem.innerHTML = countSG
        }

        if(diminuirCF){
            
            if(countCF <= 0){
                countCF = 0

            }else{
                countCF -= 1
                cfContagem.innerHTML = countCF
            }
        }

        if(aumentarCF){

            countCF += 1
            cfContagem.innerHTML = countCF
        }
    })
    
    
})


let pratoFinalizado;
function limpar(){
    countAF = 0 
    countAI = 0
    countBR = 0
    countCF = 0
    countFG = 0
    countFJ = 0
    countMG = 0
    countRE = 0
    countSG = 0

    aiContagem.innerHTML = countAI
    afContagem.innerHTML = countAF
    brContagem.innerHTML = countBR
    cfContagem.innerHTML = countCF
    fgContagem.innerHTML = countFG
    fjContagem.innerHTML = countFJ
    mgContagem.innerHTML = countMG
    reContagem.innerHTML = countRE
    sgContagem.innerHTML = countSG

    
}


botaoADD.addEventListener('click', () =>{
    let countTotal = countAF + countAI + countBR + countCF + countFG + countFJ + countMG + countRE + countSG
    console.log(countTotal)
    if(countTotal == 0){

    }else{
        let KCAL = (countAI * 108 ) + (countBR * 30) + (countFJ * 61)  + (countRE * 24) + (countAF * 14) + (countFG * 159) + (countMG * 153) + (countSG * 171) + (countCF * 81)
        if(pratos.style.display != 'block'){
            pratos.style.display = 'block'
            setTimeout(() =>{
                
                pratos.classList.add('pratosAnimacao')
            },500)
            
        }


        const pratoConcluido = document.querySelector('.prato-box')
        const caloriasBox = document.querySelector('.calorias')

        if(pratoFinalizado == 1){
            console.log('entrou')
            caloriasBox.innerHTML = ''
            pratoConcluido.innerHTML = ''
            pratoFinalizado = 0
        }

        caloriasBox.innerHTML = `

            <h4>Calorias: ${KCAL}Kcal</h4>

        `

        if(countAI > 0){
            let Gramas = countAI*100
            pratoConcluido.innerHTML += `
                <div class="prato-texto">
                    <h4>Arroz integral<h4/>
                    <span>${Gramas}g</span>
                </div>

            `
        }
        if(countAF > 0){
            let Gramas = countAF*100
            pratoConcluido.innerHTML += `
            <div class="prato-texto">
                <h4>Alface<h4/>
                <span>${Gramas}g</span>
            </div>

        `
        }
        if(countBR > 0){
            let Gramas = countBR * 100
            pratoConcluido.innerHTML += `
            <div class="prato-texto">
                <h4>Brócolis<h4/>
                <span>${Gramas}g</span>
            </div>

        `
        }
        if(countCF > 0){
            let Gramas = countCF * 100
            pratoConcluido.innerHTML += `
            <div class="prato-texto">
                <h4>Coxa de frango<h4/>
                <span>${Gramas}g</span>
            </div>

        `
        }
        if(countFJ > 0){
            let Gramas = countFJ * 80
            pratoConcluido.innerHTML += `
            <div class="prato-texto">
                <h4>Feijão preto<h4/>
                <span>${Gramas}g</span>
            </div>

        `
        }
        if(countMG > 0){
            let Gramas = countMG * 90
            pratoConcluido.innerHTML += `
            <div class="prato-texto">
                <h4>Maminha<h4/>
                <span>${Gramas}g</span>
            </div>
        `
        }
        if(countFG > 0){
            let Gramas = countFG * 100
            pratoConcluido.innerHTML += `
            <div class="prato-texto">
                <h4>Peito de frango<h4/>
                <span>${Gramas}g</span>
            </div>

        `
        }
        if(countSG > 0){
            let Gramas = countSG * 120
            pratoConcluido.innerHTML += `
            <div class="prato-texto">
                <h4>Salmão<h4/>
                <span>${Gramas}g</span>
            </div>

        `
        }
        if(countRE > 0){
            let Gramas = countRE * 100
            pratoConcluido.innerHTML += `
            <div class="prato-texto">
                <h4>Repolho<h4/>
                <span>${Gramas}g</span>
            </div>
            
        `
        }
        const total = document.querySelector('.total')
        total.innerHTML = `
                <div class="prato-texto">
                    <h4>Total Gramas<h4/>
                    <span>${countAI*100 + countAF*100 + countBR * 100 + countCF * 100 + countFJ * 80 + countMG * 90 + countFG * 100 + countSG * 120 + countRE * 100}g</span>
                </div>       
        `
        
        
        pratoFinalizado = 1

        limpar()
    }
    
    

})




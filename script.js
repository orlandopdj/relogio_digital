//  ### PEGANDO OS ELEMENTOS DO HTML ###
const horas = document.querySelector('.horas')
const minutos = document.querySelector('.minutos')
const segundos = document.querySelector('.segundos')

// ### FUNCÃO PARA O RELÓGIO FUNCIONAR

const relogio = setInterval(function time(){
    let dateToday = new Date() // new Date(), pega os valores do dia e hora atual com a função get
    let hr = dateToday.getHours() // getHours - pega as horas
    let min = dateToday.getMinutes() // getMinutes - pega os minutos
    let s = dateToday.getSeconds() // getSeconds - pega os segundos

    if (hr < 10) hr = '0' +hr // verifica se as horas é menor que 10 para concatenar 0 pra ficar 09 horas ao invez de 9 horas por exemplo

    if (min < 10) min = '0' +min // verifica se os minutos é menor que 10 pra concatenar 0 pra ficar 09 minutos ao inves de 9 minutos por exemplo

    if (s < 10) s = '0' +s


    horas.textContent = hr // horas.textContent escreve no html o que tem na variavel hr
    minutos.textContent = min // minutos.textContent escreve no html o que tem na variavel min
    segundos.textContent = s // segundos.textContent escreve no html o que tem na variavel s
} )
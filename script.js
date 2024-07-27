function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('itxtano')
    var res = document.querySelector('div#res')
    if(fano.value.length ==0 || Number(fano.value) > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = '';
        var img = document.createElement('img')
        img.setAttribute('id','foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/mascri.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/mascjov.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/mascadu.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/mascido.png')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 10){
                //Criança
                img.setAttribute('src', 'imagens/femcri.png')
            } else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'imagens/femjov.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'imagens/femadu.png')
            } else {
                //Idoso
                img.setAttribute('src', 'imagens/femido.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
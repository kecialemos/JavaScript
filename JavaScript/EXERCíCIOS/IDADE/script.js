function verificar() {
var data = new Date()
var ano = data.getFullYear()
var fano = document.getElementById('txtano')
var res = document.querySelector('div#res')
if (fano.value.length == 0 || fano.value > ano){
    alert(' [ERRO] Verifique os dados e tente novamente')
} else{
   var fsex = document.getElementsByName('radsex')
   var idade = ano - Number(fano.value)
   var genero = ''
   var img = document.createElement('img')
   img.setAttribute('id', 'foto') 
   if (fsex[0].checked) {
       genero = 'Homem'
       if (idade >= 0 && idade <10) {
                 //Criança
            img.setAttribute ('src','bebem.png.jpg')
       } else if (idade < 21) {
                 //Jovem
                 img.setAttribute ('src','jovemm.png.jpg')
       } else if (idade < 50){
                //Adulto
                img.setAttribute ('src','adultom.png.jpg')
       } else {
           // Idoso
           img.setAttribute ('src','idisom.png.jpg')
       }
        
    } else if (fsex[1].checked) {
       genero = 'Mulher'
       if (idade >= 0 && idade <10) {
        //Criança
        img.setAttribute ('src','bebef.png.jpg')
} else if (idade < 21) {
        //Jovem
        img.setAttribute ('src','jovemf.png.jpg')
} else if (idade < 50){
       //Adulto
       img.setAttribute ('src','adultof.png.jpg')
} else { 
 // Idoso
 img.setAttribute ('src','idisof.png.jpg')
}
   }
   res.style.textAling = 'center'
   res.innerHTML = `Detectamos ${genero} com ${idade} anos`
   res.appendChild(img)
}

}
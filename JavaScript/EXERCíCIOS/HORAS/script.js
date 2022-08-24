function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora>= 0  && hora < 12){   
        //Bom dia!
        img.src = 'fotomanha.png.jpg'
        document.body.style.background = '#D2CDBA'

    } else if (hora>= 12 && hora <= 18) {
        //Boa tarde!

        img.src = 'fototarde.png.jpg'
        document.body.style.background = '#BA8968'

    } else {
        //Boa noite!
        img.src = 'noite1.png.jpg'
        document.body.style.background = '#19283F'
    }
}

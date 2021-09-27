//  ``
    function carregar() {
      var msg = document.querySelector('div#msg')
      var good = document.querySelector('div#good')
      var img = document.getElementById('imagem')
      var data = new Date()
      var hora = data.getHours()
      msg.innerHTML = `<strong>São Exatamente ${hora} Horas</strong>`
        
        if (hora >= 0 && hora < 12) {
          img.src= `fotomanha.png`
          document.body.style.background = `#a0b6ce`
          good.innerHTML= ('<strong>Tenha Um Bom Dia!</strong>')
        }else if (hora >= 12 && hora < 18) {
          img.src= `fototarde.png`
          document.body.style.background = `#c75f12`
          good.innerHTML = ('<strong>Tenha Uma Boa Tarde!</strong>')
        } else {
          img.src= `fotonoite.png`
          document.body.style.background = `#983c58`
          good.innerHTML = ('<strong>Tenha Uma Boa Noite!</strong>')
        }
      
    }
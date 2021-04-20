function carregar() {
  var msg = window.document.getElementById('msg')
  var img = window.document.getElementById('imagem')
  var date = new Date()
  var hora = date.getHours()
  msg.innerHTML = `Agora são ${hora} horas.`
  if(hora >= 6 && hora < 10) {
     //BOM CAFÉ!
      img. src = 'café.jpg'
  }else if (hora >= 11 && hora <= 15) {
      //BOM ALMOÇO!
      img. src = 'almoço.jpg'
  }else  {
      //BOA JANTA!
      img. src = 'janta.jpg'
  }

}
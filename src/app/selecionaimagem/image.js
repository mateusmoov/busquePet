const image = [
  {
    src: 'src/public/image.png',
    imageFromUser: false
  },
  {
    src: 'src/public/pipoquinha.png',
    imageFromUser: true
  }
]



// Adicionar uma imagem
!image[0].imageFromUser
image[0].imageFromUser.src = 'src/public/carlos.png' 
image[0].imageFromUser.imageFromUser = true

// Remover uma imagem
image[0].imageFromUser.src = 'src/public/image.png'
image[0].imageFromUser.imageFromUser = false


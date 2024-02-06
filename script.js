function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")

    // PEGAR A IMAGEM
    const img = document.querySelector("#profile img")

        //Substituir a imagem
    if(html.classList.contains("light")) {
    img.setAttribute("src", "./assets/avatar-light.png")
    } else {
    img.setAttribute("src", "./assets/avatar.png")

    }
    //Se tiver light mode, mudar para imagem clara
    //Se tiver dark mode, manter a imagem normal
}
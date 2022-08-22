fetch('https://api.imgflip.com/get_memes')
.then(response => response.json())
.then(memes => {

    memes.data.memes.forEach(meme => {
        const memesNameLocation = document.getElementById('meme_names_bar')
        const memesNameContent = document.createElement('li')
        memesNameContent.textContent = meme.name
        memesNameLocation.appendChild(memesNameContent)
        // memesNameContent.addEventListener('click', makeImage)
        makeImage(memesNameContent)
       // console.log(memesNameContent)
    })
})

function makeImage(listElement){
   listElement.addEventListener("click", ()=> console.log("test"))
   
}
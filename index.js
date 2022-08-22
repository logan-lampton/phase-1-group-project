fetch('https://api.imgflip.com/get_memes')
.then(response => response.json())
.then(memes => {

    memes.data.memes.forEach(meme => {
        const memeList = document.getElementById("memeList")
        const memeListItem = document.createElement('li')
        memeListItem.textContent = meme.name
        memeList.append(memeListItem)
        memeListItem.addEventListener('click', () => {
            displayOnClick(meme)
            })
        memeListItem.addEventListener('mouseover', () => {
            mouseOver(memeListItem)
        })
        memeListItem.addEventListener('mouseout', () => {
            mouseOut(memeListItem)
        })
    })
})

function displayOnClick(memes) {
    const display = document.getElementById("display")
    display.src = memes.url
    const title = document.getElementById("memetitle")
    title.textContent = memes.name
}
function mouseOver(memes) {
    memes.style.color = "red";
}
function mouseOut(memes) {
    memes.style.color = "black";
}
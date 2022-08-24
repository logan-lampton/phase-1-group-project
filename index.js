
//this is where the images are stored
const likes = document.getElementById('likes')
//this is where the middle image is displayed
const imageURL = document.getElementById('display')
//the like button
const button = document.getElementById('button')
 //ol for the list of 100 memes
 let memeList = document.getElementById("memeList")
 memeList.addEventListener("touchstart", function(){}, true)

fetch("https://api.imgflip.com/get_memes")
    .then (res => res.json())
    .then (memes => 
        {
        let index =1
        memes.data.memes.forEach(meme => 
            {
            //li creation for each meme
            let memeListItem = document.createElement("li")
            memeListItem.setAttribute('class', "list_element")
            memeListItem.setAttribute('data-index', index)
            memeListItem.textContent = meme.name
            //append the li onnto the ol
            memeList.append(memeListItem)
            //event listener to scroll through 100 meme names
            index ++
             memeListItem.addEventListener('click', () => {
            const index1 = memeListItem.getAttribute('data-index')-1
            displayOnClick(meme,index1)
                        
            })
            memeListItem.addEventListener('mouseover', () => {
                mouseOver(memeListItem)
            })
            memeListItem.addEventListener('mouseout', () => {
                mouseOut(memeListItem)
            })
            })

            clickLikeButton(button)  
        })


// this function adds images to like bank 
function clickLikeButton(button)
{
    button.addEventListener('click', ()=>
    {
        
       const imageli =document.createElement('li')

        const image2 = document.createElement('img')
        document.getElementById("ol").setAttribute("list-style-type", "none")
        image2.setAttribute("class", "liked-image")
        imageli.setAttribute("class", "removeBullet")
      
        // bank is the ol
        let bank = document.getElementsByClassName('liked-image')
        //console.log(bank)
       image2.src = imageURL.src
        imageURL.src - image2.src
       if (bank.length ===0)
       {
       imageli.append(image2) 
        likes.append(imageli)  
        console.log("initial bank")
        
       }

    // const newBank = Array.from(bank)
    //    const test = newBank.filter(coin => coin === imageURL.src)
    //    if (test.length ===0)
    //    {
    //     imageli.append(image2) 
    //     likes.append(imageli) 
    //    }
    
    let count =0

   if(bank.length===1)
{ 
    if (imageURL.src === bank[0].src)
            {
               count+=1
                console.log("line 86 equal")
            }

}
    if(bank.length>1)
    {
       for (let i =0; i<bank.length; i++)
        {
            
            console.log(bank[i])
            if (imageURL.src === bank[i].src)
            {
               count+=1
                alert ("YOU ALREADY LIKED THIS MEME! YOU MUST REALLY LIKE IT!!")
                console.log("equal")
            
            }

        }
    }
       
        if (count === 0)
        {
         imageli.append(image2) 
         likes.append(imageli) 
        } 

        console.log(count)
        
         

})
   
}

//this function displays center image when you click the li
function displayOnClick(memes, index1) {

    const index = document.getElementsByClassName('list_element')
   
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
 


const genreateMemeBtn=document.querySelector(".meme-generator .generate-meme-btn");
const memeImage= document.querySelector(".meme-generator img");
const memeTitle=document.querySelector(".meme-generator .meme-title");
const memeAuthor=document.querySelector(".meme-generator .meme-author");
const URL="https://meme-api.com/gimme/wholesomememes";
const updateDetail=(url,title, author)=>{
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML=author;

};
const generateMeme=async() => {
    // fetch("https://meme-api.com/gimme/wholesomememes")
    // .then((response)=> response.json())
    // .then((data)=>{
    //     updateDetail(data.url,data.title, data-author);
    // });
    let response=await fetch(URL);
    let data=await response.json();
    updateDetail(data.url,data.title,data.author);

};


genreateMemeBtn.addEventListener("click",generateMeme);


const rating = 'r'
const images = '48';
const token = 'IRV2vzSGcBol8wlXzfdp58sOBZ3EEIAP';
const url = 'https://api.giphy.com/v1/gifs/search?';


const buttonEl = document.getElementById("searchButton");


buttonEl.addEventListener("click", function(){
  let page = document.getElementById("results");
  page.innerHTML = "";

  let query = document.getElementById("query").value;

  let path = `${url}api_key=${token}&q=${query}&rating=${rating}&limit=${images}`;

  fetch(path).then(gif => {
    return gif.json(); //promise
  }).then(json => {
    json.data.forEach(obj => 
      {
        
        let imageLink = obj.images.fixed_width.url;
        console.log(obj);
        let results = document.querySelector(".results");
        let img = document.createElement('img');
  
        img.src = imageLink;
        results.appendChild(img);
        
      });
    }).catch(err => {console.log(err);}); 
}); 


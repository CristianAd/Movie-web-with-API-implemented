/*
function log(content) {
    console.log(content)
}
function print(content) {
    let htmlContent = "";
    content.forEach(element =>{
        htmlContent += `<div>${element.title}</div>`
    })
    myDiv.innerHTML = htmlContent
} 
 

*/


 async function request(url, fn) {
        let response = await fetch(url)
        let json = await response.json()
        console.log(json)
        fn(json)
 }



 const url = "https://api.themoviedb.org/3/movie/550?api_key=d1154bdaa1d0a88050fa9c3b118c839c"
 

 
 request(url, print)
// Library API
let library = document.getElementById('button')
var library_url = "https://poetrydb.org/title/Ozymandias/lines.json"

async function library_fetching(){
   try{
        var url_fetch=await fetch(library_url)
        method:"GET"
    var res= await url_fetch.json()
     console.log(res);
   
    }
    catch(err){
        console.log(err);
        }  
        
       
}
library_fetching();
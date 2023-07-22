var bookmarksList=[]

function addBookmark(){
    var sitename=document.getElementById('sitename').value 
    
    var siteurl=document.getElementById('siteurl').value 
    
    if(sitename.length<3||siteurl.length<3){
        document.getElementById('sitealert').style='display:flex !important';
    }else{

        bookmarksList[bookmarksList.length??0]=
            {name:sitename,
            url:siteurl
        }
        console.log(bookmarksList);
        displayBookmarksList();
    }
    

}

function displayBookmarksList(){
    document.getElementById("tbdy").innerHTML='';
   
    for(let i=0;i<bookmarksList.length;i++){
        document.getElementById("tbdy").innerHTML+=
        ` <tr class="border-3 border-opacity-10">
        <td >${i}</td>
        <td >${bookmarksList[i].name}</td>
       
        <td >
        <button  class="btn-primary mx-2 bg-info rounded border-0 text-white" ><a href="https:${bookmarksList[i].url}"  target="_blank">Visit</a></button>
        </td>
        <td>
        <button  class="btn-primary mx-2 bg-danger rounded border-0 text-white" onclick="deleteBookmark(${i})">delete</button>
        </td>
        </tr>`
    }
}

function deleteBookmark( ind){
    bookmarksList.splice(ind,1);
    displayBookmarksList();
}
function alertClose(){
   document.getElementById('sitealert').style='display:non !important';

}
document.getElementById('searchBox')
.onfocus=function(){
    document.getElementById('resultList')
    .classList.toggle('hidden')
}

document.getElementById('searchBox')
.onblur=function(){
    document.getElementById('resultList')
    .classList.toggle('hidden')
}
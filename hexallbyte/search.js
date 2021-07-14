function search(){
    document.getElementById('start-search-button').style.cssText = 'display: inline;'
    document.getElementById('search-input').style.cssText += 'display: inline;'
    document.getElementById('search-button').style.cssText = 'display: none;'
    document.getElementById('close-search-button').style.cssText = 'display: inline;'
}
function closeSearch(){
    document.getElementById('start-search-button').style.cssText = 'display: none;'
    document.getElementById('search-input').style.cssText += 'display: none;'
    document.getElementById('search-button').style.cssText = 'display: inline;'
    document.getElementById('close-search-button').style.cssText = 'display: none;'
}
function startSearch(){
    console.log('adios mundo')
}
document.getElementById('search-button').onclick = search
document.getElementById('start-search-button').onclick = closeSearch
document.getElementById('close-search-button').onclick = closeSearch
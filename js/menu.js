function upDate(pic, target){
    var src = pic.getAttribute("src");
    document.getElementById('enlarge').style.backgroundImage="url('" + src + "')";
    document.getElementById('details').innerHTML = document.getElementById(target).innerHTML;
}

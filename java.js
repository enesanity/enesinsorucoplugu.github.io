const header2 = document.querySelector("#header2");


function soruyok() {
    document.getElementById('header2').style.display = 'flex'
    setTimeout(
        function(){
            document.getElementById('header2').style.display = 'none'
        }
    , 2000);
}





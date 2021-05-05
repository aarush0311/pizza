menu_list_array = [
"chickan tandoori pizza",
"margarita pizza",
"veg exxtra vegenza",
"indian kabab pizza",
"special pizzaria offer"
];

function getMenu(){
    var htmlData;
    htmlData="<o1 class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.lenght;i++){
        htmldata=htmldata+"</ol>"
        document.getElementById("display_menu").innerHTML=htmldata;
    }
}
function add_item(){
    var htmldata;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmldata="<section class='card'>"
    for(var i=0;i<menu_list_array.lenght;i++){
        htmldata=htmldata+'<div class="card">'+'img src="image/pizzaImg.png"/'+menu_list_array[i]+'</div>'
    }
    htmldata=htmldata+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmldata;
}
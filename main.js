menu_list_array = [
"chickan tandoori pizza",
"margarita pizza",
"veg exxtra vegenza",
"indian kabab pizza",
"special pizzaria offer"
];

function getmenu(){
    var htmlData;
    htmlData="<o1 class='menulist'>"
    menu_list_array.sort();
    for(var i=0;i<menu_list_array.length;i++){
       htmlData=htmlData+'<li>'+menu_list_array[i]+'</li>';
    }
    htmlData=htmlData+"</ol>"
    document.getElementById("display_menu").innerHTML=htmlData;
}
function add_item(){
    var htmlData;
    var item=document.getElementById("add_item").value;
    menu_list_array.push(item);
    menu_list_array.sort();
    htmlData="<section class='card'>"
    for(var i=0;i<menu_list_array.length;i++){
        htmlData=htmlData+'<div class="card">'+'<img src="pizzaImg.png"/>'+menu_list_array[i]+'</div>'
    }
    htmlData=htmlData+"</section>"
    document.getElementById("display_addedmenu").innerHTML=htmlData;
}
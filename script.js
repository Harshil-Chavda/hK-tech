let navBtn = document.querySelector('.sub-manu')
let  nav = document.querySelector('.sub-ops')
let  filter = document.querySelector('.filter')
let  popup = document.querySelector('.types')
let filter_ops = document.querySelector('.td-filter-ops')
let shop_filter = document.querySelector('.filter-ops')

navBtn.onclick = function(){
    nav.classList.toggle('show');
}
filter.onclick = function(){
    filter_ops.classList.toggle('open');
    console.log("Open");

}
function pop_up(){
    popup.classList.toggle('pop-up')
}
function add_show(){
    shop_filter.classList.toggle('open')
}





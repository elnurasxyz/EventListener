const addItem = function(e){
  if(e.type==='keypress' && e.key==='Enter' || e.type==='click'){
    console.log(e)
  }

}
document.getElementById('btn_add').onclick = addItem;
document.getElementById('btn_add').addEventListener('click',addItem);
document.getElementById('btn_input').addEventListener('keypress',addItem);

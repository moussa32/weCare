//Loader UI
const loader = document.querySelector('.loader-bg');
//Hide Loader when page loaded
window.onload = () =>{
  loader.remove();
};

//Show Gazer Settings on click
document.querySelector('.modal-settings').addEventListener('click',() =>{
  $('#myModal').modal('show');
});

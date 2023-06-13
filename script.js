function allowDrop(ev) {
  ev.preventDefault();  //By default, data cannot be dropped in other elements. To allow a drop, we must prevent the default handling of the element.
}

//1 . what to drag

//the on dragstart attribute call a function , drag(Event) that specifies what data to be dragged

function drag(ev) {
  ev.dataTransfer.setData("text", ev.target.id);  //dataTransfer.setData() sets the datatype and the value of dragged data
}

//2.  do the drop 

function drop(ev) {
  ev.preventDefault();  //Call preventDefault() to prevent the browser default handling of the data 
  var data = ev.dataTransfer.getData("text");  //Get the dragged data with the dataTransfer.getData() method.
  ev.target.appendChild(document.getElementById(data)); //Append the dragged element into the drop element
  alert("Image Drag and Drop successfully !");
}

//to hide image this function is used

function Hide_Image() {

  document.getElementById("drag1").style.visibility = 'hidden';


  console.log(event.visibility);


}

// to show image this function is used

function Show_Image() {

  document.getElementById("drag1").style.visibility = 'visible'
  console.log(event.visibility);



}
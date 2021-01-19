
function newItem(){

    // New jquery code to add item to the list
    let li = $("<li></li>")
    let inputValue = $("#input").val();
    li.append(inputValue);

    let list = $("#list"); //
    if (inputValue === "") {
     alert("You must write something!");
    } else {
     list.append(li);
     $("#input").val("");
    }

    //Cross out an item from the list of items:
    li.on("dblclick", function(){
        li.toggleClass("strike");
    });


    // Adding the delete button "X":
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);
    crossOutButton.on('click', deleteListItem);
    function deleteListItem() {
        li.addClass('delete')
    }

    //  Reorder toDo list
    list.sortable();
}









// If you get stuck, you can look below for the jQuery code. However, try yourself to convert the vanilla JS code provided to jQuery first.








  /*
// jQuery Code
//1. Adding a new item to the list:

  let li = $('<li></li>');
  let inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert("You must write something!");
  } else {
    $('#list').append(li);
  }
//2. Crossing an item out:
  function crossOut() {
		li.toggleClass("strike");
	}

	li.on("dblclick", function crossOut() {
		li.toggleClass("strike");
	});
//3. Adding a delete button
  let crossOutButton = $('<crossOutButton></crossOutButton>');
  crossOutButton.append(document.createTextNode('X'));
  li.append(crossOutButton);

//   crossOutButton.on("click", deleteListItem);
//   function deleteListItem(){
// 		li.addClass("delete")
// 	}
   $('#list').sortable();
*/

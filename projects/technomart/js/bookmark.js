
var bookmarkForm = document.querySelector(".bookmark-modal");
var bookmark = document.querySelectorAll(".share");//кнопка закладки
var bookmarkFormClose = document.querySelector(".bookmark-close");
var bookmarkFormCancel = document.querySelector(".bookmark-form-btn .btn-white");
for(var i = 0; i < bookmark.length; i++){		
	bookmark[i].addEventListener("click", function(event){
		event.preventDefault();
		bookmarkForm.classList.remove("hidden");
	});
}
bookmarkFormClose.addEventListener("click", function(event){
	event.preventDefault();
	bookmarkForm.classList.add("hidden");
});
bookmarkFormCancel.addEventListener("click", function(event){
	event.preventDefault();
	bookmarkForm.classList.add("hidden");
});


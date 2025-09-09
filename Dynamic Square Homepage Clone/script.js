document.addEventListener("DOMContentLoaded", function () {
    const openFormBtn = document.getElementById("openFormBtn");
    const closeFormBtn = document.getElementById("closeFormBtn");
    const formContainer = document.getElementById("formContainer");
    
    openFormBtn.addEventListener("click", function () {
        formContainer.style.display = "flex";
    });
    
    closeFormBtn.addEventListener("click", function () {
        formContainer.style.display = "none";
    });
});

function openForm() {
  document.getElementById("myForm").style.display = "block"
};

function closeForm() {
  document.getElementById("myForm").style.display = "none"
};

/* Loop through all dropdown buttons to toggle between hiding and showing its dropdown content - This allows the user to have multiple dropdowns without any conflict */
var dropdown = document.getElementsByClassName("dropdown-btn");
var i;

for (i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === "block") {
      dropdownContent.style.display = "none";
    } else {
      dropdownContent.style.display = "block";
    }
  });
}


// Select the button and content element 
const button =
document.getElementById('replaceButton'); 
const content = document.getElementById('content');
 // Add event listener to the button 
 button.addEventListener('click', function() {
     // Replace the HTML content inside the div content
    innerHTML = 'The content has been replaced!'; 
    }
);
var dropdown1 = document.getElementsByClassName("sales");
var i;

for (i = 0; i < dropdown1.length; i++) {
  dropdown1[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var dropdown1Content = this.nextElementSibling;
    if (dropdown1Content.style.display === "block") {
      dropdown1Content.style.display = "none";
    } else {
      dropdown1Content.style.display = "block";
    }
  });
}
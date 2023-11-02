const languageDropdown = document.getElementById("language-btn")
const faqListItem = document.querySelectorAll(".inner-container ul li")

languageDropdown.addEventListener("click", () => {
  document.getElementById("language-dropdown").classList.toggle("show")
})

faqListItem.forEach((item) => {
  item.addEventListener("click", (e) => {
    item.classList.toggle("show")
  })
})

$(document).ready(function(){
  $("#btnlg").mouseenter(function(){
    $(this).css({"background":"rgb(255 127 127)"})
  })
 $("#btn-lg").click(function(){
  alert("Email is required.")
 })
})
function openform(){
  document.getElementById("myform").style.display="block";
}

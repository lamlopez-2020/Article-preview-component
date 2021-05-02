// import socialBar from "./assets/js/social_panel.js";

// const d = document;

// d.addEventListener("DOMContentLoaded", (e) => {
//   socialBar("share-icon", "tooltip", ".share");
// });


const shareIcon=document.getElementById('share-icon');
const tooltip=document.getElementById('tooltip')

shareIcon.addEventListener('click',(e)=>{
  shareIcon.classList.toggle('share--active');
  tooltip.classList.toggle('tooltip--show')
})

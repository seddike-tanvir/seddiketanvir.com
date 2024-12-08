let popupWindowBG = document.querySelector('.popup_window_bg');
let xBtn = document.querySelector('.X');
let messegeWindow = document.querySelector('.messege_popup');
let xMessegeWindow = document.querySelector('.X_messege_popup');




// //-----Light theme as default------//
//   ui_icon.onclick = function(){
//     document.body.classList.toggle('light_theme');
//     if(document.body.classList.contains('light_theme')){
//       document.querySelector('#img').src = 'assets/files/sun.png';           
//     }else{
//       document.querySelector('#img').src = 'assets/files/moon.png';

//     }
//   }

//-----Dark theme as default------//
// ui_icon.onclick = function(){
// document.body.classList.toggle('light_theme');
// if(document.body.classList.contains('light_theme')){
//   document.querySelector('#img').src = 'assets/files/moon.png';
// }else{
//   document.querySelector('#img').src = 'assets/files/sun.png';
// }
// }



//-----Menu Area-----//
xBtn.onclick = function(){
    popupWindowBG.style.display='none';
    messegeWindow.style.display='none';
}

xMessegeWindow.onclick = function(){
    popupWindowBG.style.display='none';
    messegeWindow.style.display='none';
    
}



































// menu_icon.onclick = function(){
// fullWindow.style.display='block'; 
// xBtn.style.display= 'none';
// menuBar.style.display='block';
// }


// xMenuBarBtn.onclick = function(){
// fullWindow.style.display='none'; 
// menuBar.style.display='none';
// }

// let typed = new Typed('#element', {
// strings: [' Learner .', ' Web Devloper .', ' Tech Researcher .'],
// typeSpeed: 150,
// backSpeed: 150,
// loop: true,
// });
// expandLinks.onclick = function(){
//   expandedLinkBox.style.display='flex'; 
//   expandLinks.style.display='none';
//   minimizeLinks.style.display='block';
// }
// minimizeLinks.onclick = function(){
//   expandedLinkBox.style.display='none'; 
//   expandLinks.style.display='block';
//   minimizeLinks.style.display='none';
// }
// contactBtn.onclick = function(){
//   fullWindow.style.display='block'; 
//   xBtn.style.display='block';
//   contactWindow.style.display='block';
// }
// xBtn.onclick = function(){
//   fullWindow.style.display='none';
//   contactWindow.style.display='none';
//   mailWindow.style.display='none';
//   askWindow.style.display='none';

// }

// copyBtn.onclick = function(){
//   input.select();
//   document.execCommand('copy');
//   alart.style.display='block';
// }


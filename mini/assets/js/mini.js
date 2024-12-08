  var contactBtn = document.querySelector('.get_in_touch_box_btn_1');
  var xBtn = document.querySelector('.X');
  var copyBtn = document.querySelector('.cpy');
  var fullWindow = document.querySelector('.popup_window');
  var contactWindow = document.querySelector('.contact_popup');
  var alart = document.querySelector('.alart');
  var ui_icon = document.querySelector('#img');
  var menu_icon = document.querySelector('#menu_btn');
  var menuBar = document.querySelector('.menu_popup');
  var xMenuBarBtn = document.querySelector('.X_menuBar');
  var cmnID = document.querySelector('#cmn_id');  
  var expandLinks = document.querySelector('#link_more');
  var minimizeLinks = document.querySelector('#link_less');
  var expandedLinkBox = document.querySelector('.link_box1_b');










  



// //-----Light theme as default------//
//   ui_icon.onclick = function(){
//     document.body.classList.toggle('light_theme');
//     if(document.body.classList.contains('light_theme')){
//       document.querySelector('#img').src = 'assets/files/sun2.png';           
//     }else{
//       document.querySelector('#img').src = 'assets/files/moon.png';

//     }
//   }

//-----Dark theme as default------//
ui_icon.onclick = function(){
  document.body.classList.toggle('light_theme');
  if(document.body.classList.contains('light_theme')){
    document.querySelector('#img').src = 'assets/files/moon.png';
  }else{
    document.querySelector('#img').src = 'assets/files/sun2.png';
  }
}



//-----Menu Area-----//
menu_icon.onclick = function(){
  fullWindow.style.display='block'; 
  xBtn.style.display= 'none';
  menuBar.style.display='block';
}


xMenuBarBtn.onclick = function(){
  fullWindow.style.display='none'; 
  menuBar.style.display='none';
}

let typed = new Typed('#element', {
  strings: [' Learner .', ' Web Devloper .', ' Tech Enthusiast.'],
  typeSpeed: 150,
  backSpeed: 30,
  loop: true,
});
  expandLinks.onclick = function(){
    expandedLinkBox.style.display='flex'; 
    expandLinks.style.display='none';
    minimizeLinks.style.display='block';
  }
  minimizeLinks.onclick = function(){
    expandedLinkBox.style.display='none'; 
    expandLinks.style.display='block';
    minimizeLinks.style.display='none';
  }
  contactBtn.onclick = function(){
    fullWindow.style.display='block'; 
    xBtn.style.display='block';
    contactWindow.style.display='block';
  }
  xBtn.onclick = function(){
    fullWindow.style.display='none';
    contactWindow.style.display='none';
    mailWindow.style.display='none';
    askWindow.style.display='none';

  }

  // copyBtn.onclick = function(){
  //   input.select();
  //   document.execCommand('copy');
  //   alart.style.display='block';
  // }

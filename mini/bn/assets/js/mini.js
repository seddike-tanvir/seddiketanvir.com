  let contactBtn = document.querySelector('.get_in_touch_box_btn_1');
  let xBtn = document.querySelector('.X');
  let copyBtn = document.querySelector('.cpy');
  let fullWindow = document.querySelector('.popup_window');
  let contactWindow = document.querySelector('.contact_popup');
  let alart = document.querySelector('.alart');
  let ui_icon = document.querySelector('#img');
  let menu_icon = document.querySelector('#menu_btn');
  let menuBar = document.querySelector('.menu_popup');
  let xMenuBarBtn = document.querySelector('.X_menuBar');
  let cmnID = document.querySelector('#cmn_id');  
  let expandLinks = document.querySelector('#link_more');
  let minimizeLinks = document.querySelector('#link_less');
  let expandedLinkBox = document.querySelector('.link_box1_b');
  let preLoader = document.querySelector('.pre-loader');





// --Pre-Loader -----

window.addEventListener("load", function(){
  preLoader.style.display = "none";
})



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
  strings: [' শিক্ষার্থী .', ' ওয়েব ডেভেলপার .', ' প্রযুক্তি কৌতূহলী .'],
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

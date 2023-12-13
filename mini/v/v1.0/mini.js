  let callBtn = document.querySelector('.btn_1');
  let mailBtn = document.querySelector('.btn_2');
  let askBtn = document.querySelector('.btn_3');
  let xBtn = document.querySelector('.X');
  let copyBtn = document.querySelector('.cpy');
  let fullWindow = document.querySelector('.popup_window');
  let callWindow = document.querySelector('.call_popup');
  let mailWindow = document.querySelector('.mail_popup');
  let askWindow = document.querySelector('.ask_popup');
  let alart = document.querySelector('.alart');
  let ui_icon = document.querySelector('#img');
  


  let typed = new Typed('#element', {
    strings: [' Learner .', ' Web Devloper .', ' Tech Researcher .'],
    typeSpeed: 150,
    backSpeed: 150,
    loop: true,
  });

// //-----Light theme as default------//
//   ui_icon.onclick = function(){
//     document.body.classList.toggle('light_theme');
//     if(document.body.classList.contains('light_theme')){
//       document.querySelector('#img').src = 'files/sun.png';           
//     }else{
//       document.querySelector('#img').src = 'files/moon.png';

//     }
//   }

//-----Dark theme as default------//
ui_icon.onclick = function(){
  document.body.classList.toggle('light_theme');
  if(document.body.classList.contains('light_theme')){
    document.querySelector('#img').src = 'files/moon.png';
  }else{
    document.querySelector('#img').src = 'files/sun.png';
  }
}

  callBtn.onclick = function(){
    fullWindow.style.display='block';
    callWindow.style.display='block';
  }
  mailBtn.onclick = function(){
    fullWindow.style.display='block';
    mailWindow.style.display='block';
  } 
  askBtn.onclick = function(){
    fullWindow.style.display='block';
    askWindow.style.display='block';
  } 

  xBtn.onclick = function(){
    fullWindow.style.display='none';
    callWindow.style.display='none';
    mailWindow.style.display='none';
    askWindow.style.display='none';
  }

  copyBtn.onclick = function(){
    input.select();
    document.execCommand('copy');
    alart.style.display='block';
  }
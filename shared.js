
var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectplanbuttons = document.querySelectorAll('.plan button');
var closingmodal = document.querySelector('.modal__action--negative');
var togglebutton = document.querySelector('.toggle-button');
var mobilenav = document.querySelector('.mobile-nav');
var ctabutton = document.querySelector('.main-nav__item--cta');
//console.dir(backdrop);

for(var i = 0; i < selectplanbuttons.length; i++){

  selectplanbuttons[i].addEventListener('click', function(){

    //modal.style.display = 'block';
    //backdrop.style.display = 'block';
    
   //modal.className = 'open';// this will actually overwrite the class list
     modal.classList.add('open');
     backdrop.style.display = "block";
     setTimeout(function(){

      backdrop.classList.add("open");
 
      }, 10);
 

  });


}

if(closingmodal){

closingmodal.addEventListener('click', closeModal);

}



backdrop.addEventListener('click', function(){

  mobilenav.classList.remove('open');
  closeModal();

   
  
}

);

function closeModal(){

// backdrop.style.display = 'none';
// modal.style.display = 'none';
     if(modal){
     modal.classList.remove('open');
     }

     backdrop.classList.remove("open");
    
     setTimeout(function(){

      backdrop.style.display = "none";
 
      }, 200);
 
     

}

togglebutton.addEventListener('click', function(){

//mobilenav.style.display = 'block';
//backdrop.style.display = 'block';

     mobilenav.classList.add('open');
     backdrop.style.display = "block";
     setTimeout(function(){

     backdrop.classList.add("open");

     }, 10);

});


ctabutton.addEventListener('animationstart', function(event){

console.log('Animation started', event);

})

ctabutton.addEventListener('animationend', function(event){

  console.log('Animation ended', event);
  
  })

  ctabutton.addEventListener('animationiteration', function(event){

    console.log('Animation iteration', event);
    
    })
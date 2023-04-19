window.onload = () => {
  var navMobile = window.document.getElementById('nav__mobile');
  var navMobileList = window.document.getElementById('nav__mobile__list');
  navMobile.addEventListener('click', () => {
    if(!navMobileList.classList.contains('nav__mobile__list__open')){
      navMobileList.classList.add('nav__mobile__list__open')
    }else{
      navMobileList.classList.remove('nav__mobile__list__open')
    }
    
  })
}
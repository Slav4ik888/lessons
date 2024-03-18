
const
  sidebar               = document.querySelector('.sidebar-container'),
  sidebarMainContainer  = document.querySelector('.sidebar-main-container'),
  sidebarMainFirstChild = sidebarMainContainer.firstElementChild, // Для показа скруглённых краёв при свёрнутом меню
  sidebarMainBlock      = document.querySelector('.sidebar-main-block'),
  switcherFadeinIcon    = document.querySelector('.switcher-fadein-container');


let
  sidebarOpen = true,
  sidebarShow = true;


sidebar.onmouseenter = (e) => {
  console.log('Enter');
  switcherFadeinIcon.ariaDisabled  = false;
  switcherFadeinIcon.tabindex      = "0";
  switcherFadeinIcon.style.opacity = 1;
};

sidebar.onmouseleave = (e) => {
  console.log('Leave');
  switcherFadeinIcon.ariaDisabled  = true;
  switcherFadeinIcon.tabindex      = "-1";
  switcherFadeinIcon.style.opacity = 0;
};


document.onmousemove = (e) => {
  // Если открыт то ничего не делаем
  if (sidebarOpen) return

  // Показываем если "закрыто" и не "показано"
  else if (e.pageX <= 45 && ! sidebarShow) {
    console.log(11111111);
    handlerShowSideBarContainer();
  }
  
  // Сворачиваем если было "закрыто" и "показано" и увели мышь за пределы
  else if (e.pageX > 255 && sidebarShow) {
    console.log(2222222);
    handlerCloseSideBarContainer();
  }
};


switcherFadeinIcon.addEventListener('click', (e) => {
  console.log('click');

  handlerCloseSideBarContainer();
});

// Закрываем SideBar
function handlerCloseSideBarContainer() {
  sidebarOpen = false;
  sidebarShow = false;

  sidebar.ariaHidden  = true;
  sidebar.style.width = '0px';

  sidebarMainContainer.style.pointerEvents = 'none';
  sidebarMainContainer.style.height        = 'auto';
  sidebarMainContainer.style.visibility    = 'hidden';
  sidebarMainContainer.style.transform     = 'translateX(-232px) translateY(60px) translateZ(0px)';
  sidebarMainContainer.style.opacity       = 0;

  sidebarMainBlock.style.maxHeight = 'calc(100vh - 120px)';
};

// Временно показываем SideBar
function handlerShowSideBarContainer() {
  sidebarShow = true;

  sidebar.ariaHidden  = false;

  sidebarMainContainer.style.pointerEvents = 'auto';
  sidebarMainContainer.style.height        = 'auto';
  sidebarMainContainer.style.visibility    = 'visible';
  sidebarMainContainer.style.transform     = 'translateY(60px) translateZ(0px)';
  sidebarMainContainer.style.opacity       = 1;
  
  sidebarMainFirstChild.style.display = 'block';
};

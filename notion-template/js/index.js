
const
  sidebar               = document.querySelector('.sidebar-container'),
  sidebarMainContainer  = document.querySelector('.sidebar-main-container'),
  sidebarMainFirstChild = sidebarMainContainer.firstElementChild, // Для показа скруглённых краёв при свёрнутом меню
  sidebarMainBlock      = document.querySelector('.sidebar-main-block'),
  switcherFadeinIcon    = document.querySelector('.switcher-fadein-container'),
  topbarIcons           = document.querySelector('.topbar-switcher-icons-container'),
  topbarHamburgerIcon   = document.querySelector('.topbar-switcher-icon-hamburger'),
  topbarOpenIcon        = document.querySelector('.topbar-switcher-icon-open');


let
  sidebarOpen = true,
  sidebarShow = true,
  hamburger   = true;

// При наведении мыши на SideBar
sidebar.onmouseenter = (e) => {
  switcherFadeinIcon.ariaDisabled  = false;
  switcherFadeinIcon.tabindex      = "0";
  switcherFadeinIcon.style.opacity = 1;
};

// При увода мыши из SideBar
sidebar.onmouseleave = (e) => {
  switcherFadeinIcon.ariaDisabled  = true;
  switcherFadeinIcon.tabindex      = "-1";
  switcherFadeinIcon.style.opacity = 0;
};

// Если SideBar скрыт, то при приближении мышки к левому краю показать его
document.onmousemove = (e) => {
  // Если открыт то ничего не делаем
  if (sidebarOpen) return

  // Показываем если "закрыто" и не "показано"
  else if (e.pageX <= 45 && ! sidebarShow) {
    handlerShowSideBarContainer();
  }
  
  // Сворачиваем если было "закрыто" и "показано" и увели мышь за пределы
  else if (e.pageX > 255 && sidebarShow) {
    handlerCloseSideBarContainer();
  }
};

// При наведении мыши на topbarHamburgerIcon
topbarHamburgerIcon.onmouseenter = (e) => {
  topbarHamburgerIcon.style.opacity = 0;

  topbarOpenIcon.style.opacity    = 1;
  topbarOpenIcon.style.background = 'rgba(55, 53, 47, 0.08)';
  topbarOpenIcon.style.display    = 'inline-flex';
};

topbarOpenIcon.onmouseleave = (e) => {
  topbarHamburgerIcon.style.opacity = 1;

  topbarOpenIcon.style.opacity = 0;
  topbarOpenIcon.style.display = 'none';
};

// Open SideBar
topbarOpenIcon.addEventListener('click', (e) => {
  handlerShowSideBarContainer(true);
});

// Закрываем SideBar
switcherFadeinIcon.addEventListener('click', (e) => {
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

  sidebarMainBlock     .style.maxHeight = 'calc(100vh - 120px)';
  sidebarMainFirstChild.style.display   = 'block';
  switcherFadeinIcon   .style.display   = 'none';
  topbarIcons          .style.display   = 'block';
};

// Временно показываем SideBar
function handlerShowSideBarContainer(isSidebarOpen) {
  sidebarShow = true;

  sidebar.ariaHidden  = false;

  sidebarMainContainer.style.pointerEvents = 'auto';
  sidebarMainContainer.style.height        = isSidebarOpen ? '100%' : 'auto';
  sidebarMainContainer.style.visibility    = 'visible';
  sidebarMainContainer.style.transform     = isSidebarOpen ? 'none' : 'translateY(60px) translateZ(0px)';
  sidebarMainContainer.style.opacity       = 1;

  if (! isSidebarOpen) return
  
  sidebarOpen = true;
  sidebar.style.width = '252px';

  sidebarMainBlock     .style.maxHeight = '100%';
  sidebarMainFirstChild.style.display   = 'none';
  switcherFadeinIcon   .style.display   = 'inline-flex';
  topbarIcons          .style.display   = 'none';

};

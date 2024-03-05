/***************************************************
 * SETTINGS FOR GOOGLE SHEETS
 ***************************************************/

/** For all finded selectors */
const setAction = (selector, action) => {
  const containers = document.querySelectorAll(selector);
  if (! containers) return
  
  for (let container of containers) {
    action(container);
  }
};



const
  sidebar = '.waffle-sidebar-container',
  sidebarAction = (selector) => selector.style.width = '220px';

setAction(sidebar, sidebarAction);

const
  sidebarBoxes = ['.waffle-datavalidation-edit-pill', '.waffle-datavalidation-edit-pill-rule-details'],
  sidebarBoxesAction = (selector) => selector.style.overflowX = 'scroll';

sidebarBoxes.forEach(item => setAction(item, sidebarBoxesAction));


class ShowHide {
  constructor(elem, hide) {
    if (elem) {
      if (hide) {
        elem.classList.add('hide');
        elem.classList.remove('show');
      }
      else {
        elem.classList.add('show');
        elem.classList.remove('hide');
      }
    }
  }
}

export default ShowHide

export const menuIconMobile = document.querySelector('.navbar__hamb');
export const menu = document.querySelector('.navbar__menu');
export const viewport = document.querySelector('body');
export const menuLinks = document.querySelectorAll('.navbar__menu__link');

export const isActiveClassExisted = (element) => {
  return element.classList.contains('active');
}

export const refreshIcon = () => {
  if (isActiveClassExisted(menu)) {
    menuIconMobile.setAttribute('src', 'images/hamburguer-close.png');
  } else {
    menuIconMobile.setAttribute('src', 'images/hamburguer.png');
  }
}
export const openMenu = () => {
  menu.classList.toggle('active');
  viewport.classList.add('blockover');
  refreshIcon();
}

export const closeMenu = () => {
  menu.classList.remove('active');
  viewport.classList.remove('blockover');
  refreshIcon();
}


// Mobile menu functionality
import { menuIconMobile, menuLinks, openMenu, closeMenu} from "./menu.js";

menuIconMobile.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});

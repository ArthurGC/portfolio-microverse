// Mobile menu functionality
import { menuIconMobile, menuLinks } from "./menu";

menuIconMobile.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});
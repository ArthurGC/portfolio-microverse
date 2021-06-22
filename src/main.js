// Mobile menu functionality
import {
  menuIconMobile, menuLinks, openMenu, closeMenu,
} from './menu.js';

// Popup window functionality
import { createModal, projects } from './popup.js';

menuIconMobile.addEventListener('click', openMenu);
menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', closeMenu);
});

// Event that detect when the page loads
document.addEventListener('DOMContentLoaded', () => {
  createModal();

  const firstButtonProject = document.querySelector('.first-btn');
  const secondButtonProject = document.querySelector('.second-btn');
  const thirdButtonProject = document.querySelector('.third-btn');
  const fourthButtonProject = document.querySelector('.fourth-btn');
  const closeIcon = document.querySelector('.closeModal');
  const modal = document.querySelector('.modal');
  const backgroundModal = document.querySelector('.overlay');
  const projectName = document.querySelector('.project-name');
  const projectFeature = document.querySelector('.project-feature');
  const projectBack = document.querySelector('.project-background');
  const projectYear = document.querySelector('.project-year');
  const projectImage = document.querySelector('.project-image');
  const projectDescription = document.querySelector('.project-description');
  const projectTool1 = document.querySelector('.project-tool1');
  const projectTool2 = document.querySelector('.project-tool2');
  const projectTool3 = document.querySelector('.project-tool3');
  const projectLinkLive = document.querySelector('.project-linkLive');
  const projectLinkSource = document.querySelector('.project-linkSource');

  const openModal = (btn) => {
    const button = btn.path[0];
    projectName.textContent = `${projects[button.id].name}`;
    projectFeature.textContent = `${projects[button.id].feature}`;
    projectBack.textContent = `${projects[button.id].background}`;
    projectYear.textContent = `${projects[button.id].year}`;
    projectImage.setAttribute('src', `${projects[button.id].image}`);
    projectDescription.textContent = `${projects[button.id].description}`;
    projectTool1.textContent = `${projects[button.id].tool1}`;
    projectTool2.textContent = `${projects[button.id].tool2}`;
    projectTool3.textContent = `${projects[button.id].tool3}`;
    projectLinkLive.setAttribute('href', `${projects[button.id].linkLive}`);
    projectLinkSource.setAttribute('href', `${projects[button.id].linkSource}`);
    modal.classList.add('active');
    backgroundModal.classList.add('active');
  };

  const closeModal = () => {
    modal.classList.remove('active');
    backgroundModal.classList.remove('active');
  };

  firstButtonProject.addEventListener('click', openModal);
  secondButtonProject.addEventListener('click', openModal);
  thirdButtonProject.addEventListener('click', openModal);
  fourthButtonProject.addEventListener('click', openModal);

  closeIcon.addEventListener('click', closeModal);
});

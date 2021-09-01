export const projects = [
  {
    name: 'LoopStudio',
    feature: 'FRONTEND MENTOR',
    background: 'Front-End',
    year: '2021',
    image: 'images/desktop/Loopstudio-Webpage.png',
    description:
      'A website about technology, video games and universe.',
    tool1: 'html',
    tool2: 'css',
    tool3: 'javascript',
    linkLive: 'https://arthurgc.github.io/loopstudios-landing-page/',
    linkSource: 'https://github.com/ArthurGC/loopstudios-landing-page',
  },
  {
    name: 'Crowdfunding Mastercraft Bamboo',
    feature: 'FRONTEND MENTOR',
    background: 'Front-End',
    year: '2021',
    image: 'images/desktop/Crowdfunding-Webpage.png',
    description:
      'Mastercraft Bamboo is a sturdy and stylish platform that elevates your screen to a more comfortable viewing height. Placing your monitor at eye level has the potential to improve your posture and make you more comfortable while at work.',
    tool1: 'html',
    tool2: 'css',
    tool3: 'javascript',
    linkLive: 'https://arthurgc.github.io/Mastercraft_Bamboo_Monitor_Website/',
    linkSource: 'https://github.com/ArthurGC/Mastercraft_Bamboo_Monitor_Website',
  },
  {
    name: 'Blogr',
    feature: 'FRONTEND MENTOR',
    background: 'Front-End',
    year: '2021',
    image: 'images/desktop/Blogr-Webpage.png',
    description:
      "A modern publishing platform.Blogr features an exceedingly intuitive interface which lets you focus on one thing: creating content. The editor supports management of multiple blogs and allows easy manipulation of embeds such as images, videos, and Markdown.",
    tool1: 'html',
    tool2: 'css',
    tool3: 'javascript',
    linkLive: 'https://arthurgc.github.io/blogr-landing-page/',
    linkSource: 'https://github.com/ArthurGC/blogr-landing-page',
  },
  {
    name: 'Rock, Paper and Scissors game',
    feature: 'ODIN PROJECT',
    background: 'Front-End',
    year: '2021',
    image: 'images/desktop/Rock-Paper-Webpage.png',
    description:
      'A game of rock, paper and scissors in a website.',
    tool1: 'html',
    tool2: 'css',
    tool3: 'javascript',
    linkLive: 'https://arthurgc.github.io/rock_paper_scissors/',
    linkSource: 'https://github.com/ArthurGC/rock_paper_scissors',
  },
];

const startingPoint = document.querySelector('.hero');

export function createModal() {
  startingPoint.insertAdjacentHTML(
    'afterend',
    `<div class='overlay'>
    <section class='modal'>
    <div class='modal__header flex'>
    <h2 class='project-name fw-700 fz-32 lh-44 clr-n-800'></h2>
    <img  class='closeModal' src='images/desktop/close.svg' alt='close icon'></img>
    </div>
    <div class='modal__feature flex'>
    <p class="project-feature fw-600 fz-13 lh-16 clr-n-600"></p>
    <ul class=" flex">
    <li class=" project-background fw-600 fz-13 lh-16 clr-n-500"></li>
    <li class="project-year fw-600 fz-13 lh-16 clr-n-500"> </li>
    </ul></div>
    <div class='image-project'><img class='modal__image project-image' src='' alt='project image'></img></div>
    <ul class='modal__dsc ul flex'>
    <li class='modal__dsc__first'><p class='project-description fw-400 fz-15 lh-24 clr-n-600'></p></li>
    <li class="modal__dsc__second flex">
    <div class='flex'>
    <p class="project-tool1 fw-500 fz-12 lh-16 clr-p-400 bg-p-50"></p>
    <p class="project-tool2 fw-500 fz-12 lh-16 clr-p-400 bg-p-50"></p>
    <p class="project-tool3 fw-500 fz-12 lh-16 clr-p-400 bg-p-50"></p>
    </div>
    <ul class='modal__btn ul flex'>
    <li>
    <a href='' class="btn link project-linkLive fw-500 fz-17 lh-24 clr-p-500 bg-white">See Live</a>
    </li>
    <li>
    <a href='' class="btn link project-linkSource fw-500 fz-17 lh-24 clr-p-500 bg-white">See Source</a>
    </li>
    </ul>
    </li>
    </ul>
    </section>
    </div>`,
  );
}

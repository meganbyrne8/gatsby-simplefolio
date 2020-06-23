import { v4 as uuidv4 } from 'uuid';

// HEAD DATA
export const headData = {
  title: 'Megan Byrne', // e.g: 'Name | Developer'
  lang: 'EN', // e.g: en, es, fr, jp
  description: 'Welcome to my Website!', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hello, I'm`,
  name: 'Megan Byrne.',
  subtitle: `I'm a developer.`,
  cta: 'Learn More',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne: `My name is Megan Byrne and I'm a Software Engineer and Operations Manager. I am currently working in Vanilla JS, React, and Ruby.`,
  paragraphTwo: `I became really curious about programming after I saw the capacity that engineers had to create real world solutions for problems people face every day. From financial literacy apps to 2-sided marketplaces for older people to find help with house tasks, web apps really do have the potential to have a dramatic, lasting, and positive impact on people's lives. I'm drawn to web apps that point to—or solve problems—and that create an enjoyable experience for users & increase accessiblity.`,
  paragraphThree: `I have been building web apps for nearly one year, and am currently studying Python and React Animations in-depth.`,
  resume: 'https://www.docdroid.net/Jyv479K/mbyrne-devresume-2020-pdf', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: uuidv4(),
    img: 'garden-modeling.jpg',
    title: 'Garden Modeling',
    info: `Garden Modeling was created during the COVID-19 shutdown in New York in early spring of 2020 as a way to keep track of all of the plants in your garden. From spacing between roots to soil ph levels and water frequency, each individual plant grown comes with a lot of information for care. My garden is a way to organize all of that information with some ease.`,
    info2: `My Garden will also incorporate visual elements to allow users to create planters and planting beds, allowing for a better garden visualization and a better overall user experience.`,
    url: 'https://garden-modeling.netlify.app/',
    repo: 'https://github.com/meganbyrne8/garden-model', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'aic-gallery.jpg',
    title: 'AIC Art Generator',
    info: `A Piece A Day uses The Art Institute of Chicago's (AIC) Open API to generate a gallery of images from the AIC's collection. The site contains both a feature, and a gallery. In order to chang the image featured, simply click any of the images below in the gallery. Once a user chooses an image, the feature section will refresh.`,
    info2: `In order to generate new images, just click the button for "Generate New Gallery" and you'll see more options pop up!`,
    url: 'https://vigorous-babbage-cad394.netlify.app/',
    repo: 'https://github.com/meganbyrne8/AIC_ArtGenerator', // if no repo, the button will not show up
  },
  {
    id: uuidv4(),
    img: 'peapod-design.jpg',
    title: 'PeaPod Redesign',
    info: `Working with a UX/UI team who redesigned the PeaPod grocery delivery site for an older audience, the goal of this one-week sprint was to build out a a web app that has authentication and CRUD, and incoporates the design elements that were most important to the UX/UI team for their targeted user profile.`,
    info2: '',
    url: 'http://peapod.surge.sh/',
    repo: 'https://github.com/meganbyrne8/project-three-peapod', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: 'Want to work with me? Awesome! Use the button below to get in touch.',
  btn: '',
  email: 'megan.byrne.dev@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: uuidv4(),
      name: 'twitter',
      url: 'https://twitter.com/_mbyrne',
    },
    {
      id: uuidv4(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/megan-j-byrne/',
    },
    {
      id: uuidv4(),
      name: 'github',
      url: 'https://github.com/meganbyrne8/',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};

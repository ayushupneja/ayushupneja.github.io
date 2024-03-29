module.exports = {
  siteTitle: 'Ayush Upneja | Computer Engineering Student',
  siteDescription:
    'Ayush is a Junior at Boston University, majoring in Computer Engineering and minoring in Mathematical Statistics.',
  siteKeywords:
    'Ayush Upneja, Ayush, Upneja, ayushupneja, software engineer, front-end engineer, web developer, javascript, Boston University',
  siteUrl: 'https://upneja.me',
  siteLanguage: 'en_US',
//  googleAnalyticsID: 'UA-45666519-2',
//  googleVerification: 'DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk',
  name: 'Ayush Upneja',
  location: 'Boston, MA',
  email: 'upneja@bu.edu',
  github: 'https://github.com/ayushupneja',
  twitterHandle: '@desidebater007',
  socialMedia: [
    {
      name: 'Github',
      url: 'https://github.com/ayushupneja',
    },
    {
      name: 'Linkedin',
      url: 'https://www.linkedin.com/in/ayush-upneja',
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/desidebater007',
    },
  ],

  navLinks: [
    {
      name: 'About',
      url: '/#about',
    },
    {
      name: 'Experience',
      url: '/#jobs',
    },
    {
      name: 'Work',
      url: '/#projects',
    },
    {
      name: 'Contact',
      url: '/#contact',
    },
  ],

  navHeight: 100,
  greenColor: '#64ffda',
  navyColor: '#0a192f',
  darkNavyColor: '#020c1b',

  srConfig: (delay = 200) => ({
    origin: 'bottom',
    distance: '20px',
    duration: 500,
    delay,
    rotate: { x: 0, y: 0, z: 0 },
    opacity: 0,
    scale: 1,
    easing: 'cubic-bezier(0.645, 0.045, 0.355, 1)',
    mobile: true,
    reset: false,
    useDelay: 'always',
    viewFactor: 0.25,
    viewOffset: { top: 0, right: 0, bottom: 0, left: 0 },
  }),
};

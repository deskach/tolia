interface CourseDescriptor {
  year: number,
  title: string,
  url: string,
}

function mapKeys(recs: Record<string, any>[], name: string) {
  return recs.reduce((accum, key, idx) => ({
    ...accum,
    [recs[idx][name]]: accum[recs[idx][name]] ? [...accum[recs[idx][name]], recs[idx]] : [recs[idx]]
  }), {})
}

const allCourses: CourseDescriptor[] = [
  {
    year: 2016,
    title: 'Introduction to Agile and Agile Certification',
    url: 'https://www.udemy.com/certificate/UC-8HWQF2ME/'
  },
  {
    year: 2016,
    title: 'ES6 Javascript: The Complete Developer\'s Guide',
    url: 'https://www.udemy.com/certificate/UC-09V1YSBC/'
  },
  {year: 2016, title: 'Build Apps with React Native', url: 'https://www.udemy.com/certificate/UC-HVT5R6O2/'},
  {year: 2016, title: 'Advanced React and Redux', url: 'https://www.udemy.com/certificate/UC-EMWWJD4R/'},
  {year: 2016, title: 'Modern React with Redux', url: 'https://www.udemy.com/certificate/UC-DKB6SHWP/'},

  {
    year: 2017,
    title: 'AngularJS Authentication: Secure Your App with Auth0',
    url: 'https://www.udemy.com/certificate/UC-OWG15PLK/'
  },
  {
    year: 2017,
    title: 'Webpack 2: The Complete Developer\'s Guide',
    url: 'https://www.udemy.com/certificate/UC-LA84J21C/'
  },
  {
    year: 2017,
    title: 'JavaScript Design Patterns: 20 Patterns for Expert Code',
    url: 'https://www.udemy.com/certificate/UC-OSH2V78W/'
  },
  {
    year: 2017,
    title: 'Node with React: Fullstack Web Development',
    url: 'https://www.udemy.com/certificate/UC-XWHWXXVW/'
  },

  {year: 2018, title: 'RxJs 6 In Practice', url: 'https://www.udemy.com/certificate/UC-HBZZQ866/'},
  {year: 2018, title: 'Build Web Apps with Vue JS 2 & Firebase', url: 'https://www.udemy.com/certificate/UC-EBSSYTON/'},
  {
    year: 2018,
    title: 'Progressive Web Apps (PWA) - The Complete Guide',
    url: 'https://www.udemy.com/certificate/UC-9GOP4DC1/'
  },
  {
    year: 2018,
    title: 'Angular (formerly Angular 2) - The Complete Guide',
    url: 'https://www.udemy.com/certificate/UC-CDZS2URS/'
  },
  {
    year: 2018,
    title: 'GraphQL with React: The Complete Developers Guide',
    url: 'https://www.udemy.com/certificate/UC-M3DESID3/'
  },

  {
    year: 2019,
    title: 'Progressive Web Apps - The Concise PWA Masterclass',
    url: 'https://www.udemy.com/certificate/UC-TL0TJ1DE/'
  },
  {
    year: 2019,
    title: 'Create the REST API in PHP Symfony Complete Class',
    url: 'https://www.udemy.com/certificate/UC-8O2K9G7E/'
  },
]

export const mappedCourses = mapKeys(allCourses, 'year')
export const skills = [
  'HTML / CSS', 'JavaScript / Node.JS', 'MySql, MsSql', 'MongoDB', 'ReactJS / Redux', 'Angular 4', 'Python'
]
export const services = [
  'HTML / CSS Website Design',
  'Web Programming (Angular 4, React, Backbone.JS)',
  'Back-end engineering (Python, Nonde.JS, MySql, MongoDB)',
  'CMS Web-development',
]

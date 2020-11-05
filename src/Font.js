import ComfortaaRegular from './fonts/comfortaa/comfortaa-regular.ttf';
import ComfortaaLight from './fonts/comfortaa/comfortaa-light.ttf';
import ComfortaaBold from './fonts/comfortaa/comfortaa-bold.ttf';

const comfortaa = {
  fontFamily: 'comfortaa',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 400,
  src: `
    local('comfortaa'),
    local('comfortaa-regular'),
    url(${ComfortaaRegular}) format('truetype')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const comfortaaBold = {
  fontFamily: 'comfortaa',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 600,
  src: `
    local('comfortaa'),
    local('comfortaa-bold'),
    url(${ComfortaaBold}) format('truetype')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

const comfortaaLight= {
  fontFamily: 'comfortaa',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 200,
  src: `
    local('comfortaa'),
    local('comfortaa-light'),
    url(${ComfortaaLight}) format('truetype')
  `,
  unicodeRange: 'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF',
};

export {
  comfortaa,
  comfortaaBold,
  comfortaaLight
}
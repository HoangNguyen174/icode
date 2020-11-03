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
};

const comfortaaBold = {
  fontFamily: 'comfortaa',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 900,
  src: `
    local('comfortaa'),
    local('comfortaa-bold'),
    url(${ComfortaaBold}) format('truetype')
  `,
};

const comfortaaLight= {
  fontFamily: 'comfortaa',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: 700,
  src: `
    local('comfortaa'),
    local('comfortaa-light'),
    url(${ComfortaaLight}) format('truetype')
  `,
};

export {
  comfortaa,
  comfortaaBold,
  comfortaaLight
}
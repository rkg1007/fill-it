import * as developmentEnvs from '../../configs/development.json';

export const get = (key) => {
  return developmentEnvs[key];
};

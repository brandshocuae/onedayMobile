const _Environments = {
  development: {
    BASE_URL: `https://xxxx.xxx/xxx/`,
    USER: `xxx.xxxx/`,
   
  },
};

function getEnvironment() {
  const platform = 'development';
  return _Environments[platform];
}

const Environment = getEnvironment();
export default Environment;

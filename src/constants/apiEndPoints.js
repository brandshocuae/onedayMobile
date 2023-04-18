const _Environments = {
  development: {
    BASE_URL: `https://onedaydeal-production.up.railway.app/`,
    LOGIN: `api/auth/local`,
    SIGN_UP: `api/auth/local/register`,
    CHANGE_PASSWORD: `api/auth/change-password`,
    TODAYS_DEAL: `api/todays-deals`,
    GET_CUSTOMER_ID: `api/users`,
    ADDRESS_BOOK: `api/address-books`,
    GET_PRODUCT: `api/products?populate=*`,
    PLACE_ORDER: `api/orders`,
    GET_SHOPS: `api/shops?populate[0]=shopBanner&populate[1]=deals&populate[2]=deals.productImages&populate[3]=deals.price`,
  },
};

function getEnvironment() {
  const platform = 'development';
  return _Environments[platform];
}

const Environment = getEnvironment();
export default Environment;

const projectKey = process.env.VUE_APP_CTP_PROJECT_KEY;
const clientSecret = process.env.VUE_APP_CTP_CLIENT_SECRET;
const clientId = process.env.VUE_APP_CTP_CLIENT_ID;
const uri = process.env.VUE_APP_CTP_API_URL;
const scopes = process.env.VUE_APP_CTP_SCOPES;

module.exports = {
  integrations: {
    ct: {
      location: "@vue-storefront/commercetools-api/server",
      configuration: {
        api: {
          uri: `${uri}/${projectKey}/graphql`,
          authHost: "https://auth.sphere.io",
          projectKey,
          clientId,
          clientSecret,
          scopes: [scopes]
        },
        currency: "USD",
        country: "US"
      }
    }
  }
};

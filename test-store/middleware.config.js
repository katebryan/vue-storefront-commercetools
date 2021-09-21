module.exports = {
  integrations: {
    ct: {
      location: "@vue-storefront/commercetools-api/server",
      configuration: {
        api: {
          uri: `${process.env.VUE_APP_CTP_API_URL}/vsf-ct-dev/graphql`,
          authHost: "https://auth.sphere.io",
          projectKey: `${process.env.VUE_APP_CTP_PROJECT_KEY}`,
          clientId: `${process.env.VUE_APP_CTP_CLIENT_ID}`,
          clientSecret: `${process.env.VUE_APP_CTP_CLIENT_SECRET}`,
          scopes: [`${process.env.VUE_APP_CTP_SCOPES}`]
        },
        currency: "USD",
        country: "US"
      }
    }
  }
};

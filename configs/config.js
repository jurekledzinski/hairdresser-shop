module.exports = {
  atlasUrl: process.env.ATLAS_URL,
  clientPaypal: process.env.CLIENT_PAYPAL,
  nodeEnv: process.env.NODE_ENV,
  sessionName: process.env.SESS_NAME,
  secretPaypal: process.env.SECRET_PAYPAL,
  secretSession: process.env.SESS_SECRET,
  paypalApi: process.env.PAYPAL_API,
  roleAdmin: process.env.ROLE_ADMIN,
  providerHost: process.env.HOST_EMAIL,
  portProviderEmail: process.env.PORT_PROVIDER_EMAIL,
  emailOfUser: process.env.EMAIL_USER,
  passwordUserEmail: process.env.PASSWORD_USER,
  emailAddressSendTo: process.env.EMAIL_SENDTO,
  stripePublishableKey: process.env.STRIPE_PUBLISHABLE_KEY,
  stripeSecretKey: process.env.STRIPE_SECRET_KEY,
};

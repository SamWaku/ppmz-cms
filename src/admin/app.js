// @ts-nocheck
import logo from "./extensions/logo.png";
import favicon from "./extensions/favicon.png";

const config = {
  head: {
    favicon: favicon,
  },
  menu: {
    logo: favicon,
  },
  auth: {
    logo: logo,
  },

  // Extend the translations
  translations: {
    en: {
      "app.components.LeftMenu.navbrand.title": "PPMZ Dashboard",
      "app.components.LeftMenu.navbrand.workplace": "~",
      "Auth.form.welcome.title": "PPMZ CMS",
      "Auth.form.welcome.subtitle": "Login to your account",
    },
  },
  tutorials: false,
  notifications: {
    releases: false,
  },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};

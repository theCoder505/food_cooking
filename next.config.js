/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  env: {
    GOOGLE_CLIENT_ID:
      "1080218769548-as9tfqjgr6qhp1mrddavojahp8055kul.apps.googleusercontent.com",
    GOOGLE_CLIENT_SECRET: "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",
    FACEBOOK_CLIENT_ID: "1070397807265880",
    FACEBOOK_CLIENT_SECRET: "9b4c5714815046403b8797cc1a79ee8b",
    // REACT_APP_AUTH_URL: "https://4911-2405-201-2003-e1b0-4ce5-e158-c86b-943.ngrok-free.app/api/",
    REACT_APP_AUTH_URL: "https://api.achefscuisine.com",

  },
};

module.exports = nextConfig;

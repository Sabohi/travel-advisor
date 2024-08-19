const { NextFederationPlugin } = require('@module-federation/nextjs-mf');
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
  },
  webpack: (config, options) => {
    const { isServer } = options;
    //config.experiments = { topLevelAwait: true, layers: false };
    const subscriberAppUrl = process.env.NEXT_PUBLIC_SUBSCRIBER_APP_URL;
    config.plugins.push(
      new NextFederationPlugin({
        name: 'advisor',
        remotes: {
          subscriberApp: `subscriberApp@${subscriberAppUrl}/_next/static/${isServer ? 'ssr' : 'chunks'}/remoteEntry.js`,
        },
        filename: 'static/chunks/remoteEntry.js',
        exposes: {
          './destinations': './components/Destinations.js'
        },
        extraOptions: {
          exposePages: true
        }
      })
    );
    return config;
  }
}

module.exports = nextConfig
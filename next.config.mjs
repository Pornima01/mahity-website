/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  distDir: "deploy",
  env: {
    GOOGLE_SCRIPT_URL: process.env.GOOGLE_SCRIPT_URL,
  },
  devIndicators: false,
  trailingSlash: true,
  images: {
    unoptimized: true,
    domains: ["mahity.com", "fbcdn.net", "linkedin.com", "whatsapp.net"],
  },


  webpack: (config) => {
    config.resolve.fallback = {
      ...config.resolve.fallback,
      net: false,
      tls: false,
    };
    config.cache = false;
    return config;
  },

  // async headers() {
  //   return [
  //     {
  //       source: "/:path*",
  //       basePath: false,
  //       headers: [
  //         {
  //           key: "Referrer-Policy",
  //           value: "strict-origin-when-cross-origin",
  //         },
  //         {
  //           key: "X-Frame-Options",
  //           value: "SAMEORIGIN",
  //         },
  //         {
  //           key: "X-Content-Type-Options",
  //           value: "nosniff",
  //         },
  //         {
  //           key: "Content-Security-Policy",
  //           value:
  //             "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.clarity.ms https://snap.licdn.com; style-src 'self' 'unsafe-inline'; img-src 'self' https://mahity.com data: https://*.fbcdn.net https://*.linkedin.com https://*.whatsapp.net https://*.clarity.ms https://*.bing.com *; connect-src 'self' *; font-src 'self' data:;",
  //         },
  //         {
  //           key: "Strict-Transport-Security",
  //           value: "max-age=31536000; includeSubDomains",
  //         },
  //         {
  //           key: "Access-Control-Allow-Origin",
  //           value: "*",
  //         },
  //         {
  //           key: "Access-Control-Allow-Methods",
  //           value: "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  //         },
  //         {
  //           key: "Access-Control-Allow-Headers",
  //           value:
  //             "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  //         },
  //       ],
  //     },
  //   ];
  // },


  async headers() {
  return [
    {
      source: "/:path*",
      basePath: false,
      headers: [
        { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
        { key: "X-Frame-Options", value: "SAMEORIGIN" },
        { key: "X-Content-Type-Options", value: "nosniff" },
        {
          key: "Content-Security-Policy",
          value: `
            default-src 'self';
            script-src 'self' 'unsafe-inline' 'unsafe-eval'
              https://www.googletagmanager.com
              https://www.clarity.ms
              https://scripts.clarity.ms
              https://snap.licdn.com
              http://15.206.100.15;
            style-src 'self' 'unsafe-inline';
            img-src 'self' data:
              https://mahity.com
              https://*.fbcdn.net
              https://*.linkedin.com
              https://*.whatsapp.net
              https://*.clarity.ms
              https://*.bing.com;
            connect-src 'self'
              https://centralindia-0.in.applicationinsights.azure.com
              http://15.206.100.15;
            font-src 'self' data:;
          `.replace(/\s{2,}/g, " "),
        },
        { key: "Strict-Transport-Security", value: "max-age=31536000; includeSubDomains" },
        { key: "Access-Control-Allow-Origin", value: "*" },
        { key: "Access-Control-Allow-Methods", value: "GET,OPTIONS,PATCH,DELETE,POST,PUT" },
        {
          key: "Access-Control-Allow-Headers",
          value:
            "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
        },
      ],
    },
  ];
},

  poweredByHeader: false,

  async rewrites() {
    return {
      fallback: [
        {
          source: "/:path*",
          destination: "/404",
        },
      ],
    };
  },
};

export default nextConfig;

/** @type {import('next').NextConfig} */

// const REPO_NAME = 'the-rotten-fish'; // No longer needed for basePath if served at root
// const isProduction = process.env.NODE_ENV === 'production'; // No longer needed for conditional basePath

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  /**
   * Enable static exports for the App Router.
   *
   * @see https://nextjs.org/docs/pages/building-your-application/deploying/static-exports
   */
  output: 'export',

  /**
   * Set base path. This is usually the slug of your repository.
   *
   * @see https://nextjs.org/docs/app/api-reference/next-config-js/basePath
   */
  basePath: '', 

  /**
   * Disable server-based image optimization. Next.js' default image optimization will not work with static exports.
   * Either use unoptimized images or configure a third-party loader like Cloudinary or Imgix.
   *
   * @see https://nextjs.org/docs/pages/api-reference/components/image#unoptimized
   */
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig; 
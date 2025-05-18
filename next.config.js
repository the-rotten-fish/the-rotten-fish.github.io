/** @type {import('next').NextConfig} */

const isGithubActions = process.env.GITHUB_ACTIONS === 'true';

// Replace 'YOUR_REPOSITORY_NAME' with the actual name of your GitHub repository
// For example, if your repo is github.com/user/my-repo, then REPO_NAME is 'my-repo'
const REPO_NAME = 'the-rotten-fish'; 

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
  basePath: isGithubActions ? `/${REPO_NAME}` : '',

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
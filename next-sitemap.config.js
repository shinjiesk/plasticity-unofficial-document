/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || "https://plasticitydoc.vercel.app",
  generateRobotsTxt: true, // (optional)
  alternateRefs: ["ja"],
  // ...other options
};

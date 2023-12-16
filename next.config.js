/** @type {import('next').NextConfig} */

module.exports = {
  async rewrites() {
    return [
      {
        source: "/api/cve/:path*",
        destination: "https://cve.circl.lu", // Adjust the target URL
      },
    ];
  },
};

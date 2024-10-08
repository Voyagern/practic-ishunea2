/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com'], // Allow Cloudinary images
    },
    typescript:{
        ignoreBuildErrors:true,
    }
};

export default nextConfig;

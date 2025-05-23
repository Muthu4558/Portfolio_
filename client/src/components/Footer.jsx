import React from "react";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <footer>
      <hr className='hidden dark:block' />

      <div className='w-full flex flex-col md:flex-row py-20 px-8 md:px-10 gap-10 lg:gap-20 justify-between '>
        <p className='text-lg text-white font-semibold '>
          Address XYZ ST 128, IN
        </p>

        <div className='flex flex-col md:flex-row text-md gap-3 md:gap-20 text-white '>
          <a href='#home'>Home</a>
          <a href='#about'>About</a>
          <a href='#projects'>Projects</a>
          <a href='#contact'>Contact</a>
        </div>

        <div className='flex flex-col gap-5 text-md text-white '>
          <p>muthukdm45@gmail.com</p>
          <p>+91 6385931500</p>
        </div>
      </div>

      <div className='flex flex-col gap-10 items-center justify-center pb-20 '>
        <p className='text-white font-semibold tracking-wider'>Social Media</p>

        <div className='flex gap-10 text-white text-2xl mb-10'>
          <a
            href="https://github.com/dashboard"
            target="_blank"
            rel="noopener noreferrer"
            className='hover:scale-125'
          >
            <BsGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/muthu-v-a74583275/"
            target="_blank"
            rel="noopener noreferrer"
            className='hover:scale-125'
          >
            <BsLinkedin />
          </a>
          <a
            href="mailto:muthukdm45@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className='hover:scale-125'
          >
            <MdEmail />
          </a>
        </div>


        <p className='text-gray-400 text-md tracking-wider'>@2024 MuthuDev</p>
      </div>
    </footer>
  );
};

export default Footer;

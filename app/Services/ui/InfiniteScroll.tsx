
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import logo from '../../../public/logo-1.svg';

const CompanyLogoData: Array<{ src: StaticImageData; alt: string }> = [
  { src: logo, alt: 'Logo1' },
  { src: logo, alt: 'Logo2' },
  { src: logo, alt: 'Logo3' },
  { src: logo, alt: 'Logo4' },
  { src: logo, alt: 'Logo5' },
  { src: logo, alt: 'Logo6' },
];

const InfiniteScroll = () => {
  return (
    <div className=" mb-32 ">
        <h2 className="text-center font-bold text-xl mb-24 text-black my-5">
          Who we Serve
        </h2>
        <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-slate-100 before:to-transparent before:content-[''] after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-slate-100 after:to-transparent after:content-['']">
          <motion.div
            transition={{
              duration: 10,
              ease: 'linear',
              repeat: Infinity,
            }}
            initial={{ translateX: 0 }}
            animate={{ translateX: '-30%' }}
            className="flex flex-none gap-20 pr-16"
          >
            {[...new Array(2)].fill(0).map((_, index) => (
              <React.Fragment key={index}>
                {CompanyLogoData.map(({ src, alt }) => (
                  <Image
                    key={alt}
                    src={src}
                    alt={alt}
                    className="h-8 w-auto flex-none"
                  />
                ))}
              </React.Fragment>
            ))}
          </motion.div>
        </div>
      </div>
  )};

  export default InfiniteScroll;
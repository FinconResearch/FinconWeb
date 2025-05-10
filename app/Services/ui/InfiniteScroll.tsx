import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { motion } from 'framer-motion';
import FamilyOffices from '../../../public/FamilyOffices.png';
import AssetManagment from '../../../public/AssetManagment.png';
import Corporates from '../../../public/Corporates.png';
import InvestmentBanks from '../../../public/InvestmentBanks.png';
import PrivateEquity from '../../../public/PrivateEquity.png';
import VentureCapital from '../../../public/VentureCapital.png';

const logo: Array<{ src: StaticImageData; alt: string }> = [
  { src: FamilyOffices, alt: 'FamilyOffices1' },
  { src: AssetManagment, alt: 'AssetManagment' },
  { src: Corporates, alt: 'Corporates' },
  { src: InvestmentBanks, alt: 'InvestmentBanks' },
  { src: PrivateEquity, alt: 'PrivateEquity' },
  { src: VentureCapital, alt: 'VentureCapital' },
];

const InfiniteScroll = () => {
  return (
    <div className="mb-32">
      <h2 className="text-center font-bold text-xl mb-24 text-black my-5">
        Who we Serve
      </h2>
      <div className="flex relative overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 before:bg-gradient-to-r before:from-slate-100 before:to-transparent after:absolute after:right-0 after:top-0 after:h-full after:w-10 after:bg-gradient-to-l after:from-slate-100 after:to-transparent">
        <motion.div
          className="flex flex-none gap-36 pr-16"
          initial={{ x: 0 }}
          animate={{ x: '-50%' }}
          transition={{
            repeat: Infinity,
            repeatType: 'loop',
            ease: 'linear',
            duration: 20,
          }}
        >
          {[...new Array(2)].fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {logo.map(({ src, alt }) => (
                <Image
                  key={`${alt}-${index}`}
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
  );
};

export default InfiniteScroll;
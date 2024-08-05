// import BgSlash from '@public/images/bg-slash.png';
// import BgImage from '@public/images/bg-salacia2.jpg';
import logoImage from '@public/images/logo-salacia-main-full.png';

import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-16 2xs:pt-24 relative bg-creamSecondary">
      <div className='w-full h-full text-center'>
        <div className='bg-creamSecondary relative z-20 pb-20'>
          <div className='relative px-12'>
            <Image
              className='mx-auto'
              src={logoImage.src}
              alt="salacia background image"
              priority
              width={360}
              height={200}
            />
          </div>
          <div className='relative mt-16 md:mt-20 px-5 md:px-8 z-20 text-purplePrimary'>
            <h2 className='tracking-wide text-2xl md:text-4xl font-medium mt-0'>Cruising soon around the magical Indonesia</h2>
            <p className='max-w-[850px] tracking-wide mx-auto text-lg md:text-xl mt-6'>Salacia provides the unmatched hospitality of liveaboard experience in a way they can indulge in the beauty of Indonesia above and under the sea, leaving them fulfilled.</p>
          </div>
        </div>
        {/* <div className='relative pb-[30%] z-20'>
          <Image
            className='w-full'
            src={BgSlash.src}
            alt="salacia background image"
            priority
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className='relative z-10 -mt-48 pt-52 md:pt-48 pb-12 md:pb-20'>
          <Image
            className='w-full'
            src={BgImage.src}
            alt="salacia background image"
            priority
            fill
            style={{ objectFit: 'cover' }}
          />
          <div className='relative z-10 pb-20 md:pb-40 px-8'>
            <h2 className='tracking-wider text-3xl md:text-4xl font-medium mt-0 uppercase'>Cruising Soon</h2>
            <p className='max-w-[850px] tracking-wide mx-auto text-xl mt-6'>Salacia provides the unmatched hospitality of liveaboard experience in a way they can indulge in the beauty of Indonesia above and under the sea, leaving them fulfilled.</p>
          </div>
        </div> */}
      </div>
    </main>
  );
}

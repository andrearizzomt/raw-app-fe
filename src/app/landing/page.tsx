'use client";';

import Image from "next/image";

export default function LandingRoute() {
  return (
    <div className="relative flex h-screen w-full justify-center items-center">
      <Image
        src="/assets/RAW_Landing.webp"
        alt="RAW Logo Desktop"
        className="object-cover"
        fill
      />
      {/* Image Overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px] flex flex-col gap-5 sm:gap-10 justify-center items-center sm:px-20">
        {/* Logo Mobile */}
        <Image
          priority
          className="block sm:hidden"
          src="/assets/RAWAviationRoundel_White_Mobile.png"
          alt="RAW Logo Mobile"
          width={250}
          height={250}
        />
        {/* Logo Desktop */}
        <Image
          priority
          className="hidden sm:block h-auto"
          src="/assets/RAWAviation_White_Desktop.png"
          alt="RAW Logo Mobile"
          width={750}
          height={175}
        />

        <p className="text-lg sm:text-2xl font-bold uppercase animate-bounce">
          Coming Soon!
        </p>
      </div>
    </div>
  );
}

import React from 'react';
import AnchorLink from './AnchorLink';


const Land = () => (
  <div>
     
      <section className="relative flex flex-col items-center justify-center py-24 md:py-32 lg:py-40 xl:py-48 bg-[#0b0b0b] text-white">
        <div className="absolute inset-0 bg-gradient-to-b from-[#7f8487] to-[#0b0b0b] opacity-50" />
        <div className="container px-4 text-center relative z-10">
          <div className="space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
              Welcome to the Galactic Empire
            </h1>
            <p className="mx-auto max-w-[700px] text-lg text-gray-300 md:text-xl">
              Join us in our mission to bring order and prosperity to the galaxy. Together, we will build a new era of
              peace and stability, under the rule of the Emperor.
            </p>
              <AnchorLink
              className="inline-flex h-10 items-center justify-center rounded-md bg-[#7f8487] px-6 text-sm font-medium text-[#0b0b0b] shadow transition-colors hover:bg-[#7f8487]/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-[#7f8487] disabled:pointer-events-none disabled:opacity-50 dark:bg-[#7f8487] dark:text-[#0b0b0b] dark:hover:bg-[#7f8487]/90 dark:focus-visible:ring-[#7f8487]"
              href="/api/auth/login"
                tabIndex={0}
                testId="navbar-login-desktop">
              Join the Empire Log in
              </AnchorLink>
          </div>
        </div>
      </section>
      
  </div>

);

export default Land;

import React from 'react';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

import { Hangar } from '@/components/Hangar';

export default withPageAuthRequired(
  async function SSRPage() {
    const { user } = await getSession();
    const authZ = true;
  
    return (
      <>
        <div className='w-full py-8 md:py-24 lg:py-32 bg-black'>
          {authZ 
          ? <Hangar></Hangar>
          : <img src="deathstar-map.jpg"></img> 
          }
        </div>
      </>
    );
  },
  { returnTo: '/ssr' }
);

//You can protect a server-side rendered page by wrapping it with <code>withPageAuthRequired</code>. Only
//logged in users will be able to access it. If the user is logged out, they will be redirected to the login
// page instead.{' '}
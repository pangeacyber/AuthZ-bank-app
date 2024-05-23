import React from 'react';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

import { Hangar } from '@/components/Hangar';

export default withPageAuthRequired(
  async function SSRPage() {
    const { user } = await getSession();
    const authZ = true;
  
    return (
      <>
        <div>
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
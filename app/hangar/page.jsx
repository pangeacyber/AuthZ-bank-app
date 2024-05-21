import React from 'react';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';

import Highlight from '../../components/Highlight';
import { Hangar } from '@/components/Hangar';

export default withPageAuthRequired(
  async function SSRPage() {
    const { user } = await getSession();
    const authZ = true;
  
    return (
      <>
        <div className="flex flex-col h-screen w-full bg-[#1e1e1e] text-white" data-testid="ssr">
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



//<Highlight>{JSON.stringify(user, null, 2)}</Highlight>
//You can protect a server-side rendered page by wrapping it with <code>withPageAuthRequired</code>. Only
//logged in users will be able to access it. If the user is logged out, they will be redirected to the login
// page instead.{' '}
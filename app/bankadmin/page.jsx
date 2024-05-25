import React from 'react';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { Admin } from '@/components/Admin';
import { checkRole } from '@/utils/pangeaAuthZ';
import { AccessDenied } from '@/components/AccessDenied';

export default withPageAuthRequired(async function DeathStarDashboardPage() {

  const { user } = await getSession();
  console.log(user)
  

  const roleCheckStatus = await checkRole(user.sub, 'create', "bank", "pango");
  const authZCheck = roleCheckStatus.allowed;
  //const authZCheck = true;
  
  return (
    <>
    {authZCheck ?
      <div className="w-full pt-12 md:py-24 lg:py-15" data-testid="csr">
        <Admin person={{userName: user.name, userId: 'p-' +user.sub}}/>
      </div>
    : <AccessDenied/>
  }
    </>
  );
});


//You can protect a client-side rendered page by wrapping it with <code>withPageAuthRequired</code>. Only
//logged in users will be able to access it. If the user is logged out, they will be redirected to the login
//page instead

//Use the <code>useUser</code> hook to access the user profile from protected client-side rendered pages. The{' '}
//<code>useUser</code> hook relies on the <code>UserProvider</code> Context Provider, so you need to wrap your
//custom <a href="https://nextjs.org/docs/advanced-features/custom-app">App Component</a> with it.

//You can also fetch the user profile by calling the <code>/api/auth/me</code> API route.
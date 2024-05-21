'use client';

import React from 'react';
import { withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import { Deathstar } from '@/components/Deathstar';

export default withPageAuthRequired(function CSRPage() {
  return (
    <>
      <div className="mb-5" data-testid="csr">
        <Deathstar></Deathstar>
      </div>
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
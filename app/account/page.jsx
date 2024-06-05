import React from 'react';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { AccessDenied } from '@/components/AccessDenied';
import { checkRole } from '@/utils/pangeaAuthZ';
import { BankAccount } from '@/components/BankAccount';

export default withPageAuthRequired(
  async function SSRPage() {
    const { user } = await getSession();
    console.log(user)

    const roleCheckStatus = await checkRole(user.sub, "read", "account", "p-"+user.sub);
    console.log(roleCheckStatus);
    const authZCheck = roleCheckStatus.allowed;
  
    return (
      <>
        <div className='w-full py-8 md:py-24 lg:py-32'>
          {authZCheck 
          ? <BankAccount/>
          : <AccessDenied />
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
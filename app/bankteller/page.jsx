import React from 'react';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { checkRole } from '@/utils/pangeaAuthZ';
import { Teller } from '@/components/Teller';
import { AccessDenied } from '@/components/AccessDenied';


export default withPageAuthRequired(async function Command() {

  const { user } = await getSession();
  console.log(user)

  const roleCheckStatus= await checkRole(user.sub, 'create','bank','pango' )
  const authZCheck = roleCheckStatus.allowed;

  return (
    <>
     {authZCheck ?
        <div className="mb-5" data-testid="csr">
            <Teller/>
        </div>
      : <AccessDenied/>
    }
    </>
  )
});

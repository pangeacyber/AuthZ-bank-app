import React from 'react';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';
import { checkRole } from '@/utils/pangeaAuthZ';
import { Teller } from '@/components/Teller';

export default withPageAuthRequired(async function Command() {

  const { user } = await getSession();
  console.log(user)

  await checkRole(user.sub, 'read','bank','pango' )

  return (
    <>
        <div className="mb-5" data-testid="csr">
            <Teller/>
        </div>
    </>
  )
});

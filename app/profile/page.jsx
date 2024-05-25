'use client';

import React from 'react';
import { Row, Col, Input, Label} from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Highlight from '../../components/Highlight';
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

function Profile() {
  const { user, isLoading } = useUser();
  
  return (
    <div className='w-full py-12 md:py-24 lg:py-32 px-20'>
      {isLoading && <Loading />}
      {user && (
        <>
          <Row className="align-items-center profile-header mb-5 text-center text-md-left" data-testid="profile">
            <Col md={2}>
              <img
                src={user.picture}
                alt="Profile"
                className="rounded-circle img-fluid profile-picture mb-3 mb-md-0"
                decode="async"
                data-testid="profile-picture"
              />
            </Col>
            <Col md>
              <h2 data-testid="profile-name">{user.name}</h2>
              <p className="lead text-muted" data-testid="profile-email">
                {user.email}
              </p>
            </Col>
          </Row>
          <Row className="mb-5" data-testid="profile-json">
            <Highlight>{JSON.stringify(user, null, 2)}</Highlight>
          </Row>
          <Toaster />
        </>
      )}
    </div>
  );
}

export default withPageAuthRequired(Profile, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});


/*const onUpdateRole = async () => {
  // send POST API request to /api/authz
  fetch('/api/authz', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      'user_id': user.sub,
      'role': 'crew_member',
      'resource_type': 'ships', 
      'resource_id': 'deathstar'
    }),
  })
    .then(response => response.json())
    .then(data => {
      toast({
        title: 'Role updated',
        description: `User role updated to`
      })
    })
    .catch((error) => {
      console.error('Error:', error);
      toast({
        title: 'Error updating Role',
        description: `Not updated. Error ${error}`
      })
  });
*/
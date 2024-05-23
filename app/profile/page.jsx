'use client';

import React from 'react';
import { Row, Col, Input, Label} from 'reactstrap';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';

import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import Highlight from '../../components/Highlight';
import { Button } from '@/components/ui/button';

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Toaster } from '@/components/ui/toaster';
import { toast } from '@/components/ui/use-toast';

function Profile() {
  const [role, setRole] = React.useState('');
  const { user, isLoading } = useUser();

  const onUpdateRole = async () => {
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
  }

  return (
    <div className='w-full py-12 md:py-24 lg:py-32 bg-black text-white px-20'>
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
          <Row className='mb-3'>
            <h2 data-testid="profile-name">Change your access</h2>
          </Row>
          <Row className='w-full mb-3'>
            <Input
              type="select"
              className='w-full text-black p-2'
            >
              <option onSelect={e => {setRole(e.target.value); console.log(e.target.value)}} value="crew_member">
              crew_member
              </option>
              <option onChange={e => {setRole(e.target.value)}} value="owner">
                owner
              </option>
              <option onChange={e => {setRole(e.target)}} value="pilot">
                pilot
              </option>
              <option  onChange={e => {setRole(e.target)}} value="stormtrooper">
                stormtrooper
              </option>
              {/* <option>
                rebel
              </option> */}
            </Input>
          </Row>
          <Row>
            <Button className='bg-[#900C3F]' onClick={onUpdateRole}>
              Submit
            </Button>
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

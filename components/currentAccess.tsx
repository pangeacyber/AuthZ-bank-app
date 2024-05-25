
import React, { useEffect } from 'react';
import { getSession, withPageAuthRequired } from '@auth0/nextjs-auth0';


export default withPageAuthRequired(async function CurrentAccess() {
    const [data, setData] = React.useState('');
    const { user } = await getSession();



    useEffect(()=>{
        const fetchData = async () => {
        const response = await fetch('/api/getRole', {
            method: 'POST',
            headers: {
            'Content-Type': 'application/json',
            },
            body: JSON.stringify({
            'user_id': user.sub
            }),
        })
        if(!response){
            throw new Error('HTTP ERROR! status: ${response.status}')
        }
        const result = await response.body;
        setData(result)
        }
        fetchData().catch((e) => {
            // handle the error as needed
            console.error('An error occurred while fetching the data: ', e)
        })
        }, [])
    
        return <p>{data ? `Your data: ${data}` : 'Loading...'}</p>
    }
)

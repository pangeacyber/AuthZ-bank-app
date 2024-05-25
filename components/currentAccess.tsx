

export default async function CurrentAccess( userId: string) {
    const stuff = GetRole(userId);
    console.log(stuff);
   
    return (
        <div>
            <h2 data-testid="profile-name"> Your access level is</h2>

            <p>{stuff ? `Your data: ${stuff}` : 'Loading...'}</p>

        </div>
    )  
}


async function GetRole(userId: string) {
    const mydata = fetch('/api/getRole', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        'user_id': userId,
      }),
    })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
      .catch((error) => {
        console.error('Error:', error);

    });
}

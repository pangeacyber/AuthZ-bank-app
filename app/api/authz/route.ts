import { NextRequest, NextResponse } from 'next/server';
import { checkRole, assignRole } from '../../../utils/pangeaAuthZ';

// export const GET = async (req) => {
//     const { user_id, action, resource_type, resource_id  } = req.body;

//     // Check if all required fields are present
//     if (!user_id || !action || !resource_id || !resource_type) {
//         return res.status(400).json({ error: 'Missing required fields' });
//     }

//     // Check if user has permission
//     const hasPermission = await checkRole(user_id, action, {resource_type, resource_id});

//     return { hasPermission };
// }

export const POST = async (req: NextRequest) => {
    const { user_id, role, resource_type, resource_id  } = await req.json();
    console.log({ user_id, role, resource_type, resource_id  })

    // Check if all required fields are present
    if (!user_id || !role || !resource_id || !resource_type) {
        return new Response('Missing required fields', {
            status: 400,
        });
    }

    // Assign role to user
    const assignedRole = await assignRole(user_id, role, {type: resource_type, id: resource_id});

    // TODO: HANDLE PANGEA ERROR
    return Response.json({message: 'Success!'});
}
import { NextRequest, NextResponse } from 'next/server';
import { getRole } from '../../../utils/pangeaAuthZ';

export const POST = async (req: NextRequest) => {
    const { user_id } = await req.json();
    console.log(req)
    
    // Assign role to user
    const allRoles = await getRole(user_id);

    if (allRoles) {
        console.log(allRoles);
    }

    // TODO: HANDLE PANGEA ERROR
    return Response.json({allRoles});
}
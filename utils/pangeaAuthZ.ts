type RoleTypes = 'crew_member' | 'pilot' | 'stormtrooper' | 'owner';
import { PangeaConfig, AuthZService, AuthZ, PangeaErrors } from "pangea-node-sdk";

// Load client configuration from environment variables `PANGEA_AUDIT_TOKEN` and
// `PANGEA_DOMAIN`.
const token = process.env.PANGEA_TOKEN as string;
const config = new PangeaConfig({ domain: process.env.PANGEA_DOMAIN });

const assignRole = async (userId: string, role: RoleTypes, resource: AuthZ.Resource) => {
    const authz = new AuthZService(token, config);

    const response = await authz.tupleCreate({
        tuples: [
          {
            resource: resource,
            relation: role,
            subject: { type: 'user', id: userId },
          },
          // Add more tuples as needed
        ],
    });

    return response.summary;
}

const checkRole = async (userId: string, action: string, resource: string, page: string) => {
    try {
        const authz = new AuthZService(token, config);

        const response = await authz.check({
            resource: {type: resource, id: page },
            action: action,
            subject: { type: 'user', id: userId },
        });

        return response.result;
    } catch (error) {
        console.error(error);
        return false;
    }
}

const getRole = async (userId: string)=> {
    const authz = new AuthZService(token, config);
    try {
        await authz.tupleList({
            filter: {subject_id: userId},
            size:10
        })
    } catch (error) {
        console.error("Get Role Error:" + error);
        console.error((error as PangeaErrors.APIError).pangeaResponse)
        return false;
    }
}

export { assignRole, checkRole, getRole };

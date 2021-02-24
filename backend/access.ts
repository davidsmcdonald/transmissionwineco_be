import { permissionsList } from "./schemas/fields";
import { ListAccessArgs } from "./types";

export function isSignedIn({ session }: ListAccessArgs ) {
  return !!session;
}

const generatedPermissions = Object.fromEntries(permissionsList.map
  (permission => [
    permission,
    function({ session }: ListAccessArgs) {
      return !!session?.data.role?.[permission]
    },
  ])
);

export const permissions = {
  ...generatedPermissions,

}

export const rules = {
  canManageProducts({ session}: ListAccessArgs) {
    if (permissions.canManageProducts({ session })) {
      return true;
    }
  },
  canReadProducts({ session}: ListAccessArgs) {
    if (permissions.canManageProducts({ session })) {
      return true;
    }
    return { status: 'AVAILABLE' };
  },
  canManageUsers({ session }: ListAccessArgs) {
    if (permissions.canManageUsers) {
      return true;
    }
    return { id: session.itemId };
  }

}
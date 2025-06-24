import {
    fetchUserById,
    deleteUserById as apiDeleteUserById,
} from '../api/userApi.js';

export async function getUserById(id) {
    if (!id) throw new Error('ID é obrigatório');
    return fetchUserById(id);
}

export async function deleteUserById(id) {
    if (!id) throw new Error('ID é obrigatório para exclusão');
    return apiDeleteUserById(id);
}

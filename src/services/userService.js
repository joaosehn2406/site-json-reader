import {
    fetchUserById,
    deleteUserById as apiDeleteUserById,
    updateUserById as apiUpdateUserById
} from '../api/userApi.js';

export async function getUserById(id) {
    if (!id) throw new Error('ID é obrigatório para consulta');
    return fetchUserById(id);
}

export async function deleteUserById(id) {
    if (!id) throw new Error('ID é obrigatório para exclusão');
    return apiDeleteUserById(id);
}

export async function updateUserById(id, data) {
    if (!id) throw new Error('ID é obrigatório para atualização');
    return apiUpdateUserById(id, data);
}

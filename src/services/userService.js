import {
    fetchUserById,
    deleteUserById as apiDeleteUserById,
} from '../api/userApi.js';

export async function getUserById(id) {
    if (!id) throw new Error('ID é obrigatório para consulta');
    return fetchUserById(id);
}

export async function deleteUserById(id) {
    if (!id) throw new Error('ID é obrigatório para exclusão');
    if(id < 0 && id > 100) throw new Error('Id inexistente')
    return apiDeleteUserById(id);
}

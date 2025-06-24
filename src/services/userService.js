import { fetchUserById } from '../api/userApi';

export async function getUserById(id) {
    if (!id) throw new Error('ID é obrigatório');
    const data = await fetchUserById(id);
    return data;
}

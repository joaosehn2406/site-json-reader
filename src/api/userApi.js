export async function fetchUserById(id) {
    const response = await fetch(
        `https://bu.furb.br/mcardoso/progWeb/apiRestAval.php/cadastro/${id}`
    );

    if (!response.ok) {
        throw new Error('Falha na requisição');
    }
    return response.json();
}

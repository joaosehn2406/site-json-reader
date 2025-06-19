// hooks/useFetchData.js
import { useState } from 'react';

const useFetchData = (url) => {
    const [data, setData] = useState(null);
    const [statusMessage, setStatusMessage] = useState('');
    const [statusType, setStatusType] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const fetchData = async (id) => {
        setIsLoading(true);
        setStatusMessage('Carregando...');
        setData(null);

        try {
            const response = await fetch(`${url}/${id}`);
            const result = await response.json();
            if (result) {
                setData(result);
                setStatusMessage('Cadastro encontrado!');
                setStatusType('success');
            } else {
                setStatusType('error');
                setStatusMessage('Cadastro não encontrado!');
            }
        } catch (error) {
            setStatusMessage('Erro ao buscar dados!');
            setStatusType('error');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        data,
        statusMessage,
        statusType,
        isLoading,
        fetchData,
    };
};

export default useFetchData;

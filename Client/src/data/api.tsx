import axios, { AxiosRequestConfig } from "axios";

const apiUrl = import.meta.env.VITE_REACT_APP_API;

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_REACT_APP_API,
    headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
    },
});


export const fetchAllSocialData = async () => {
    try {
        const response = await axios.get(`${apiUrl}getsocialfetch`); // Call the new endpoint
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const fetchMultipleFiles = async (telegram_id: number) => {
    try {
        const response = await axios.get(`${apiUrl}getMultipleFiles`, {
            params: {
                telegram_id,
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const fetchMultiFiles = async () => {
    try {
        const response = await axios.get(`${apiUrl}getMultiFiles`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const multipleFilesUpload = async (data: FormData, options?: AxiosRequestConfig) => {
    try {
        await axios.post(apiUrl + 'multipleFiles', data, options);
    } catch (error) {
        throw error;
    }
}

export const saveReferral = async (userId: string, referrerId: string) => {
    try {
        const response = await axios.post(`${apiUrl}referrals`, { userId, referrerId });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchReferrals = async (userId: string) => {
    try {
        const response = await axios.get(`${apiUrl}referrals`, {
            params: { userId }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};
import axios from "axios";

export const apiConfigJson = {
    headers: {
        "Content-Type": "application/json"
    },
    withCredentials: false
}

export const apiConfigForm = {
    headers: {
        "Content-Type": "multipart/form-data"
    },
    withCredentials: false
}

export const formatDateToYYYYMMDD = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Months are zero-based
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

export const getAPIData = async (url) => {
    try {
        const { data } = await axios.get(`${url}`, apiConfigJson)
        return data;
    } catch (error) {
        console.log(`Error on this call: ${url}`, error)
    }
}
export const postAPIData = async (url, formData, formTyep) => {
    const formAPIType = formTyep === 'json' ? apiConfigJson : apiConfigForm
    try {
        const { data } = await axios.post(`${url}`, formData, formAPIType)
        return data;
    } catch (error) {
        console.log(`Error on this call: ${url}`, error)
    }
}
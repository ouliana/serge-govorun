import axios from 'axios';

const baseUrl = '/api/videos';

export const getById = async (id: number) => {
  try {
    const response = await axios.get(`${baseUrl}/${id}`);
    console.log('response.data: ', response.data);
    return response.data;
  } catch (error) {
    throw new Error('Cannot fetch data');
  }
};
export const getAll = async () => {
  try {
    const response = await axios.get(baseUrl);
    console.log('response.data: ', response.data);
    return response.data;
  } catch (error) {
    throw new Error('Cannot fetch data');
  }
};

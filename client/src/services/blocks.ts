import axios from 'axios';

const baseUrl = '/api/blocks';

export const getByName = async (name: string) => {
  try {
    const response = await axios.get(`${baseUrl}/${name}`);
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

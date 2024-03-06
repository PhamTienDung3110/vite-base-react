import axios from 'axios';

interface MyDataType {
    count: number
}

export const fetchData = async (): Promise<MyDataType> => {
  const response = await axios.get<MyDataType>('https://api.example.com/data');
  return response.data;
};
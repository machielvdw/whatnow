import axios from 'axios';

const BASE_URL = 'https://whatnow20230825131428.azurewebsites.net';
// const BASE_URL = 'https://localhost:7275';

export const getStaff = () => axios.get(`${BASE_URL}/api/staff`);
export const addStaff = (staff) => axios.post(`${BASE_URL}/api/staff`, staff);
export const getOrdersByStaffId = (staffId) => axios.get(`${BASE_URL}/api/order/${staffId}`);
export const addOrder = (order) => axios.post(`${BASE_URL}/api/order`, order);
export const deleteOrder = (orderId) => axios.delete(`${BASE_URL}/api/order/${orderId}`);
export const getProducts = () => axios.get(`${BASE_URL}/api/product`);

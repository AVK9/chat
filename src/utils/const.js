// import 'dotenv/config';

export const LOGIN_ROUTE = '/login';
export const CHAT_ROUTE = '/chat';
export const apiKey = import.meta.env.VITE_API_KEY;
export const authDomain = import.meta.env.VITE_AUTH_DOMAIN;
export const projectId = import.meta.env.VITE_PROJECT_ID;
export const storageBucket = import.meta.env.VITE_STORAGE_BUCKET;
export const messagingSenderId = import.meta.env.VITE_MESSAGING_SENDER_ID;
export const appId = import.meta.env.VITE_APP_ID;
export const measurementId = import.meta.env.VITE_MEASUREMENT_ID;

console.log('apiKey', apiKey);

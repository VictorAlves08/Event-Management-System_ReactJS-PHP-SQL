import axios from 'axios';

export const api = axios.create({
  baseURL: 'http://localhost:8080/Event-Management-System_ReactJS-PHP-SQL/api/index.php',
});

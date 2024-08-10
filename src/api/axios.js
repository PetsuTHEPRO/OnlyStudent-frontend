import axios from 'axios';
import CookiesService from '@/api/CookiesService.js';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080',
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {
  getClassrooms(codigo){
    
    const token = CookiesService.getToken();

    return apiClient.get('/turma', {
      params: { codigo: codigo }, // Parâmetro de consulta
      headers: {
        Authorization: `Bearer ${token}` // Adiciona o token no cabeçalho de autorização
      }
    });
  },
  registerUser(userData){
    return apiClient.post('/auth/register', {
      name: userData.name,
      telephone: userData.telephone,
      email: userData.email,
      password: userData.password,
      role: userData.role,
      especialidade: userData.especialidade
    });
  },
  loginUser(userData){
    return apiClient.post('/auth/login', {
      email: userData.email,
      password: userData.password
    });
  },

  seekIDClassroom(email){
    return apiClient.get('/educator/findByEmail', {
      params: { email: email } // Parâmetro de consulta
    });
  },

  createClassroom(classroomData){
    return apiClient.post('/turma/register', {
      name: classroomData.name,
      description: classroomData.description,
      price: classroomData.price,
      idEducator: classroomData.id_educator
    });
  },

  getUser(id, role){
    return apiClient.get(`/${role}/atualUser`, {
      params: { id: id } // Parâmetro de consulta
    });
  },

  getClassroomsById(codigo, page, size){
    return apiClient.get('/turma/turma', {
      params: { codigo: codigo, page: page, size: size } // Parâmetro de consulta
    });
  }
}
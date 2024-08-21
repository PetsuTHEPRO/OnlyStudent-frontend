import axios from 'axios';
import CookiesService from '@/api/CookiesService.js';

const apiUrl = import.meta.env.VITE_API_URL;
const apiClient = axios.create({
  baseURL: apiUrl,
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

  getClassroomsTurmaAluno(codigo){
    const token = CookiesService.getToken();
    return apiClient.get('/turma/turmasAluno', {
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

  updateUser(user, role) {
    role = role.toLowerCase();
    console.log(user.name + " - " + user.especialidade + " - " + user.telefone + " - " + user.login);
    return apiClient.put(`/${role}/updateProfile?login=${user.login}`, {
      name: user.name,
      telefone: user.telefone,
      especialidade: user.especialidade
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
  deleteClassroom(codigo){
    return apiClient.delete(`/turma/${codigo}`);
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

  getIdsAlunos(codigo){
    return apiClient.get(`/turma/${codigo}/students/info`);
  },

  getClassroomsByIdOfEducator(codigo, page, size){
    return apiClient.get('/turma/turmaEducator', {
      params: { codigo: codigo, page: page, size: size } // Parâmetro de consulta
    });
  },

  getClassroomById(id){
    return apiClient.get(`/turma/${id}`);
  },

  getMaterialsByClassroomCode(codigo) {
    return apiClient.get(`/turma/${codigo}/materials`);
  },

  setMaterialsByClassroomCode(materials) {
    return apiClient.post(`/material/register`, materials);
  },

  sendEmail(support) {
    return apiClient.post(`/support/send`, support);
  }

}
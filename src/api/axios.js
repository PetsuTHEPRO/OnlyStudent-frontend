import axios from 'axios';
import CookiesService from '@/service/CookiesService.js';

const apiUrl = import.meta.env.VITE_API_URL;
const apiClient = axios.create({
  baseURL: apiUrl,
  headers: {
    'Content-Type': 'application/json'
  }
});

export default {

  // Comando de GET - Banco de Dados
  findIdEducatorByEducatorEmail(email){
    const token = CookiesService.getToken();
    return apiClient.get('/educator/idByEmail', {
      params: { email: email },
      headers: {
        Authorization: `Bearer ${token}` // Adiciona o token no cabeçalho de autorização
      }
    });
  },

  findClassroomsByCode(codigo){
    const token = CookiesService.getToken();
    return apiClient.get('/turma', {
      params: { codigo: codigo },
      headers: {
        Authorization: `Bearer ${token}` // Adiciona o token no cabeçalho de autorização
      }
    });
  },

  getClassroomsHomeByCode(codigo){
    const token = CookiesService.getToken();
    return apiClient.get('/turma/turmasAluno', {
      params: { codigo: codigo }, // Parâmetro de consulta
      headers: {
        Authorization: `Bearer ${token}` // Adiciona o token no cabeçalho de autorização
      }
    });
  },
  getClassroomsDestaque(){
    const token = CookiesService.getToken();
    return apiClient.get('/turma/destaque', {
      headers: {
        Authorization: `Bearer ${token}` // Adiciona o token no cabeçalho de autorização
      }
    });
  },

  updateUser(user, role) {
    const token = CookiesService.getToken();
    return apiClient.put(`/${role.toLowerCase()}/updateProfile?login=${user.login}`, {
      name: user.name,
      telefone: user.telefone,
      especialidade: user.especialidade,
      headers: {
        Authorization: `Bearer ${token}` // Adiciona o token no cabeçalho de autorização
      }
    });
  },

  loginUser(userData){
    return apiClient.post('/auth/login', {
      email: userData.email,
      password: userData.password
    });
  },

  deleteClassroom(codigo){
    return apiClient.delete(`/turma/${codigo}`);
  },
  
  // Comando POST - Banco de Dados

  createClassroom(classroomData){
    return apiClient.post('/turma/register', {
      name: classroomData.name,
      description: classroomData.description,
      price: classroomData.price,
      idEducator: classroomData.idEducator
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

  updateStatusTurma(classroomId, status){
    const token = CookiesService.getToken();
    console.log(status);
    return apiClient.put(`/turma/${classroomId}/status`, { status: status });
  },

  getUser(id, role){
    return apiClient.get(`/${role}/atualUser`, {
      params: { id: id } // Parâmetro de consulta
    });
  },

  getIdsAlunos(codigo){
    return apiClient.get(`/turma/${codigo}/students/info`);
  },

  getClassroomByIdOfUser(codigo, page, size, role){
    return apiClient.get(`/turma/${role}Turmas`, {
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
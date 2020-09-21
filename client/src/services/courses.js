import api from './api-config'

export const getAllCourses = async () => {
  const resp = await api.get('/courses');
  return resp.data.data;
}


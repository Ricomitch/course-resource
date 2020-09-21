
import api from './api-config'

export const getAllCourses = async () => {
  const resp = await api.get('/reviews');
  return resp.data;
}

export const getOneCourse = async (id) => {
  const resp = await api.get(`/reviews/${id}`);
  return resp.data;
}

export const putCourse = async (id, formData) => {
  const resp = await api.put(`/reviews/${id}`, { food: formData })
  return resp.data;
}

export const postCourse = async (formData) => {
  const resp = await api.post('/reviews', { courses: formData })
  return resp.data;
}

export const deleteCourse = async (id) => {
  const resp = await api.delete(`/reviews/${id}`)
  return resp.data;
}
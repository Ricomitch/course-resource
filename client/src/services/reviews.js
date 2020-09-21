
import api from './api-config'

export const getAllCourses = async () => {
  const resp = await api.get('/courses');
  return resp.data;
}

export const getOneCourse = async (id) => {
  const resp = await api.get(`/foods/${id}`);
  return resp.data;
}

export const putCourse = async (id, formData) => {
  const resp = await api.put(`/foods/${id}`, { food: formData })
  return resp.data;
}

export const postCourse = async (formData) => {
  const resp = await api.post('/courses', { courses: formData })
  return resp.data;
}

export const deleteCourse = async (slug) => {
  const resp = await api.delete(`/courses/${slug}`)
  return resp.data;
}
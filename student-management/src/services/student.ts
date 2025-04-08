import axios from './axios-config'
import { StudentList, Student } from 'types/student.type'

const getStudents = (
  page: number | string,
  limit: number | string,
  signal: AbortSignal | undefined
): Promise<StudentList> => {
  return axios.get(`/students?_page=${page}&_limit=${limit}`, { signal })
}

const getStudent = (id: string | number): Promise<Student> => {
  return axios.get(`/students/${id}`)
}

const addStudent = (student: Omit<Student, 'id'>): Promise<Student> => {
  return axios.post(`/students`, student)
}

const updateStudent = (id: number | string, student: Student): Promise<Student> => {
  return axios.put(`students/${id}`, student)
}

const deleteStudent = (id: number | string) => {
  return axios.delete(`/students/${id}`)
}

export { getStudents, addStudent, getStudent, updateStudent, deleteStudent }

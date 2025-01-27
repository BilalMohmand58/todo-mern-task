import axios from "axios";

const API_URL = "/api/todos/";

// Create a new todo
const createTodo = async (todoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.post(API_URL, todoData, config);
  return response.data;
};

// Get user todos
const getTodos = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.get(API_URL, config);
  return response.data;
};

// Delete user todo
const deleteTodo = async (todoId, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + todoId, config);
  return response.data;
};

// Update user todo
const updateTodo = async (todoId, todoData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(API_URL + todoId, todoData, config);
  return response.data;
};

const todoService = {
  createTodo,
  getTodos,
  deleteTodo,
  updateTodo, // Add this line to include update functionality
};

export default todoService;

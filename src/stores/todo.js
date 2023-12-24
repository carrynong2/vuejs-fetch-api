import { defineStore } from 'pinia'
import axios from 'axios'

const BASE_URL = "https://658799a090fa4d3dabf8f1aa.mockapi.io"

export const useTodoStore = defineStore('todo', {
  state: () => ({
    list: [],
    selectedTodo: {},
    statuses: ["Pending", "Doing", "Done"]
  }),
  actions: {
    async loadTodos() {
      try {
        const response = await axios.get(`${BASE_URL}/todos`);
        this.list = response.data
        console.log("load todo list complete");
      } catch (error) {
        console.log("error", error);
      }
    },
    async loadTodo(id) {
      try {
        const response = await axios.get(`${BASE_URL}/todos/${id}`);
        this.selectedTodo = response.data
        console.log("load todo by id complete");
      } catch (error) {
        console.log("error", error);
      }
    },
    async addTodo(todoText) {
      const bodyData = {
        name: todoText,
        status: "Pending"
      }
      try {
        const response = await axios.post(`${BASE_URL}/todos`, bodyData);
        this.list.push(response.data)
        console.log("add todo completed");
      } catch (error) {
        console.log("error", error);
      }
    },
    async editTodo(todoData, id) {
      try {
        const response = await axios.put(`${BASE_URL}/todos/${id}`, todoData);
        console.log("edit todo completed");
      } catch (error) {
        console.log("error", error);
      }
    },
    async removeTodo(id) {
      try {
        const response = await axios.delete(`${BASE_URL}/todos/${id}`);
        console.log("delete todo completed");
      } catch (error) {
        console.log("error", error);
      }
    }
  }
})

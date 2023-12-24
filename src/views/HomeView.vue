<script setup>
  import { onMounted, ref } from "vue";
  import { useTodoStore } from "../stores/todo"
  const todoStore = useTodoStore()
  const todoText = ref("")

  onMounted(async () => {
    await todoStore.loadTodos();
  })

  const addTodo = async (todoText) => {
    try {
      await todoStore.addTodo(todoText);
    } catch(error) {
      console.log("error", error);
    }
  }

  const editStatus = async(todoData, todoId) => {
    try {
      const updateData = {
        name: todoData.name,
        status: todoData.status
      }
      await todoStore.editTodo(updateData, todoId);
    } catch(error) {
      console.log("error", error);
    }
  }

</script>

<template>
  <div>
    <div>
      <input type="text" v-model="todoText">
      <button @click="addTodo(todoText)">Add</button>
    </div>
    <ul>
      <li v-for="todo in todoStore.list">
        {{ todo.name }} 
        
        <select name="" id="" v-model="todo.status" @change="editStatus(todo, todo.id)">
          <option value="">Select status</option>
          <option v-for="status in todoStore.statuses" :value="status">
            {{ status }}
          </option>
        </select>
        
        <button>Edit</button>
        <button>Delete</button>
      </li>
    </ul>
  </div>
</template>
<template>
  <div>
    <h2>Lista de tareas</h2>

    <form @submit.prevent="onCreate">
      <input type="text" v-model="todo" />
      <input type="submit" value="Agregar" />
    </form>

    <h4>Tareas</h4>
    <ul>
      <li v-for="todo in getTodos" :key="todo.id">
        <div class="todo__content">
          <input v-model="todo.title" />
          <button class="btn" @click="onUpdate(todo)">Actualizar</button>
          <button class="btn" @click="onDelete(todo)">Borrar</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "TodoComponent",

  /**
   * Obtiene la información de firestore
   * al iniciar el componente, internamente
   * los almacena en un state de vuex.
   */
  created() {
    this.$store.dispatch("todoModule/getTodos");
  },

  data() {
    return {
      todo: null
    };
  },

  computed: {
    ...mapGetters("todoModule", ["getTodos"])
  },

  methods: {
    onCreate() {
      this.$store.dispatch("todoModule/saveTodo", {
        title: this.todo
      });
    },

    onUpdate(todo) {
      this.$store.dispatch("todoModule/updateTodoById", todo);
    },

    onDelete(todo) {
      this.$store.dispatch("todoModule/deleteTodoById", todo.id);
    }
  }
};
</script>

<style scoped>
input {
  border: 1px solid lightgray;
  padding: 0.3rem;
  margin: 0 5px;
  border-radius: 3px;
}

.todo__content {
  max-width: 400px;
  display: flex;
}

.btn {
  border: 1px solid lightgray;
  padding: 0.3rem 1rem;
  margin: 0 0.5rem;
}

ul {
  margin: 0;
  padding: 0;
}
ul,
li {
  margin: 0.5rem 0;
  list-style: none;
}
</style>

import { db } from "@/FirebaseConfig";
import { firestoreAction } from "vuexfire";

export default {
  namespaced: true,

  state: {
    todos: []
  },

  getters: {
    getTodos: state => state.todos
  },

  mutations: {
    SET_TODO(state, payload) {
      state.todo = payload;
    }
  },

  actions: {
    /**
     * Guarda la información de la colección en un state,
     * en este caso "todos".
     */
    getTodos: firestoreAction(({ bindFirestoreRef }) => {
      return bindFirestoreRef("todos", db.collection("todos"));
    }),

    saveTodo: async (_, payload) => {
      await db
        .collection("todos")
        .add(payload)
        .then(() => console.log("Todo created successfully!"))
        .catch(error => console.log("error :>> ", error));
    },

    getTodoById: async ({ commit }, id) => {
      db.collection("todos")
        .doc(id)
        .get()
        .then(response => {
          commit("SET_TODO", response);
        })
        .catch(error => {
          console.log(`Error getting todo: ${error}`);
        });
    },

    updateTodoById: async (_, todo) => {
      await db
        .collection("todos")
        .doc(todo.id)
        .update(todo)
        .then(() => {
          console.log(`To Do '${todo.title}' updated successfully`);
        })
        .catch(error => {
          console.log("error :>> ", error);
        });
    },

    deleteTodoById: async (_, id) => {
      db.collection("todos")
        .doc(id)
        .delete()
        .then(() => console.log("ToDo deleted successfully"))
        .catch(error => console.error(`Something went wrong: ${error}`));
    }
  }
};

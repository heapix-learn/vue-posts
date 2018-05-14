<template>
  <div class="todos">
    <div v-if="todos">
      <ul class="todo" v-for="todo in todos" :key="todo.id">
        <div class="row" id="border">
          <div class="col s8">
            <li>Todo id: {{todo.id}}</li>
            <li>UserId: {{todo.userId}}</li>
            <li>Task: {{todo.title}}</li>
          </div>
          <div class="col s2">
            <p v-if="todo.completed===true"><i class="little material-icons">done</i></p>
            <p v-else>Just do it!</p>
          </div>
        </div>
      </ul>
      <div class="show-more-btn center ">
        <a class="waves-effect waves-light btn" @click="getMore(todosLength)">Show more</a>
      </div>
    </div>
  </div>  
</template>

<script>
import TodoService from '@/services/TodoService'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
      'todos',
      'todosLength'
    ])
  },
  created() {
    TodoService.getTodos(0, 10)
  },
  methods: {
    getMore(i) {
      TodoService.getTodos(i, 10)
    }
  }
}
</script>

<style>
  #border {
    border-style: solid;
    border-width: 3px;
    border-color: black;
  }
</style>

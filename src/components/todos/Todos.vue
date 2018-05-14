<template>
  <div class="todos">
    <div v-if="todos">
      <ul v-for="item in todos" :key="item.id">
        <li>
          <ul class="todo" v-for="array in item" :key="array.id">
            <div class="row">
              <div class="col s8">
                <li>Todo id: {{array.id}}</li>
                <li>UserId: {{array.userId}}</li>
                <li>Task: {{array.title}}</li>
              </div>
              <div class="col s2">
                <p v-if="array.completed===true"><i class="medium material-icons">done</i></p>
                <p v-else>Just do it!8i</p>
              </div>
            </div>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import TodoService from '@/services/TodoService'
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters([
        'todos'
    ])
  },
  created() {
        TodoService.getTodos(0, 10)
  }
}
</script>

<style>
  .todo {
    border: 5px;
    border-color: black
  }
</style>

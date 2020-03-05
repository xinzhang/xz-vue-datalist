<template>
    <table class="table container">
        <thead>
            <tr>
                <th scope="col">#</th>
                <th scope="col">title</th>
                <th scope="col">completed</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="todo in todos" :key="todo.id">
                <th scope="row">{{ todo.id }}</th>
                <td>{{ todo.title }}</td>
                <td>
                    <input type="checkbox" :checked="todo.completed" />
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script>
import axios from 'axios';
export default {
    name: 'TableTodos',
    data: function() {
        return {
            todos: [],
        };
    },
    created: function() {
        axios.get('https://jsonplaceholder.typicode.com/todos?userId=1').then(resp => {
            console.log(resp.data);
            this.todos = resp.data;
        });
    },
};
</script>

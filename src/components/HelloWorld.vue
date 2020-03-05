<template>
    <div class="cotainer">
        <div class="my-4">
            <button type="button" class="btn btn-primary">Primary</button>
            <button type="button" class="btn btn-secondary">Secondary</button>
            <button type="button" class="btn btn-success">Success</button>
        </div>
        <h1>{{ msg }}</h1>
        <p>
            For a guide and recipes on how to configure / customize this project,<br />
            check out the
            <a href="https://cli.vuejs.org" target="_blank" rel="noopener">vue-cli documentation</a>.
        </p>
        <table-todos />
    </div>
</template>

<script>
import TableTodos from './TableTodos';
export default {
    name: 'HelloWorld',
    props: {
        msg: String,
    },
    data: function() {
        return {
            links: [
                { text: 'Core Docs', url: 'https://vuejs.org' },
                { text: 'Forum', url: 'https://forum.vuejs.org' },
                { text: 'Community', url: 'https://chat.vuejs.org' },
                { text: 'Twitter', url: 'https://twitter.com/vuejs' },
                { text: 'News', url: 'https://news.vuejs.org' },
            ],
        };
    },
    components: { TableTodos },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
    margin: 40px 0 0;
}
ul {
    list-style-type: none;
    padding: 0;
}
li {
    display: inline-block;
    margin: 0 10px;
}
a {
    color: #42b983;
}
</style>

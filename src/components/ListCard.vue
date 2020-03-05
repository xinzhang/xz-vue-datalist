<template>
    <div class="container">
        <h3>MyList of things</h3>
        <ul class="list-group">
            <li class="list-group-item" v-for="(item, idx) in items" :key="idx">
                <a :href="item.url" target="_blank" rel="noopener">{{ item.text }}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: ['title', 'items'],
};
</script>

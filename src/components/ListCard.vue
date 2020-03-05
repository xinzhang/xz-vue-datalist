<template>
    <div class="container mt-4">
        <h3>{{ title }}</h3>
        <!-- show a movie list
            <ul class="list-group">
            <li class="list-group-item" v-for="(item, idx) in links" :key="idx">
                <a :href="item.url" target="_blank" rel="noopener">{{ item.text }}</a>
            </li>
        </ul> -->
    </div>
</template>

<script>
export default {
    name: 'ListCard',
    props: ['title'],
};
</script>

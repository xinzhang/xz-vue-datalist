<template>
    <div class="container mt-4">
        <h3>{{ title }}</h3>
        <div class="listcard">
            <CardItem />
        </div>
        <!-- show a movie list
            <ul class="list-group">
            <li class="list-group-item" v-for="(item, idx) in links" :key="idx">
                <a :href="item.url" target="_blank" rel="noopener">{{ item.text }}</a>
            </li>
    </ul>-->
    </div>
</template>

<script>
import CardItem from './CardItem';

export default {
    name: 'ListCard',
    props: ['title'],
    components: {
        CardItem,
    },
};
</script>

<style scoped>
.listcard {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>

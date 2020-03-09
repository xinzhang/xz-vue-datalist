<template>
    <div class="comment-container">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/vue-post-photo.jpg" class="main-photo" />
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/vue-main-profile.jpg" class="main-profile" />
        <div class="main-info">
            <span class="name">Julianne Delfina</span>
            <h3>"It's lovely after it rains"</h3>
        </div>
        <hr />
        <ul>
            <li v-for="(comment, index) in comments" :key="index">{{ comment }}</li>
        </ul>
        <input placeholder="Add a comment" v-model="newComment" v-on:keyup.enter="addComment" />
    </div>
</template>

<script>
export default {
    name: 'Comment',
    data: function() {
        return {
            newComment: '',
            comments: ['Looks great Julianne!', 'I love the sea', 'Where are you at?'],
        };
    },
    methods: {
        addComment() {
            this.comments.push(this.newComment);
            this.newComment = '';
        },
    },
};
</script>

<style lang="scss" scoped>
.comment-container {
    color: #fff;
    width: 390px;
    margin: 0 auto;
    margin-top: 20px;
    padding: 20px;
    background-color: #000;
}
.main-photo {
    width: 300px;
}
.main-profile {
    position: relative;
    float: left;
    border: 3px solid white;
    margin: -25px 0 0 20px;
    width: 80px;
}
h3 {
    margin: 5px 0 4px;
    font-size: 1.2em;
}
.name {
    color: #ccc;
}

.main-info {
    float: left;
    padding: 10px 10px;
    text-align: left;
    margin-bottom: 15px;
    &:after {
        clear: both;
        content: '';
        display: table;
    }
}

hr {
    margin: 30px 0 0px 32px;
    width: 300px;
    border-top: 0;
    border-bottom: 1px solid #555;
}

ul {
    margin: 0;
    padding: 0 35px;
}
li {
    list-style: none;
    border-bottom: 1px solid #555;
    text-align: left;
    padding: 10px 0;
}

input {
    font-family: 'Playfair Display', serif;
    width: 280px;
    margin: 30px 0;
    padding: 8px 10px;
    outline: 0;
}
</style>

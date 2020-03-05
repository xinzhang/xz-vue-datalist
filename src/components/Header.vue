<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
            class="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
        >
            <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                    <a class="nav-link" href="/">Home <span class="sr-only">(current)</span></a>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/cards">Cards</router-link>
                </li>
                <li class="nav-item">
                    <router-link class="nav-link" to="/todos">Todos</router-link>
                </li>
                <li class="nav-item dropdown">
                    <a
                        class="nav-link dropdown-toggle"
                        href="#"
                        id="navbarDropdown"
                        role="button"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                    >
                        Reference
                    </a>
                    <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item" v-for="(item, idx) in links" :key="idx" :href="item.url">{{
                            item.text
                        }}</a>
                    </div>
                </li>
            </ul>
            <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Header',
    data: () => ({
        links: [
            { text: 'Core Docs', url: 'https://vuejs.org' },
            { text: 'Forum', url: 'https://forum.vuejs.org' },
            { text: 'Community', url: 'https://chat.vuejs.org' },
            { text: 'Twitter', url: 'https://twitter.com/vuejs' },
            { text: 'News', url: 'https://news.vuejs.org' },
        ],
    }),
};
</script>

<style scoped></style>

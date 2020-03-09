<template>
    <div class="cardItem">
        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/backpack.jpg" width="235" height="280" />
        <div class="quantity">
            <button class="inc" @click="dec">-</button>
            <span class="quanText">QUANTITY: {{ quantity }}</span>
            <button class="inc" @click="inc">+</button>
        </div>
        <button class="submit">Submit</button>
    </div>
</template>

<script>
export default {
    name: 'CardItem',
    data: function() {
        return {
            quantity: 0,
        };
    },
    methods: {
        inc() {
            console.log('inc');
            this.quantity++;
        },
        dec() {
            if (this.quantity > 0) {
                console.log('dec');
                this.quantity--;
            }
        },
    },
};
</script>

<style lang="scss" scoped>
.cardItem {
    background: #eee;
    display: flex;
    flex-direction: column;
    width: 280px;
    height: 400px;
    justify-content: space-around;
    align-items: center;
    background: #eee;
    padding: 20px 10px;
    margin: 30px;
    img {
        align-self: center;
    }
}

.quantity {
    border: 2px solid black;
    background-color: #fff;
    border-radius: 1000px;
    width: 235px;
    padding: 3px;
    margin-top: 10px;
}

.quanText {
    font-size: 12px;
    display: inline-block;
    width: 140px;
}

.special {
    font-family: 'Montserrat', sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.1em;
    font-size: 12px;
}

button {
    border: none;
    border-radius: 1000px;
    @extend .special;
    &.inc {
        font-size: 16px;
        background: #fff;
    }
    &.submit {
        color: white;
        background: #000;
        background-color: #000;
        width: 235px;
        margin-top: 10px;
        padding: 8px 13px;
        transition: 0.25s all ease-in;
        &:hover {
            opacity: 0.7;
            transition: 0.25s all ease-out;
        }
    }
}
</style>

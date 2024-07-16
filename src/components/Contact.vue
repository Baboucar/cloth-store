<template>
    <div>
        <Nav />
        <section class="center">
            <h2 class="head">Contact Us</h2>
            <div class="details">
                <div class="detail">
                    <h3 class="title">Customer Service</h3>
                    <p><a class="telephone" href="tel:+1234567890">+1 (234) 567-890</a></p>
                    <p> <a href="mailto:example@example.com">example@example.com</a></p>

                </div>

                <div class="detail">
                    <h3 class="title">Visit Our Shops</h3>
                    <p>500 Terry Francine Street
                        <br>
                        San Francisco, CA 94158
                    </p>

                </div>
                <div class="detail">
                    <h3 class="title">Opening hours</h3>
                    <p>
                        Mon. - Fri. 8am - 8pm
                        <br>
                        Saturday. 9am - 7pm​
                        <br>
                        Sunday. 9am - 8pm
                    </p>
                </div>
     
            </div>
            <hr>
        </section>
    </div>
</template>

<script>
import Nav from "./Nav.vue";
import Footer from "./Footer.vue";
export default {
    components: {
        Nav,
        Footer
    }
}
</script>

<style lang="scss" scoped>
.center{
    text-align: center;
    letter-spacing: 0.1em;
    color: rgb(112,112,112);
    
}
.head{
    color: #8b5c3e;
}
.detail{
    margin-top: 2rem;
}
a{
    text-decoration: none;
    color: rgb(112,112,112);
}
hr{
    width: 55%;
    margin: 0 auto;
    margin-top: 1.5rem;
}
@media(min-width: 64rem){
    .title{
        padding-bottom: 2rem;
        font-size: 1.5rem;
    }
    .details{
        width: 60%;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        line-height: 2;
    }
}
</style>
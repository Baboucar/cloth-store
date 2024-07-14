<template>
    <div>
        <Nav/>
        <section class="head container-90">
            <p class="words">Beautiful. <span class="down">Elegant. Stylish</span></p>
        </section>
        <section class="shop">
            <router-link to="/shop" class="shop__button">Shop Now</router-link>
        </section>
        <section class="slider">
            <router-link to=""><img class="hov" src="/images/slide1.png" alt=""></router-link>
            <router-link to=""><img class="hov" src="/images/slide2.png" alt=""></router-link>
        </section>
        <section>
            <div class="container">
                <div class="content">
                    <img src="https://via.placeholder.com/800x600" alt="Cotton Field">
                    <div class="text-box">
                        <h2>Modern Fashion</h2>
                        <p>I'm a paragraph. Click here to add your own text and edit me. I’m a great place for you to tell a story and let your users know a little more about you.</p>
                        <button>Learn More</button>
                    </div>
                </div>
            </div>
        </section>
        <section class="container-90">
            <h2 class="arrival-title">New Arrivals</h2>
            <div class="cards">
                <div class="card">
                    <img class="card-img" src="/images/arrival1.png" alt="arrival">
                    <p class="card_desc">Organic Linen Maxi Dress</p>
                </div>
                <div class="card">
                    <img class="card-img" src="/images/arrival2.png" alt="arrival">
                    <p class="card_desc">Organic Linen Maxi Dress</p>
                </div>
                <div class="card">
                    <img class="card-img" src="/images/arrival3.png" alt="arrival">
                    <p class="card_desc">Organic Linen Maxi Dress</p>
                </div>
            </div>
        </section>
        <section>
            <div class="slider-container">
                <Carousel v-bind="settings" :breakpoints="breakpoints" :autoplay="10000" :wrap-around="true">
                    <Slide v-for="slide in slides" :key="slide">
                      <h2 class="slide-title">{{ slide.title }} </h2>
                       
                        <div class="slide-desc">{{  slide.text}}</div>
                    </Slide>
                
                    <template #addons>
                      <Pagination />
                    </template>
                  </Carousel>
                
            </div>
        </section>
        <Footer/>
    </div>
</template>
<script>
import Nav from "./Nav.vue";
import { Carousel, Navigation, Slide, Pagination } from 'vue3-carousel';
import Footer from './Footer.vue';

import 'vue3-carousel/dist/carousel.css';

export default {
    components:{
        Nav,
        Pagination,
       Carousel,
       Slide,
       Navigation,
       Footer
    },
    data () {
        return {
            slides: [
                {
                    title: 'San Francisco',
                    text: 'I’m a review. Click to edit me and add text from a critic who has evaluated you and your work.',
                },
                {
                    title: 'Another Slide',
                    text: 'This is another review. Click to edit me and add text from a critic who has evaluated you and your work.',
                },
                {
                    title: 'Another Slide',
                    text: 'This is another review. Click to edit me and add text from a critic who has evaluated you and your work.',
                },
            ],
        }
    }
}
</script>
<style lang="scss" scoped>
.container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    padding: 20px;
}
.carousel__slide {
    display: block;
}
.arrival-title{
    margin-top: 3.5rem;
    text-align: center;
}
.card{
    padding-top: 1rem;
}
.content {
    position: relative;
    text-align: center;
    background-color: #f8f3f0;
    padding: 40px;
    margin: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.content img {
    width: 100%;
    height: auto;
    display: block;
}
.text-box {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    padding: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.text-box h2 {
    margin: 0;
    font-size: 24px;
}
.text-box p {
    font-size: 16px;
}
.text-box button {
    margin-top: 10px;
    padding: 10px 20px;
    background-color: #8b5c3e;
    color: white;
    border: none;
    cursor: pointer;
}
.text-box button:hover {
    background-color: #724a32;
}
@media (max-width: 768px) {
    .content {
        width: 100%;
        margin: 10px 0;
    }
    .text-box {
        width: 80%;
        top: 20%;
        left: 50%;
        transform: translate(-50%, -20%);
    }
}
.container-90{
    width: 90%;
    margin: 0 auto;
}
img{
    max-width: 100%;
    height: auto;
}
.words{
    font-size: 2rem;
    letter-spacing: 0.1em;
    text-align: center;
}
.down{
    display: block;
}
.shop__button{
    background: #ad6343; 
    color: #FFFFFF;
    padding: 0.8rem;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 9rem;
}
.slider {
    display: flex;
    justify-content: center;
    align-items: center;
}
.slider img {
    transition: transform 0.5s ease-in;
}
.slider img.hov:hover {
    transform: scale(1.1);
}
@media (min-width: 768px) {
    .container {
        flex-direction: row;
        justify-content: center;
    }
    .image-wrapper {
        flex: 1;
        margin-right: 20px;
    }
    .text-box {
        flex: 1;
        max-width: none;
    }
}
@media(min-width: 64rem){
    .slider-container {
        margin-top: 16rem;
    }
    .down{
        display: inline;
    }
    .words{
        font-size: 3rem;
        margin-top: 3rem;
    }
    .slider{
        display: grid;
        grid-template-columns: 1fr 1fr;
        height: 400px;
    }
    .cards{
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 2rem;
    }
    .card{
        height: 300px;
    }
    .card-img{
        height: 450px;
    }
    .card_desc{
        text-align: center;
    }

    .slide-desc{
        width: 40%;
        margin: 0 auto;
        padding-top: 2rem;
        font-size: 1.2rem;
        line-height: 2;
        
    }
    .slide-title{
        font-weight: bold;
        font-size: 1.8rem;
    }
}

/* slider style */

.slide-content {
    height: 300px;
    background-color: #fff;
    border: 1px solid #ddd;
    padding: 20px;
    text-align: center;
}
.slide-content h2 {
    margin-bottom: 10px;
}
</style>

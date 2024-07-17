<template>
    <div>
        
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
            <div class="forms">
                <h3>Get in Touch</h3>
                <div class="group">
                    <div>
                        <input type="text" name="" placeholder="Name" id="">
                    </div>
                    <div>
                        <input placeholder="email" type="email" name="" id="">

                    </div>
                </div>
                <textarea placeholder="type your message here" name="" id="" cols="30" rows="10"></textarea>
                <button>Submit</button>
            </div>
            
        </section>
        <div>
            <iframe  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3880.5688721139077!2d-16.684750724507328!3d13.438992104458052!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xec29980ad74f503%3A0xc423fbb4a6c1ee41!2sSerekunda%20Market!5e0!3m2!1sen!2sgm!4v1721161125733!5m2!1sen!2sgm" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <Footer/>
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
iframe{
    width: 100%;
}
.head{
    color: #8b5c3e;
}
button{
    background: #8b5c3e;
    color: #FFFFFF;
    border: none;
    padding: .5rem;
    display: block;
    margin: 0 auto;

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
input, textarea{
    width: 90%;
    border-top: none;
    border-left: none;
    border-right: none;
    border-bottom: 2px solid  rgb(112,112,112);

}
input{
    height: 30px;
}

input:focus,
textarea:focus,
select:focus {
    background-color: transparent;
    outline: none; /* Remove the blue border */
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


    .group{
        display: grid;
        grid-template-columns: 1fr 1fr;
    }
    .forms{
        width: 60%;
        margin: 2rem auto;
    }
    textarea{
        width: 95%;
    }
}
</style>
<template>
    <Nav/>
    <div>
    <div class="about-container">
      <div class="text-section">
        <h1>About US</h1>
        <p class="first-paragraph">
        It is easy. Just click “Edit Text” or double click me to add your own content and make changes to the font. Feel free to drag and drop me anywhere you like on your page. I’m a great place for you to tell a story and let your users know a little more about you.
        </p>
        <p class="second-paragraph">
          This is a great space to write a long text about your company and your services. You can use this space to go into a little more detail about your company. Talk about your team and what services you provide. Tell your visitors the story of how you came up with the idea for your business and what makes you different from your competitors.
        </p>
      </div>
      <div class="image-section">
        <img src="/images/slide2.png" alt="Manière">
      </div>
    </div>
    <Footer/>
</div>
  </template>
  
  <script>
  import Nav from "./Nav.vue";
  import Footer from './Footer.vue';
  export default {
    components:{
        Nav,
        Footer
    }
    
  };
  </script>
  
  <style scoped>
  img{
    max-width: 100%;
    height: auto;
  }
  .about-container {
    display: flex;
    flex-wrap: wrap;
   margin-top: 4rem;
    width: 90%;
    margin: 0 auto;
    letter-spacing: 0.1em;
  }
  
  .text-section {
    flex: 1;
    padding: 1rem;
    text-align: justify;
    line-height: 1.5;
    
  }

  
  .text-section h1 {
    font-size: 2rem;
    color: #333;
    margin-bottom: 1rem;
  }
  
  .text-section p {
    font-size: 1rem;
    color: #666;
    line-height: 2;
    margin-top: 2.5rem;
  }
  
  .image-section {
    flex: 1;
    padding: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  
  .image-section img {
    max-width: 100%;
    height: auto;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  @media (max-width: 64rem) {
    .about-container {
      flex-direction: column;
    }
  
    .text-section, .image-section {
      padding: 1rem 0;
    }
    .text-section{
        margin-top: 3rem;
    }
    .first-paragraph{
        padding-top: 2rem;
    }
  }
  </style>
  
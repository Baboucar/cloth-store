<template>
    <footer class="footer">
      <div class="footer-section">
        <h3>Customer Care</h3>
        <ul>
          <li><a href="#">FAQ</a></li>
          <li><a href="#">Shipping & Returns</a></li>
          <li><a href="#">Policy</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Connect</h3>
        <ul>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Twitter</a></li>
          <li><a href="#">Facebook</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>The Company</h3>
        <ul>
          <li><a href="#">About</a></li>
          <li><a href="#">Accessibility</a></li>
          <li><a href="#">Store Locator</a></li>
        </ul>
      </div>
    </footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
  };
  </script>
  
  <style scoped>
  .footer {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    padding: 2rem;
    background-color:#FCF6F2;
    color: #333;
  }
  
  .footer-section {
    flex: 1;
    min-width: 200px;
    margin: 1rem;
  }
  
  .footer-section h3 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }
  
  .footer-section ul {
    list-style-type: none;
    padding: 0;
  }
  
  .footer-section li {
    margin-bottom: 0.5rem;
  }
  
  .footer-section a {
    text-decoration: none;
    color: #333;
  }
  
  .footer-section a:hover {
    text-decoration: underline;
  }
  
  @media (max-width: 768px) {
    .footer {
      flex-direction: column;
      align-items: center;
    }
  }
  </style>
  
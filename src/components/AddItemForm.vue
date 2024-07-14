<template>
  <div class="add-item-form">
    <h2>Add New Item</h2>
    <form @submit.prevent="addItem">
      <div class="form-group">
        <label for="name">Item Name</label>
        <input type="text" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="price">Price</label>
        <input type="number" v-model="price" required />
      </div>
      <div class="form-group">
        <label for="image">Image URL</label>
        <input type="url" v-model="image" required />
      </div>
      <button type="submit">Add Item</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '',
      price: 0,
      image: '',
    };
  },
  methods: {
    addItem() {
      const newItem = {
        id: Date.now(),
        name: this.name,
        price: this.price,
        image: this.image,
      };
      this.$emit('add-item', newItem);
      this.name = '';
      this.price = 0;
      this.image = '';
    },
  },
};
</script>

<style scoped>
.add-item-form {
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.form-group {
  margin-bottom: 15px;
  text-align: left;
}
label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}
input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
button {
  background-color: #ffc107;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 10px;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #e0a800;
}
@media (max-width: 768px) {
  .add-item-form {
    width: 100%;
  }
}
</style>

<template>
  <div class="container">
        <div class="card">
            <div class="card-header">
                <h3>Add Item</h3>
            </div>
            <div class="card-body">
                <form v-on:submit.prevent="addItem">
                    <div class="form-group">
                        <label>Item Name:</label>
                        <input type="text" class="form-control" v-model="newItem.name"/>
                    </div>
                    <div class="form-group">
                        <label>Item Price:</label>
                        <input type="text" class="form-control" v-model="newItem.price"/>
                    </div>
                    <div class="form-group">
                        <input type="submit" class="btn btn-primary" value="Add Item"/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
    data() {
    return {
      addIngredientForm: {
        name: '',
        quantity: ''
      },
    }
  },
  
  computed: {
    ...mapState(['ingredients']),
    ingredients() {
        return this.$store.state.ingredients
    }
  },

  methods : {
    addIngredient() {
      this.$store.dispatch('addIngredient', {
        name: this.addIngredientForm.name,
        quantity: this.addIngredientForm.quantity
      })
      alert('Ingredient add successfully')
    },

    updateIngredient() {
      this.$store.dispatch('updateIngredient', {
        name: this.name !== '' ? this.name : this.addIngredientForm.name,
        quantity: this.quantity !== '' ? this.quantity : this.addIngredientForm.quantity
      })

      this.name = ''
      this.quantity = ''

      this.showSuccess = true

      setTimeout(() => {
        this.showSuccess = false
      }, 2000)
    }
  }
}
</script>
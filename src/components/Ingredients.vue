<template>
    <section class="shopping-list">
        <h3>Ingredients</h3>
        <form>
          <p class="h4 text-center mb-4">Add</p>
           <div class="form-group col-sm-8">
            <label for="title">Title</label>
             <input placeholder="name" v-model.trim="addIngredientForm.name" required type="text" class="form-control"  id="name"/>
      
          </div>
           <div class="form-group col-sm-8">
            <label for="quantity">Quantity</label>
             <input placeholder="quantity" v-model.trim="addIngredientForm.quantity" required type="text" class="form-control" id="quantity"/>
          
            </div>
          

          <button @click="addIngredient()" class="button btn btn-primary">Add Ingredient</button>
        </form>
        <table style="width:100%" class="table-bordered">
            <tr>
                <th>Ingredient Name</th>
                <th>Quantity</th>
                <th>Action</th>
            </tr>
            
            <tr v-for="(ingredient, idx) in ingredients" :key="idx">
               <td>{{ingredient.name}}</td>
                <td>{{ingredient.quantity}}</td>
                <td><button @click="updateIngredient(ingredient.id)" class="button btn btn-primary">Edit</button> &nbsp; 
                    <button @click="deleteItem(ingredient.id)" class="btn btn-danger">Delete</button>
            </td>
            </tr>
        </table>
        
    </section>
</template>

<script>
import { mapState } from 'vuex'
import * as fb from '../firebase'
export default {
    data() {
    return {
      addIngredientForm: {
        name: '',
        quantity: ''
      },
      newItem: {}
    }
  },
  firebase: {
    items: fb.ingredientsCollection,
    itemsObj: {
      source: fb.ingredientsCollection,
      asObject: true
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

    updateIngredient(id) {
      fb.ingredientsCollection.doc(id).
              onSnapshot(function(doc){

                    console.log('current data:', doc.data().name)

                      this.newItem.name = doc.data().name

                    

  console.log(this.newItem.name)
                  })

      
    
    },

    deleteItem(id) {
       fb.ingredientsCollection.doc(id).delete()
       alert('Ingredient delete successfully')
    }
  }
}
</script>
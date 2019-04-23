

<template>
      <div class="listing container">
        <div class="title" style="margin-bottom:40px;">
          <h1>Products on Sale</h1>
        </div>
        <div class="row">
          <div class="col-sm-2">
            <h2>#</h2>
          </div>
          <div class="col-sm-8">
            <h2>PRODUCT NAME</h2>
          </div>
          <div class="col-sm-2">
            <h2>GO TO</h2>
          </div>
        </div>

        <template v-for="product in products">
          <div class="row" style="margin-bottom:20px;">
            <div class="col-sm-2" >
              <p>{{ product.id }}</p>
            </div>
            <div class="col-sm-8">
              <p>{{ product.name }}</p>
            </div>
            <div class="col-sm-2">
              <router-link :to="{path: '/product/'+product.id }">View Product</router-link>
            </div>
          </div>
        </template>
      </div>
    </template>

<script>

import axios from 'axios'

export default {
      name: 'Listing',
      data () {
        return {
          products : []
        }
      },
      mounted : function(){
        axios.get('http://localhost:3128/products').
        then( result => {
          console.log( result );
          this.products = result.data;
        })
      }
    }
</script>


<template>
  <div>
    <div v-if="error || !shopData">404</div>
    <div v-else>
      <div
        class="section section--hero section--hero__sm"
        :style="{ backgroundImage: `url('${shopData.image}')` }"
      >
        <img @click="backToCity" class="go-back" src="@/assets/go-back-left-arrow.svg" />
        <img
          v-if="Object.keys($store.state.cart.orders).length > 0"
          @click="goToCart"
          class="go-to-cart"
          src="@/assets/cart.svg"
        />
        <div class="container">
          <div class="avatar-container">
            <img alt="vendor avatar" :src="shopData.logo" />
          </div>
        </div>
        <div class="hero-divider">
          <img alt="divider" src="@/assets/divider_grey.svg" class="divider" />
        </div>
      </div>
      <div class="container">
        <div class="el-row">
          <div class="el-col el-col-24 el-col-xs-24 city-selector">
            <h3>{{shopData.name}}</h3>
            <p>{{shopData.description}}</p>
          </div>
        </div>
        <hr />
        <div class="el-row">
          <div class="el-col el-col-24">
            <p
              style="margin: 0; font-size: 13px;"
            >Clicca sui tag per filtrare i negozi, riclicca per disabilitare</p>
            <carousel
              class="tag-carousel-available"
              :perPageCustom="[[0, 3], [768, 6], [1024, 7], [1240, 8]]"
              :paginationEnabled="false"
            >
              <slide v-for="(tag, index) in tags" :key="`tag-${index}`">
                <button
                  class="el-button el-button-sm tag-carousel-slide"
                  :class="{
                    'el-button--success': activeTags.includes(tag),
                    'el-button--primary': !activeTags.includes(tag)
                  }"
                  @click="() => toggleTag(tag)"
                >{{tag}}</button>
              </slide>
            </carousel>
          </div>
        </div>
        <hr />
        <div class="el-row">
          <div
            v-for="(product, index) in productsFiltered"
            :key="index"
            class="el-col el-col-6 el-col-xs-24"
            style="padding: 10px;"
          >
            <Card
              :title="product.name"
              :description="product.description"
              :image="product.image"
              :button="getButtonAction(product)"
            />
          </div>
        </div>
      </div>
    </div>
    <modal
      :styles="'border-radius: 10px; border: var(--border-lg); padding: 20px; text-align: center;'"
      height="auto"
      width="320"
      name="product-quantity-selector"
    >
      <div v-if="productQuantitySelector">
        <h4>{{productQuantitySelector.name}}</h4>
        <p>{{productQuantitySelector.description}}</p>
        <input
          type="number"
          value="1"
          min="1"
          class="add-to-cart-quantity"
          v-model="productQuantity"
        />
        <button
          class="el-button el-button-sm el-button--primary card-button add-to-cart-button"
          @click="() => addToCart(productQuantitySelector.name, productQuantity)"
        >AGGIUNGI</button>
      </div>
    </modal>
    <modal
      :styles="'border-radius: 10px; border: var(--border-lg); padding: 20px; text-align: center;'"
      height="auto"
      width="320"
      name="cart"
    >
      <div v-if="$store.state.cart.shop">
        <h4>Cart</h4>
        <div
          class="cart-item"
          v-for="(quantity, product) in $store.state.cart.orders"
          :key="product"
        >
          {{product}}
          <div class="quantity-selector-editor">
            <input
              type="number"
              value="1"
              min="1"
              class="add-to-cart-quantity"
              v-model="$store.state.cart.orders[product]"
            />
            <button
              class="el-button el-button-sm el-button--danger card-button remove-from-cart-button"
              @click="() => deleteFromCart(product)"
            >-</button>
          </div>
        </div>
        <textarea placeholder="Note..." class="custom-notes" v-model="$store.state.cart.notes"></textarea>
        <button
            class="el-button el-button-sm el-button--primary card-button send-order-button"
            @click="sendOrder"
          >Send order</button>
      </div>
    </modal>
    <v-dialog />
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import { Buffer } from 'ipfs';

export default {
  name: 'Shop',
  props: {
    shop: Object,
  },
  components: {
    Card,
  },
  data() {
    return {
      ipfsStatus: false,
      products: [],
      shopData: {},
      error: false,
      activeTags: [],
      productQuantitySelector: null,
      productQuantity: 1,
    };
  },
  computed: {
    tags() {
      let tags = [];
      this.products.forEach((shop) => {
        tags = tags.concat(shop.tags);
      });
      return Array.from(new Set(tags));
    },
    productsFiltered() {
      if (this.activeTags.length > 0) {
        return this.products.filter((shop) => shop.tags.some((r) => this.activeTags.includes(r)));
      }
      return this.products;
    },
  },
  mounted() {
    if (this.shop) {
      this.shopData = this.shop;
    } else {
      this.shopData = this.$store.state.shop;
    }
    if (this.shopData.link) {
      this.fetchProducts(this.shopData.link);
    } else {
      this.error = true;
    }
  },
  methods: {
    sendOrder() {
      let formattedText = '';
      const { orders, notes } = this.$store.state.cart;
      /* eslint-disable-next-line no-restricted-syntax */
      for (const product in orders) {
        if (orders[product]) {
          const quantity = orders[product];
          formattedText += `${product} x${quantity}\n`;
        }
      }
      formattedText += `\n${notes}`;
      this.$clipboard(formattedText);
    },
    getButtonAction(product) {
      if (Object.keys(this.$store.state.cart.orders).includes(product.name)) {
        return { label: 'Edit in cart', click: () => this.goToCart() };
      }
      return { label: 'Add to cart', click: () => this.openProductQuantitySelector(product) };
    },
    deleteFromCart(product) {
      this.$delete(this.$store.state.cart.orders, product);
      if (Object.keys(this.$store.state.cart.orders).length === 0) {
        this.$modal.hide('cart');
      }
    },
    goToCart() {
      this.$modal.show('cart');
    },
    openProductQuantitySelector(product) {
      this.productQuantitySelector = product;
      this.$modal.show('product-quantity-selector');
    },
    addToCart(name, quantity) {
      this.$store.commit('addToCart', {
        name,
        quantity,
        shop: this.shopData.name,
      });
      this.$modal.hide('product-quantity-selector');
      this.productQuantitySelector = null;
      this.productQuantity = 1;
    },
    toggleTag(tag) {
      const index = this.activeTags.indexOf(tag);
      if (index >= 0) {
        this.activeTags.splice(index, 1);
      } else {
        this.activeTags.push(tag);
      }
    },
    leaveShop() {
      this.$store.commit('emptyCart');
      this.$store.commit('setShop', null);
      this.$router.push({ name: 'City' });
    },
    backToCity() {
      if (Object.keys(this.$store.state.cart.orders).length === 0) {
        this.leaveShop();
      } else {
        this.$modal.show('dialog', {
          title: 'Leaving this shop will delete your order',
          buttons: [
            {
              title: 'Ok, leave',
              handler: () => {
                this.leaveShop();
              },
            },
            {
              title: 'No, stay on this shop',
            },
          ],
        });
      }
    },
    async fetchProducts(link) {
      let ipfs;
      try {
        ipfs = await this.$ipfs;
        this.ipfsStatus = true;
      } catch (err) {
        this.ipfsStatus = false;
        return;
      }
      const chunks = [];
      /* eslint-disable-next-line no-restricted-syntax */
      for await (const chunk of ipfs.cat(link)) {
        chunks.push(chunk);
      }
      try {
        this.products = JSON.parse(Buffer.concat(chunks).toString());
      } catch (err) {
        this.products = [];
      }
    },
  },
};
</script>

<style scoped>
.tag-carousel-available {
  margin-top: 10px;
}
.tag-carousel-slide {
  width: 97%;
  margin-left: 3%;
}
.add-to-cart-quantity,
.add-to-cart-button {
  display: inline-block;
  vertical-align: top;
}

.add-to-cart-button, .remove-from-cart-button {
  border-radius: 0 20px 20px 0;
  width: 50px;
}

.add-to-cart-button {
  width: 150px;
}

.add-to-cart-quantity {
  width: 40px;
  border-radius: 20px 0 0 20px;
  border: var(--border-lg);
  border-right: none;
  padding-left: 15px;
  position: relative;
  height: 24px;
  background-color: white;
}
.go-to-cart {
  position: absolute;
  right: 30px;
  top: 30px;
  height: 30px;
  width: 30px;
  cursor: pointer;
}
.cart-item {
  margin-top: 10px;
}

.cart-item * {
  vertical-align: middle;
}

.custom-notes {
  width: 80%;
  background-color: white;
  margin-top: 30px;
  padding: 10px;
  border-radius: 10px;
  border: var(--border-lg);
}

.send-order-button {
  max-width: 300px;
  margin-top: 30px;
}

.quantity-selector-editor {
  display: inline-block;
}
</style>

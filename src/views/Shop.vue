<template>
  <div>
    <div v-if="error || !shopData">404</div>
    <div v-else>
      <div
        class="section section--hero section--hero__sm"
        :style="{ backgroundImage: `url('${shopData.image}')` }"
      >
        <img @click="backToCity" class="go-back" src="@/assets/go-back-left-arrow.svg" />
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
            <p style="margin: 0; font-size: 13px;">{{$t('tagFilterProducts')}}</p>
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
        <div
          class="el-row"
          v-for="(productsFiltered, indexChunk) in chunkedProductsFiltered"
          :key="indexChunk"
        >
          <div
            v-for="(product, index) in productsFiltered"
            :key="index"
            class="el-col el-col-6 el-col-xs-24"
            style="padding: 10px;"
          >
            <Card
              :title="product.name"
              :description="`${product.description}`"
              :image="product.image"
              :button="getButtonAction(product)"
            />
          </div>
        </div>
      </div>
    </div>
    <button
      class="order-floating-button animation-target"
      v-if="Object.keys($store.state.cart.orders).length > 0"
      @click="goToCart"
    >
      <img src="@/assets/cart.svg" />
    </button>
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
          @click="() => addToCart(productQuantitySelector.name, productQuantitySelector.price, productQuantity)"
        >{{$t('cartAdd')}}</button>
      </div>
    </modal>
    <modal
      :styles="'border-radius: 10px; border: var(--border-lg); padding: 20px; text-align: center;'"
      height="auto"
      width="320"
      name="cart"
    >
      <div v-if="$store.state.cart.shop">
        <h4>{{$t('cartTitle')}}</h4>
        <div class="cart-item" v-for="(_, product) in $store.state.cart.orders" :key="product">
          <span style="font-size: 12px;">
            {{product}} -
            {{$store.state.cart.orders[product].quantity * $store.state.cart.orders[product].price}}€
          </span>
          <div class="quantity-selector-editor">
            <input
              type="number"
              value="1"
              min="1"
              class="add-to-cart-quantity"
              v-model="$store.state.cart.orders[product].quantity"
              @change="() => $store.commit('saveOrder')"
            />
            <button
              class="el-button el-button-sm el-button--danger card-button remove-from-cart-button"
              @click="() => deleteFromCart(product)"
            >
              <img src="@/assets/bin.svg" />
            </button>
          </div>
        </div>
        <textarea
          :placeholder="$t('cartNotes')"
          class="custom-notes"
          v-model="$store.state.cart.notes"
          @change="() => $store.commit('saveOrder')"
        ></textarea>
        <b>{{$t('cartTotal')}}: {{totalPrice}}€</b>
        <br />
        <p v-html="address"></p>
        <span
          class="button-text"
          @click="() => {$modal.hide('cart'); $modal.show('account')}"
        >{{$t('cartEditAddress')}}</span>
        <div v-if="!payed">
          <p>
            {{$t('payOrderInstruction')}}
          </p>
          <button
            v-for="(method, index) in shopData.paymentMethods"
            :key="index"
            class="el-button el-button-sm el-button--primary card-button send-order-button"
            @click="() => {payOrder(method.type, method.value)}"
          >
            {{method.type === 'cash' ? $t('payOrderCash') : `${$t('payOrderVia')} ${method.type}`}}
          </button>
        </div>
        <div v-else>
          <p>
            <span
              class="button-text"
              @click="() => payed=false"
            >
              {{$t('payOrderCancel')}}
            </span>
          </p>
          <button
            v-for="(contact, index) in shopData.contacts"
            :key="index"
            class="el-button el-button-sm el-button--primary card-button send-order-button"
            @click="() => sendOrder(contact.type, contact.value)"
          >
            {{$t('cartSendOrderVia')}} {{contact.type}}
          </button>
        </div>
      </div>
    </modal>
    <v-dialog />
  </div>
</template>

<script>
import Card from '@/components/Card.vue';
import { Buffer } from 'ipfs';
import chunk from 'chunk';
import fetchShops from '@/services/shops';
import fetchCities from '@/services/cities';

export default {
  name: 'Shop',
  props: {
    shop: Object,
    cityLink: String,
    cityUid: String,
    shopLink: String,
    shopUid: String,
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
      shops: [],
      payed: false,
      cities: [],
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
        return this.products.filter((shop) => this.activeTags.every((r) => shop.tags.includes(r)));
      }
      return this.products;
    },
    chunkedProductsFiltered() {
      return chunk(this.productsFiltered, 4);
    },
    totalPrice() {
      let total = 0;
      const { orders } = this.$store.state.cart;
      /* eslint-disable-next-line no-restricted-syntax */
      for (const product in orders) {
        if (orders[product]) {
          const { quantity, price } = orders[product];
          total += price * quantity;
        }
      }
      return total;
    },
    address() {
      const storeState = this.$store.state;
      let address = '';
      if (storeState.account.firstname || storeState.account.lastname) {
        address += `${storeState.account.firstname} ${storeState.account.lastname}<br/>`;
      }
      if (storeState.account.address) {
        address += `${storeState.account.address}<br/>`;
      }
      if (storeState.account.doorbell) {
        address += `${storeState.account.doorbell}<br/>`;
      }
      if (storeState.account.phone) {
        address += `${storeState.account.phone}<br/>`;
      }
      if (storeState.account.notes) {
        address += `${storeState.account.notes}`;
      }
      return address || this.$t('cartWarningEmptyAccount');
    },
  },
  async mounted() {
    if (this.cityUid) {
      await fetchCities.bind(this)();
      const cityData = this.cities.find((city) => city.uid === this.cityUid);
      await fetchShops.bind(this)(cityData.link);
      this.shopData = this.shops.find((shop) => shop.uid === this.shopUid);
    } else if (window.hash !== this.$store.state.hash) {
      this.$store.commit('setShop', null);
      this.$router.push({ name: 'City' });
      return;
    } else if (this.shop) {
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
    calculateTotal() {
      let total = 0;
      const { orders } = this.$store.state.cart;
      /* eslint-disable-next-line no-restricted-syntax */
      for (const product in orders) {
        if (orders[product]) {
          const { quantity, price } = orders[product];
          total += price * quantity;
        }
      }
      return total;
    },
    payOrder(type, value) {
      const total = this.calculateTotal();
      switch (type) {
        case 'satispay':
          window.open(
            `https://tag.satispay.com/${value}/${total}`,
          );
          break;
        default:
      }
      this.payed = true;
    },
    sendOrder(type, contact) {
      let formattedText = '';
      const total = this.calculateTotal();
      const { orders, notes } = this.$store.state.cart;
      /* eslint-disable-next-line no-restricted-syntax */
      for (const product in orders) {
        if (orders[product]) {
          const { quantity, price } = orders[product];
          formattedText += `${quantity} x ${product} - ${price}€ = ${price
            * quantity}€%0A`;
        }
      }
      formattedText += `${notes}`;
      formattedText += `%0A${this.$t('cartTotal')}: ${total}€%0A`;
      const storeState = this.$store.state;
      if (storeState.account) {
        if (storeState.account.address) {
          formattedText += `${this.$t('accountAddress')}: ${
            storeState.account.address
          }%0A`;
        }
        if (storeState.account.doorbell) {
          formattedText += `${this.$t('accountRingbell')}: ${
            storeState.account.doorbell
          }%0A`;
        }
        if (storeState.account.phone) {
          formattedText += `${this.$t('accountPhone')}: ${
            storeState.account.phone
          }%0A`;
        }
        if (storeState.account.notes) {
          formattedText += `${this.$t('accountNotes')}: ${
            storeState.account.notes
          }%0A`;
        }
      }
      switch (type) {
        case 'whatsapp':
          window.open(
            `https://api.whatsapp.com/send?phone=${contact}&text=${formattedText}`,
          );
          break;
        case 'sms':
          window.open(`sms:${contact}?&body=${formattedText}`);
          break;
        case 'call':
          window.open(`tel:${contact}`);
          break;
        default:
          this.$clipboard(formattedText);
      }
    },
    getButtonAction(product) {
      if (Object.keys(this.$store.state.cart.orders).includes(product.name)) {
        return { label: this.$t('cartEdit'), click: () => this.goToCart() };
      }
      return {
        label: `${product.price}€ ${this.$t('cartAdd')}`,
        click: () => this.openProductQuantitySelector(product),
      };
    },
    deleteFromCart(product) {
      this.$delete(this.$store.state.cart.orders, product);
      if (Object.keys(this.$store.state.cart.orders).length === 0) {
        this.$modal.hide('cart');
      }
    },
    goToCart() {
      this.$modal.hide('cart');
      this.$modal.show('cart');
    },
    openProductQuantitySelector(product) {
      this.productQuantitySelector = product;
      this.$modal.show('product-quantity-selector');
    },
    addToCart(name, price, quantity) {
      this.$store.commit('addToCart', {
        name,
        price,
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
      this.$router.push({
        name: 'City',
        params: {
          cityLink: this.cityLink,
          cityUid: this.cityUid,
        },
      });
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
      for await (const chunkFile of ipfs.cat(link)) {
        chunks.push(chunkFile);
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

.add-to-cart-button,
.remove-from-cart-button {
  border-radius: 0 20px 20px 0;
  width: 50px;
}

.remove-from-cart-button img {
  height: 13px;
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
  height: 25px;
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
  margin-top: 20px;
  padding: 10px;
  border-radius: 10px;
  border: var(--border-lg);
  margin-bottom: 20px;
}

.send-order-button {
  max-width: 300px;
  width: 100%;
  display: block;
  margin-top: 30px;
  margin-left: auto;
  margin-right: auto;
}

.quantity-selector-editor {
  display: inline-block;
}

.order-floating-button {
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  border: var(--border-lg);
  background-color: var(--primary);
  display: block;
  padding: 0;
  cursor: pointer;
}

.order-floating-button img {
  width: 20px;
  height: 20px;
  margin-top: 5px;
}

@media screen {
  .order-floating-button {
    position: fixed;
    bottom: 40px;
    right: 40px;
    width: 70px;
    height: 70px;
    border-radius: 100%;
    border: var(--border-lg);
    background-color: var(--primary);
    display: block;
    padding: 0;
    cursor: pointer;
  }

  .order-floating-button img {
    width: 30px;
    height: 30px;
    margin-top: 5px;
  }
}

.button-text {
  text-decoration: underline;
  color: var(--primary);
  cursor: pointer;
}
</style>

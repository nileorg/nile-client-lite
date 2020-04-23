import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cities: [
      {
        name: 'Milano',
        description: 'lorem ipsum',
        image: 'base64....',
        shops: [
          {
            name: 'shop 1',
            description: 'lorem ipsum',
            image: 'base64...',
            tags: ['pizza', 'hamgurger'],
            products: [
              {
                name: 'pizza margherita',
                description: 'pizza margherita',
                image: 'base64',
                tags: ['pizza'],
              },
            ],
          },
        ],
      },
    ],
  },
});

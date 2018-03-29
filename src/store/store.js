import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state:{
        products: [
            {
              invId: 1,
              name: 'Product A',
              img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/moscow.svg',
              price: 500,
            },
            {
              invId: 2,
              name: 'Product B',
              img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris1.svg',
              price: 600,
            },
            {
              invId: 3,
              name: 'Product C',
              img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/rome.svg',
              price: 250,
            },
            {
              invId: 4,
              name: 'Product D',
              img: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/28963/paris1.svg',
              price: 60,
            },
          ],
          cart: [],
    },
    mutation:{

    },
})
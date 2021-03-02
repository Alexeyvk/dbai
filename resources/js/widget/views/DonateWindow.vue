<template>
  <div>
    <div
      v-if="isBusy"
      class="d-flex justify-content-center mb-3 spinner-wrapper"
    >
      <b-spinner label="Loading..."></b-spinner>
    </div>
    <div class="container">
      <div class="module-donate__donateWindow">
        <div class="module-donate__card">
          <div id="checkout-container"></div>
        </div>
        <div class="donateWindow__footer">
          <b-button
            :to="'/campaigns/' + id"
            class="module-donate__button-select confirm back"
          >
            {{ $t('buttons.widget.back') }}
          </b-button>
        </div>
        <p class="module-donate__version">
          powered by
          <a href="https://dbai.net.ua/" target="_blank">Dbai</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

/** recursive function checking the server status and redirect to partical status page
 *
 *  num - current number of attempts
 *  tokenOp - current payment token
 *  fail - fail link for redirection in case the checking process timeout
 */

function delay(num, tokenOp, fail) {

    const limit = 3; // attempts to check server status of the payments
    const postpone = 3000 // interval of checkin the server

    // in the current attepmpt less the limit
    if (num < limit) {

      // set interval for repeating the checking porocess
      setTimeout( function() {

        axios( {
            method: "post",
            url: '/doika/doika/widget/api/bepaid-check-payment-status', // TBD - need to move to some variables...
            data: {
                token: tokenOp
            }
        }).
        then( ({ data }) => {
            num++;

            // if success when redirect to success status page
            if (data.checkout.status === 'successful') {
              window.location.href = data.checkout.settings.success_url;
            }

            // else save the redirect link to the fail status page
            fail = data.checkout.settings.fail_url;

            // on more circle
            delay(num, tokenOp, fail);

        })
      }, postpone);

    } else {
        window.location.href = fail;
    }
}

export default {
  name: 'DonateWindow',
  props: ['id'],
  data() {
    return {
      isBusy: false,
      campaign: [],
      redirect_url: null,
      placeholder: this.$t('buttons.widget.email'),
      model: {
        email: 'test@mail.ua',
        amount: sessionStorage.getItem('amount'),
        currency_code: '₴'
      }
    };
  },



  methods: {
    delay
  },


  async created() {

    let formData = this.$app.objectToFormData(this.model);
    formData.append('_method', 'POST');
    let action = this.$app.route('widget.campaigns.payment-intends.store', {
      campaign: this.id,
      paymentGateway: 1
    });

    await axios.post(action, formData).
    then(({ data }) => {
        this.redirect_url = data.redirect_url;
        this.token = data.token;
        return this.token;
    }).
    catch(({error})=> {
        //console.log(error);
    });

  const curToken = this.token;
  //this.isBusy = true;

  // set first interval for calling payments status. it need for putting the card data in the form
  const firstLaunch = 5000;

  setTimeout(function() { delay(1, curToken, ''); }, firstLaunch);
  
  var Options = {
  options: {
    methods: ['card'],
    methods_disabled: [],
    card_icons: [],
    active_tab: 'card',
    fields: false,
    title: 'Demo checkout',
    link: 'https://shop.com',
    locales: ["uk"],
    full_screen: false,
    button: true,
    email: true
  },
  params: {
    merchant_id: 1396424,
    required_rectoken: 'y',
    currency: 'UAH',
    amount: 500,
    order_desc: 'Demo order',
    lang:"uk"
  },
  messages: {
		
	}
}
var app = fondy("#checkout-container", Options)
  .$on("success", function(model) {
    console.log("success event handled");

    var order_status = model.attr("order.order_data.order_status");

    if (order_status == "approved") {
      //window.location.href = data.checkout.settings.success_url;     
      console.log(model);
      console.log("Order is approved. Do somethng on approve...");
    }
  })
  .$on("error", function(model) {
    console.log("error event handled");
    var response_code = model.attr("error.code");
    var response_description = model.attr("error.message");
    //fail = data.checkout.settings.fail_url;
    console.log(model);
    console.log(
        "Order is declined: " +
          response_code +
          ", description: " +
          response_description
      );
  });
  }
};
</script>

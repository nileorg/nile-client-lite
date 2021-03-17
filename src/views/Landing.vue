<template>
  <div class="home">
    <div
      class="section section--hero"
      id="home"
      :style="`background-image: url('${require('../assets/home_hero.jpg')}');`"
    >
      <div class="container">
        <div class="el-row">
          <div
            class="el-col el-col-24 el-col-xs-24 el-col-sm-12 el-col-md-12 el-col-lg-12"
          >
            <h1>Nile</h1>
            <p>
              Testi di prova, serviranno per spiegare cos'è Nile. Testi di
              prova, serviranno per spiegare cos'è Nile. Testi di prova,
              serviranno per spiegare cos'è Nile.
              Testi di prova, serviranno per spiegare cos'è Nile.
              Testi di prova, serviranno per spiegare cos'è Nile.
              Testi di prova, serviranno per spiegare cos'è Nile.
              Testi di prova, serviranno per spiegare cos'è Nile.
              Testi di prova, serviranno per spiegare cos'è Nile.
              Testi di prova, serviranno per spiegare cos'è Nile.
            </p>
          </div>
        </div>
      </div>
      <div class="earth-wrapper animation-target">
        <img alt="earth" src="../assets/earth.svg" class="earth rotating" />
      </div>
      <div class="hero-divider" style="width: 100vw">
        <img alt="divider" src="../assets/divider_grey.svg" class="divider" />
      </div>
    </div>
    <div class="section section__light" id="ecosystem">
      <div class="container">
        <div
          class="el-row is-justify-center el-row--flex"
          style="margin-bottom: 50px"
        >
          <div
            class="el-col el-col-24 el-col-sm-18 el-col-md-12 el-col-lg-12 center"
          >
            <h2>Ecosystem</h2>
            <p>
              Who needs to be empowered to let local economies flourish again?
              Its the people, the ones that want to sell something - called
              vendors, the ones that want to ship something - called delivery
              and the ones that want to buy something - called buyers. So to
              strengthen local economies we have three groups of people with
              different problems and requirements.
            </p>
          </div>
        </div>
        <div
          class="el-row mobile-align-center"
          style="margin-left: -30px; margin-right: -30px"
        >
          <div
            class="el-col el-col-24 el-col-sm-18 el-col-md-8 el-col-lg-8 el-col-lg-offset-4 center"
            style="padding-left: 30px; padding-right: 30px"
          >
            <div>
              <div class="card active">
                <img alt="Shop" :src="require('../assets/shop-circled.jpg')" />
                <h3>Shop</h3>
                <p>
                  Think of small businesses like bakeries, joineries and flower
                  shops selling products. Or think of hair studios, doctors
                  offices and repair shops selling services. We can even think
                  of usual people selling art, honey and services they do hobby
                  wise.
                </p>
              </div>
            </div>
          </div>
          <div
            class="el-col el-col-24 el-col-sm-18 el-col-md-8 el-col-lg-8 center"
            style="padding-left: 30px; padding-right: 30px"
          >
            <div class="card active">
              <img alt="Buyer" :src="require('../assets/buyer-circled.jpg')" />
              <h3>Buyer</h3>
              <p>
                More and more people get aware of the importance of local
                economies. Empowering people with a platform to have a great
                service quality but supporting local people instead of giant
                cooperations has the potential to transform the awareness into
                action.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="section section--use-case section__white section__border-top">
      <div class="container">
        <div
          class="el-row mobile-align-center flex-reverse-mobile"
          style="margin-left: -30px; margin-right: -30px; margin-bottom: 100px"
        >
          <div
            class="el-col el-col-24 el-col-xs-24 el-col-sm-16 el-col-md-12 el-col-lg-12"
            style="padding-left: 30px; padding-right: 30px"
          >
            <h2>Shop</h2>
            <p>
              There are many different businesses and people that are already
              selling products or services, but many of them does not have the
              capacities nor the money to conquer the web and there might also
              be even more people that have the potential but not yet the
              platform to do so.
            </p>
            <div>
              <div class="el-collapse">
                <div class="el-collapse-item">
                  <div class="el-collapse-item__header">
                    <i
                      class="el-collapse-item__header__arrow el-icon-arrow-right"
                    ></i>
                    <h4><span class="counter">1</span>Get started</h4>
                  </div>
                  <div
                    class="collapse-transition"
                    data-old-padding-top=""
                    data-old-padding-bottom=""
                    data-old-overflow="hidden"
                    style="overflow: hidden; display: block"
                  >
                    <div class="el-collapse-item__wrap">
                      <div class="el-collapse-item__content">
                        <div>
                          Initially a shop owner needs to create a digital twin
                          for the shop, so he defines his products blueprints
                          and the initial inventory. Later he decides how to get
                          paid from a list of existing payment system and how to
                          deliver his products.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="el-collapse-item">
                  <div class="el-collapse-item__header">
                    <i
                      class="el-collapse-item__header__arrow el-icon-arrow-right"
                    ></i>
                    <h4><span class="counter">2</span>Inventory Management</h4>
                  </div>
                  <div>
                    <div class="el-collapse-item__wrap">
                      <div class="el-collapse-item__content">
                        <div>
                          Everytime the shop owner gets new supplies or produces
                          new products he needs to update his inventory.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="el-collapse-item">
                  <div class="el-collapse-item__header">
                    <i
                      class="el-collapse-item__header__arrow el-icon-arrow-right"
                    ></i>
                    <h4>
                      <span class="counter">3</span>Boosted 🚀 order management
                    </h4>
                  </div>
                  <div>
                    <div class="el-collapse-item__wrap">
                      <div class="el-collapse-item__content">
                        <div>
                          Each time a buyer buys a product an order gets
                          created. The show owner can manage information about
                          the order and send various feedback to the buyer such
                          as timers (so the buyer know how long it will take to
                          receive the order) and the location of the product.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="el-collapse-item">
                  <div class="el-collapse-item__header">
                    <i
                      class="el-collapse-item__header__arrow el-icon-arrow-right"
                    ></i>
                    <h4><span class="counter">4</span>Cashier System</h4>
                  </div>
                  <div>
                    <div class="el-collapse-item__wrap">
                      <div class="el-collapse-item__content">
                        <div>
                          Most shop owners also have buyers on site. To keep the
                          inventory updated they simply can use the cashier
                          system.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="el-col el-col-24 el-col-sm-24 el-col-md-12 el-col-lg-12 flex-end just-center-mobile"
            style="padding-left: 30px; padding-right: 30px"
          >
            <img
              alt="Shop"
              :src="require('../assets/shop-circled.jpg')"
              class="react-reveal circle"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="section section--use-case section__white section__border-top">
      <div class="container">
        <div
          class="el-row mobile-align-center flex-reverse-mobile"
          style="margin-left: -30px; margin-right: -30px; margin-bottom: 100px"
        >
          <div
            class="el-col el-col-24 el-col-xs-24 el-col-sm-16 el-col-md-12 el-col-lg-12"
            style="padding-left: 30px; padding-right: 30px"
          >
            <h2>Buyer</h2>
            <p>
              There are many different businesses and people that are already
              selling products or services, but many of them does not have the
              capacities nor the money to conquer the web and there might also
              be even more people that have the potential but not yet the
              platform to do so.
            </p>
            <div>
              <div class="el-collapse">
                <div class="el-collapse-item">
                  <div class="el-collapse-item__header">
                    <i
                      class="el-collapse-item__header__arrow el-icon-arrow-right"
                    ></i>
                    <h4><span class="counter">1</span>Get started</h4>
                  </div>
                  <div
                    class="collapse-transition"
                    data-old-padding-top=""
                    data-old-padding-bottom=""
                    data-old-overflow="hidden"
                    style="overflow: hidden; display: block"
                  >
                    <div class="el-collapse-item__wrap">
                      <div class="el-collapse-item__content">
                        <div>
                          Initially a shop owner needs to create a digital twin
                          for the shop, so he defines his products blueprints
                          and the initial inventory. Later he decides how to get
                          paid from a list of existing payment system and how to
                          deliver his products.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="el-collapse-item">
                  <div class="el-collapse-item__header">
                    <i
                      class="el-collapse-item__header__arrow el-icon-arrow-right"
                    ></i>
                    <h4><span class="counter">2</span>Inventory Management</h4>
                  </div>
                  <div>
                    <div class="el-collapse-item__wrap">
                      <div class="el-collapse-item__content">
                        <div>
                          Everytime the shop owner gets new supplies or produces
                          new products he needs to update his inventory.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="el-collapse-item">
                  <div class="el-collapse-item__header">
                    <i
                      class="el-collapse-item__header__arrow el-icon-arrow-right"
                    ></i>
                    <h4>
                      <span class="counter">3</span>Boosted 🚀 order management
                    </h4>
                  </div>
                  <div>
                    <div class="el-collapse-item__wrap">
                      <div class="el-collapse-item__content">
                        <div>
                          Each time a buyer buys a product an order gets
                          created. The show owner can manage information about
                          the order and send various feedback to the buyer such
                          as timers (so the buyer know how long it will take to
                          receive the order) and the location of the product.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="el-collapse-item">
                  <div class="el-collapse-item__header">
                    <i
                      class="el-collapse-item__header__arrow el-icon-arrow-right"
                    ></i>
                    <h4><span class="counter">4</span>Cashier System</h4>
                  </div>
                  <div>
                    <div class="el-collapse-item__wrap">
                      <div class="el-collapse-item__content">
                        <div>
                          Most shop owners also have buyers on site. To keep the
                          inventory updated they simply can use the cashier
                          system.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            class="el-col el-col-24 el-col-sm-24 el-col-md-12 el-col-lg-12 flex-end just-center-mobile"
            style="padding-left: 30px; padding-right: 30px"
          >
            <img
              alt="Buyer"
              :src="require('../assets/buyer-circled.jpg')"
              class="react-reveal circle"
            />
          </div>
        </div>
      </div>
    </div>
    <div class="section section__light section__border-top" id="mission">
      <div class="container">
        <div
          class="el-row is-justify-center el-row--flex"
          style="margin-bottom: 50px"
        >
          <div
            class="el-col el-col-24 el-col-sm-18 el-col-md-12 el-col-lg-12 center"
          >
            <h2
              class="react-reveal"
              style="
                animation-fill-mode: both;
                animation-duration: 1000ms;
                animation-delay: 0ms;
                animation-iteration-count: 1;
                opacity: 1;
                animation-name: react-reveal-784081678661340-2;
              "
            >
              Mission
            </h2>
            <p
              class="react-reveal"
              style="
                animation-fill-mode: both;
                animation-duration: 1000ms;
                animation-delay: 0ms;
                animation-iteration-count: 1;
                opacity: 1;
                animation-name: react-reveal-784081678661340-2;
              "
            >
              Nile’s mission is to provide local economies with tools to compete
              with global giants. Today, global monopolies are putting local
              economies at risk, by offering better and faster services. People
              are buying almost everything from some global giants instead of
              supporting local markets. We deeply believe that this can and has
              to be changed by ourselves, the usual people. It is time for Nile
              and those who share our mission to design a better way of commerce
              for a better tomorrow. We invite everybody out there that shares
              our mission and believes to stand up for an open and free set of
              tools to promote local economies.
            </p>
          </div>
        </div>
        <div
          class="el-row mobile-align-center"
          style="margin-left: -30px; margin-right: -30px"
        >
          <div
            class="el-col el-col-24 el-col-sm-18 el-col-md-8 el-col-lg-8 center"
            style="padding-left: 30px; padding-right: 30px"
          >
            <div
              class="react-reveal"
              style="
                animation-fill-mode: both;
                backface-visibility: visible;
                animation-duration: 1000ms;
                animation-delay: 0ms;
                animation-iteration-count: 1;
                opacity: 1;
                animation-name: react-reveal-784081678661340-3;
              "
            >
              <div class="card active">
                <img alt="Privacy" :src="require('../assets/privacy.svg')" />
                <h3>Privacy</h3>
                <p>
                  Data protection and user privacy is a huge topic today. The
                  public information is published on decentralized storage and
                  all users private data is just saved on the user’s devices. A
                  buyer shares the required information only with the people
                  involved in the order.
                </p>
              </div>
            </div>
          </div>
          <div
            class="el-col el-col-24 el-col-sm-18 el-col-md-8 el-col-lg-8 center"
            style="padding-left: 30px; padding-right: 30px"
          >
            <div
              class="react-reveal"
              style="
                animation-fill-mode: both;
                backface-visibility: visible;
                animation-duration: 1000ms;
                animation-delay: 0ms;
                animation-iteration-count: 1;
                opacity: 1;
                animation-name: react-reveal-784081678661340-3;
              "
            >
              <div class="card active">
                <img
                  alt="100% Free - Forever!"
                  :src="require('../assets/feeless.svg')"
                />
                <h3>Commission Free - Forever!</h3>
                <p>
                  Nile does not have fees at any level - it is 100%
                  commission-free. Nile will always be free. There won’t be any
                  extra pay features nor a pro version. The complete code is
                  open source and free to use.
                </p>
              </div>
            </div>
          </div>
          <div
            class="el-col el-col-24 el-col-sm-18 el-col-md-8 el-col-lg-8 center"
            style="padding-left: 30px; padding-right: 30px"
          >
            <div
              class="react-reveal"
              style="
                animation-fill-mode: both;
                backface-visibility: visible;
                animation-duration: 1000ms;
                animation-delay: 0ms;
                animation-iteration-count: 1;
                opacity: 1;
                animation-name: react-reveal-784081678661340-3;
              "
            >
              <div class="card active">
                <img
                  alt="Permissionless"
                  :src="require('../assets/permissionless.svg')"
                />
                <h3>Permissionless</h3>
                <p>
                  Everyone can join the system without any registration hurdles.
                  Even when you are signed in you can interact anonymously with
                  other people in your ecosystem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <footer>
      <span
        >Created with<img alt="heart" :src="require('../assets/heart.svg')" />by
        Nile</span
      ><a href="/imprint">Privacy Policy</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Landing',
  data() {
    return {};
  },
};
</script>

<style scoped>
.card img {
  height: 180px;
  border-radius: 100%;
}
.card {
  padding: 30px;
  background-color: var(--white);
  border: var(--border-lg);
  border-radius: 10px;
  color: var(--dark);
  text-decoration: none;
  text-align: center;
}
.center {
  text-align: center;
}
.el-collapse {
  margin-left: 40px;
  border: none;
}
.el-collapse .el-collapse-item__wrap {
  background-color: transparent;
  border-bottom: none;
}
.el-collapse .el-collapse-item {
  margin-bottom: 30px;
}
.el-collapse .el-collapse-item__header {
  position: relative;
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  font-size: 24px;
  font-weight: 700;
}
.el-collapse .el-collapse-item__header h4 {
  color: var(--dark);
  margin-bottom: 0;
}
.el-collapse .el-collapse-item__header i {
  display: none;
}
.el-collapse .el-collapse-item__content {
  font-size: 16px;
  line-height: 1.5;
}
.el-collapse .el-collapse-item .counter {
  position: absolute;
  left: -40px;
  height: 40px;
  width: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--black_5);
  border-radius: 100%;
  color: var(--dark);
  transition: var(--transition-200);
}
.el-collapse .el-collapse-item.is-active .counter {
  background-color: var(--primary);
  color: var(--white);
}
.section--use-case .circle {
  border-radius: 100%;
  width: 500px;
}
footer {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  box-sizing: border-box;
  background-color: var(--dark);
  color: var(--white);
}
footer a {
  display: flex;
  align-items: center;
  color: var(--white_50);
  text-decoration: none;
  transition: var(--transition-200);
}
footer a:hover {
  color: var(--white);
}
footer img {
  height: 16px;
  margin: 0 5px;
}
</style>

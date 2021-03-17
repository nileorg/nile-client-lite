<template>
  <!-- eslint-disable max-len -->
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
              Viviamo in una società in cui le grandi aziende hanno il potere di
              influenzare le economie e le tendenze. Oggi le grandi aziende che
              possiedono il mercato online non pagano le tasse, non pagano le
              imposte, non pagano i loro dipendenti e stanno perturbando le
              economie locali. Pensiamo che il mondo meriti un'alternativa
              migliore, così decidiamo di fondare Nile
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
            <h2>Ecosistema</h2>
            <p>
              Nile è una piattaforma costruita per rinnovare le economie locali
              dando a negozi e utenti uno strumento che li metta in contatto
              privatamente e senza alcuna commissione.
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
                <h3>Negozio</h3>
                <p>
                  Pubblicare il tuo negozio su Nile è semplice, basta inviarci
                  il tuo menù.<br />
                  Un solo costo iniziale di 349€.
                  <br /><br />
                  <strong>Ogni modifica al menù, ogni ordine: gratuito.</strong>
                  <br /><br />
                  <a
                    class="el-button el-button-sm el-button--primary"
                    href="mailto:hello@nile.shopping?subject=Richesta%20iscrizione&body=Includere%20nella%20email%3A%20Nome%2C%20Descrizione%2C%20Immagine%20di%20copertina%2C%20Logo%2C%20Contatto%20telefonico%2C%20Account%20Satispay"
                  >
                    Unisciti a Nile
                  </a>
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
              <h3>Utente</h3>
              <p>
                Se hai già fatto acquisti online sarai a tuo agio con la
                piattaforma. Puoi pagare in cash o comodamente online.
                <br /><br />
                <strong>Comunicazione privata e zero commissioni</strong>
                <br /><br />
                <a
                  class="el-button el-button-sm el-button--primary"
                  href="https://app.nile.shopping"
                >
                  Entra in Nile
                </a>
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
            <h2>Negozio</h2>
            <p>In tre step saprai usare Nile.</p>
            <div>
              <div class="el-collapse">
                <div class="el-collapse-item">
                  <div class="el-collapse-item__header">
                    <i
                      class="el-collapse-item__header__arrow el-icon-arrow-right"
                    ></i>
                    <h4><span class="counter">1</span>Iniziamo</h4>
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
                          Per prima cosa, invia il tuo menù a
                          <strong>hello@nile.shopping</strong><br />
                          Nella email includi le seguenti informazioni del tuo
                          negozio:
                          <ul>
                            <li>Nome</li>
                            <li>Descrizione</li>
                            <li>Immagine di copertina</li>
                            <li>Logo</li>
                            <li>Contatto telefonico</li>
                            <li>Account Satispay</li>
                          </ul>
                          Infine aspetta la nostra risposta, nel giro di poche
                          ore puoi già essere online
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
                    <h4><span class="counter">2</span>Ricevi gli ordini</h4>
                  </div>
                  <div>
                    <div class="el-collapse-item__wrap">
                      <div class="el-collapse-item__content">
                        <div>
                          Ricevi gli ordini sui tuoi metodi di contatto
                          preferiti: whatsapp, telegram, email, sms.
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
                    <h4><span class="counter">3</span>Consegna la merce</h4>
                  </div>
                  <div>
                    <div class="el-collapse-item__wrap">
                      <div class="el-collapse-item__content">
                        <div>Nile non include un servizio di consegna.</div>
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
              class="circle"
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
            <h2>Utente</h2>
            <p>Come usare Nile? Niente di più semplice</p>
            <div>
              <div class="el-collapse">
                <div class="el-collapse-item">
                  <div class="el-collapse-item__header">
                    <i
                      class="el-collapse-item__header__arrow el-icon-arrow-right"
                    ></i>
                    <h4><span class="counter">1</span>Inserisci i tuoi dati</h4>
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
                          Nile non richiede una login, non raccogliamo alcun
                          dato su di te. La prima volta che entri in piattaforma
                          inserisci i tuoi dati. Rimarrano sul tuo
                          dispositivo.<br />
                          Puoi modificare i tuoi dati premendo l'icona
                          dell'utente in alto a destra in qualsiasi momento.
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
                    <h4><span class="counter">2</span>Seleziona la città</h4>
                  </div>
                  <div>
                    <div class="el-collapse-item__wrap">
                      <div class="el-collapse-item__content">
                        <div>
                          Entra nella città ed esplora i negozi. Puoi usare i
                          comodi filtri in alto per cercare specifiche categorie
                          di prodotti.
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
                    <h4><span class="counter">3</span>Acquista</h4>
                  </div>
                  <div>
                    <div class="el-collapse-item__wrap">
                      <div class="el-collapse-item__content">
                        <div>
                          Seleziona il negozio e aggiungi i prodotti al
                          carrello. Quando sei pronto premi sull'icona del
                          carrello in basso a destra e concludi il tuo ordine.
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
              class="circle"
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
            <h2>Mission</h2>
            <p>
              La missione di Nile è di fornire alle economie locali gli
              strumenti per competere con i giganti globali. Oggi, i monopoli
              globali stanno mettendo a rischio le economie locali, offrendo
              servizi migliori e più veloci. Crediamo profondamente che questo
              possa e debba essere cambiato da noi, nel nostro piccolo. È tempo
              per Nile e per coloro che condividono la nostra missione di
              progettare un modo migliore di acquistare per un domani migliore.
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
            <div>
              <div class="card active">
                <img alt="Privacy" :src="require('../assets/privacy.svg')" />
                <h3>Privacy</h3>
                <p>
                  La protezione dei dati e la privacy degli utenti è un
                  argomento enorme oggi. Le informazioni pubbliche sono
                  pubblicate su uno storage decentralizzato e tutti i dati
                  privati dell'utente sono solo salvati solo sul suo
                  dispositivo. Un acquirente condivide le informazioni richieste
                  solo con il venditore coinvolto nell'ordine.
                </p>
              </div>
            </div>
          </div>
          <div
            class="el-col el-col-24 el-col-sm-18 el-col-md-8 el-col-lg-8 center"
            style="padding-left: 30px; padding-right: 30px"
          >
            <div>
              <div class="card active">
                <img
                  alt="100% Free - Forever!"
                  :src="require('../assets/feeless.svg')"
                />
                <h3>Zero commissioni - per sempre.</h3>
                <p>
                  Il codice di Nile è open source, la comunicazione
                  utente-venditore è privata, l'acquisto è senza commissioni*
                  <br /><br />
                  <small
                    >* Le commissioni del metodo di pagamento utilizzato non
                    dipendono da Nile.</small
                  >
                </p>
              </div>
            </div>
          </div>
          <div
            class="el-col el-col-24 el-col-sm-18 el-col-md-8 el-col-lg-8 center"
            style="padding-left: 30px; padding-right: 30px"
          >
            <div>
              <div class="card active">
                <img
                  style="opacity: 0"
                  alt="Semplice"
                  :src="require('../assets/permissionless.svg')"
                />
                <h3>Semplice</h3>
                <p>
                  Nile è pensato per tutti.<br />Il venditore non deve imparare
                  nessun nuovo strumento, l'utente si orienta da solo nella
                  piattaforma. <br /><br />
                  La tecnologia di Nile si basa sulle solide tecnologie web e
                  IPFS.
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
@media only screen and (max-width: 520px) {
  .card {
    margin-bottom: 20px;
  }
  .el-col > .circle {
    display: none;
  }
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

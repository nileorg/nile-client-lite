<template>
  <div id="app">
    <img
      @click="() => {$modal.hide('account'); $modal.show('account')}"
      class="account"
      src="@/assets/user.svg"
    />
    <img
      @click="() => {$modal.hide('language-selector'); $modal.show('language-selector')}"
      class="language-selector"
      src="@/assets/flag.svg"
    />
    <modal
      :styles="'border-radius: 10px; border: var(--border-lg); padding: 20px; text-align: center;'"
      height="auto"
      width="320"
      name="account"
    >
      <div>
        <h4>{{$t('accountTitle')}}</h4>
        <input
          type="text"
          @change="() => $store.commit('saveAccount')"
          class="el-input account-input"
          :placeholder="$t('accountFirstname')"
          v-model="$store.state.account.firstname"
        />
        <input
          type="text"
          @change="() => $store.commit('saveAccount')"
          class="el-input account-input"
          :placeholder="$t('accountLastname')"
          v-model="$store.state.account.lastname"
        />
        <input
          type="text"
          @change="() => $store.commit('saveAccount')"
          class="el-input account-input"
          :placeholder="$t('accountAddress')"
          v-model="$store.state.account.address"
        />
        <input
          type="text"
          @change="() => $store.commit('saveAccount')"
          class="el-input account-input"
          :placeholder="$t('accountRingbell')"
          v-model="$store.state.account.doorbell"
        />
        <input
          type="text"
          @change="() => $store.commit('saveAccount')"
          class="el-input account-input"
          :placeholder="$t('accountPhone')"
          v-model="$store.state.account.phone"
        />
        <input
          type="text"
          @change="() => $store.commit('saveAccount')"
          class="el-input account-input"
          :placeholder="$t('accountNotes')"
          v-model="$store.state.account.notes"
        />
        <p>
          <small style="color: rgb(134 133 133); font-weight: bold;">{{$t('accountFooter')}}</small>
        </p>
        <button
          class="el-button el-button-sm el-button--primary card-button account-input"
          @click="() => {$modal.hide('account')}"
        >{{$t('accountClose')}}</button>
      </div>
    </modal>
    <modal
      :styles="'border-radius: 10px; border: var(--border-lg); padding: 20px; text-align: center;'"
      height="auto"
      width="320"
      name="language-selector"
    >
      <h4>{{$t('languageTitle')}}</h4>
      <button
        class="el-button el-button-sm el-button--primary card-button account-input"
        @click="() => {$modal.hide('language-selector'); $store.commit('setLang', 'en'); $root.$i18n.locale = 'en'}"
      >English</button>
      <button
        class="el-button el-button-sm el-button--primary card-button account-input"
        @click="() => {$modal.hide('language-selector'); $store.commit('setLang', 'it'); $root.$i18n.locale = 'it'}"
      >Italiano</button>
    </modal>
    <router-view />
  </div>
</template>

<script>
export default {
  mounted() {
    if (this.$store.state.lang) {
      this.$root.$i18n.locale = this.$store.state.lang;
    }
  },
};
</script>

<style>
@import url("./assets/styles/theme.css");
@import url("./assets/styles/variables.css");
@import url("./assets/styles/general.css");
@import url("./assets/styles/animation.css");
@import url("./assets/styles/layout.css");
@import url("./assets/styles/section.css");
@import url("./assets/styles/buttons.css");
@import url("./assets/styles/inputs.css");
@import url("./assets/styles/hero.css");

.account {
  position: absolute;
  z-index: 2;
  right: 30px;
  top: 30px;
  height: 30px;
  width: 30px;
  cursor: pointer;
}

.language-selector {
  position: absolute;
  z-index: 2;
  right: 30px;
  top: 80px;
  height: 30px;
  width: 30px;
  cursor: pointer;
}

.account-input {
  position: relative;
  margin-top: 15px;
  width: 100%;
  margin-left: auto !important;
  margin-right: auto;
  display: block;
}
</style>

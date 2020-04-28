<template>
  <div id="app">
    <img @click="() => $modal.show('account')" class="account" src="@/assets/user.svg" />
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
          v-model="$store.state.account.ringbell"
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
        <button
          class="el-button el-button-sm el-button--primary card-button account-input"
          @click="() => {$modal.hide('account')}"
        >{{$t('accountClose')}}</button>
      </div>
    </modal>
    <router-view />
  </div>
</template>

<script>
export default {};
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
  position: fixed;
  z-index: 2;
  right: 30px;
  top: 30px;
  height: 30px;
  width: 30px;
  cursor: pointer;
}

.account-input {
  margin-top: 15px;
}
</style>

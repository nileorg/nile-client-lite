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
        <h4>ACCOUNT</h4>
        <input
          type="text"
          class="el-input account-input"
          placeholder="Nome"
          v-model="$store.state.account.firstname"
        />
        <input
          type="text"
          class="el-input account-input"
          placeholder="Cognome"
          v-model="$store.state.account.lastname"
        />
        <input
          type="text"
          class="el-input account-input"
          placeholder="Indirizzo"
          v-model="$store.state.account.address"
        />
        <input
          type="text"
          class="el-input account-input"
          placeholder="Campanello"
          v-model="$store.state.account.ringbell"
        />
        <input
          type="text"
          class="el-input account-input"
          placeholder="Note"
          v-model="$store.state.account.notes"
        />
        <button
          class="el-button el-button-sm el-button--primary card-button account-input"
          @click="() => {$store.commit('saveAccount'); $modal.hide('account')}"
        >SALVA</button>
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

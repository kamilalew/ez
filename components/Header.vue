<template>
  <div class="header">
    <div class="header__left">
      <img class="header__logo__world" src="../assets/images/world.svg"/>
      <div class="header__title">Natural History Museum</div>
    </div>
    <div class="header__right">      
      <img class="header__logo__menu" src="../assets/images/menu.svg"/></div>
  </div>
</template>


<script>
export default {
}
</script>


<style lang="scss">
.header {
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: rgb(236, 236, 236);
   
   &__left {
    display: flex;
    align-items: center;
   }

   &__title {
    font-size: 3em;
   }

   &__logo__world, &__logo__menu{
    height: auto; 
    width: auto; 
    max-width: 3em; 
    max-height: 3em;
    margin: 3em;
   }
}
</style>

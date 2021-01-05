<template>
  <div class="nav">
    <ul>
      <li>
        <nuxt-link exact to="/">
        <div class="logo">

          <app-icon></app-icon>
         <span>
           
           readST
           </span> 
        </div>
        </nuxt-link>
      </li>
      <li>
        <nuxt-link to="/about">About</nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
import AppIcon from "@/components/AppIcon.vue";

export default {
  components: {
    AppIcon
  }
};
</script>

<style lang="scss" scoped>
.nav {
  background: #000;
  color: #fff;
  padding: 1em 100px;

  a {
    color: #fff;
    opacity: 0.8;
    &:hover {
      opacity: 1;
    }
  }
}

div {
  align-items: center;
  display: flex;
  height: 100%;
  width: 100%;
}

ul {
  padding-left: 0;

  li {
    display: inline-block;
    margin-right: 30px;
  }
}

@media screen and (max-width: 600px) {
  ul {
    min-width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    
  }
  
  .logo {
    display: inline-flex;
    
    span {
      padding-left: 10px;
    }
  }
}
</style>

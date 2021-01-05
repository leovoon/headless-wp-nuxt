<template>
  <div class="about">
    <h1>About</h1>
    <p>How this website works?</p>
    <p>I have go through the following steps:
      <ul>
        <li>

1. Setup Vue.js (Nuxt) frontend which can display single posts.
        </li>
        <li>

2. Setup a WordPress API that serves post data over a restful endpoint (through /wp/v2).
        </li>
      </ul>
    

    <p>What is a JAMstack?</p>
    <p>It is a front-end architecture to the JAMstack to benefit from better security, performance, and reliability. </p>
</div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.about {
  margin: 30px auto 50px;
  max-width: 800px;
  padding: 50px 50px 70px;
  background: white;
}

p {
  margin: 15px 0 20px;
}
</style>
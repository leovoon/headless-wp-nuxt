<template>
  <div>
    <app-masthead></app-masthead>
    <div class="posts">
      
      <main>
        <p  v-if="!selectedCategory">Showing all posts</p>
        <div class="post" v-for="post in sortedPosts" :key="post.id">
          <h3>
            <a :href="`blog/${post.slug}`">
              <span v-html="post.title.rendered"></span>
            </a>
          </h3>
          <small>{{ post.date | dateformat }}</small>

         
         
          <div v-html="post.excerpt.rendered"></div>
          <a :href="`blog/${post.slug}`" class="readmore slide">Read more ⟶</a>
        </div>
    <a href="https://suburtiasa.com/">Read more from Subur Tiasa</a>

      </main>
      <aside id="navbar">
        <h2 class="tags-title">Filter by Categories</h2>
        <div class="tags-list">
          <ul>
            <li
              @click="updateCategories(category)"
              v-for="category in categories"
              :key="category.id"
              :class="[category.id === selectedCategory ? activeClass : '']"
            >
              <a>{{ category.name }}</a>
              <span v-if="category.id === selectedCategory">✕</span>
            </li>
          </ul>
        </div>
      </aside>
    </div>
  </div>
</template>

<script>
import AppMasthead from "@/components/AppMasthead.vue";



export default {
  components: {
    AppMasthead,
  },
  data() {
    return {
      selectedCategory: null,
      activeClass: "active",
      routeName: { type: String, default: "" },
    };
  },
  computed: {
    posts() {
      return this.$store.state.posts;
    },
    categories() {
      return this.$store.state.categories;
    },
    sortedPosts() {
      if (!this.selectedCategory) return this.posts;
      return this.posts.filter((el) =>
        el.categories.includes(this.selectedCategory)
      );
    },
  

    getRouteName() {
      return this.$route.name;
    },
  },
  beforeMount() {
    
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.bottom = "0";
  } else {
    document.getElementById("navbar").style.bottom = "-800px";
  }
  prevScrollpos = currentScrollPos;
}
  },
  created() {
    this.$store.dispatch("getPosts");
  },
  methods: {
    updateCategories(category) {
      if (!this.selectedCategory) {
        this.selectedCategory = category.id;
      } else {
        this.selectedCategory = null;
      }
    },
  },
};
</script>

<style lang="scss">
.posts {
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-template-rows: 1fr;
  grid-column-gap: 6vw;
  margin: 5em auto;
  max-width: 80vw;
}

main {
  grid-area: 1 / 1 / 2 / 2;
}

aside {
  grid-area: 1 / 2 / 2 / 3;
}

h2 {
  margin-bottom: 2em;
}

a,
a:active,
a:visited {
  text-decoration: none;
  color: black;
}

a.readmore {
  display: inline-block;
  font-size: 11px;
  text-transform: uppercase;
  padding: 5px 15px;
  letter-spacing: 2px;
  position: relative;
  color: #000;
  font-weight: 700;
  font-family: "Open Sans", serif;
  border: 1px solid #ccc;
  background: #fff;
}

.tags-title {
  background-color: #000;
  color: #fff;
  border: none;
  text-transform: capitalize;
  letter-spacing: 0;
  font-size: 1.2rem;
  padding: 15px;
  margin: 0 35px;
  position: relative;
  top: -25px;
}

.tags-list {
  background: #f5f5f5;
  padding: 70px 25px 25px;
  margin-top: -65px;
}

.post {
  border-bottom: 1px solid rgb(223, 222, 222);
  margin-bottom: 2em;
  padding-bottom: 2em;
  color: #444;

  h3 {
    margin-bottom: 0.5em;
    font-size: 26px;
  }
}

.tags-list ul {
  padding-left: 0;
}

.tags-list li {
  font-family: "Open Sans", serif;
  letter-spacing: 1px;
  text-transform: uppercase;
  padding: 6px 15px;
  margin: 0 0 10px 10px;
  display: inline-block;
  font-size: 0.7rem !important;
  border: 1px solid #000;
  transition: all 0.3s;
  outline: none;
  font-weight: normal;
  cursor: pointer;
  background: #fff;
  a {
    color: #000;
  }
}

.active {
  border: 1px solid #d44119;
  background-color: #fae091 !important;
}

.slide {
  position: relative;
  background: transparent;
  -webkit-transition: 0.3s ease;
  transition: 0.3s ease;
  z-index: 1;
  backface-visibility: hidden;
  perspective: 1000px;
  transform: translateZ(0);
  cursor: pointer;

  &:hover {
    color: #fff;
  }

  &:hover:before {
    right: -1px;
  }
}

.slide::before {
  content: "";
  display: block;
  position: absolute;
  background: #000;
  transition: right 0.3s ease;
  z-index: -1;
  top: -2px;
  bottom: -2px;
  left: -2px;
  right: 108%;
  backface-visibility: hidden;
}

@media (max-width: 640px)  { 
  .posts {
    grid-template-columns: 1fr;
    }


  aside {
    position: fixed;
    bottom: 0;
    right: 0;
    z-index: 10;
    transition: all 0.5s ease-in-out;
  }
}
</style>

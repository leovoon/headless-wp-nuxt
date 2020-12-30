const siteUrl = 'https://suburtiasa.com'

export const state = () => ({
  posts: [],
  categories: []
})

export const mutations = {
  updatePosts: (state, posts) => {
    state.posts = posts
  },
  updateCategories: (state, categories) => {
    state.categories = categories
  }
}

export const actions = {
  async getPosts({ state, commit, dispatch   }) {
    if (state.posts.length) return

    try {
      let posts = await fetch(
        ` ${siteUrl}/wp-json/wp/v2/posts?page=1&per_page=20&_embed=1`
      ).then(res => res.json())

      posts = posts
        .filter(el => el.status === "publish")
        .map(({ id, slug, title, excerpt, date, categories, content }) => ({
          id,
          slug,
          title,
          excerpt,
          date,
          categories,
          content
        }))

      commit("updatePosts", posts)
    } catch (err) {
      console.log(err)
    }
  },
  async getCategory({ state, commit }) {
    if (state.categories.length) return

    let allCategories = state.posts.reduce((acc, item) => {
      return acc.concat(item.categories)
    }, [])
    allCategories = allCategories.join()

    try {
      let categories = await fetch(
        ` ${siteUrl}/wp-json/wp/v2/categories?page=1&per_page=40&include=${allCategories}`
      ).then(res => res.json())

      categories = categories.map(({ id, name }) => ({
        id,
        name
      }))

      commit("updateCategories", categories)
    } catch (err) {
      console.log(err)
    }
  }
}

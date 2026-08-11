import { defineClientConfig } from 'vuepress/client'
import LeoPortfolio from './components/LeoPortfolio.vue'

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component('LeoPortfolio', LeoPortfolio)
  }
})

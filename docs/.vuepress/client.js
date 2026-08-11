import { defineClientConfig } from 'vuepress/client'
import LeoPortfolio from './components/LeoPortfolio.vue'
import LeoCoffee from './components/LeoCoffee.vue'

export default defineClientConfig({
  enhance: ({ app }) => {
    app.component('LeoPortfolio', LeoPortfolio)
    app.component('LeoCoffee', LeoCoffee)
  }
})

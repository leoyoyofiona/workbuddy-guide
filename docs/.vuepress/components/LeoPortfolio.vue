<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isOpen = ref(false)
const portfolioRoot = ref(null)

const projects = [
  {
    title: 'WorkBuddy Guide',
    type: 'AI 学习站',
    description: '面向中文初学者的 WorkBuddy 图文与视频跟练指南。',
    github: 'https://github.com/leoyoyofiona/workbuddy-guide',
    live: 'https://workbuddy-guide.onrender.com/',
    accent: '#4f8cff',
    glow: 'rgba(79, 140, 255, .46)'
  },
  {
    title: '周星驰先生作品欣赏',
    type: '影迷数字档案',
    description: '作品时间线、人物关系与大陆友好观看入口。',
    github: 'https://github.com/leoyoyofiona/stephen-chow-works-mainland',
    live: 'https://stephen-chow-works-mainland.onrender.com/',
    accent: '#ff8a4c',
    glow: 'rgba(255, 138, 76, .42)'
  },
  {
    title: 'LEO 语文流觞自学',
    type: '学习应用',
    description: '把语文学习路径做成可跟随、可练习的在线体验。',
    github: 'https://github.com/leoyoyofiona/LEO-yuwen-liushang-zixue',
    live: 'https://leo-yuwen-liushang-zixue.onrender.com/',
    accent: '#a77cff',
    glow: 'rgba(167, 124, 255, .42)'
  },
  {
    title: 'OpenSRS',
    type: '研究工具',
    description: '开源研究服务项目，包含前后端部署配置。',
    github: 'https://github.com/leoyoyofiona/opensrs',
    accent: '#2fc9a0',
    glow: 'rgba(47, 201, 160, .40)'
  },
  {
    title: '2026 世界杯预测',
    type: '数据可视化',
    description: '赛程、概率与模型结果整合成可交互的预测站。',
    github: 'https://github.com/leoyoyofiona/worldcup-prediction',
    live: 'https://worldcup-prediction-peur.onrender.com/',
    accent: '#50c5ff',
    glow: 'rgba(80, 197, 255, .42)'
  },
  {
    title: '超级大乐透趋势模型',
    type: '数据仪表盘',
    description: '号码趋势、统计回顾与预测展示的中文可视化站。',
    github: 'https://github.com/leoyoyofiona/super-lotto-trend-model',
    accent: '#ffbd4a',
    glow: 'rgba(255, 189, 74, .40)'
  },
  {
    title: 'Painpoint Dashboard',
    type: '洞察看板',
    description: '把用户痛点与行动线索整理成可阅读的决策界面。',
    github: 'https://github.com/leoyoyofiona/painpoint-dashboard',
    accent: '#ff6680',
    glow: 'rgba(255, 102, 128, .38)'
  },
  {
    title: 'Fit Home',
    type: '居家健身',
    description: '真人教学视频、中文口令与节奏训练的健身应用。',
    github: 'https://github.com/leoyoyofiona/fit-home',
    live: 'https://fit-home.onrender.com/',
    accent: '#63dc87',
    glow: 'rgba(99, 220, 135, .38)'
  },
  {
    title: 'Thesis Assistant',
    type: '论文助手',
    description: '把论文写作中的材料、思路和任务集中到一个工作台。',
    github: 'https://github.com/leoyoyofiona/thesis-assistant',
    accent: '#42a9ff',
    glow: 'rgba(66, 169, 255, .38)'
  },
  {
    title: '浙师大教职工足球',
    type: '校园运动',
    description: '面向教职工足球活动的赛程、战况与团队展示。',
    github: 'https://github.com/leoyoyofiona/zjnu-staff-football',
    accent: '#78a7ff',
    glow: 'rgba(120, 167, 255, .38)'
  }
]

const close = () => {
  isOpen.value = false
}

const onFocusOut = (event) => {
  if (!event.currentTarget.contains(event.relatedTarget)) close()
}

const onDocumentPointerDown = (event) => {
  if (!portfolioRoot.value?.contains(event.target)) close()
}

onMounted(() => document.addEventListener('pointerdown', onDocumentPointerDown))
onBeforeUnmount(() => document.removeEventListener('pointerdown', onDocumentPointerDown))
</script>

<template>
  <div ref="portfolioRoot" class="leo-portfolio" @mouseenter="isOpen = true" @mouseleave="close" @focusout="onFocusOut" @keydown.esc="close">
    <button class="leo-portfolio-trigger" type="button" :aria-expanded="isOpen" aria-controls="leo-portfolio-panel" @click="isOpen = true">
      <span class="leo-mark" aria-hidden="true">LEO</span>
      <span class="leo-trigger-label">LEO 作品</span>
      <svg class="leo-chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4" /></svg>
    </button>

    <Transition name="leo-reveal">
      <section v-if="isOpen" id="leo-portfolio-panel" class="leo-showcase" aria-label="LEO 的开源作品" @keydown.esc="close">
        <header class="leo-showcase-header">
          <div>
            <strong>LEO 的开源作品</strong>
            <p>从研究、教育到数据可视化，点一张卡片走进一个完整产品。</p>
          </div>
          <span class="leo-showcase-count">10 个开源项目</span>
        </header>

        <div class="leo-project-grid">
          <article v-for="(project, index) in projects" :key="project.title" class="leo-project-card" :style="{ '--leo-accent': project.accent, '--leo-glow': project.glow }">
            <div class="leo-card-orbit" aria-hidden="true"></div>
            <div class="leo-card-topline">
              <span>0{{ index + 1 }}</span>
              <span>{{ project.type }}</span>
            </div>
            <h3>{{ project.title }}</h3>
            <p>{{ project.description }}</p>
            <footer>
              <a :href="project.github" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <a v-if="project.live" class="leo-live-link" :href="project.live" target="_blank" rel="noopener noreferrer">在线体验 <span aria-hidden="true">↗</span></a>
              <span v-else class="leo-render-note">Render 已配置</span>
            </footer>
          </article>
        </div>

        <footer class="leo-showcase-footer">
          <span>所有项目均开源于 GitHub；在线链接仅展示已核验的公开 Render 地址。</span>
          <a href="https://github.com/leoyoyofiona?tab=repositories" target="_blank" rel="noopener noreferrer">查看全部仓库 <span aria-hidden="true">↗</span></a>
        </footer>
      </section>
    </Transition>
  </div>
</template>

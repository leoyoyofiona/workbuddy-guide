<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isOpen = ref(false)
const portfolioRoot = ref(null)
const lastPointerType = ref('')

const projects = [
  {
    title: '世界杯',
    type: '数据可视化',
    description: '赛程、概率与模型结果整合成可交互的预测站。',
    github: 'https://github.com/leoyoyofiona/worldcup-prediction',
    live: 'https://worldcup-prediction-peur.onrender.com/',
    accent: '#50c5ff',
    glow: 'rgba(80, 197, 255, .42)'
  },
  {
    title: '足彩',
    type: '赛事预测',
    description: '把赛程、赔率和选号思路汇到一个足球彩票工作台。',
    github: 'https://github.com/leoyoyofiona/leo-football-lottery',
    live: 'https://leo-football-lottery.onrender.com/',
    accent: '#61c8ff',
    glow: 'rgba(97, 200, 255, .40)'
  },
  {
    title: '大乐透',
    type: '数据仪表盘',
    description: '号码趋势、统计回顾与预测展示的中文可视化站。',
    github: 'https://github.com/leoyoyofiona/super-lotto-trend-model',
    live: 'https://super-lotto-trend-model.onrender.com/',
    accent: '#ffbd4a',
    glow: 'rgba(255, 189, 74, .40)'
  },
  {
    title: '福彩',
    type: '数据看板',
    description: '用走势图、冷热遗漏和候选组合辅助查看福利彩票数据。',
    github: 'https://github.com/leoyoyofiona/leo-welfare-lottery',
    live: 'https://leo-welfare-lottery.onrender.com/',
    accent: '#f06d84',
    glow: 'rgba(240, 109, 132, .38)'
  },
  {
    title: '周星驰',
    type: '影迷数字档案',
    description: '作品时间线、人物关系与大陆友好观看入口。',
    github: 'https://github.com/leoyoyofiona/stephen-chow-works-mainland',
    live: 'https://stephen-chow-works-mainland.onrender.com/',
    accent: '#ff8a4c',
    glow: 'rgba(255, 138, 76, .42)'
  },
  {
    title: '抓小红书',
    type: '桌面工具',
    description: '整理收藏内容，快速找到原文、图片与视频线索。',
    github: 'https://github.com/leoyoyofiona/xiaohongshu-favorites',
    accent: '#ff617d',
    glow: 'rgba(255, 97, 125, .38)'
  },
  {
    title: '同声传译',
    type: 'macOS 工具',
    description: '中英泰多语种实时翻译与本地桌面工作流。',
    github: 'https://github.com/leoyoyofiona/ZH-EN-TH-translate',
    accent: '#4fd4a8',
    glow: 'rgba(79, 212, 168, .38)'
  },
  {
    title: '打字三下空格翻译',
    type: '效率工具',
    description: '连按三次空格，快速触发中英文翻译。',
    github: 'https://github.com/leoyoyofiona/triple-space-translator',
    accent: '#b88bff',
    glow: 'rgba(184, 139, 255, .38)'
  },
  {
    title: 'macOS 快捷助手',
    type: 'macOS 工具',
    description: '按住一个键，查看当前应用可用的快捷键。',
    github: 'https://github.com/leoyoyofiona/LEO-MACOS-Shortcut-Assistant',
    accent: '#7ab2ff',
    glow: 'rgba(122, 178, 255, .38)'
  },
  {
    title: 'YOYO 学习',
    type: '学习应用',
    description: '用清晰的任务与练习节奏，陪孩子稳步学习。',
    github: 'https://github.com/leoyoyofiona/yoyo-learning-boost',
    live: 'https://yoyo-learning-boost.onrender.com/',
    accent: '#ff9d59',
    glow: 'rgba(255, 157, 89, .38)'
  },
  {
    title: '足彩分析',
    type: '赔率分析',
    description: '围绕赔率、传统指标与方案导出做赛前分析。',
    github: 'https://github.com/leoyoyofiona/leo-football-lottery',
    live: 'https://leo-football-lottery.onrender.com/',
    accent: '#51d49d',
    glow: 'rgba(81, 212, 157, .38)'
  },
  {
    title: '高考志愿填报',
    type: '教育决策工具',
    description: '用学校、专业与地区信息辅助梳理志愿选择。',
    github: 'https://github.com/leoyoyofiona/leo-zhiyuan-compass',
    live: 'https://leo-zhiyuan.onrender.com/',
    accent: '#71a8ff',
    glow: 'rgba(113, 168, 255, .38)'
  },
  {
    title: '今天你笑了吗？',
    type: '轻松互动',
    description: '一个轻松的小作品，给忙碌的日常留一点好心情。',
    accent: '#ffcb53',
    glow: 'rgba(255, 203, 83, .38)'
  },
  {
    title: '浙师大约球',
    type: '校园运动',
    description: '面向浙师大教职工足球活动的赛程与团队展示。',
    github: 'https://github.com/leoyoyofiona/zjnu-staff-football',
    accent: '#78a7ff',
    glow: 'rgba(120, 167, 255, .38)'
  },
  {
    title: '自动模仿手打字',
    type: '桌面工具',
    description: '观察屏幕文字后，以自然节奏模拟手动输入。',
    github: 'https://github.com/leoyoyofiona/autotype',
    accent: '#ff83c4',
    glow: 'rgba(255, 131, 196, .38)'
  },
  {
    title: 'NoType',
    type: 'macOS 语音输入',
    description: '原生语音输入、句子润色与双语翻译。',
    github: 'https://github.com/leoyoyofiona/NoType',
    accent: '#75d5ff',
    glow: 'rgba(117, 213, 255, .38)'
  }
]

const close = () => {
  isOpen.value = false
}

const rememberPointer = (event) => {
  lastPointerType.value = event.pointerType
}

const toggle = (event) => {
  const cameFromTouchOrKeyboard = lastPointerType.value !== 'mouse' || event.detail === 0
  isOpen.value = cameFromTouchOrKeyboard ? !isOpen.value : true
}

const isMousePointer = (event) => event.pointerType === 'mouse' || (!event.pointerType && window.matchMedia('(hover: hover)').matches)

const openOnMouse = (event) => {
  if (isMousePointer(event)) isOpen.value = true
}

const closeOnMouse = (event) => {
  if (isMousePointer(event)) close()
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
  <div ref="portfolioRoot" class="leo-portfolio" @pointerenter="openOnMouse" @pointerleave="closeOnMouse" @focusout="onFocusOut" @keydown.esc="close">
    <button class="leo-portfolio-trigger" type="button" :aria-expanded="isOpen" aria-controls="leo-portfolio-panel" @pointerdown="rememberPointer" @click="toggle">
      <span class="leo-mark" aria-hidden="true">LEO</span>
      <span class="leo-trigger-label">LEO 作品</span>
      <svg class="leo-chevron" viewBox="0 0 16 16" aria-hidden="true"><path d="m4 6 4 4 4-4" /></svg>
    </button>

    <Transition name="leo-reveal">
      <section v-if="isOpen" id="leo-portfolio-panel" class="leo-showcase" aria-label="LEO 的开源作品" @keydown.esc="close">
        <header class="leo-showcase-header">
          <div>
            <strong>LEO 的开源作品</strong>
            <p>从数据、教育到桌面工具，点一张卡片走进一个完整产品。</p>
          </div>
          <span class="leo-showcase-count">{{ projects.length }} 个指定作品</span>
        </header>

        <aside class="leo-portfolio-disclaimer" aria-label="作品免责声明">
          <strong>免责声明</strong>
          <span>本菜单仅展示 LEO 独立维护的作品。功能、数据、结果与在线服务以各项目当前页面为准，可能调整、中断或下线；内容不构成任何商业、投资、法律、医疗、教育或其他专业建议。如发现问题或需联系维护者，请发送邮件至 <a href="mailto:leooelcn@gmail.com">leooelcn@gmail.com</a>。</span>
        </aside>

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
              <a v-if="project.github" :href="project.github" target="_blank" rel="noopener noreferrer">GitHub <span aria-hidden="true">↗</span></a>
              <span v-else class="leo-render-note">开源链接待补充</span>
              <a v-if="project.live" class="leo-live-link" :href="project.live" target="_blank" rel="noopener noreferrer">在线体验 <span aria-hidden="true">↗</span></a>
              <span v-else class="leo-render-note">线上地址核验中</span>
            </footer>
          </article>
        </div>

        <footer class="leo-showcase-footer">
          <span>仅展示以上指定作品；GitHub 与在线体验链接按当前可核验状态提供。</span>
          <a href="https://github.com/leoyoyofiona?tab=repositories" target="_blank" rel="noopener noreferrer">查看全部仓库 <span aria-hidden="true">↗</span></a>
        </footer>
      </section>
    </Transition>
  </div>
</template>

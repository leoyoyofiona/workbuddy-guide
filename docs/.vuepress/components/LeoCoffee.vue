<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue'

const isOpen = ref(false)
const coffeeRoot = ref(null)
const lastPointerType = ref('')

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
  if (!coffeeRoot.value?.contains(event.target)) close()
}

onMounted(() => document.addEventListener('pointerdown', onDocumentPointerDown))
onBeforeUnmount(() => document.removeEventListener('pointerdown', onDocumentPointerDown))
</script>

<template>
  <div ref="coffeeRoot" class="leo-coffee" @pointerenter="openOnMouse" @pointerleave="closeOnMouse" @focusout="onFocusOut" @keydown.esc="close">
    <button class="leo-coffee-trigger" type="button" :aria-expanded="isOpen" aria-controls="leo-coffee-panel" @pointerdown="rememberPointer" @click="toggle">
      <svg class="leo-coffee-icon" viewBox="0 0 24 24" aria-hidden="true"><path d="M4 7h13v7a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5V7Zm13 3h2a2 2 0 0 1 0 4h-2M7 3v2m4-2v2m4-2v2" /></svg>
      <span class="leo-coffee-label">请 LEO 喝杯咖啡</span>
    </button>

    <Transition name="leo-reveal">
      <section v-if="isOpen" id="leo-coffee-panel" class="leo-coffee-panel" aria-label="请 LEO 喝杯咖啡" @keydown.esc="close">
        <header>
          <span class="leo-coffee-spark" aria-hidden="true">✦</span>
          <div>
            <strong>请 LEO 喝杯咖啡</strong>
            <p>喜欢这个开源作品的话，扫码支持一下。</p>
          </div>
        </header>

        <div class="leo-payment-grid">
          <figure class="leo-payment-card leo-payment-alipay">
            <img src="/images/leo/alipay-coffee.jpg" alt="LEO 的支付宝收款二维码" loading="lazy">
            <figcaption><span>支付宝</span><small>打开支付宝扫一扫</small></figcaption>
          </figure>
          <figure class="leo-payment-card leo-payment-wechat">
            <img src="/images/leo/wechat-coffee.jpg" alt="LEO 的微信收款二维码" loading="lazy">
            <figcaption><span>微信支付</span><small>打开微信扫一扫</small></figcaption>
          </figure>
        </div>

        <p class="leo-coffee-note">感谢每一份支持，它会变成下一次更好的作品更新。</p>
      </section>
    </Transition>
  </div>
</template>

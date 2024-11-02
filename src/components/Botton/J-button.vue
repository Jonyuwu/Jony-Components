<template>
  <div
    :class="[
      button({ size, border, color }),
      { 'opacity-70 cursor-default pointer-events-none': disabled }
    ]"
  >
    <JLoader v-if="isloading"></JLoader>
    <slot></slot>
  </div>
</template>
<script setup lang="ts">
import { type VariantProps } from 'class-variance-authority'
import { button } from '@/cva/Button/J-button'
import { defineProps } from 'vue'
import { JLoader } from '../Loader'
type ButtonProps = VariantProps<typeof button>

defineProps<{
  size?: ButtonProps['size']
  border?: ButtonProps['border']
  color?: ButtonProps['color']
  disabled?: boolean
  isloading?: boolean
  onClick?: (event: Event) => void
}>()
</script>

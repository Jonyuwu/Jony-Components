<template>
  <div
    :class="container({ type, padding, bgColor, space })"
    :style="{ backgroundColor: customColor }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { type VariantProps } from 'class-variance-authority'
import { container } from '@/cva/Card/J-card-container'
import { computed, defineProps } from 'vue'

type ContainerProps = VariantProps<typeof container>

const props = defineProps<{
  type?: ContainerProps['type']
  padding?: ContainerProps['padding']
  bgColor?: ContainerProps['bgColor']
  space?: ContainerProps['space']
  customColor?: string
}>()

const customColor = computed(() => {
  return props.customColor || ''
})
</script>

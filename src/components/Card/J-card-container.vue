<template>
  <div
    :class="container({ type, padding, bgColor, size })"
    :style="{ backgroundColor: customColor, display: 'flex', flexDirection: 'column' }"
  >
    <slot></slot>
  </div>
</template>

<script setup lang="ts">
import { cva, type VariantProps } from 'class-variance-authority'
import { container } from '@/cva/Card'
import { computed, defineProps } from 'vue'

type ContainerProps = VariantProps<typeof container>

const props = defineProps<{
  type?: ContainerProps['type']
  padding?: ContainerProps['padding']
  bgColor?: ContainerProps['bgColor']
  size?: ContainerProps['size']
  customColor?: string
}>()

const customColor = computed(() => {
  return props.customColor || ''
})
</script>

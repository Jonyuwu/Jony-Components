<template>
  <dive :class="title({ size })">
    <slot></slot>
  </dive>
</template>
<script setup lang="ts">
import { type VariantProps } from 'class-variance-authority'
import { title } from '@/cva/Card/J-card-header/J-card-title-group.vue/J-card-title.vue'
import { defineProps } from 'vue'

type TitleProps = VariantProps<typeof title>

defineProps<{
  size?: TitleProps['size']
}>()
</script>

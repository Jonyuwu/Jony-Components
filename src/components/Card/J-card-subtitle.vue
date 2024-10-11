<template>
  <dive :class="subtitle({ size })">
    <slot></slot>
  </dive>
</template>
<script setup lang="ts">
import { type VariantProps } from 'class-variance-authority'
import { subtitle } from '@/cva/Card/J-card-header/J-card-title-group.vue/J-card-subtitle'
import { defineProps } from 'vue'

type SubtitleProps = VariantProps<typeof subtitle>

defineProps<{
  size?: SubtitleProps['size']
}>()
</script>

<template>
  <dive :class="header({ space })">
    <slot></slot>
  </dive>
</template>
<script setup lang="ts">
import { type VariantProps } from 'class-variance-authority'
import { header } from '@/cva/Card/J-card-header'
import { defineProps } from 'vue'

type HeaderProps = VariantProps<typeof header>

defineProps<{
  space?: HeaderProps['space']
}>()
</script>

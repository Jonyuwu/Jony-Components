<template>
  <dive :class="titlegroup({ variant })">
    <slot></slot>
  </dive>
</template>
<script setup lang="ts">
import { type VariantProps } from 'class-variance-authority'
import { titlegroup } from '@/cva/Card/J-card-header/J-card-title-group.vue'
import { defineProps } from 'vue'

type TitlegroupProps = VariantProps<typeof titlegroup>

defineProps<{
  variant?: TitlegroupProps['variant']
}>()
</script>

<template>
  <dive :class="footer({ position })">
    <slot></slot>
  </dive>
</template>
<script setup lang="ts">
import { type VariantProps } from 'class-variance-authority'
import { footer } from '@/cva/Card/J-card-footer'
import { defineProps } from 'vue'

type FooterProps = VariantProps<typeof footer>

defineProps<{
  position?: FooterProps['position']
}>()
</script>

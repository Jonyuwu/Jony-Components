<template>
  <dive :class="body({ size })">
    <slot></slot>
  </dive>
</template>
<script setup lang="ts">
import { type VariantProps } from 'class-variance-authority'
import { body } from '@/cva/Card/J-card-body'
import { defineProps } from 'vue'

type BodyProps = VariantProps<typeof body>

defineProps<{
  size?: BodyProps['size']
}>()
</script>

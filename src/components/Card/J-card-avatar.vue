<template>
  <dive :class="avatar({ position })">
    <slot></slot>
  </dive>
</template>
<script setup lang="ts">
import { type VariantProps } from 'class-variance-authority'
import { avatar } from '@/cva/Card/J-card-header/J-card-avatar'
import { defineProps } from 'vue'

type AvatarProps = VariantProps<typeof avatar>

defineProps<{
  position?: AvatarProps['position']
}>()
</script>

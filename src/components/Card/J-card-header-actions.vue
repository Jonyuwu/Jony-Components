<template>
  <dive :class="actionsheader({ position })">
    <slot></slot>
  </dive>
</template>
<script setup lang="ts">
import { type VariantProps } from 'class-variance-authority'
import { actionsheader } from '@/cva/Card/J-card-header/J-card-acttions-header'
import { defineProps } from 'vue'

type ActionsHeaderProps = VariantProps<typeof actionsheader>

defineProps<{
  position?: ActionsHeaderProps['position']
}>()
</script>

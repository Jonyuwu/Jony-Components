<template>
  <dive :class="tittlegroup({ variant })">
    <slot></slot>
  </dive>
</template>
<script setup lang="ts">
import { type VariantProps } from 'class-variance-authority'
import { tittlegroup } from '@/cva/Card/J-card-header/J-card-title-group.vue'
import { defineProps } from 'vue'

type TitlegroupProps = VariantProps<typeof tittlegroup>

defineProps<{
  variant?: TitlegroupProps['variant']
}>()
</script>

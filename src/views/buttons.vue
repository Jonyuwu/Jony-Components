<template>
  <div class="min-h-screen min-w-full p-6">
    <div class="space-y-12">
      <div class="font-bold text-4xl">Botones</div>
      <JCardContainer
        class="Card simple flex justify-center self-center grid-cols-[repeat(4,_minmax(min-content,_max-content))]"
        padding="sm"
        type="roundedShadow"
        bg-color="secondary_10"
      >
        <JButton :isloading="true">Boton</JButton>
        <JButton :disabled="true">Click on</JButton>
        <JButton>Ok</JButton>
        <JButton :disabled="true">Confirm</JButton>
      </JCardContainer>
      <JButton>Confirm</JButton>
    </div>
  </div>
</template>
<script setup lang="ts">
import { JButton } from '@/components/Botton'
import { JCardContainer } from '@/components/Card'
</script>

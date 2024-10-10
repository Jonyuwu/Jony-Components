<template>
  <div class="bg-blue-950 min-h-screen grid place-items-center">
    <div class="justify-center self-center w-9/12 h-4/6 bg-primary_10 grid place-content-center">
      <JCardContainer size="sm" bg-color="withe">
        <JCardHeader
          ><JCardAvatar></JCardAvatar>
          <JCardTitleGroup>
            <JCardTitle>Titulo</JCardTitle>
            <JCardSubtitle>Subtiyulo</JCardSubtitle>
          </JCardTitleGroup>
          <JCardHeaderAction><i class="pi pi-check"></i> </JCardHeaderAction>
        </JCardHeader>
        <JCardMedia class="-ml-4 -mr-4">
          <img src="https://material.angular.io/assets/img/examples/shiba2.jpg" alt="" />
        </JCardMedia>

        <JCardFooter>
          <div class="bg-secondary_10 h-8 w-20 rounded-lg text-cyan-50 text-center">Boton</div>
        </JCardFooter>
      </JCardContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  JCardContainer,
  JCardTitleGroup,
  JCardTitle,
  JCardAvatar,
  JCardSubtitle,
  JCardMedia,
  JCardHeader,
  JCardHeaderAction,
  JCardFooter
} from './components/Card'
import 'primeicons/primeicons.css'
</script>

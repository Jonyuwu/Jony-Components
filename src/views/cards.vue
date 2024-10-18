<template>
  <div class="min-h-screen min-w-full p-6">
    <div class="space-y-12">
      <div class="font-bold text-4xl">Cards</div>
      <JCardContainer class="Card simple" padding="sm" type="roundedShadow" bg-color="secondary_10">
        <JCardHeader>
          <JCardTitle class="text-white">Card simple</JCardTitle>
          <JCardHeaderAction
            ><div class="text-white">Boton</div>
            <div class="text-white">Boton</div></JCardHeaderAction
          >
        </JCardHeader>
        <JCardContainer>
          <JCardBody size="auto"
            >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab vitae cum, deserunt quae
            dolore doloremque sed distinctio quasi, in nobis quis tempore architecto id officia
            laudantium eveniet quod optio recusandae.</JCardBody
          >
        </JCardContainer>
      </JCardContainer>

      <JCardContainer
        class="Card con titulos"
        padding="sm"
        type="roundedShadow"
        bg-color="secondary_10"
      >
        <JCardHeader>
          <JCardTitle class="text-white">Card con titulos</JCardTitle>
          <JCardHeaderAction
            ><div class="text-white">Boton</div>
            <div class="text-white">Boton</div></JCardHeaderAction
          >
        </JCardHeader>
        <JCardContainer>
          <JCardTitle>Titulo</JCardTitle>
          <JCardBody size="auto"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta quisquam adipisci
            voluptatem nostrum placeat impedit quae odit esse aperiam, facere vero animi aliquid,
            qui illo sed nulla ex enim deserunt!</JCardBody
          >
        </JCardContainer>
      </JCardContainer>

      <JCardContainer
        class="Card con titulo y subtitulo"
        padding="sm"
        type="roundedShadow"
        bg-color="secondary_10"
      >
        <JCardHeader>
          <JCardTitle class="text-white">Card con titulo y subtitulo</JCardTitle>
          <JCardHeaderAction
            ><div class="text-white">Boton</div>
            <div class="text-white">Boton</div></JCardHeaderAction
          >
        </JCardHeader>
        <JCardContainer>
          <JCardTitleGroup>
            <JCardTitle>Titulo</JCardTitle>
            <JCardSubtitle>Subtitulo</JCardSubtitle>
          </JCardTitleGroup>
          <JCardBody size="auto"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam rerum, quisquam
            aspernatur dolorum impedit similique ex esse iure veritatis nostrum hic alias, mollitia
            reiciendis doloremque reprehenderit cum nihil cumque distinctio.</JCardBody
          >
        </JCardContainer>
      </JCardContainer>

      <JCardContainer
        class="Card con opciones arriba"
        padding="sm"
        type="roundedShadow"
        bg-color="secondary_10"
      >
        <JCardHeader>
          <JCardTitle class="text-white">Card con opciones arriba</JCardTitle>
          <JCardHeaderAction
            ><div class="text-white">Boton</div>
            <div class="text-white">Boton</div></JCardHeaderAction
          >
        </JCardHeader>
        <JCardContainer>
          <JCardHeader>
            <JCardTitleGroup>
              <JCardTitle>Titulo</JCardTitle>
              <JCardSubtitle>Subtitulo</JCardSubtitle>
            </JCardTitleGroup>
            <JCardHeaderAction
              ><div class="text-blue-500">Ver mas</div>
              <div class="text-blue-500">Acreca de...</div></JCardHeaderAction
            >
          </JCardHeader>
          <JCardBody size="auto"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam rerum, quisquam
            aspernatur dolorum impedit similique ex esse iure veritatis nostrum hic alias, mollitia
            reiciendis doloremque reprehenderit cum nihil cumque distinctio.</JCardBody
          >
        </JCardContainer>
      </JCardContainer>

      <JCardContainer
        class="Card con opciones arriba"
        padding="sm"
        type="roundedShadow"
        bg-color="secondary_10"
      >
        <JCardHeader>
          <JCardTitle class="text-white">Card con botones de accion</JCardTitle>
          <JCardHeaderAction
            ><div class="text-white">Boton</div>
            <div class="text-white">Boton</div></JCardHeaderAction
          >
        </JCardHeader>
        <JCardContainer>
          <JCardHeader>
            <JCardTitleGroup>
              <JCardTitle>Titulo</JCardTitle>
              <JCardSubtitle>Subtitulo</JCardSubtitle>
            </JCardTitleGroup>
            <JCardHeaderAction
              ><div class="text-blue-500">Ver mas</div>
              <div class="text-blue-500">Acreca de...</div></JCardHeaderAction
            >
          </JCardHeader>
          <JCardBody size="auto"
            >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quam rerum, quisquam
            aspernatur dolorum impedit similique ex esse iure veritatis nostrum hic alias, mollitia
            reiciendis doloremque reprehenderit cum nihil cumque distinctio.</JCardBody
          >
          <JCardFooter position="end"><div>Boton 1 Boton 2</div></JCardFooter>
        </JCardContainer>
      </JCardContainer>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  JCardContainer,
  JCardHeader,
  JCardTitle,
  JCardHeaderAction,
  JCardBody,
  JCardTitleGroup,
  JCardSubtitle,
  JCardAvatar,
  JCardFooter,
  JCardMedia
} from '@/components/Card'
</script>

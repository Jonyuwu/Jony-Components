<template>
  <div class="bg-blue-950 min-h-screen grid place-items-center">
    <div class="justify-center self-center w-9/12 h-4/6 bg-primary_10 grid place-content-center">
      <JCardContainer space="sm" bg-color="withe">
        <JCardHeader>
          <JCardAvatar>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRfdeW96Bq7CDC3lfl9p6vBAG15UqDZv9Ll7yYAfWhee-va1mUbsBc1ZlTQjO5bGiJHyEI&usqp=CAU"
              alt=""
            />
          </JCardAvatar>

          <JCardTitleGroup>
            <JCardTitle>Titulo</JCardTitle>

            <JCardSubtitle>Subtiyulo</JCardSubtitle>
          </JCardTitleGroup>

          <JCardHeaderAction><i class="pi pi-check"></i> </JCardHeaderAction>
        </JCardHeader>

        <JCardMedia>
          <img
            class="h-40 w-52"
            src="https://material.angular.io/assets/img/examples/shiba2.jpg"
            alt=""
          />
        </JCardMedia>

        <JCardBody size="md"
          ><p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem omnis laboriosam veniam
            modi quam voluptate consequatur eaque tempore necessitatibus fuga placeat sapiente id
            excepturi eos, natus voluptatum ducimus esse. Ab!
          </p></JCardBody
        >

        <JCardFooter position="start" class="bg-red-600"> Footer</JCardFooter>
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
  JCardFooter,
  JCardBody
} from './components/Card'
import 'primeicons/primeicons.css'
</script>

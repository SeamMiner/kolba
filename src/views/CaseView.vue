<template>
  <section class="case">
    <header>
      <nav>
        <router-link class="nav__navigation" :to="{
          name: 'home'
        }">
        <b v-html="t(`pages.cases.cases-cards.${project.title_key}`)"></b> 
        <span>
          <img :src="require('@/assets/arrow--back.svg')" alt="Back">
          {{ t('pages.case-view.header.back') }}
      </span>
      </router-link>
      <ul class="nav__info" v-if="project.info">
        <template v-for="(value, key) in project.info" :key="key">
          <li><span>{{ t(`pages.case-view.header.info.${key}`) }}:</span> {{ normalizeValue(value) }}</li>
        </template>
      </ul>
  
      <a class="nav__cta" href="https://t.me/k0lba" target="_blank">
        @kolba
      </a>
      </nav>
    </header>
    <div class="case__wrapper">
      <img :src="require(`@/assets/cases/${project.image}`)" @error="setByDefault($event, '@/assets/avatar.png')" :alt="$route.params.case.toString()">
    </div>
  </section>
</template>

<script lang="ts" setup>
import { computed, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

import { projects } from '@/locales/cases';
import { useRoute } from 'vue-router';

const route = useRoute()
const { t, locale } = useI18n()

const project = computed(() => projects[route.params.case.toString()])

const normalizeValue = (value: any) => {
  if (value instanceof Date) {
    return value.toLocaleDateString(locale.value, {
      year: "numeric",
      month: 'long'
    })
  }
  else {
    return value
  }
}

const setByDefault = (event: any, image_url: string) => {
  console.log('error');
  
  if (event.target) event.target.src = image_url;
};

const log = () => {
  console.log('error');
}

</script>


<style lang="scss" scoped>
.case {
  min-height: 100vh;
  width: 100%;
  display: grid;
  place-items: center;

  position: relative;

  header {
    position: fixed;
    min-height: 145px;
    left: 0px;
    right: 0px;
    top: 0px;

    background: linear-gradient(180deg, #000000 0%, rgba(191, 191, 191, 0) 100%);
    padding: 24px clamp(16px, 5vw, 144px) 0;

    nav {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      gap: 8px 16px;

      .nav__navigation {
        font-family: 'RockStar';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 1;
        color: #FFFFFF;
        text-decoration: none;

        b {
          display: block;
          font-weight: 800;
          margin: 0 0 10px;
        }

        span {
          display: inline-flex;
          gap: 10px;
        }
      }

      .nav__info {
        list-style: none;
        padding: 0;
        margin: 0;

        display: grid;
        gap: 10px;  

        li {
          font-family: 'RockStar';
          font-style: normal;
          font-weight: 250;
          font-size: 16px;
          line-height: 16px;

          color: #FFFFFF;

          span {
            font-weight: 400;
            opacity: .8;
          }
        }
      }

      .nav__cta {
        align-self: flex-start;
        padding: 10px 15px;
        border-radius: 10px;

        background: rgba(255, 255, 255, 0.8);
        backdrop-filter: blur(4px);

        font-family: 'RockStar';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 1;  

        color: #000000;

        text-decoration: none;

        transition: background .2s ease-in-out;

        &:hover {
          background: #ffffff;
        }
      }
    }
  }

  .case__wrapper {
    width: 100%;

    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
}
</style>
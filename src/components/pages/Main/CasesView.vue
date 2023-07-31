<template>
  <section class="cases" id="portfolio">
    <div class="cases__header">
      <h1 v-html="t('pages.cases.title')"></h1>
      <div class="cases__filters">
        <span
          class="cases__filter"
          v-for="filter in tags"
          :key="filter"
          :class="{ active: currentTab == filter }"
          @click="currentTab = filter"
          >{{ t(`pages.cases.filters.${filter}`) }}</span
        >

        <div class="cases__subfilters" v-if="currentTab == 'other'">
          <span
            class="cases__subfilter"
            v-for="filter in subtags"
            :key="filter"
            :class="{ active: currentSubTab == filter }"
            @click="currentSubTab = filter"
            >{{ t(`pages.cases.filters.subfilters.${filter}`) }}</span
          >
        </div>
      </div>
    </div>

    <div class="cases__wrapper">
      <template v-if="currentTab != 'arts'">
        <template
          v-for="({title_key, tags, subtags, image}, project) in projects"
          :key="project"
        >
          <CaseCard
            class="case"
            :href="{
              name: 'Cases',
              params: {
                case: project
              }
            }"
            :title_key="title_key"
            :image="image"
            :tags="tags"
            v-if="
              currentTab == 'other' ? 
              subtags.includes(currentSubTab) && tags.includes(currentTab) : 
              tags.includes(currentTab)
            "
          />
        </template>
      </template>
      <template v-else>
        <img class="case__arts" :src="require('@/assets/cases/arts.png')" alt="Arts">
      </template>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";
import { projects, tags, subtags } from '@/locales/cases'

import CaseCard from "@/components/CaseCard.vue";

const { t } = useI18n();

const currentTab = ref<typeof tags[number]>(tags[0]);

const currentSubTab = ref<typeof subtags[number]>(subtags[0])
</script>

<style lang="scss" scoped>
.cases {
  .cases__header {
    max-width: 1040px;
    margin: 0 auto;
    width: 100%;
    padding: 0 16px;

    @media (min-width: 1040px) {
      padding: 0;
    }

    h1 {
      font-family: "Valisca";
      letter-spacing: 0.11em;
      color: var(--black);
      font-size: 32px;
      line-height: 2;

      :deep(span) {
        font-family: "Informal Roman";
        font-weight: 400;
        font-size: 64px;
        line-height: 1;
      }

      @media (min-width: 768px) {
        font-size: 96px;
        line-height: 179px;

        :deep(span) {
          font-size: 250px;
          line-height: 180px;
        }
      }
    }

    .cases__filters, .cases__subfilters {
      display: flex;
      flex-wrap: wrap;
      gap: 12px 50px;

      .cases__filter {
        font-family: "SF Pro Display";
        font-style: normal;
        font-weight: 200;
        font-size: 24px;
        line-height: 29px;
        color: var(--black);
        cursor: pointer;

        &.active {
          font-weight: 600;
        }
      }
      .cases__subfilter {
        font-family: "SF Pro Display";
        font-style: light;
        font-weight: 200;
        font-size: 20px;
        line-height: 29px;
        color: var(--black);
        cursor: pointer;
        
        &.active {
          font-weight: 600;
        }
      }
    }

    .cases__subfilters {
      flex: 100%;
    }
  }

  .cases__wrapper {
    display: grid;
    grid: 1fr / repeat(2, minmax(300px, 1fr));
    gap: 8px 10px;
    padding: 70px 16px;

    @media (max-width: 768px) {
      grid: 1fr / 1fr;
    }

    .case__arts {
      grid-column: span 2;
      width: 100%;
      height: 100%;
      object-fit: contain;
      @media (max-width: 768px) {
        grid-column: span 1;
      }
    }
  }
}
</style>

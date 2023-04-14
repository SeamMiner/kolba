<template>
  <section class="cases" id="portfolio">
    <div class="cases__header">
      <h1 v-html="t('pages.cases.title')"></h1>
      <div class="cases__filters">
        <span
          class="cases__filter"
          v-for="filter in tabs"
          :key="filter"
          :class="{ active: currentTab == filter }"
          @click="currentTab = filter"
          >{{ t(`pages.cases.filters.${filter}`) }}</span
        >
      </div>
    </div>

    <div class="cases__wrapper">
      <template
        v-for="{ href, title_key, image, tags } in projects"
        :key="title_key"
      >
        <CaseCard
          class="case"
          :href="href"
          :title_key="title_key"
          :image="image"
          :tags="tags"
          v-if="tags.includes(currentTab)"
        />
      </template>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";
import { useI18n } from "vue-i18n";

import CaseCard from "@/components/CaseCard.vue";

const { t } = useI18n();

const tabs = ["best", "web", "mobile", "arts", "other"];

const currentTab = ref(tabs[0]);

const projects = ref([
  {
    href: "",
    title_key: "vv",
    image: "vkusvill.png",
    tags: ["best", "mobile"],
  },
  {
    href: "",
    title_key: "cassio",
    image: "cassio.png",
    tags: ["best", "web"],
  },
  {
    href: "",
    title_key: "honey",
    image: "honey.png",
    tags: ["best", "arts"],
  },
  {
    href: "",
    title_key: "game",
    image: "game.png",
    tags: ["best", "mobile"],
  },
  {
    href: "",
    title_key: "women",
    image: "women.png",
    tags: ["best", "web"],
  },
  {
    href: "",
    title_key: "cocktail",
    image: "cocktail.png",
    tags: ["best", "arts"],
  },
  {
    href: "",
    title_key: "dodui",
    image: "dodui.png",
    tags: ["best", "other"],
  },
]);
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

    .cases__filters {
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
  }
}
</style>

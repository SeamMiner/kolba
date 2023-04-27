<template>
  <footer>
    <div class="footer__container">
      <div class="container__content">
        <div class="container__wrapper">
          <div class="creators__info row">
            <div class="creator">
              <span>Designed by</span>
              <span
                ><a href="https://t.me/k0lba" target="_blank">kolba</a></span
              >
            </div>
            <div class="creator">
              <span>Frontend by</span>
              <span
                ><a href="https://platon.page" target="_blank">seamminer</a></span
              >
            </div>
          </div>
          <div class="row year">{{ currentYear }}</div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { defineComponent, ref } from "vue";

const currentYear = ref(new Date().getFullYear());
</script>

<style lang="scss" scoped>
footer {
  background-color: var(--dark-blue);
  padding: 60px 16px 0;

  .footer__container {
    max-width: 1040px;
    font-family: "Casio fx-9860GII";
    font-weight: 600;
    background: var(--grey);
    color: var(--black);
    padding: 0 8px;
    margin: 0 auto;
    min-height: 25vh;
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 768px) {
      padding: 0 30px;
    }
    .container__wrapper {
      max-height: 215px;
      width: clamp(200px, 100%, 450px);
      margin: 0 auto;
    }

    .container__content {
      display: flex;
      flex-flow: column;
      gap: 4px;

      .row {
        border: 17px solid;
        border-image: url("../assets/border.svg") 13 / 10px round;

        &:not(.year) {
          border-image: url("../assets/border.svg") 13 / 10px 10px 0 10px round;
          border-bottom: 0;
          padding-bottom: 4px;

          @media (min-width: 768px) {
            padding-bottom: 8px;
          }
        }

        &.year {
          text-align: center;
          font-family: "Casio fx-9860GII";
          font-style: normal;
          font-weight: 400;
          font-size: 8px;
          line-height: 12px;
          color: #000000;

          @media (min-width: 768px) {
            font-size: 14px;
            line-height: 16px;
          }
        }
      }

      .creators__info {
        display: flex;
        flex-flow: column;
        gap: 8px;

        > .creator {
          width: 100%;
          display: grid;
          grid: 1fr / repeat(2, 1fr);
          gap: 8px;

          font-family: "Casio fx-9860GII";
          font-style: normal;
          font-weight: 400;
          font-size: 8px;
          line-height: 12px;
          color: #000000;

          @media (min-width: 768px) {
            font-size: 14px;
            line-height: 16px;
          }

          a {
            color: #000000;
            text-decoration: none;
          }
        }
      }
    }
  }
}
</style>

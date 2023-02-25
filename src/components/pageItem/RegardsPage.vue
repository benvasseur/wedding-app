<script setup>
import regards from '@/assets/texts/regards.svg';
import flower from '@/assets/images/flowerInvitation.svg';
import copy from '@/assets/images/contentCopy.svg';
import kakaoPay from '@/assets/images/kakaoPay.png';
import kakao from '@/assets/images/kakao.svg';
import link from '@/assets/images/link.svg';

import Accordion from '@/components/common/AccordionComponent.vue';

const clickLinkCopy = () => {
  navigator.clipboard.writeText(window.location.origin);
};

const clickBankCopy = () => {
  navigator.clipboard.writeText('1002945123456');
};

</script>

<template>
  <div id="regards">
    <div class="regards">
      <img :src="regards" alt="regards" />
    </div>

    <div class="flower">
      <img :src="flower" alt="flower" />
    </div>

    <div class="description">
      마음 전하실 곳
    </div>

    <div class="accordion item1">
      <Accordion>
        <template #accordion-trigger>
          신랑측 계좌번호
        </template>

        <template #accordion-content>
          <div class="accContent">
            <div class="blockLeft">
              우리은행 | 1002-945-123-456 <br>
              최수지
            </div>
            <div class="blockRight">
              <button
                class="roundButton copyButton"
                type="button"
                @click="clickBankCopy"
              >
                복사
                <img :src="copy" alt="copy" />
              </button>
            </div>
          </div>

          <hr>

          <div class="accContent">
            <div class="blockLeft">
              이수현 <br>
              카카오페이
            </div>
            <div class="blockRight">
              <button
                class="roundButton kakaoButton"
                type="button"
              >
                <img :src="kakaoPay" alt="kakao pay" />
              </button>
            </div>
          </div>
        </template>
      </Accordion>
    </div>

    <div class="accordion item2">
      <Accordion>
        <template #accordion-trigger>
          신랑측 계좌번호
        </template>

        <template #accordion-content>
          <div class="accContent">
            <div class="blockLeft">
              우리은행 | 1002-945-123-456 <br>
              최수지
            </div>
            <div class="blockRight">
              <button
                class="roundButton copyButton"
                type="button"
                @click="clickBankCopy"
              >
                복사
                <img :src="copy" alt="copy" />
              </button>
            </div>
          </div>

          <hr>

          <div class="accContent">
            <div class="blockLeft">
              이수현 <br>
              카카오페이
            </div>
            <div class="blockRight">
              <button
                class="roundButton kakaoButton"
                type="button"
              >
                <img :src="kakaoPay" alt="kakao pay" />
              </button>
            </div>
          </div>
        </template>
      </Accordion>
    </div>

    <div class="share">
      <button
        class="roundButton shareKakaoButton"
        type="button"
      >
        <img :src="kakao" alt="kakao share" />
        카카오톡 공유
      </button>

      <button
        class="roundButton linkButton"
        type="button"
        @click="clickLinkCopy"
      >
        <img :src="link" alt="link share" />
        링크 복사
      </button>
    </div>

    <div class="legal">
      ⓒ 2023. Jae-eun & Su-ji All rights reserved.
    </div>
  </div>
</template>

<style lang="scss" scoped>
#regards {
  height: 100%;
  width: 100%;
  text-align: center;

  background-color: var(--color-background-beige);
  color: var(--color-text-beige);

  .regards {
    position: absolute;
    top: 23.65%;
    width: 100vw;
  }

  .flower {
    position: absolute;
    top: 239px;
    width: 100vw;
  }

  .description {
    position: absolute;
    top: 420px;
    width: 100vw;

    font-family: 'Noto Serif KR';
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 200%;
  }

  .accordion {
    position: absolute;
    width: 100vw;
    padding: 0 20px;
    color: var(--color-text-green);

    &.item1 {
      top: 500px;
    }

    &.item2 {
      top: 570px;
    }

    .accContent {
      display: flex;
      justify-content: space-between;
      font-size: 14px;

      .blockLeft {
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        line-height: 24px;
      }

      .blockRight {
        width: 70px;
        margin-left: 10px;
      }

      .copyButton {
        color: white;
        font-size: 13px;
        padding: 0px 12px;

        width: 68px;
        height: 32px;

        background: #64837D;
        border: 0;

        img {
          position: relative;
          top: 2px;
        }
      }

      .kakaoButton {
        background: #FFEB00;
        border: 0;
        padding: 6px 10px;
      }
    }

    hr {
      margin: 11px 0;
      border-width: 1px 0 0 0;
      border-color: var(--color-background-beige);
      border-style: solid;
    }
  }

  .share {
    display: flex;
    justify-content: space-between;
    width: 250px;

    position: absolute;
    bottom: 60px;
    left: calc(50vw - 125px);

    button {
      border-width: 0;
      background: #F8F6F2;
      height: 40px;
      padding: 4px 12px;

      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 200%;
      color: #64837D;

      &.shareKakaoButton {
        width: 135px;

        img {
          position: relative;
          top: 6px;
        }
      }

      &.linkButton {
        width: 107px;
      }
    }
  }

  .legal {
    position: absolute;
    bottom: 20px;
    width: 100%;
    text-align: center;

    font-family: 'Noto Sans';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 200%;
  }
}
</style>

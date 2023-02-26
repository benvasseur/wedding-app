<script setup>
import regards from '@/assets/texts/regards.svg';
import rings from '@/assets/images/rings.png';
import copy from '@/assets/images/contentCopy.svg';
import kakao from '@/assets/images/kakao.svg';
import link from '@/assets/images/link.svg';

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

    <div class="rings">
      <img :src="rings" alt="rings" />
    </div>

    <v-expansion-panels class="accordion">
      <v-expansion-panel>
        <template #title>
          신랑측 계좌번호
        </template>

        <template #text>
          <div class="accContent">
            <div class="blockLeft">
              <div class="personInfo">
                이성화 (신랑 아버지)
              </div>
              <div class="bankInfo">
                n은행 0000-000-000000
              </div>
            </div>

            <div class="blockRight">
              <v-btn
                rounded
                class="copyButton"
                width="74px"
                max-width="74px"
                @click="clickBankCopy"
              >
                <template #prepend>
                  <img :src="copy" alt="copy" />
                </template>
                복사
              </v-btn>
            </div>
          </div>

          <hr>

          <div class="accContent">
            <div class="blockLeft">
              <div class="personInfo">
                이수현 신랑
              </div>
              <div class="bankInfo">
                n은행 0000-000-000000
              </div>
            </div>

            <div class="blockRight">
              <v-btn
                rounded
                class="copyButton"
                width="74px"
                max-width="74px"
                @click="clickBankCopy"
              >
                <template #prepend>
                  <img :src="copy" alt="copy" />
                </template>
                복사
              </v-btn>
            </div>
          </div>
        </template>
      </v-expansion-panel>

      <v-expansion-panel>
        <template #title>
          신랑측 계좌번호
        </template>

        <template #text>
          <div class="accContent">
            <div class="blockLeft">
              <div class="personInfo">
                이성화 (신랑 아버지)
              </div>
              <div class="bankInfo">
                n은행 0000-000-000000
              </div>
            </div>

            <div class="blockRight">
              <v-btn
                rounded
                class="copyButton"
                width="74px"
                max-width="74px"
                @click="clickBankCopy"
              >
                <template #prepend>
                  <img :src="copy" alt="copy" />
                </template>
                복사
              </v-btn>
            </div>
          </div>

          <hr>

          <div class="accContent">
            <div class="blockLeft">
              <div class="personInfo">
                이수현 신랑
              </div>
              <div class="bankInfo">
                n은행 0000-000-000000
              </div>
            </div>

            <div class="blockRight">
              <v-btn
                rounded
                class="copyButton"
                width="74px"
                max-width="74px"
                @click="clickBankCopy"
              >
                <template #prepend>
                  <img :src="copy" alt="copy" />
                </template>
                복사
              </v-btn>
            </div>
          </div>
        </template>
      </v-expansion-panel>
    </v-expansion-panels>

    <div class="share">
      <v-btn
        rounded
        flat
        @click="clickLinkCopy"
      >
        <template #prepend>
          <img :src="kakao" alt="kakao share" />
        </template>
        카카오톡 공유
      </v-btn>

      <v-btn
        rounded
        flat
        @click="clickLinkCopy"
      >
        <template #prepend>
          <img :src="link" alt="link share" />
        </template>
        링크 복사
      </v-btn>
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

  .rings {
    position: absolute;
    top: 239px;
    width: 100vw;
  }

  .accordion {
    position: absolute;
    top: 430px;
    width: 90%;
    margin-left: 5%;

    .accContent {
      display: flex;
      justify-content: space-between;

      .blockLeft {
        color: #64837D;
        font-family: 'Noto Sans';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        text-align: left;

        .personInfo {
          font-weight: 600;
        }

        .bankInfo {
          margin-top: 10px;
        }
      }

      .blockRight {
        margin-left: 10px;

        button {
          padding: 0;
          font-family: 'Noto Sans';
          font-style: normal;
          font-weight: 400;
          font-size: 14px;
          line-height: 200%;
          color: #FFFFFF;

          img {
            position: relative;
            top: -1px;
            left: 4px;
          }
        }
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
      background: #F8F6F2;
      height: 40px;

      font-family: 'Noto Sans KR';
      font-style: normal;
      font-weight: 500;
      font-size: 14px;
      line-height: 200%;
      color: #64837D;

      padding: 0 12px 0 8px;

      img {
        position: relative;
        left: 4px;
        width: 20px;
        height: 20px;
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

<script setup>
import { createToaster } from '@meforma/vue-toaster';
import useClipboard from 'vue-clipboard3';
import regards from '@/assets/texts/regards.svg';
import cake from '@/assets/images/cake.jpeg';
import copy from '@/assets/images/contentCopy.svg';
import kakao from '@/assets/images/kakao.svg';
import link from '@/assets/images/link.svg';

const { toClipboard } = useClipboard();

const toaster = createToaster({
  position: 'top',
  duration: 2000,
  maxToasts: 3,
});

const clickBankCopy = async (accountNumber) => {
  try {
    await toClipboard(`${accountNumber}`);
    toaster.success('계좌번호가 복사됐어요');
  } catch (e) {
    toaster.error('복사를 실패했어요<br/>다시 시도해 주세요');
  }
};

const clickLinkCopy = async () => {
  try {
    await toClipboard(`${window.location.origin}`);
    toaster.success('청첩장 링크가 복사됐어요');
  } catch (e) {
    toaster.error('복사를 실패했어요<br/>다시 시도해 주세요');
  }
};

const clickKakaoShare = () => {
  // eslint-disable-next-line no-undef
  Kakao.Share.sendDefault({
    objectType: 'location',
    address: '서울 강남구 봉은사로 130',
    addressTitle: '노보텔 앰배서더 서울 강남',
    content: {
      title: '이수현 & 박인영 결혼합니다',
      description: `5월 28일 일요일 오후 2시
노보텔 앰배서더 강남`,
      imageUrl:
          'https://wedding-inyoung.netlify.app/assets/coverImage3-4f9fb644.jpeg',
      link: {
        // Must match the site domain registered in [My Application] > [Platform]
        mobileWebUrl: 'https://wedding-inyoung.netlify.app',
        webUrl: 'https://wedding-inyoung.netlify.app',
      },
    },
    buttons: [
      {
        title: '청첩장 보기',
        link: {
          mobileWebUrl: 'https://wedding-inyoung.netlify.app',
          webUrl: 'https://wedding-inyoung.netlify.app',
        },
      },
    ],
  });
};
</script>

<template>
  <div id="regards">
    <div class="regards">
      <img :src="regards" alt="regards" />
    </div>

    <div class="cake">
      <!-- <img :src="cake" alt="cake" /> -->
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
                이수현
              </div>
              <div class="bankInfo">
                농협 352-0510-2397-43
              </div>
            </div>

            <div class="blockRight">
              <v-btn
                rounded
                class="copyButton"
                width="74px"
                max-width="74px"
                @click=" clickBankCopy(3520510239743)"
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
                이성화 (신랑 아버지)
              </div>
              <div class="bankInfo">
                농협 352-1037-5190-83
              </div>
            </div>

            <div class="blockRight">
              <v-btn
                rounded
                class="copyButton"
                width="74px"
                max-width="74px"
                @click="clickBankCopy(3521037519083)"
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
                정신숙 (신랑 어머니)
              </div>
              <div class="bankInfo">
                농협 352-1264-4478-63
              </div>
            </div>

            <div class="blockRight">
              <v-btn
                rounded
                class="copyButton"
                width="74px"
                max-width="74px"
                @click="clickBankCopy(3521264447863)"
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
          신부측 계좌번호
        </template>

        <template #text>
          <div class="accContent">
            <div class="blockLeft">
              <div class="personInfo">
                박인영
              </div>
              <div class="bankInfo">
                우리은행 1002-250-337875
              </div>
            </div>

            <div class="blockRight">
              <v-btn
                rounded
                class="copyButton"
                width="74px"
                max-width="74px"
                @click=" clickBankCopy(1002250337875)"
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
                김윤희(신부 어머니)
              </div>
              <div class="bankInfo">
                씨티은행 303-01890-264
              </div>
            </div>

            <div class="blockRight">
              <v-btn
                rounded
                class="copyButton"
                width="74px"
                max-width="74px"
                @click="clickBankCopy(30301890264)"
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
        @click="clickKakaoShare"
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
    top: 90px;
    width: 100%;
    text-align: center;
  }

  .cake {
    position: absolute;
    top: 125px;
    width: 100%;
  }

  .accordion {
    position: absolute;
    top: 300px;
    width: calc(100% - 40px);
    margin: 0 20px;

    .accContent {
      display: flex;
      justify-content: space-between;

      .blockLeft {
        color: #64837D;
        font-family: 'Noto Sans KR';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 19px;
        text-align: left;

        .personInfo {
          font-weight: 600;
        }
      }

      .blockRight {
        display: flex;
        justify-content: center;
        align-items: center;

        button {
          padding: 0;
          font-family: 'Noto Sans KR';
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
    justify-content: center;
    gap: 8px;
    width: 100%;

    position: absolute;
    bottom: 60px;

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

    font-family: 'Noto Sans KR';
    font-style: normal;
    font-weight: 300;
    font-size: 12px;
    line-height: 200%;
  }
}
</style>

import { StyleSheet, Text, View } from 'react-native';

import {
  Defs,
  FeBlend,
  FeFlood,
  FeGaussianBlur,
  Filter,
  G,
  Path,
  RadialGradient,
  Stop,
  Svg,
} from 'react-native-svg';

import { IllustrationLayer } from '@/components/svg/illustration-layer';
import { colors, FontFamily } from '@/theme';

export function FeaturesMascot() {
  return (
    <View style={styles.mascotSceneCompact}>
      <IllustrationLayer top={26} right={33} bottom={-30} left={94} width={264} height={94}>
        <Path
          d="M131.636 122.86C204.337 122.86 263.272 95.3571 263.272 61.4301C263.272 27.5032 204.337 0 131.636 0C58.9355 0 0 27.5032 0 61.4301C0 95.3571 58.9355 122.86 131.636 122.86Z"
          fill="url(#paint0_radial_1_322)"
        />
        <Defs>
          <RadialGradient
            id="paint0_radial_1_322"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(131.636 86.0022) scale(131.636 61.4301)"
          >
            <Stop stopColor="#BBF7D0" stopOpacity="0.65" />
            <Stop offset="1" stopColor={colors.background} stopOpacity="0" />
          </RadialGradient>
        </Defs>
      </IllustrationLayer>

      <IllustrationLayer top={79} right={15} bottom={0} left={15} width={360} height={41}>
        <Path
          d="M0 40.1619C40.9534 13.2496 87.7574 3.88886 140.412 12.0795C193.066 20.2702 239.87 17.93 280.824 5.05895C310.076 -3.13173 336.403 -1.37659 359.805 10.3244V40.1619H0Z"
          fill={colors.primaryMuted}
        />
      </IllustrationLayer>

      <IllustrationLayer top={102} right={15} bottom={0} left={15} width={360} height={18}>
        <Path
          d="M0 17.1614C29.2525 6.63056 64.3554 3.12026 105.309 6.63056C146.262 10.1409 187.216 8.97075 228.169 3.12026C263.272 -1.56013 307.151 -0.975082 359.805 4.87541V17.1614H0Z"
          fill="#A7F3D0"
        />
      </IllustrationLayer>

      <IllustrationLayer top={78} right={311} bottom={18} left={56} width={23} height={23}>
        <Path
          d="M11.4085 22.8169C17.7092 22.8169 22.8169 17.7092 22.8169 11.4085C22.8169 5.10774 17.7092 0 11.4085 0C5.10774 0 0 5.10774 0 11.4085C0 17.7092 5.10774 22.8169 11.4085 22.8169Z"
          fill="#6EE7B7"
        />
      </IllustrationLayer>

      <IllustrationLayer top={76} right={301} bottom={25} left={71} width={18} height={18}>
        <Path
          d="M8.77574 17.5515C13.6224 17.5515 17.5515 13.6224 17.5515 8.77574C17.5515 3.92903 13.6224 0 8.77574 0C3.92903 0 0 3.92903 0 8.77574C0 13.6224 3.92903 17.5515 8.77574 17.5515Z"
          fill="#6EE7B7"
        />
      </IllustrationLayer>

      <IllustrationLayer top={87} right={326} bottom={18} left={50} width={15} height={15}>
        <Path
          d="M7.02059 14.0412C10.898 14.0412 14.0412 10.898 14.0412 7.02059C14.0412 3.14322 10.898 0 7.02059 0C3.14322 0 0 3.14322 0 7.02059C0 10.898 3.14322 14.0412 7.02059 14.0412Z"
          fill="#86EFAC"
        />
      </IllustrationLayer>

      <IllustrationLayer top={68} right={59} bottom={25} left={305} width={27} height={27}>
        <Path
          d="M13.1636 26.3272C20.4337 26.3272 26.3272 20.4337 26.3272 13.1636C26.3272 5.89355 20.4337 0 13.1636 0C5.89355 0 0 5.89355 0 13.1636C0 20.4337 5.89355 26.3272 13.1636 26.3272Z"
          fill="#6EE7B7"
        />
      </IllustrationLayer>

      <IllustrationLayer top={67} right={49} bottom={33} left={321} width={20} height={20}>
        <Path
          d="M9.65331 19.3066C14.9847 19.3066 19.3066 14.9847 19.3066 9.65331C19.3066 4.32193 14.9847 0 9.65331 0C4.32193 0 0 4.32193 0 9.65331C0 14.9847 4.32193 19.3066 9.65331 19.3066Z"
          fill="#6EE7B7"
        />
      </IllustrationLayer>

      <IllustrationLayer top={77} right={39} bottom={28} left={337} width={15} height={15}>
        <Path
          d="M7.02059 14.0412C10.898 14.0412 14.0412 10.898 14.0412 7.02059C14.0412 3.14322 10.898 0 7.02059 0C3.14322 0 0 3.14322 0 7.02059C0 10.898 3.14322 14.0412 7.02059 14.0412Z"
          fill="#86EFAC"
        />
      </IllustrationLayer>

      <Svg style={styles.motionLines} width="21" height="36" viewBox="0 0 21 36" fill="none">
        <G opacity="0.9">
          <Path
            d="M1.31671 6.58214L13.6027 1.3167"
            stroke="#4ADE80"
            strokeWidth="2.63272"
            strokeLinecap="round"
          />
          <Path
            d="M4.82703 20.6233H18.8682"
            stroke="#4ADE80"
            strokeWidth="2.63272"
            strokeLinecap="round"
          />
          <Path
            d="M1.31671 33.7869L11.8476 28.5215"
            stroke="#4ADE80"
            strokeWidth="2.63272"
            strokeLinecap="round"
          />
        </G>
      </Svg>

      <IllustrationLayer top={44} right={138} bottom={5} left={185} width={67} height={71}>
        <Path
          d="M33.3478 70.2059C51.7653 70.2059 66.6956 54.4898 66.6956 35.1029C66.6956 15.7161 51.7653 0 33.3478 0C14.9303 0 0 15.7161 0 35.1029C0 54.4898 14.9303 70.2059 33.3478 70.2059Z"
          fill="url(#paint0_radial_1_335)"
        />
        <Defs>
          <RadialGradient
            id="paint0_radial_1_335"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(33.3478 35.1029) scale(33.3478 35.1029)"
          >
            <Stop stopColor="#4ADE80" stopOpacity="0.35" />
            <Stop offset="1" stopColor="#4ADE80" stopOpacity="0" />
          </RadialGradient>
        </Defs>
      </IllustrationLayer>

      <IllustrationLayer top={81} right={145} bottom={4} left={192} width={53} height={36}>
        <Path
          d="M26.3272 35.1029C40.8673 35.1029 52.6544 27.2449 52.6544 17.5515C52.6544 7.85806 40.8673 0 26.3272 0C11.7871 0 0 7.85806 0 17.5515C0 27.2449 11.7871 35.1029 26.3272 35.1029Z"
          fill="#1A1A2E"
        />
      </IllustrationLayer>

      <IllustrationLayer top={62} right={147} bottom={15} left={194} width={50} height={43}>
        <Path
          d="M24.5721 42.1235C38.1428 42.1235 49.1441 32.6939 49.1441 21.0618C49.1441 9.42967 38.1428 0 24.5721 0C11.0013 0 0 9.42967 0 21.0618C0 32.6939 11.0013 42.1235 24.5721 42.1235Z"
          fill="#1A1A2E"
        />
      </IllustrationLayer>

      <IllustrationLayer top={33} right={145} bottom={33} left={192} width={53} height={53}>
        <Path
          d="M26.3272 52.6544C40.8673 52.6544 52.6544 40.8673 52.6544 26.3272C52.6544 11.7871 40.8673 0 26.3272 0C11.7871 0 0 11.7871 0 26.3272C0 40.8673 11.7871 52.6544 26.3272 52.6544Z"
          fill="#1A1A2E"
        />
      </IllustrationLayer>

      <IllustrationLayer top={81} right={185} bottom={25} left={187} width={18} height={15}>
        <Path
          d="M6.854 13.9349C11.5356 15.1894 16.1442 13.1701 17.1478 9.4249C18.1513 5.67965 15.1697 1.62662 10.4881 0.372203C5.80657 -0.882216 1.19789 1.137 0.194352 4.88224C-0.809184 8.62749 2.17244 12.6805 6.854 13.9349Z"
          fill="#1A1A2E"
        />
      </IllustrationLayer>

      <IllustrationLayer top={81} right={140} bottom={25} left={233} width={18} height={15}>
        <Path
          d="M10.4882 13.9349C15.1697 12.6805 18.1513 8.6275 17.1478 4.88225C16.1443 1.13701 11.5356 -0.882208 6.85403 0.372212C2.17247 1.62663 -0.809154 5.67966 0.194381 9.42491C1.19792 13.1702 5.8066 15.1894 10.4882 13.9349Z"
          fill="#1A1A2E"
        />
      </IllustrationLayer>

      <IllustrationLayer top={24} right={180} bottom={84} left={205} width={9} height={15}>
        <Path
          d="M6.80157 12.9446L1.53613 1.53612"
          stroke="#1A1A2E"
          strokeWidth="3.07151"
          strokeLinecap="round"
        />
      </IllustrationLayer>

      <IllustrationLayer top={14} right={180} bottom={95} left={194} width={15} height={13}>
        <Path
          d="M10.1618 10.5683C13.735 8.06636 15.2794 4.10703 13.6115 1.72492C11.9435 -0.657193 7.6947 -0.560038 4.12153 1.94192C0.548359 4.44388 -0.996107 8.40321 0.671867 10.7853C2.33984 13.1674 6.58863 13.0703 10.1618 10.5683Z"
          fill={colors.primary}
        />
      </IllustrationLayer>

      <IllustrationLayer top={24} right={157} bottom={84} left={227} width={9} height={15}>
        <Path
          d="M1.53613 12.9446L6.80157 1.53612"
          stroke="#1A1A2E"
          strokeWidth="3.07151"
          strokeLinecap="round"
        />
      </IllustrationLayer>

      <IllustrationLayer top={14} right={147} bottom={95} left={227} width={15} height={13}>
        <Path
          d="M4.12155 10.5683C7.69472 13.0703 11.9435 13.1674 13.6115 10.7853C15.2794 8.40321 13.735 4.44389 10.1618 1.94193C6.58864 -0.560033 2.33986 -0.657188 0.671883 1.72493C-0.99609 4.10704 0.548376 8.06636 4.12155 10.5683Z"
          fill={colors.primary}
        />
      </IllustrationLayer>

      <IllustrationLayer top={48} right={171} bottom={48} left={198} width={36} height={37}>
        <G opacity="0.3" filter="url(#filter0_f_1_345)">
          <Path
            d="M17.5515 29.8375C23.3675 29.8375 28.0823 24.7298 28.0823 18.429C28.0823 12.1283 23.3675 7.02058 17.5515 7.02058C11.7354 7.02058 7.02057 12.1283 7.02057 18.429C7.02057 24.7298 11.7354 29.8375 17.5515 29.8375Z"
            fill="#4ADE80"
          />
        </G>
        <Defs>
          <Filter
            id="filter0_f_1_345"
            x="-1.95503e-05"
            y="-4.29153e-06"
            width="35.1029"
            height="36.8581"
            filterUnits="userSpaceOnUse"
          >
            <FeFlood floodOpacity="0" result="BackgroundImageFix" />
            <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <FeGaussianBlur stdDeviation="3.51029" result="effect1_foregroundBlur_1_345" />
          </Filter>
        </Defs>
      </IllustrationLayer>

      <IllustrationLayer top={48} right={150} bottom={48} left={219} width={36} height={37}>
        <G opacity="0.3" filter="url(#filter0_f_1_346)">
          <Path
            d="M17.5515 29.8375C23.3675 29.8375 28.0823 24.7298 28.0823 18.429C28.0823 12.1283 23.3675 7.02058 17.5515 7.02058C11.7354 7.02058 7.02057 12.1283 7.02057 18.429C7.02057 24.7298 11.7354 29.8375 17.5515 29.8375Z"
            fill="#4ADE80"
          />
        </G>
        <Defs>
          <Filter
            id="filter0_f_1_346"
            x="-1.95503e-05"
            y="-4.29153e-06"
            width="35.1029"
            height="36.8581"
            filterUnits="userSpaceOnUse"
          >
            <FeFlood floodOpacity="0" result="BackgroundImageFix" />
            <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <FeGaussianBlur stdDeviation="3.51029" result="effect1_foregroundBlur_1_346" />
          </Filter>
        </Defs>
      </IllustrationLayer>

      <IllustrationLayer top={51} right={174} bottom={51} left={200} width={16} height={18}>
        <Path
          d="M7.89816 17.5515C12.2602 17.5515 15.7963 13.6224 15.7963 8.77574C15.7963 3.92903 12.2602 0 7.89816 0C3.53613 0 0 3.92903 0 8.77574C0 13.6224 3.53613 17.5515 7.89816 17.5515Z"
          fill="#4ADE80"
        />
      </IllustrationLayer>

      <IllustrationLayer top={51} right={153} bottom={51} left={221} width={16} height={18}>
        <Path
          d="M7.89816 17.5515C12.2602 17.5515 15.7963 13.6224 15.7963 8.77574C15.7963 3.92903 12.2602 0 7.89816 0C3.53613 0 0 3.92903 0 8.77574C0 13.6224 3.53613 17.5515 7.89816 17.5515Z"
          fill="#4ADE80"
        />
      </IllustrationLayer>

      <IllustrationLayer top={54} right={177} bottom={54} left={203} width={10} height={12}>
        <Path
          opacity="0.6"
          d="M4.82665 11.4085C7.49234 11.4085 9.65331 8.85459 9.65331 5.70423C9.65331 2.55387 7.49234 0 4.82665 0C2.16097 0 0 2.55387 0 5.70423C0 8.85459 2.16097 11.4085 4.82665 11.4085Z"
          fill="#86EFAC"
        />
      </IllustrationLayer>

      <IllustrationLayer top={54} right={156} bottom={54} left={224} width={10} height={12}>
        <Path
          opacity="0.6"
          d="M4.82665 11.4085C7.49234 11.4085 9.65331 8.85459 9.65331 5.70423C9.65331 2.55387 7.49234 0 4.82665 0C2.16097 0 0 2.55387 0 5.70423C0 8.85459 2.16097 11.4085 4.82665 11.4085Z"
          fill="#86EFAC"
        />
      </IllustrationLayer>

      <IllustrationLayer top={52} right={177} bottom={61} left={208} width={6} height={7}>
        <Path
          opacity="0.95"
          d="M2.63272 6.14301C4.08673 6.14301 5.26544 4.76785 5.26544 3.07151C5.26544 1.37516 4.08673 0 2.63272 0C1.17871 0 0 1.37516 0 3.07151C0 4.76785 1.17871 6.14301 2.63272 6.14301Z"
          fill={colors.surface}
        />
      </IllustrationLayer>

      <IllustrationLayer top={52} right={156} bottom={61} left={229} width={6} height={7}>
        <Path
          opacity="0.95"
          d="M2.63272 6.14301C4.08673 6.14301 5.26544 4.76785 5.26544 3.07151C5.26544 1.37516 4.08673 0 2.63272 0C1.17871 0 0 1.37516 0 3.07151C0 4.76785 1.17871 6.14301 2.63272 6.14301Z"
          fill={colors.surface}
        />
      </IllustrationLayer>

      <IllustrationLayer top={72} right={163} bottom={44} left={211} width={18} height={5}>
        <Path
          d="M0.877625 0.877609C6.14307 4.97295 11.4085 4.97295 16.6739 0.877609"
          stroke={colors.primary}
          strokeWidth="1.75515"
          strokeLinecap="round"
        />
      </IllustrationLayer>

      <IllustrationLayer top={12} right={226} bottom={37} left={34} width={130} height={71}>
        <Path
          d="M115.84 0H14.0412C6.28645 0 0 6.28645 0 14.0412V56.1647C0 63.9194 6.28645 70.2059 14.0412 70.2059H115.84C123.594 70.2059 129.881 63.9194 129.881 56.1647V14.0412C129.881 6.28645 123.594 0 115.84 0Z"
          fill={colors.successSurface}
        />
      </IllustrationLayer>

      <IllustrationLayer top={49} right={212} bottom={56} left={160} width={19} height={15}>
        <Path d="M2.63272 0L18.429 10.5309L0 14.0412L2.63272 0Z" fill={colors.successSurface} />
      </IllustrationLayer>

      <View style={styles.quote}>
        <Text style={[styles.quoteLine, styles.quoteStart]}>&quot;Progress starts</Text>
        <Text style={[styles.quoteLine, styles.quoteMiddle]}>with a single</Text>
        <Text style={[styles.quoteLine, styles.quoteEnd]}>nudge.&quot;</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mascotSceneCompact: {
    position: 'relative',
    alignSelf: 'center',
    overflow: 'visible',
    height: 119,
    width: 390,
    maxWidth: '100%',
  },
  motionLines: {
    position: 'absolute',
    top: 49,
    left: 266,
    width: 18,
    height: 32,
  },
  quote: {
    position: 'absolute',
    top: 24,
    left: 54,
    width: 90,
    height: 44,
  },
  quoteLine: {
    position: 'absolute',
    height: 14,
    textAlign: 'center',
    color: colors.text.primary,
    fontFamily: FontFamily.display,
    fontSize: 11.41,
    fontWeight: '700',
  },
  quoteStart: {
    top: 0.31,
    left: 0.42,
    width: 90,
  },
  quoteMiddle: {
    top: 15.31,
    left: 11.42,
    width: 68,
  },
  quoteEnd: {
    top: 30.31,
    left: 22.42,
    width: 46,
  },
});

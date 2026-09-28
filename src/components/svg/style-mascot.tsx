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

export function StyleMascot() {
  return (
    <View style={styles.mascotSceneCompact}>
      <IllustrationLayer top={21} right={68} bottom={-23} left={116} width={206} height={73}>
        <Path
          d="M102.866 96.0085C159.678 96.0085 205.732 74.5163 205.732 48.0042C205.732 21.4922 159.678 0 102.866 0C46.0548 0 0 21.4922 0 48.0042C0 74.5163 46.0548 96.0085 102.866 96.0085Z"
          fill="url(#paint0_radial_1_461)"
        />
        <Defs>
          <RadialGradient
            id="paint0_radial_1_461"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(102.866 67.2059) scale(102.866 48.0042)"
          >
            <Stop stopColor="#BBF7D0" stopOpacity="0.65" />
            <Stop offset="1" stopColor={colors.background} stopOpacity="0" />
          </RadialGradient>
        </Defs>
      </IllustrationLayer>

      <IllustrationLayer top={62} right={54} bottom={0} left={54} width={282} height={32}>
        <Path
          d="M0 31.3843C32.0028 10.3539 68.5775 3.03892 109.724 9.43949C150.871 15.8401 187.445 14.0113 219.448 3.95329C242.307 -2.44728 262.88 -1.07573 281.168 8.06794V31.3843H0Z"
          fill={colors.primaryMuted}
        />
      </IllustrationLayer>

      <IllustrationLayer top={80} right={54} bottom={0} left={54} width={282} height={14}>
        <Path
          d="M0 13.4107C22.8592 5.18141 50.2902 2.43831 82.293 5.18141C114.296 7.92451 146.299 7.01014 178.302 2.43831C205.733 -1.21916 240.021 -0.761972 281.168 3.80986V13.4107H0Z"
          fill="#A7F3D0"
        />
      </IllustrationLayer>

      <IllustrationLayer top={61} right={286} bottom={14} left={87} width={18} height={18}>
        <Path
          d="M8.91507 17.8301C13.8387 17.8301 17.8301 13.8387 17.8301 8.91507C17.8301 3.99141 13.8387 0 8.91507 0C3.99141 0 0 3.99141 0 8.91507C0 13.8387 3.99141 17.8301 8.91507 17.8301Z"
          fill="#6EE7B7"
        />
      </IllustrationLayer>

      <IllustrationLayer top={60} right={278} bottom={20} left={98} width={14} height={14}>
        <Path
          d="M6.85775 13.7155C10.6452 13.7155 13.7155 10.6452 13.7155 6.85775C13.7155 3.07032 10.6452 0 6.85775 0C3.07032 0 0 3.07032 0 6.85775C0 10.6452 3.07032 13.7155 6.85775 13.7155Z"
          fill="#6EE7B7"
        />
      </IllustrationLayer>

      <IllustrationLayer top={68} right={297} bottom={14} left={82} width={11} height={11}>
        <Path
          d="M5.4862 10.9724C8.51614 10.9724 10.9724 8.51614 10.9724 5.4862C10.9724 2.45626 8.51614 0 5.4862 0C2.45626 0 0 2.45626 0 5.4862C0 8.51614 2.45626 10.9724 5.4862 10.9724Z"
          fill="#86EFAC"
        />
      </IllustrationLayer>

      <IllustrationLayer top={53} right={89} bottom={20} left={281} width={21} height={21}>
        <Path
          d="M10.2866 20.5732C15.9678 20.5732 20.5732 15.9678 20.5732 10.2866C20.5732 4.60548 15.9678 0 10.2866 0C4.60548 0 0 4.60548 0 10.2866C0 15.9678 4.60548 20.5732 10.2866 20.5732Z"
          fill="#6EE7B7"
        />
      </IllustrationLayer>

      <IllustrationLayer top={52} right={81} bottom={26} left={294} width={16} height={16}>
        <Path
          d="M7.54352 15.087C11.7097 15.087 15.087 11.7097 15.087 7.54352C15.087 3.37735 11.7097 0 7.54352 0C3.37735 0 0 3.37735 0 7.54352C0 11.7097 3.37735 15.087 7.54352 15.087Z"
          fill="#6EE7B7"
        />
      </IllustrationLayer>

      <IllustrationLayer top={60} right={73} bottom={22} left={306} width={11} height={11}>
        <Path
          d="M5.4862 10.9724C8.51614 10.9724 10.9724 8.51614 10.9724 5.4862C10.9724 2.45626 8.51614 0 5.4862 0C2.45626 0 0 2.45626 0 5.4862C0 8.51614 2.45626 10.9724 5.4862 10.9724Z"
          fill="#86EFAC"
        />
      </IllustrationLayer>

      <Svg style={styles.motionLines} width="16" height="28" viewBox="0 0 16 28" fill="none">
        <G opacity="0.9">
          <Path
            d="M1.02893 5.14358L10.6298 1.02893"
            stroke="#4ADE80"
            strokeWidth="2.05732"
            strokeLinecap="round"
          />
          <Path
            d="M3.77197 16.116H14.7444"
            stroke="#4ADE80"
            strokeWidth="2.05732"
            strokeLinecap="round"
          />
          <Path
            d="M1.02893 26.4026L9.25823 22.2879"
            stroke="#4ADE80"
            strokeWidth="2.05732"
            strokeLinecap="round"
          />
        </G>
      </Svg>

      <IllustrationLayer top={34} right={150} bottom={4} left={187} width={53} height={55}>
        <Path
          d="M26.0595 54.862C40.4517 54.862 52.1189 42.5807 52.1189 27.431C52.1189 12.2813 40.4517 0 26.0595 0C11.6672 0 0 12.2813 0 27.431C0 42.5807 11.6672 54.862 26.0595 54.862Z"
          fill="url(#paint0_radial_1_474)"
        />
        <Defs>
          <RadialGradient
            id="paint0_radial_1_474"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(26.0595 27.431) scale(26.0595 27.431)"
          >
            <Stop stopColor="#4ADE80" stopOpacity="0.35" />
            <Stop offset="1" stopColor="#4ADE80" stopOpacity="0" />
          </RadialGradient>
        </Defs>
      </IllustrationLayer>

      <IllustrationLayer top={63} right={156} bottom={3} left={193} width={42} height={28}>
        <Path
          d="M20.5732 27.431C31.9355 27.431 41.1465 21.2904 41.1465 13.7155C41.1465 6.14064 31.9355 0 20.5732 0C9.21096 0 0 6.14064 0 13.7155C0 21.2904 9.21096 27.431 20.5732 27.431Z"
          fill="#1A1A2E"
        />
      </IllustrationLayer>

      <IllustrationLayer top={49} right={157} bottom={12} left={194} width={39} height={33}>
        <Path
          d="M19.2017 32.9172C29.8065 32.9172 38.4034 25.5484 38.4034 16.4586C38.4034 7.36877 29.8065 0 19.2017 0C8.59689 0 0 7.36877 0 16.4586C0 25.5484 8.59689 32.9172 19.2017 32.9172Z"
          fill="#1A1A2E"
        />
      </IllustrationLayer>

      <IllustrationLayer top={26} right={156} bottom={26} left={193} width={42} height={42}>
        <Path
          d="M20.5732 41.1465C31.9355 41.1465 41.1465 31.9355 41.1465 20.5732C41.1465 9.21096 31.9355 0 20.5732 0C9.21096 0 0 9.21096 0 20.5732C0 31.9355 9.21096 41.1465 20.5732 41.1465Z"
          fill="#1A1A2E"
        />
      </IllustrationLayer>

      <IllustrationLayer top={63} right={187} bottom={19} left={189} width={14} height={12}>
        <Path
          d="M5.35599 10.8894C9.01437 11.8696 12.6158 10.2917 13.4 7.36502C14.1842 4.43832 11.8542 1.27111 8.19586 0.290846C4.53748 -0.689413 0.936052 0.88849 0.151844 3.81519C-0.632363 6.74189 1.69761 9.90911 5.35599 10.8894Z"
          fill="#1A1A2E"
        />
      </IllustrationLayer>

      <IllustrationLayer top={63} right={152} bottom={19} left={224} width={14} height={12}>
        <Path
          d="M8.19588 10.8894C11.8543 9.90911 14.1842 6.7419 13.4 3.81519C12.6158 0.888493 9.01439 -0.68941 5.35601 0.290849C1.69763 1.27111 -0.632341 4.43833 0.151867 7.36503C0.936074 10.2917 4.5375 11.8696 8.19588 10.8894Z"
          fill="#1A1A2E"
        />
      </IllustrationLayer>

      <IllustrationLayer top={19} right={183} bottom={66} left={203} width={7} height={12}>
        <Path
          d="M5.31509 10.1155L1.20044 1.20039"
          stroke="#1A1A2E"
          strokeWidth="2.40021"
          strokeLinecap="round"
        />
      </IllustrationLayer>

      <IllustrationLayer top={11} right={183} bottom={74} left={194} width={12} height={10}>
        <Path
          d="M7.94096 8.25855C10.7332 6.30341 11.9401 3.20942 10.6367 1.34793C9.33325 -0.513562 6.01306 -0.437641 3.22082 1.5175C0.428591 3.47265 -0.778323 6.56664 0.525105 8.42813C1.82853 10.2896 5.14872 10.2137 7.94096 8.25855Z"
          fill={colors.primary}
        />
      </IllustrationLayer>

      <IllustrationLayer top={19} right={166} bottom={66} left={220} width={7} height={12}>
        <Path
          d="M1.20044 10.1155L5.31509 1.20039"
          stroke="#1A1A2E"
          strokeWidth="2.40021"
          strokeLinecap="round"
        />
      </IllustrationLayer>

      <IllustrationLayer top={11} right={157} bottom={74} left={220} width={12} height={10}>
        <Path
          d="M3.22079 8.25855C6.01302 10.2137 9.33321 10.2896 10.6366 8.42812C11.9401 6.56664 10.7332 3.47264 7.94092 1.5175C5.14868 -0.437642 1.82849 -0.513563 0.525066 1.34793C-0.778363 3.20941 0.428552 6.30341 3.22079 8.25855Z"
          fill={colors.primary}
        />
      </IllustrationLayer>

      <IllustrationLayer top={38} right={176} bottom={38} left={197} width={28} height={29}>
        <G opacity="0.3" filter="url(#filter0_f_1_484)">
          <Path
            d="M13.7155 23.3164C18.2604 23.3164 21.9448 19.3249 21.9448 14.4013C21.9448 9.47762 18.2604 5.48621 13.7155 5.48621C9.17059 5.48621 5.48621 9.47762 5.48621 14.4013C5.48621 19.3249 9.17059 23.3164 13.7155 23.3164Z"
            fill="#4ADE80"
          />
        </G>
        <Defs>
          <Filter
            id="filter0_f_1_484"
            x="6.19888e-06"
            y="6.19888e-06"
            width="27.431"
            height="28.8025"
            filterUnits="userSpaceOnUse"
          >
            <FeFlood floodOpacity="0" result="BackgroundImageFix" />
            <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <FeGaussianBlur stdDeviation="2.7431" result="effect1_foregroundBlur_1_484" />
          </Filter>
        </Defs>
      </IllustrationLayer>

      <IllustrationLayer top={38} right={160} bottom={38} left={214} width={28} height={29}>
        <G opacity="0.3" filter="url(#filter0_f_1_485)">
          <Path
            d="M13.7155 23.3164C18.2604 23.3164 21.9448 19.3249 21.9448 14.4013C21.9448 9.47762 18.2604 5.48621 13.7155 5.48621C9.17059 5.48621 5.48621 9.47762 5.48621 14.4013C5.48621 19.3249 9.17059 23.3164 13.7155 23.3164Z"
            fill="#4ADE80"
          />
        </G>
        <Defs>
          <Filter
            id="filter0_f_1_485"
            x="6.19888e-06"
            y="6.19888e-06"
            width="27.431"
            height="28.8025"
            filterUnits="userSpaceOnUse"
          >
            <FeFlood floodOpacity="0" result="BackgroundImageFix" />
            <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <FeGaussianBlur stdDeviation="2.7431" result="effect1_foregroundBlur_1_485" />
          </Filter>
        </Defs>
      </IllustrationLayer>

      <IllustrationLayer top={40} right={179} bottom={40} left={199} width={13} height={14}>
        <Path
          d="M6.17197 13.7155C9.58066 13.7155 12.3439 10.6452 12.3439 6.85775C12.3439 3.07032 9.58066 0 6.17197 0C2.76329 0 0 3.07032 0 6.85775C0 10.6452 2.76329 13.7155 6.17197 13.7155Z"
          fill="#4ADE80"
        />
      </IllustrationLayer>

      <IllustrationLayer top={40} right={162} bottom={40} left={216} width={13} height={14}>
        <Path
          d="M6.17197 13.7155C9.58066 13.7155 12.3439 10.6452 12.3439 6.85775C12.3439 3.07032 9.58066 0 6.17197 0C2.76329 0 0 3.07032 0 6.85775C0 10.6452 2.76329 13.7155 6.17197 13.7155Z"
          fill="#4ADE80"
        />
      </IllustrationLayer>

      <IllustrationLayer top={42} right={181} bottom={42} left={202} width={8} height={9}>
        <Path
          opacity="0.6"
          d="M3.77176 8.91507C5.85485 8.91507 7.54352 6.91937 7.54352 4.45754C7.54352 1.99571 5.85485 0 3.77176 0C1.68868 0 0 1.99571 0 4.45754C0 6.91937 1.68868 8.91507 3.77176 8.91507Z"
          fill="#86EFAC"
        />
      </IllustrationLayer>

      <IllustrationLayer top={42} right={164} bottom={42} left={218} width={8} height={9}>
        <Path
          opacity="0.6"
          d="M3.77176 8.91507C5.85485 8.91507 7.54352 6.91937 7.54352 4.45754C7.54352 1.99571 5.85485 0 3.77176 0C1.68868 0 0 1.99571 0 4.45754C0 6.91937 1.68868 8.91507 3.77176 8.91507Z"
          fill="#86EFAC"
        />
      </IllustrationLayer>

      <IllustrationLayer top={41} right={181} bottom={48} left={205} width={5} height={5}>
        <Path
          opacity="0.95"
          d="M2.05732 4.80043C3.19355 4.80043 4.11465 3.72581 4.11465 2.40021C4.11465 1.07461 3.19355 0 2.05732 0C0.921096 0 0 1.07461 0 2.40021C0 3.72581 0.921096 4.80043 2.05732 4.80043Z"
          fill={colors.surface}
        />
      </IllustrationLayer>

      <IllustrationLayer top={41} right={164} bottom={48} left={222} width={5} height={5}>
        <Path
          opacity="0.95"
          d="M2.05732 4.80043C3.19355 4.80043 4.11465 3.72581 4.11465 2.40021C4.11465 1.07461 3.19355 0 2.05732 0C0.921096 0 0 1.07461 0 2.40021C0 3.72581 0.921096 4.80043 2.05732 4.80043Z"
          fill={colors.surface}
        />
      </IllustrationLayer>

      <IllustrationLayer top={56} right={170} bottom={35} left={207} width={14} height={4}>
        <Path
          d="M0.685791 0.685822C4.80044 3.8861 8.91509 3.8861 13.0297 0.685822"
          stroke={colors.primary}
          strokeWidth="1.37155"
          strokeLinecap="round"
        />
      </IllustrationLayer>

      <IllustrationLayer top={10} right={219} bottom={29} left={69} width={102} height={55}>
        <Path
          d="M90.5223 0H10.9724C4.91251 0 0 4.91251 0 10.9724V43.8896C0 49.9495 4.91251 54.862 10.9724 54.862H90.5223C96.5822 54.862 101.495 49.9495 101.495 43.8896V10.9724C101.495 4.91251 96.5822 0 90.5223 0Z"
          fill={colors.successSurface}
        />
      </IllustrationLayer>

      <IllustrationLayer top={38} right={208} bottom={44} left={168} width={15} height={11}>
        <Path d="M2.05732 0L14.4013 8.2293L0 10.9724L2.05732 0Z" fill={colors.successSurface} />
      </IllustrationLayer>

      <View style={styles.quote}>
        <Text style={[styles.quoteLine, styles.quoteStart]}>&quot;&quot;Discomfort today.</Text>
        <Text style={[styles.quoteLine, styles.quoteMiddle]}>A better you</Text>
        <Text style={[styles.quoteLine, styles.quoteEnd]}>tomorrow.&quot;&quot;</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mascotSceneCompact: {
    position: 'relative',
    alignSelf: 'center',
    overflow: 'visible',
    height: 93,
    width: 390,
    maxWidth: '100%',
  },
  motionLines: {
    position: 'absolute',
    top: 38,
    left: 251,
    width: 14,
    height: 25,
  },
  quote: {
    position: 'absolute',
    top: 19,
    left: 76,
    width: 89,
    height: 34,
  },
  quoteLine: {
    position: 'absolute',
    height: 11,
    textAlign: 'center',
    color: colors.text.primary,
    fontFamily: FontFamily.display,
    fontSize: 8.92,
    fontWeight: '700',
  },
  quoteStart: {
    top: 0.48,
    left: 0.33,
    width: 89,
  },
  quoteMiddle: {
    top: 11.48,
    left: 17.33,
    width: 54,
  },
  quoteEnd: {
    top: 23.48,
    left: 16.33,
    width: 56,
  },
});

import { StyleSheet, View } from 'react-native';

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
} from 'react-native-svg';

import { IllustrationLayer as Layer } from '@/components/svg/illustration-layer';
import { colors } from '@/theme';

export function HomeHeaderScene() {
  return (
    <View style={styles.scene}>
      <Layer top={0} right={0} bottom={0} left={0} width={402} height={175}>
        <Path d="M402 0H0V174.997H402V0Z" fill={colors.selectedSurface} />
      </Layer>
      <Layer top={32} right={171} bottom={103} left={161} width={71} height={40}>
        <Path
          opacity="0.85"
          d="M35.0462 39.9993C54.4016 39.9993 70.0923 31.0451 70.0923 19.9996C70.0923 8.95414 54.4016 0 35.0462 0C15.6907 0 0 8.95414 0 19.9996C0 31.0451 15.6907 39.9993 35.0462 39.9993Z"
          fill={colors.surface}
        />
      </Layer>
      <Layer top={31} right={153} bottom={114} left={200} width={50} height={30}>
        <Path
          opacity="0.85"
          d="M24.7389 30C38.4018 30 49.4778 23.2843 49.4778 15C49.4778 6.71573 38.4018 0 24.7389 0C11.076 0 0 6.71573 0 15C0 23.2843 11.076 30 24.7389 30Z"
          fill={colors.surface}
        />
      </Layer>
      <Layer top={43} right={209} bottom={106} left={147} width={46} height={26}>
        <Path
          opacity="0.85"
          d="M22.6773 26C35.2017 26 45.3547 20.1797 45.3547 13C45.3547 5.8203 35.2017 0 22.6773 0C10.153 0 0 5.8203 0 13C0 20.1797 10.153 26 22.6773 26Z"
          fill={colors.surface}
        />
      </Layer>
      <Layer top={65} right={233} bottom={84} left={124} width={46} height={26}>
        <Path
          opacity="0.55"
          d="M22.6773 26C35.2017 26 45.3547 20.1797 45.3547 13C45.3547 5.8203 35.2017 0 22.6773 0C10.153 0 0 5.8203 0 13C0 20.1797 10.153 26 22.6773 26Z"
          fill={colors.surface}
        />
      </Layer>
      <Layer top={63} right={219} bottom={92} left={150} width={33} height={20}>
        <Path
          opacity="0.55"
          d="M16.4926 20C25.6012 20 32.9852 15.5228 32.9852 10C32.9852 4.47715 25.6012 0 16.4926 0C7.38399 0 0 4.47715 0 10C0 15.5228 7.38399 20 16.4926 20Z"
          fill={colors.surface}
        />
      </Layer>
      <Layer top={132} right={-10} bottom={0} left={-10} width={402} height={44}>
        <Path
          d="M-10.3077 43.3992C51.5384 12.0665 113.385 2.39996 175.231 14.3997C233.641 25.7329 286.897 23.0663 335 6.39989C364.549 -4.26659 390.318 -1.59997 412.308 14.3997V43.3992H-10.3077Z"
          fill={colors.primaryMuted}
        />
      </Layer>
      <Layer top={154} right={-10} bottom={0} left={-10} width={402} height={22}>
        <Path
          d="M-10.3077 21.1663C30.923 8.49985 79.0256 4.83325 134 10.1665C192.41 15.4997 249.103 13.4998 304.077 4.16659C343.246 -2.49996 379.323 -1.16665 412.308 8.16652V21.1663H-10.3077Z"
          fill="#A7F3D0"
        />
      </Layer>
      <Layer top={72} right={33} bottom={11} left={278} width={91} height={92}>
        <Path
          d="M45.3538 91.9984C70.4021 91.9984 90.7077 71.4038 90.7077 45.9992C90.7077 20.5945 70.4021 0 45.3538 0C20.3056 0 0 20.5945 0 45.9992C0 71.4038 20.3056 91.9984 45.3538 91.9984Z"
          fill="url(#paint0_radial_1_525)"
        />
        <Defs>
          <RadialGradient
            id="paint0_radial_1_525"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(45.3538 45.9992) scale(45.3538 45.9992)"
          >
            <Stop stopColor="#4ADE80" stopOpacity="0.3" />
            <Stop offset="1" stopColor="#4ADE80" stopOpacity="0" />
          </RadialGradient>
        </Defs>
      </Layer>
      <Layer top={132} right={47} bottom={3} left={293} width={62} height={40}>
        <Path
          d="M30.9231 39.9993C48.0014 39.9993 61.8462 31.0451 61.8462 19.9996C61.8462 8.95414 48.0014 0 30.9231 0C13.8447 0 0 8.95414 0 19.9996C0 31.0451 13.8447 39.9993 30.9231 39.9993Z"
          fill="#1A1A2E"
        />
      </Layer>
      <Layer top={107} right={48} bottom={18} left={294} width={60} height={50}>
        <Path
          d="M29.8923 49.9991C46.4014 49.9991 59.7846 38.8064 59.7846 24.9996C59.7846 11.1927 46.4014 0 29.8923 0C13.3832 0 0 11.1927 0 24.9996C0 38.8064 13.3832 49.9991 29.8923 49.9991Z"
          fill="#1A1A2E"
        />
      </Layer>
      <Layer top={64} right={44} bottom={45} left={290} width={69} height={66}>
        <Path
          d="M34.0154 65.9988C52.8016 65.9988 68.0308 51.2245 68.0308 32.9994C68.0308 14.7743 52.8016 0 34.0154 0C15.2292 0 0 14.7743 0 32.9994C0 51.2245 15.2292 65.9988 34.0154 65.9988Z"
          fill="#1A1A2E"
        />
      </Layer>
      <Layer top={129} right={94} bottom={28} left={284} width={24} height={19}>
        <Path
          d="M8.51165 17.8249C14.8457 20.3076 21.5363 18.5842 23.4557 13.9756C25.375 9.36694 21.7962 3.6183 15.4622 1.13563C9.12815 -1.34704 2.43748 0.376379 0.51815 4.985C-1.40118 9.59363 2.17763 15.3423 8.51165 17.8249Z"
          fill="#1A1A2E"
        />
      </Layer>
      <Layer top={129} right={38} bottom={28} left={339} width={24} height={19}>
        <Path
          d="M15.4621 17.8249C21.7961 15.3422 25.375 9.59361 23.4556 4.98499C21.5363 0.376361 14.8456 -1.34706 8.5116 1.13561C2.17758 3.61828 -1.40123 9.36692 0.518105 13.9755C2.43744 18.5842 9.1281 20.3076 15.4621 17.8249Z"
          fill="#1A1A2E"
        />
      </Layer>
      <Layer top={143} right={71} bottom={16} left={308} width={23} height={16}>
        <Path
          d="M18.5542 0H4.12315C1.846 0 0 1.79086 0 4V12C0 14.2091 1.846 16 4.12315 16H18.5542C20.8313 16 22.6773 14.2091 22.6773 12V4C22.6773 1.79086 20.8313 0 18.5542 0Z"
          fill={colors.surface}
        />
      </Layer>
      <Layer top={148} right={66} bottom={16} left={331} width={8} height={14}>
        <Path
          d="M1.09998 1.09998C4.53593 1.09998 6.25391 3.09998 6.25391 7.09998C6.25391 10.4333 4.53593 12.1 1.09998 12.1"
          stroke={colors.surface}
          strokeWidth="2.19996"
          strokeLinecap="round"
        />
      </Layer>
      <Layer top={52} right={91} bottom={108} left={305} width={10} height={19}>
        <Path
          d="M7.93521 16.7504L1.75049 1.75043"
          stroke="#1A1A2E"
          strokeWidth="3.49994"
          strokeLinecap="round"
        />
      </Layer>
      <Layer top={41} right={91} bottom={121} left={291} width={18} height={16}>
        <Path
          d="M12.7874 12.9289C17.1628 9.84499 18.9465 4.99061 16.7714 2.08636C14.5964 -0.817893 9.28629 -0.672229 4.91093 2.41171C0.535575 5.49564 -1.24815 10.35 0.926879 13.2543C3.1019 16.1585 8.41204 16.0129 12.7874 12.9289Z"
          fill={colors.primary}
        />
      </Layer>
      <Layer top={52} right={60} bottom={108} left={336} width={10} height={19}>
        <Path
          d="M1.75049 16.7504L7.93521 1.75043"
          stroke="#1A1A2E"
          strokeWidth="3.49994"
          strokeLinecap="round"
        />
      </Layer>
      <Layer top={41} right={46} bottom={121} left={337} width={18} height={16}>
        <Path
          d="M4.91093 12.9289C9.28629 16.0129 14.5964 16.1585 16.7715 13.2543C18.9465 10.35 17.1628 5.49565 12.7874 2.41172C8.41204 -0.672217 3.10191 -0.817881 0.92688 2.08637C-1.24814 4.99062 0.535576 9.845 4.91093 12.9289Z"
          fill={colors.primary}
        />
      </Layer>
      <Layer top={84} right={80} bottom={65} left={297} width={39} height={40}>
        <G opacity="0.28" filter="url(#filter0_f_1_537)">
          <Path
            d="M19.3693 32.9999C26.2008 32.9999 31.7388 27.1796 31.7388 19.9999C31.7388 12.8202 26.2008 6.99988 19.3693 6.99988C12.5379 6.99988 6.99988 12.8202 6.99988 19.9999C6.99988 27.1796 12.5379 32.9999 19.3693 32.9999Z"
            fill="#4ADE80"
          />
        </G>
        <Defs>
          <Filter
            id="filter0_f_1_537"
            x="3.33786e-06"
            y="3.33786e-06"
            width="38.7386"
            height="39.9997"
            filterUnits="userSpaceOnUse"
          >
            <FeFlood floodOpacity="0" result="BackgroundImageFix" />
            <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <FeGaussianBlur stdDeviation="3.49994" result="effect1_foregroundBlur_1_537" />
          </Filter>
        </Defs>
      </Layer>
      <Layer top={84} right={52} bottom={65} left={326} width={39} height={40}>
        <G opacity="0.28" filter="url(#filter0_f_1_538)">
          <Path
            d="M19.3693 32.9999C26.2008 32.9999 31.7388 27.1796 31.7388 19.9999C31.7388 12.8202 26.2008 6.99988 19.3693 6.99988C12.5379 6.99988 6.99988 12.8202 6.99988 19.9999C6.99988 27.1796 12.5379 32.9999 19.3693 32.9999Z"
            fill="#4ADE80"
          />
        </G>
        <Defs>
          <Filter
            id="filter0_f_1_538"
            x="3.33786e-06"
            y="3.33786e-06"
            width="38.7386"
            height="39.9997"
            filterUnits="userSpaceOnUse"
          >
            <FeFlood floodOpacity="0" result="BackgroundImageFix" />
            <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <FeGaussianBlur stdDeviation="3.49994" result="effect1_foregroundBlur_1_538" />
          </Filter>
        </Defs>
      </Layer>
      <Layer top={86} right={83} bottom={67} left={299} width={20} height={22}>
        <Path
          d="M9.79248 22C15.2007 22 19.585 17.0751 19.585 11C19.585 4.92487 15.2007 0 9.79248 0C4.38424 0 0 4.92487 0 11C0 17.0751 4.38424 22 9.79248 22Z"
          fill="#4ADE80"
        />
      </Layer>
      <Layer top={86} right={54} bottom={67} left={328} width={20} height={22}>
        <Path
          d="M9.79248 22C15.2007 22 19.585 17.0751 19.585 11C19.585 4.92487 15.2007 0 9.79248 0C4.38424 0 0 4.92487 0 11C0 17.0751 4.38424 22 9.79248 22Z"
          fill="#4ADE80"
        />
      </Layer>
      <Layer top={90} right={87} bottom={71} left={303} width={13} height={14}>
        <Path
          opacity="0.6"
          d="M6.18473 14C9.60046 14 12.3695 10.866 12.3695 7C12.3695 3.13401 9.60046 0 6.18473 0C2.769 0 0 3.13401 0 7C0 10.866 2.769 14 6.18473 14Z"
          fill="#86EFAC"
        />
      </Layer>
      <Layer top={90} right={58} bottom={71} left={332} width={13} height={14}>
        <Path
          opacity="0.6"
          d="M6.18473 14C9.60046 14 12.3695 10.866 12.3695 7C12.3695 3.13401 9.60046 0 6.18473 0C2.769 0 0 3.13401 0 7C0 10.866 2.769 14 6.18473 14Z"
          fill="#86EFAC"
        />
      </Layer>
      <Layer top={88} right={86} bottom={79} left={309} width={8} height={8}>
        <Path
          opacity="0.95"
          d="M3.60776 8C5.60027 8 7.21551 6.20914 7.21551 4C7.21551 1.79086 5.60027 0 3.60776 0C1.61525 0 0 1.79086 0 4C0 6.20914 1.61525 8 3.60776 8Z"
          fill={colors.surface}
        />
      </Layer>
      <Layer top={88} right={57} bottom={79} left={338} width={8} height={8}>
        <Path
          opacity="0.95"
          d="M3.60776 8C5.60027 8 7.21551 6.20914 7.21551 4C7.21551 1.79086 5.60027 0 3.60776 0C1.61525 0 0 1.79086 0 4C0 6.20914 1.61525 8 3.60776 8Z"
          fill={colors.surface}
        />
      </Layer>
      <Layer top={112} right={68} bottom={59} left={313} width={23} height={7}>
        <Path
          d="M1.09998 1.10004C7.97189 6.43337 14.8438 6.43337 21.7157 1.10004"
          stroke={colors.primary}
          strokeWidth="2.19996"
          strokeLinecap="round"
        />
      </Layer>
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    height: 175,
    alignSelf: 'stretch',
  },
});

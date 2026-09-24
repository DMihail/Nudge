import { type ReactNode } from 'react';
import { StyleSheet, Text, View, type ViewStyle } from 'react-native';

import Svg, {
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

import { colors, typography } from '@/theme';

type LayerProps = {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
  children: ReactNode;
};

function Layer({ top, right, bottom, left, width, height, children }: LayerProps) {
  const frame: ViewStyle = { top, right, bottom, left };

  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      style={[styles.layer, frame]}
    >
      {children}
    </Svg>
  );
}

export function Mascot() {
  return (
    <View style={styles.scene}>
      <Layer top={38} right={41} bottom={-25} left={32} width={317} height={177}>
        <Path
          d="M158.309 201.484C245.74 201.484 316.617 156.38 316.617 100.742C316.617 45.1037 245.74 0 158.309 0C70.8772 0 0 45.1037 0 100.742C0 156.38 70.8772 201.484 158.309 201.484Z"
          fill="url(#paint0_radial_1_144)"
        />
        <Defs>
          <RadialGradient
            id="paint0_radial_1_144"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(151.976 120.89) scale(145.644 92.6825)"
          >
            <Stop stopColor="#BBF7D0" stopOpacity="0.7" />
            <Stop offset="1" stopColor="#F8FEF9" stopOpacity="0" />
          </RadialGradient>
        </Defs>
      </Layer>

      <Layer top={133} right={-11} bottom={0} left={-11} width={390} height={82}>
        <Path
          d="M-11.2845 81.8315C20.6971 28.1025 65.4712 6.99468 123.038 18.508C174.208 28.7421 218.983 25.544 257.361 8.91357C295.738 -6.43758 343.711 -1.96016 401.277 22.3458V81.8315H-11.2845Z"
          fill="#DCFCE7"
        />
      </Layer>
      <Layer top={176} right={-11} bottom={0} left={-11} width={390} height={39}>
        <Path
          d="M-11.2845 38.4978C17.4989 15.4711 52.039 6.51624 92.3357 11.6333C135.191 16.7503 174.208 14.8314 209.388 5.87661C244.568 -3.07822 282.946 -1.79896 324.522 9.7144C348.828 15.4711 374.413 16.7503 401.277 13.5522V38.4978H-11.2845Z"
          fill="#A7F3D0"
        />
      </Layer>
      <Layer top={207} right={-11} bottom={0} left={-11} width={390} height={8}>
        <Path
          opacity={0.5}
          d="M-11.2845 7.67557C65.4712 2.55852 134.232 0.639631 194.996 1.91889C255.761 3.19815 324.522 2.55852 401.277 0V7.67557H-11.2845Z"
          fill="#6EE7B7"
        />
      </Layer>

      <Layer top={134} right={297} bottom={48} left={61} width={33} height={33}>
        <Path
          d="M16.3106 32.6212C25.3187 32.6212 32.6212 25.3187 32.6212 16.3106C32.6212 7.3025 25.3187 0 16.3106 0C7.3025 0 0 7.3025 0 16.3106C0 25.3187 7.3025 32.6212 16.3106 32.6212Z"
          fill="#6EE7B7"
        />
      </Layer>
      <Layer top={131} right={284} bottom={59} left={81} width={25} height={25}>
        <Path
          d="M12.4728 24.9456C19.3613 24.9456 24.9456 19.3613 24.9456 12.4728C24.9456 5.58426 19.3613 0 12.4728 0C5.58426 0 0 5.58426 0 12.4728C0 19.3613 5.58426 24.9456 12.4728 24.9456Z"
          fill="#6EE7B7"
        />
      </Layer>
      <Layer top={145} right={314} bottom={49} left={55} width={22} height={22}>
        <Path
          d="M10.5539 21.1078C16.3827 21.1078 21.1078 16.3827 21.1078 10.5539C21.1078 4.72515 16.3827 0 10.5539 0C4.72515 0 0 4.72515 0 10.5539C0 16.3827 4.72515 21.1078 10.5539 21.1078Z"
          fill="#86EFAC"
        />
      </Layer>
      <Layer top={119} right={60} bottom={58} left={292} width={39} height={39}>
        <Path
          d="M19.1889 38.3779C29.7867 38.3779 38.3779 29.7867 38.3779 19.1889C38.3779 8.59118 29.7867 0 19.1889 0C8.59118 0 0 8.59118 0 19.1889C0 29.7867 8.59118 38.3779 19.1889 38.3779Z"
          fill="#6EE7B7"
        />
      </Layer>
      <Layer top={119} right={47} bottom={69} left={316} width={27} height={27}>
        <Path
          d="M13.4323 26.8645C20.8507 26.8645 26.8645 20.8507 26.8645 13.4323C26.8645 6.01382 20.8507 0 13.4323 0C6.01382 0 0 6.01382 0 13.4323C0 20.8507 6.01382 26.8645 13.4323 26.8645Z"
          fill="#6EE7B7"
        />
      </Layer>
      <Layer top={131} right={34} bottom={62} left={335} width={22} height={22}>
        <Path
          d="M10.5539 21.1078C16.3827 21.1078 21.1078 16.3827 21.1078 10.5539C21.1078 4.72515 16.3827 0 10.5539 0C4.72515 0 0 4.72515 0 10.5539C0 16.3827 4.72515 21.1078 10.5539 21.1078Z"
          fill="#86EFAC"
        />
      </Layer>
      <Layer top={136} right={85} bottom={59} left={286} width={20} height={20}>
        <Path
          d="M9.59446 19.1889C14.8933 19.1889 19.1889 14.8933 19.1889 9.59446C19.1889 4.29559 14.8933 0 9.59446 0C4.29559 0 0 4.29559 0 9.59446C0 14.8933 4.29559 19.1889 9.59446 19.1889Z"
          fill="#86EFAC"
        />
      </Layer>

      <Svg width={24} height={41} viewBox="0 0 24 41" fill="none" style={styles.motion}>
        <G opacity={0.9}>
          <Path
            d="M6.47623 1.67945L21.8274 8.39558"
            stroke="#4ADE80"
            strokeWidth={3.35806}
            strokeLinecap="round"
          />
          <Path
            d="M1.67902 20.8684H18.9491"
            stroke="#4ADE80"
            strokeWidth={3.35806}
            strokeLinecap="round"
          />
          <Path
            d="M8.39514 39.0979L20.8679 31.4223"
            stroke="#4ADE80"
            strokeWidth={3.35806}
            strokeLinecap="round"
          />
        </G>
      </Svg>

      <Layer top={79} right={150} bottom={25} left={140} width={100} height={112}>
        <Path
          d="M49.8912 111.296C77.4454 111.296 99.7824 86.3814 99.7824 55.6479C99.7824 24.9144 77.4454 0 49.8912 0C22.3371 0 0 24.9144 0 55.6479C0 86.3814 22.3371 111.296 49.8912 111.296Z"
          fill="url(#paint0_radial_1_159)"
        />
        <Defs>
          <RadialGradient
            id="paint0_radial_1_159"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(49.8912 55.6479) scale(49.8912 55.6479)"
          >
            <Stop stopColor="#4ADE80" stopOpacity="0.4" />
            <Stop offset="1" stopColor="#4ADE80" stopOpacity="0" />
          </RadialGradient>
        </Defs>
      </Layer>

      <Layer top={177} right={201} bottom={15} left={173} width={17} height={24}>
        <Path
          d="M16.3106 8.15529C16.3106 3.65125 12.6593 0 8.15529 0C3.65125 0 0 3.65125 0 8.15529V14.8714C0 19.3755 3.65125 23.0267 8.15529 23.0267C12.6593 23.0267 16.3106 19.3755 16.3106 14.8714V8.15529Z"
          fill="#1A1A2E"
        />
      </Layer>
      <Layer top={177} right={178} bottom={15} left={196} width={17} height={24}>
        <Path
          d="M16.3106 8.15529C16.3106 3.65125 12.6593 0 8.15529 0C3.65125 0 0 3.65125 0 8.15529V14.8714C0 19.3755 3.65125 23.0267 8.15529 23.0267C12.6593 23.0267 16.3106 19.3755 16.3106 14.8714V8.15529Z"
          fill="#1A1A2E"
        />
      </Layer>
      <Layer top={134} right={229} bottom={61} left={136} width={24} height={21}>
        <Path
          d="M16.4058 18.7706C22.488 15.5366 25.402 9.12215 22.9143 4.44352C20.4267 -0.235109 13.4794 -1.40623 7.39717 1.82774C1.31495 5.06171 -1.59901 11.4761 0.888667 16.1548C3.37634 20.8334 10.3236 22.0045 16.4058 18.7706Z"
          fill="#1A1A2E"
        />
      </Layer>
      <Layer top={134} right={146} bottom={61} left={219} width={24} height={21}>
        <Path
          d="M7.39718 18.7706C13.4794 22.0045 20.4267 20.8334 22.9143 16.1548C25.402 11.4761 22.4881 5.06171 16.4058 1.82774C10.3236 -1.40624 3.37635 -0.23511 0.888677 4.44352C-1.59899 9.12215 1.31496 15.5366 7.39718 18.7706Z"
          fill="#1A1A2E"
        />
      </Layer>
      <Layer top={119} right={160} bottom={31} left={151} width={79} height={66}>
        <Path
          d="M39.3373 65.2424C61.0627 65.2424 78.6746 50.6374 78.6746 32.6212C78.6746 14.605 61.0627 0 39.3373 0C17.6119 0 0 14.605 0 32.6212C0 50.6374 17.6119 65.2424 39.3373 65.2424Z"
          fill="#1A1A2E"
        />
      </Layer>
      <Layer top={70} right={161} bottom={68} left={152} width={77} height={77}>
        <Path
          d="M38.3779 76.7557C59.5734 76.7557 76.7557 59.5734 76.7557 38.3779C76.7557 17.1824 59.5734 0 38.3779 0C17.1824 0 0 17.1824 0 38.3779C0 59.5734 17.1824 76.7557 38.3779 76.7557Z"
          fill="#1A1A2E"
        />
      </Layer>
      <Layer top={57} right={212} bottom={143} left={171} width={12} height={20}>
        <Path
          d="M8.87543 17.5104L2.1593 2.1593"
          stroke="#1A1A2E"
          strokeWidth={4.31751}
          strokeLinecap="round"
        />
      </Layer>
      <Layer top={44} right={212} bottom={157} left={157} width={19} height={18}>
        <Path
          d="M13.855 14.2945C18.4482 10.7059 20.1882 5.25813 17.7414 2.12645C15.2947 -1.00523 9.58776 -0.634866 4.99464 2.95368C0.401506 6.54223 -1.33849 11.99 1.10825 15.1217C3.55498 18.2534 9.26192 17.883 13.855 14.2945Z"
          fill="#22C55E"
        />
      </Layer>
      <Layer top={57} right={181} bottom={143} left={203} width={12} height={20}>
        <Path
          d="M2.1593 17.5104L8.87543 2.1593"
          stroke="#1A1A2E"
          strokeWidth={4.31751}
          strokeLinecap="round"
        />
      </Layer>
      <Layer top={44} right={166} bottom={157} left={203} width={19} height={18}>
        <Path
          d="M4.99463 14.2945C9.58776 17.883 15.2947 18.2534 17.7414 15.1217C20.1882 11.99 18.4482 6.54223 13.855 2.95368C9.26192 -0.634862 3.55498 -1.00523 1.10825 2.12645C-1.33849 5.25813 0.401505 10.706 4.99463 14.2945Z"
          fill="#22C55E"
        />
      </Layer>

      <Layer top={93} right={200} bottom={91} left={161} width={48} height={50}>
        <G opacity={0.3} filter="url(#filter0_f_1_170)">
          <Path
            d="M23.9861 40.2968C31.9345 40.2968 38.3778 33.4238 38.3778 24.9456C38.3778 16.4674 31.9345 9.59447 23.9861 9.59447C16.0378 9.59447 9.59445 16.4674 9.59445 24.9456C9.59445 33.4238 16.0378 40.2968 23.9861 40.2968Z"
            fill="#4ADE80"
          />
        </G>
        <Defs>
          <Filter
            id="filter0_f_1_170"
            x="-1.23978e-05"
            y="2.86102e-06"
            width="47.9723"
            height="49.8912"
            filterUnits="userSpaceOnUse"
          >
            <FeFlood floodOpacity="0" result="BackgroundImageFix" />
            <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <FeGaussianBlur stdDeviation="4.79723" result="effect1_foregroundBlur_1_170" />
          </Filter>
        </Defs>
      </Layer>
      <Layer top={93} right={171} bottom={91} left={190} width={48} height={50}>
        <G opacity={0.3} filter="url(#filter0_f_1_171)">
          <Path
            d="M23.9861 40.2968C31.9345 40.2968 38.3778 33.4238 38.3778 24.9456C38.3778 16.4674 31.9345 9.59447 23.9861 9.59447C16.0378 9.59447 9.59445 16.4674 9.59445 24.9456C9.59445 33.4238 16.0378 40.2968 23.9861 40.2968Z"
            fill="#4ADE80"
          />
        </G>
        <Defs>
          <Filter
            id="filter0_f_1_171"
            x="-1.23978e-05"
            y="2.86102e-06"
            width="47.9723"
            height="49.8912"
            filterUnits="userSpaceOnUse"
          >
            <FeFlood floodOpacity="0" result="BackgroundImageFix" />
            <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <FeGaussianBlur stdDeviation="4.79723" result="effect1_foregroundBlur_1_171" />
          </Filter>
        </Defs>
      </Layer>

      <Layer top={96} right={203} bottom={94} left={165} width={23} height={25}>
        <Path
          d="M11.0336 24.9456C17.1273 24.9456 22.0673 19.3613 22.0673 12.4728C22.0673 5.58426 17.1273 0 11.0336 0C4.93993 0 0 5.58426 0 12.4728C0 19.3613 4.93993 24.9456 11.0336 24.9456Z"
          fill="#4ADE80"
        />
      </Layer>
      <Layer top={96} right={174} bottom={94} left={194} width={23} height={25}>
        <Path
          d="M11.0336 24.9456C17.1273 24.9456 22.0673 19.3613 22.0673 12.4728C22.0673 5.58426 17.1273 0 11.0336 0C4.93993 0 0 5.58426 0 12.4728C0 19.3613 4.93993 24.9456 11.0336 24.9456Z"
          fill="#4ADE80"
        />
      </Layer>
      <Layer top={101} right={207} bottom={99} left={169} width={14} height={16}>
        <Path
          opacity={0.6}
          d="M6.71613 15.3511C10.4253 15.3511 13.4323 11.9147 13.4323 7.67557C13.4323 3.43647 10.4253 0 6.71613 0C3.00691 0 0 3.43647 0 7.67557C0 11.9147 3.00691 15.3511 6.71613 15.3511Z"
          fill="#86EFAC"
        />
      </Layer>
      <Layer top={101} right={179} bottom={99} left={198} width={14} height={16}>
        <Path
          opacity={0.6}
          d="M6.71613 15.3511C10.4253 15.3511 13.4323 11.9147 13.4323 7.67557C13.4323 3.43647 10.4253 0 6.71613 0C3.00691 0 0 3.43647 0 7.67557C0 11.9147 3.00691 15.3511 6.71613 15.3511Z"
          fill="#86EFAC"
        />
      </Layer>
      <Layer top={98} right={206} bottom={108} left={176} width={8} height={9}>
        <Path
          opacity={0.95}
          d="M3.83779 8.63502C5.95734 8.63502 7.67557 6.702 7.67557 4.31751C7.67557 1.93301 5.95734 0 3.83779 0C1.71824 0 0 1.93301 0 4.31751C0 6.702 1.71824 8.63502 3.83779 8.63502Z"
          fill="white"
        />
      </Layer>
      <Layer top={98} right={177} bottom={108} left={205} width={8} height={9}>
        <Path
          opacity={0.95}
          d="M3.83779 8.63502C5.95734 8.63502 7.67557 6.702 7.67557 4.31751C7.67557 1.93301 5.95734 0 3.83779 0C1.71824 0 0 1.93301 0 4.31751C0 6.702 1.71824 8.63502 3.83779 8.63502Z"
          fill="white"
        />
      </Layer>
      <Layer top={125} right={190} bottom={86} left={181} width={22} height={7}>
        <Path
          d="M1.19931 1.19932C7.59562 6.956 13.9919 6.956 20.3882 1.19932"
          stroke="#22C55E"
          strokeWidth={2.39862}
          strokeLinecap="round"
        />
      </Layer>

      <Layer top={59} right={25} bottom={77} left={240} width={125} height={79}>
        <Path
          d="M107.458 0H17.27C7.73206 0 0 7.73206 0 17.27V61.4046C0 70.9426 7.73206 78.6746 17.27 78.6746H107.458C116.996 78.6746 124.728 70.9426 124.728 61.4046V17.27C124.728 7.73206 116.996 0 107.458 0Z"
          fill="#ECFDF5"
        />
      </Layer>
      <Layer top={113} right={131} bottom={87} left={231} width={28} height={15}>
        <Path d="M16.3106 0L0 14.3917L27.8239 6.71613L16.3106 0Z" fill="#ECFDF5" />
      </Layer>

      <View style={styles.quote}>
        <Text style={styles.quoteLine}>{'"You can do'}</Text>
        <Text style={[styles.quoteLine, styles.quoteMiddle]}>more than</Text>
        <Text style={[styles.quoteLine, styles.quoteLast]}>{'you think."'}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    position: 'relative',
    width: 390,
    height: 215,
    overflow: 'visible',
  },
  layer: {
    position: 'absolute',
    overflow: 'visible',
  },
  motion: {
    position: 'absolute',
    top: 106,
    left: 101,
    width: 20,
    height: 37,
  },
  quote: {
    position: 'absolute',
    top: 75,
    left: 265,
    width: 75,
    height: 51,
  },
  quoteLine: {
    position: 'absolute',
    top: -0.32,
    left: -0.04,
    width: 75,
    height: 16,
    ...typography.quote,
    textAlign: 'center',
    color: colors.text.primary,
  },
  quoteMiddle: {
    top: 17.68,
    left: 4.96,
    width: 64,
  },
  quoteLast: {
    top: 34.68,
    left: 2.96,
    width: 69,
  },
});

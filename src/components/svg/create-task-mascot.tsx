import { StyleSheet, View } from 'react-native';

import { Defs, FeBlend, FeFlood, FeGaussianBlur, Filter, G, Path } from 'react-native-svg';

import { IllustrationLayer as Layer } from '@/components/svg/illustration-layer';
import { colors } from '@/theme';

export function CreateTaskMascot() {
  return (
    <View style={styles.scene}>
      <Layer top={50} right={0} bottom={0} left={71} width={26} height={49}>
        <Path
          d="M22.7939 5.02892L19.0854 3.53057C18.0613 3.11682 16.8957 3.61159 16.482 4.63567L5.24439 32.4496C4.83063 33.4737 5.3254 34.6393 6.34948 35.0531L10.058 36.5514C11.0821 36.9652 12.2477 36.4704 12.6614 35.4463L23.899 7.63235C24.3128 6.60827 23.818 5.44267 22.7939 5.02892Z"
          fill={colors.primary}
        />
        <Path
          d="M13.4111 33.5922L5.99358 30.5954L3.74594 36.1585L11.1634 39.1553L13.4111 33.5922Z"
          fill="#FDE68A"
        />
        <Path d="M3.74602 36.1582L11.1635 39.155L3.70869 46.9284L3.74602 36.1582Z" fill="#D97706" />
        <Path
          d="M23.4545 2.06033L20.6729 0.936515C19.6488 0.522736 18.4831 1.01753 18.0693 2.04167L17.3201 3.89604C16.9063 4.92018 17.4011 6.08584 18.4253 6.49962L21.2068 7.62344C22.231 8.03722 23.3966 7.54242 23.8104 6.51828L24.5596 4.66392C24.9734 3.63978 24.4786 2.47411 23.4545 2.06033Z"
          fill="#FDA4AF"
        />
      </Layer>
      <Layer top={95} right={31} bottom={1} left={25} width={52} height={34}>
        <Path
          d="M25.9986 33.9981C40.3572 33.9981 51.9971 26.3874 51.9971 16.9991C51.9971 7.61074 40.3572 0 25.9986 0C11.6399 0 0 7.61074 0 16.9991C0 26.3874 11.6399 33.9981 25.9986 33.9981Z"
          fill="#1A1A2E"
        />
      </Layer>
      <Layer top={72} right={34} bottom={16} left={28} width={46} height={42}>
        <Path
          d="M22.9987 41.9977C35.7006 41.9977 45.9974 32.5962 45.9974 20.9988C45.9974 9.4015 35.7006 0 22.9987 0C10.2969 0 0 9.4015 0 20.9988C0 32.5962 10.2969 41.9977 22.9987 41.9977Z"
          fill="#1A1A2E"
        />
      </Layer>
      <Layer top={35} right={30} bottom={41} left={24} width={54} height={54}>
        <Path
          d="M26.9985 53.997C41.9094 53.997 53.997 41.9094 53.997 26.9985C53.997 12.0876 41.9094 0 26.9985 0C12.0876 0 0 12.0876 0 26.9985C0 41.9094 12.0876 53.997 26.9985 53.997Z"
          fill="#1A1A2E"
        />
      </Layer>
      <Layer top={91} right={68} bottom={25} left={20} width={20} height={15}>
        <Path
          d="M7.592 13.998C12.8442 15.7046 18.0704 14.1075 19.265 10.431C20.4596 6.7544 17.1702 2.39051 11.918 0.683947C6.66575 -1.02261 1.43955 0.5744 0.24496 4.25097C-0.949631 7.92755 2.33975 12.2914 7.592 13.998Z"
          fill="#1A1A2E"
        />
      </Layer>
      <Layer top={84} right={25} bottom={30} left={61} width={20} height={19}>
        <Path
          d="M14.8958 15.5556C19.6829 11.8156 21.3585 5.96139 18.6385 2.47994C15.9185 -1.00152 9.83282 -0.791917 5.04581 2.9481C0.258807 6.68812 -1.41682 12.5423 1.30319 16.0237C4.0232 19.5052 10.1088 19.2956 14.8958 15.5556Z"
          fill="#1A1A2E"
        />
      </Layer>
      <Layer top={24} right={68} bottom={93} left={35} width={8} height={16}>
        <Path
          d="M6.50024 14.5003L1.50024 1.50032"
          stroke="#1A1A2E"
          strokeWidth="2.99983"
          strokeLinecap="round"
        />
      </Layer>
      <Layer top={14} right={68} bottom={104} left={24} width={15} height={13}>
        <Path
          d="M10.469 10.9234C14.0435 8.32642 15.4938 4.22899 13.7083 1.77155C11.9229 -0.685896 7.57785 -0.572764 4.00339 2.02423C0.428924 4.62123 -1.02137 8.71867 0.764069 11.1761C2.54951 13.6336 6.89456 13.5204 10.469 10.9234Z"
          fill={colors.primary}
        />
      </Layer>
      <Layer top={24} right={41} bottom={93} left={62} width={8} height={16}>
        <Path
          d="M1.50024 14.5003L6.50024 1.50032"
          stroke="#1A1A2E"
          strokeWidth="2.99983"
          strokeLinecap="round"
        />
      </Layer>
      <Layer top={15} right={30} bottom={104} left={62} width={15} height={13}>
        <Path
          d="M4.00332 10.9234C7.57779 13.5204 11.9228 13.6336 13.7083 11.1761C15.4937 8.71868 14.0434 4.62124 10.469 2.02424C6.8945 -0.572756 2.54944 -0.685889 0.764007 1.77155C-1.02143 4.229 0.428862 8.32643 4.00332 10.9234Z"
          fill={colors.primary}
        />
      </Layer>
      <Layer top={51} right={59} bottom={57} left={29} width={32} height={34}>
        <G opacity="0.25" filter="url(#filter0_f_1_982)">
          <Path
            d="M15.9992 27.9984C21.5217 27.9984 25.9986 23.0738 25.9986 16.9991C25.9986 10.9243 21.5217 5.99966 15.9992 5.99966C10.4767 5.99966 5.99976 10.9243 5.99976 16.9991C5.99976 23.0738 10.4767 27.9984 15.9992 27.9984Z"
            fill="#4ADE80"
          />
        </G>
        <Defs>
          <Filter
            id="filter0_f_1_982"
            x="8.91685e-05"
            y="-2.38419e-06"
            width="31.9981"
            height="33.9981"
            filterUnits="userSpaceOnUse"
          >
            <FeFlood floodOpacity="0" result="BackgroundImageFix" />
            <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <FeGaussianBlur stdDeviation="2.99983" result="effect1_foregroundBlur_1_982" />
          </Filter>
        </Defs>
      </Layer>
      <Layer top={51} right={35} bottom={57} left={53} width={32} height={34}>
        <G opacity="0.25" filter="url(#filter0_f_1_983)">
          <Path
            d="M15.9992 27.9984C21.5217 27.9984 25.9986 23.0738 25.9986 16.9991C25.9986 10.9243 21.5217 5.99966 15.9992 5.99966C10.4767 5.99966 5.99976 10.9243 5.99976 16.9991C5.99976 23.0738 10.4767 27.9984 15.9992 27.9984Z"
            fill="#4ADE80"
          />
        </G>
        <Defs>
          <Filter
            id="filter0_f_1_983"
            x="8.91685e-05"
            y="-2.38419e-06"
            width="31.9981"
            height="33.9981"
            filterUnits="userSpaceOnUse"
          >
            <FeFlood floodOpacity="0" result="BackgroundImageFix" />
            <FeBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
            <FeGaussianBlur stdDeviation="2.99983" result="effect1_foregroundBlur_1_983" />
          </Filter>
        </Defs>
      </Layer>
      <Layer top={53} right={61} bottom={59} left={31} width={16} height={18}>
        <Path
          d="M8 18C12.4183 18 16 13.9706 16 9C16 4.02944 12.4183 0 8 0C3.58172 0 0 4.02944 0 9C0 13.9706 3.58172 18 8 18Z"
          fill="#4ADE80"
        />
      </Layer>
      <Layer top={53} right={37} bottom={59} left={55} width={16} height={18}>
        <Path
          d="M8 18C12.4183 18 16 13.9706 16 9C16 4.02944 12.4183 0 8 0C3.58172 0 0 4.02944 0 9C0 13.9706 3.58172 18 8 18Z"
          fill="#4ADE80"
        />
      </Layer>
      <Layer top={56} right={64} bottom={62} left={34} width={9} height={11}>
        <Path
          opacity="0.6"
          d="M4.5 11C6.98528 11 9 8.53757 9 5.5C9 2.46243 6.98528 0 4.5 0C2.01472 0 0 2.46243 0 5.5C0 8.53757 2.01472 11 4.5 11Z"
          fill="#86EFAC"
        />
      </Layer>
      <Layer top={56} right={40} bottom={62} left={58} width={9} height={11}>
        <Path
          opacity="0.6"
          d="M4.5 11C6.98528 11 9 8.53757 9 5.5C9 2.46243 6.98528 0 4.5 0C2.01472 0 0 2.46243 0 5.5C0 8.53757 2.01472 11 4.5 11Z"
          fill="#86EFAC"
        />
      </Layer>
      <Layer top={54} right={63} bottom={70} left={39} width={5} height={6}>
        <Path
          opacity="0.95"
          d="M2.5 6C3.88071 6 5 4.65685 5 3C5 1.34315 3.88071 0 2.5 0C1.11929 0 0 1.34315 0 3C0 4.65685 1.11929 6 2.5 6Z"
          fill={colors.surface}
        />
      </Layer>
      <Layer top={54} right={39} bottom={70} left={63} width={5} height={6}>
        <Path
          opacity="0.95"
          d="M2.5 6C3.88071 6 5 4.65685 5 3C5 1.34315 3.88071 0 2.5 0C1.11929 0 0 1.34315 0 3C0 4.65685 1.11929 6 2.5 6Z"
          fill={colors.surface}
        />
      </Layer>
      <Layer top={76} right={48} bottom={50} left={42} width={20} height={6}>
        <Path
          d="M0.899902 0.899994C6.8999 5.56666 12.8999 5.56666 18.8999 0.899994"
          stroke={colors.primary}
          strokeWidth="1.7999"
          strokeLinecap="round"
        />
      </Layer>
    </View>
  );
}

const styles = StyleSheet.create({
  scene: {
    width: 108,
    height: 130,
  },
});

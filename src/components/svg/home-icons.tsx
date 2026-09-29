import { StyleSheet, View } from 'react-native';

import { Path } from 'react-native-svg';

import { IllustrationLayer as Layer } from '@/components/svg/illustration-layer';
import { colors } from '@/theme';

export function BellIcon() {
  return (
    <View style={styles.bellIcon}>
      <Layer top={3} right={2} bottom={4} left={2} width={19} height={14}>
        <Path
          d="M14.4988 5.77446C14.4988 4.4485 13.9721 3.17685 13.0345 2.23926C12.0969 1.30167 10.8252 0.774933 9.49929 0.774933C8.17333 0.774933 6.90168 1.30167 5.96409 2.23926C5.0265 3.17685 4.49976 4.4485 4.49976 5.77446C4.49976 11.2739 2 12.7738 2 12.7738H16.9986C16.9986 12.7738 14.4988 11.2739 14.4988 5.77446Z"
          stroke={colors.text.primary}
          strokeWidth="1.54985"
          strokeLinecap="round"
        />
      </Layer>
      <Layer top={16} right={8} bottom={1} left={8} width={5} height={4}>
        <Path
          d="M4.1749 0.774933C4.1749 1.2258 3.9958 1.6582 3.67698 1.97701C3.35817 2.29583 2.92577 2.47493 2.4749 2.47493C2.02403 2.47493 1.59163 2.29583 1.27282 1.97701C0.954009 1.6582 0.774902 1.2258 0.774902 0.774933"
          stroke={colors.text.primary}
          strokeWidth="1.54985"
          strokeLinecap="round"
        />
      </Layer>
    </View>
  );
}
export function FlameIcon() {
  return (
    <View style={styles.flameIcon}>
      <Layer top={3} right={8} bottom={6} left={6} width={15} height={19}>
        <Path
          d="M8.39856 0C8.39856 0 14.3975 5.99897 14.3975 11.9979C14.3975 14.7975 12.5978 16.9971 10.5982 18.1969C11.1981 16.4972 11.1981 14.7975 9.99829 13.5977C9.99829 16.4972 7.5987 18.7968 4.79918 18.7968C2.39959 18.7968 0 16.9971 0 13.9976C0 10.4982 2.39959 7.99863 4.79918 6.79883C3.59938 9.19842 4.19928 10.9981 5.39907 11.798C5.39907 7.39873 8.39856 0 8.39856 0Z"
          fill="#EF4444"
        />
      </Layer>
      <Layer top={17} right={9} bottom={1} left={8} width={11} height={10}>
        <Path
          d="M1.89864 5.19911C1.89864 5.19911 -0.900884 7.39873 0.298911 9.8983H10.6971C11.297 7.39873 9.49733 5.39907 7.69764 4.59921C8.29754 2.8995 8.29754 1.19979 7.09775 0C6.29788 2.8995 4.69816 5.19911 1.89864 5.19911Z"
          fill="#F97316"
        />
      </Layer>
    </View>
  );
}
export function TargetIcon() {
  return (
    <View style={styles.targetIcon}>
      <Layer top={2} right={2} bottom={2} left={2} width={16} height={16}>
        <Path
          d="M7.79739 14.7951C11.6621 14.7951 14.7951 11.6622 14.7951 7.79744C14.7951 3.93272 11.6621 0.799736 7.79739 0.799736C3.93266 0.799736 0.799683 3.93272 0.799683 7.79744C0.799683 11.6622 3.93266 14.7951 7.79739 14.7951Z"
          stroke="#3B82F6"
          strokeWidth="1.59948"
        />
      </Layer>
      <Layer top={5} right={5} bottom={5} left={5} width={9} height={9}>
        <Path
          d="M4.29854 7.79744C6.2309 7.79744 7.79739 6.23095 7.79739 4.29859C7.79739 2.36623 6.2309 0.799736 4.29854 0.799736C2.36617 0.799736 0.799683 2.36623 0.799683 4.29859C0.799683 6.23095 2.36617 7.79744 4.29854 7.79744Z"
          stroke="#3B82F6"
          strokeWidth="1.59948"
        />
      </Layer>
      <Layer top={8} right={8} bottom={8} left={8} width={2} height={2}>
        <Path
          d="M1 2C1.55228 2 2 1.55228 2 1C2 0.447715 1.55228 0 1 0C0.447715 0 0 0.447715 0 1C0 1.55228 0.447715 2 1 2Z"
          fill="#3B82F6"
        />
      </Layer>
    </View>
  );
}
export function XpStarIcon() {
  return (
    <View style={styles.xpStarIcon}>
      <Layer top={1} right={1} bottom={2} left={1} width={15} height={15}>
        <Path
          d="M7.49754 0L9.69682 4.99836L14.9951 5.39823L10.9964 8.99705L12.296 14.1953L7.49754 11.3963L2.69911 14.1953L3.99869 8.99705L0 5.39823L5.29826 4.99836L7.49754 0Z"
          fill="#F59E0B"
        />
      </Layer>
    </View>
  );
}
export function BarsIcon() {
  return (
    <View style={styles.barsIcon}>
      <Layer top={11} right={13} bottom={1} left={1} width={4} height={6}>
        <Path
          d="M2.49918 0H0.999672C0.447568 0 0 0.447568 0 0.999672V4.99836C0 5.55047 0.447568 5.99803 0.999672 5.99803H2.49918C3.05128 5.99803 3.49885 5.55047 3.49885 4.99836V0.999672C3.49885 0.447568 3.05128 0 2.49918 0Z"
          fill={colors.primary}
        />
      </Layer>
      <Layer top={8} right={7} bottom={1} left={7} width={4} height={9}>
        <Path
          d="M2.49918 0H0.999672C0.447568 0 0 0.447568 0 0.999672V7.99738C0 8.54948 0.447568 8.99705 0.999672 8.99705H2.49918C3.05128 8.99705 3.49885 8.54948 3.49885 7.99738V0.999672C3.49885 0.447568 3.05128 0 2.49918 0Z"
          fill={colors.primary}
        />
      </Layer>
      <Layer top={4} right={1} bottom={1} left={13} width={4} height={13}>
        <Path
          d="M2.49918 0H0.999672C0.447568 0 0 0.447568 0 0.999672V11.9961C0 12.5482 0.447568 12.9957 0.999672 12.9957H2.49918C3.05128 12.9957 3.49885 12.5482 3.49885 11.9961V0.999672C3.49885 0.447568 3.05128 0 2.49918 0Z"
          fill={colors.primary}
        />
      </Layer>
    </View>
  );
}
export function CalendarIcon() {
  return (
    <View style={styles.calendarIcon}>
      <Layer top={2} right={1} bottom={1} left={1} width={15} height={14}>
        <Path
          d="M11.1971 0.699821H3.19919C1.81883 0.699821 0.699829 1.81882 0.699829 3.19918V10.1974C0.699829 11.5777 1.81883 12.6967 3.19919 12.6967H11.1971C12.5775 12.6967 13.6965 11.5777 13.6965 10.1974V3.19918C13.6965 1.81882 12.5775 0.699821 11.1971 0.699821Z"
          stroke={colors.text.secondary}
          strokeWidth="1.39964"
        />
      </Layer>
      <Layer top={6} right={1} bottom={10} left={1} width={13} height={2}>
        <Path d="M0 0.699821H12.9967" stroke={colors.text.secondary} strokeWidth="1.39964" />
      </Layer>
      <Layer top={1} right={5} bottom={12} left={5} width={8} height={5}>
        <Path
          d="M0.699829 0.699821V3.69905M6.69829 0.699821V3.69905"
          stroke={colors.text.secondary}
          strokeWidth="1.39964"
          strokeLinecap="round"
        />
      </Layer>
    </View>
  );
}
export function TaskCheckIcon() {
  return (
    <View style={styles.taskCheckIcon}>
      <Layer top={5} right={3} bottom={5} left={3} width={14} height={11}>
        <Path
          d="M1.09961 5.09833L4.59846 9.09702L12.096 1.09964"
          stroke={colors.text.onPrimary}
          strokeWidth="2.19928"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Layer>
    </View>
  );
}
export function ClockIcon() {
  return (
    <View style={styles.clockIcon}>
      <Layer top={1} right={1} bottom={1} left={1} width={13} height={13}>
        <Path
          d="M6.14695 11.6443C9.18302 11.6443 11.6442 9.18304 11.6442 6.14697C11.6442 3.1109 9.18302 0.649679 6.14695 0.649679C3.11088 0.649679 0.649658 3.1109 0.649658 6.14697C0.649658 9.18304 3.11088 11.6443 6.14695 11.6443Z"
          stroke={colors.text.secondary}
          strokeWidth="1.29936"
        />
      </Layer>
      <Layer top={3} right={4} bottom={5} left={6} width={4} height={6}>
        <Path
          d="M0.649658 0.649679V3.6482L2.64867 5.14746"
          stroke={colors.text.secondary}
          strokeWidth="1.29936"
          strokeLinecap="round"
        />
      </Layer>
    </View>
  );
}
export function ChevronIcon() {
  return (
    <View style={styles.chevronIcon}>
      <Layer top={3} right={5} bottom={3} left={6} width={7} height={12}>
        <Path
          d="M0.89978 0.899769L5.8985 5.89849L0.89978 10.8972"
          stroke={colors.text.secondary}
          strokeWidth="1.79954"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Layer>
    </View>
  );
}
export function ProgressRing() {
  return (
    <View style={styles.progressRing}>
      <Layer top={3} right={3} bottom={3} left={3} width={35} height={35}>
        <Path
          d="M17.4983 33.4967C26.334 33.4967 33.4968 26.334 33.4968 17.4983C33.4968 8.6626 26.334 1.49986 17.4983 1.49986C8.66262 1.49986 1.49988 8.6626 1.49988 17.4983C1.49988 26.334 8.66262 33.4967 17.4983 33.4967Z"
          stroke={colors.border}
          strokeWidth="2.99971"
        />
      </Layer>
      <Layer top={3} right={3} bottom={3} left={3} width={35} height={35}>
        <Path
          d="M33.4968 17.4983C33.4968 8.6626 26.334 1.49985 17.4983 1.49985C8.66262 1.49985 1.49988 8.6626 1.49988 17.4983C1.49988 26.334 8.66262 33.4967 17.4983 33.4967C26.334 33.4967 33.4968 26.334 33.4968 17.4983Z"
          stroke={colors.primary}
          strokeWidth="2.99971"
          strokeLinecap="round"
          strokeDasharray="35.18 65.34"
        />
      </Layer>
    </View>
  );
}
export function PlayIcon() {
  return (
    <View style={styles.playIcon}>
      <Layer top={1} right={1} bottom={1} left={1} width={8} height={10}>
        <Path d="M0 0L7.99306 4.99567L0 9.99133V0Z" fill={colors.text.onPrimary} />
      </Layer>
    </View>
  );
}
export function PlusIcon() {
  return (
    <View style={styles.plusIcon}>
      <Layer top={4} right={4} bottom={4} left={4} width={13} height={13}>
        <Path
          d="M6.09797 1.09964V11.0964M1.09961 6.098H11.0963"
          stroke={colors.text.onPrimary}
          strokeWidth="2.19928"
          strokeLinecap="round"
        />
      </Layer>
    </View>
  );
}
export function HomeIcon() {
  return (
    <View style={styles.homeIcon}>
      <Layer top={3} right={3} bottom={2} left={3} width={18} height={19}>
        <Path
          d="M0.799683 7.2969L8.7963 0.799652L16.7929 7.2969V16.7929C16.7929 17.3427 16.3431 17.7925 15.7933 17.7925H11.795V12.7946H5.79757V17.7925H1.79926C1.24949 17.7925 0.799683 17.3427 0.799683 16.7929V7.2969Z"
          fill={colors.primary}
          stroke={colors.primary}
          strokeWidth="1.59932"
          strokeLinejoin="round"
        />
      </Layer>
    </View>
  );
}
export function NavPlusIcon() {
  return (
    <View style={styles.navPlusIcon}>
      <Layer top={2} right={2} bottom={2} left={2} width={12} height={12}>
        <Path
          d="M5.99902 0.999817V10.9981M0.999878 5.99896H10.9982"
          stroke={colors.text.onPrimary}
          strokeWidth="1.99966"
          strokeLinecap="round"
        />
      </Layer>
    </View>
  );
}
export function StatsIcon() {
  return (
    <View style={styles.statsIcon}>
      <Layer top={13} right={16} bottom={2} left={2} width={4} height={7}>
        <Path
          d="M2.49894 0H1.49937C0.671289 0 0 0.671289 0 1.49937V5.49767C0 6.32575 0.671289 6.99704 1.49937 6.99704H2.49894C3.32702 6.99704 3.99831 6.32575 3.99831 5.49767V1.49937C3.99831 0.671289 3.32702 0 2.49894 0Z"
          fill={colors.text.secondary}
        />
      </Layer>
      <Layer top={9} right={9} bottom={2} left={9} width={4} height={11}>
        <Path
          d="M2.49894 0H1.49937C0.671289 0 0 0.671289 0 1.49937V9.49598C0 10.3241 0.671289 10.9953 1.49937 10.9953H2.49894C3.32702 10.9953 3.99831 10.3241 3.99831 9.49598V1.49937C3.99831 0.671289 3.32702 0 2.49894 0Z"
          fill={colors.text.secondary}
        />
      </Layer>
      <Layer top={5} right={2} bottom={2} left={16} width={4} height={15}>
        <Path
          d="M2.49894 0H1.49937C0.671289 0 0 0.671289 0 1.49937V13.4943C0 14.3224 0.671289 14.9937 1.49937 14.9937H2.49894C3.32702 14.9937 3.99831 14.3224 3.99831 13.4943V1.49937C3.99831 0.671289 3.32702 0 2.49894 0Z"
          fill={colors.text.secondary}
        />
      </Layer>
    </View>
  );
}
export function ProfileIcon() {
  return (
    <View style={styles.profileIcon}>
      <Layer top={4} right={7} bottom={11} left={7} width={9} height={9}>
        <Path
          d="M4.2982 7.79669C6.23038 7.79669 7.79672 6.23035 7.79672 4.29817C7.79672 2.36599 6.23038 0.799652 4.2982 0.799652C2.36602 0.799652 0.799683 2.36599 0.799683 4.29817C0.799683 6.23035 2.36602 7.79669 4.2982 7.79669Z"
          stroke={colors.text.secondary}
          strokeWidth="1.59932"
        />
      </Layer>
      <Layer top={12} right={4} bottom={3} left={4} width={16} height={9}>
        <Path
          d="M0.799683 7.79669C0.799683 3.92833 3.92836 0.799652 7.79672 0.799652C11.6651 0.799652 14.7938 3.92833 14.7938 7.79669"
          stroke={colors.text.secondary}
          strokeWidth="1.59932"
          strokeLinecap="round"
        />
      </Layer>
    </View>
  );
}

const styles = StyleSheet.create({
  bellIcon: {
    width: 19,
    height: 19,
  },
  flameIcon: {
    width: 28,
    height: 28,
  },
  targetIcon: {
    width: 18,
    height: 18,
  },
  xpStarIcon: {
    width: 18,
    height: 18,
  },
  barsIcon: {
    width: 18,
    height: 18,
  },
  calendarIcon: {
    width: 16,
    height: 16,
  },
  taskCheckIcon: {
    width: 18,
    height: 18,
  },
  clockIcon: {
    width: 13,
    height: 13,
  },
  chevronIcon: {
    width: 16,
    height: 16,
  },
  progressRing: {
    width: 38,
    height: 38,
  },
  playIcon: {
    width: 10,
    height: 12,
  },
  plusIcon: {
    width: 18,
    height: 18,
  },
  homeIcon: {
    width: 22,
    height: 22,
  },
  navPlusIcon: {
    width: 14,
    height: 14,
  },
  statsIcon: {
    width: 22,
    height: 22,
  },
  profileIcon: {
    width: 22,
    height: 22,
  },
});

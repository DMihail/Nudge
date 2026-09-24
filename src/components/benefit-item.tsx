import { type ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Svg, { Path } from 'react-native-svg';

import { colors, radii, spacing, typography } from '@/theme';

type BenefitItemProps = {
  title: string;
  description: string;
  iconBackgroundColor: string;
  icon: ReactNode;
};

export function BenefitItem({ title, description, iconBackgroundColor, icon }: BenefitItemProps) {
  return (
    <View style={styles.item}>
      <View style={[styles.iconCircle, { backgroundColor: iconBackgroundColor }]}>{icon}</View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
    </View>
  );
}

export function CheckIcon() {
  return (
    <View style={styles.checkIcon}>
      <Svg width={14} height={11} viewBox="0 0 14 11" fill="none" style={styles.checkMark}>
        <Path
          d="M1.24951 5.24802L5.24799 9.2465L12.2453 1.24954"
          stroke="white"
          strokeWidth={2.49905}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

export function ChartIcon() {
  return (
    <View style={styles.chartIcon}>
      <Svg width={4} height={7} viewBox="0 0 4 7" fill="none" style={styles.barShort}>
        <Path
          d="M2.49894 0H1.49937C0.671289 0 0 0.671289 0 1.49937V5.49767C0 6.32575 0.671289 6.99704 1.49937 6.99704H2.49894C3.32702 6.99704 3.99831 6.32575 3.99831 5.49767V1.49937C3.99831 0.671289 3.32702 0 2.49894 0Z"
          fill="#22C55E"
        />
      </Svg>
      <Svg width={4} height={11} viewBox="0 0 4 11" fill="none" style={styles.barMedium}>
        <Path
          d="M2.49894 0H1.49937C0.671289 0 0 0.671289 0 1.49937V9.49598C0 10.3241 0.671289 10.9953 1.49937 10.9953H2.49894C3.32702 10.9953 3.99831 10.3241 3.99831 9.49598V1.49937C3.99831 0.671289 3.32702 0 2.49894 0Z"
          fill="#22C55E"
        />
      </Svg>
      <Svg width={4} height={15} viewBox="0 0 4 15" fill="none" style={styles.barTall}>
        <Path
          d="M2.49894 0H1.49937C0.671289 0 0 0.671289 0 1.49937V13.4943C0 14.3224 0.671289 14.9937 1.49937 14.9937H2.49894C3.32702 14.9937 3.99831 14.3224 3.99831 13.4943V1.49937C3.99831 0.671289 3.32702 0 2.49894 0Z"
          fill="#22C55E"
        />
      </Svg>
    </View>
  );
}

export function StarIcon() {
  return (
    <View style={styles.starIcon}>
      <Svg width={19} height={19} viewBox="0 0 19 19" fill="none" style={styles.star}>
        <Path
          d="M9.49601 0.499786L11.965 6.75714L18.4922 7.21695L13.6742 11.4651L15.3136 17.8125L9.49601 14.3939L3.67847 17.8125L5.31778 11.4651L0.499817 7.21695L7.02706 6.75714L9.49601 0.499786Z"
          fill="#F59E0B"
          stroke="#F59E0B"
          strokeWidth={0.999577}
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 6,
  },
  iconCircle: {
    width: 42,
    height: 42,
    marginBottom: spacing.sm,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.icon,
  },
  title: {
    ...typography.benefitTitle,
    marginBottom: spacing.xxs,
    textAlign: 'center',
    color: colors.text.primary,
  },
  description: {
    ...typography.benefitBody,
    width: 95,
    textAlign: 'center',
    color: colors.text.secondary,
  },
  checkIcon: {
    width: 20,
    height: 20,
  },
  checkMark: {
    position: 'absolute',
    top: 6,
    right: 4,
    bottom: 5,
    left: 4,
  },
  chartIcon: {
    width: 22,
    height: 22,
  },
  barShort: {
    position: 'absolute',
    top: 13,
    right: 16,
    bottom: 2,
    left: 2,
  },
  barMedium: {
    position: 'absolute',
    top: 9,
    right: 9,
    bottom: 2,
    left: 9,
  },
  barTall: {
    position: 'absolute',
    top: 5,
    right: 2,
    bottom: 2,
    left: 16,
  },
  starIcon: {
    width: 22,
    height: 22,
  },
  star: {
    position: 'absolute',
    top: 2,
    right: 2,
    bottom: 3,
    left: 2,
  },
});

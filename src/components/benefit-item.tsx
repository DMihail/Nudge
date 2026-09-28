import { type ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

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
});

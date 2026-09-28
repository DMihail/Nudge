import { type ReactNode } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';

import { SelectionCheck } from '@/components/svg/selection-check';
import { colors, radii, spacing, typography } from '@/theme';

type StyleOptionProps = {
  title: string;
  description: string;
  selected: boolean;
  iconBackground: string;
  onPress: () => void;
  children: ReactNode;
};

export function StyleOption({
  title,
  description,
  selected,
  iconBackground,
  onPress,
  children,
}: StyleOptionProps) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={title}
      onPress={onPress}
      style={[styles.card, selected ? styles.cardSelected : null]}
    >
      <View style={[styles.iconCircle, { backgroundColor: iconBackground }]}>
        <View style={styles.icon}>{children}</View>
      </View>
      <View style={styles.copy}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
      <SelectionMark selected={selected} />
    </Pressable>
  );
}

function SelectionMark({ selected }: { selected: boolean }) {
  if (!selected) {
    return <View style={styles.mark} />;
  }

  return (
    <View style={styles.markSelected}>
      <View style={styles.check}>
        <SelectionCheck />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderWidth: 1.87,
    borderColor: colors.border,
    borderRadius: radii.option,
    backgroundColor: colors.surface,
  },
  cardSelected: {
    backgroundColor: colors.selectedSurface,
    borderColor: colors.primary,
  },
  iconCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: radii.iconCircle,
  },
  icon: {
    width: 24,
    height: 24,
  },
  copy: {
    flexGrow: 1,
    flexShrink: 1,
  },
  title: {
    ...typography.cardTitle,
    color: colors.text.primary,
  },
  description: {
    ...typography.cardBody,
    marginTop: 2,
    color: colors.text.secondary,
  },
  mark: {
    width: 28,
    height: 28,
    borderWidth: 1.87,
    borderColor: colors.border,
    borderRadius: 14,
  },
  markSelected: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.35,
    shadowRadius: 8,
  },
  check: {
    width: 14,
    height: 14,
  },
});

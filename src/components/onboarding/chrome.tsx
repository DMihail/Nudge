import { useRef, useState } from 'react';
import { Animated, Pressable, StyleSheet, Text, View } from 'react-native';

import { BackChevron } from '@/components/svg/back-chevron';
import { colors, radii, shadows, spacing, typography } from '@/theme';

const PAGE_COUNT = 3;

type HeaderProps = {
  onBack: () => void;
  onSkip: () => void;
};

export function OnboardingHeader({ onBack, onSkip }: HeaderProps) {
  return (
    <View style={styles.header}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Back"
        onPress={onBack}
        style={styles.brandRow}
      >
        <BackChevron />
        <Text style={styles.brand}>Nudge</Text>
      </Pressable>
      <Pressable accessibilityRole="button" accessibilityLabel="Skip" onPress={onSkip}>
        <Text style={styles.skip}>Skip</Text>
      </Pressable>
    </View>
  );
}

export function OnboardingPagination({ activeIndex }: { activeIndex: number }) {
  return (
    <View style={styles.pagination}>
      {Array.from({ length: PAGE_COUNT }, (_, index) => (
        <View key={index} style={index === activeIndex ? styles.dotActive : styles.dot} />
      ))}
    </View>
  );
}

type ButtonProps = {
  label: string;
  onPress: () => void;
};

export function OnboardingButton({ label, onPress }: ButtonProps) {
  const [scale] = useState(() => new Animated.Value(1));
  const busy = useRef(false);

  function handlePress() {
    if (busy.current) {
      return;
    }

    busy.current = true;
    Animated.sequence([
      Animated.timing(scale, {
        toValue: 1.05,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(scale, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(({ finished }) => {
      if (finished) {
        onPress();
        return;
      }

      busy.current = false;
    });
  }

  return (
    <Animated.View style={[styles.buttonWrap, { transform: [{ scale }] }]}>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel={label.replace(' →', '')}
        onPress={handlePress}
        style={styles.button}
      >
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: spacing.md,
    paddingHorizontal: spacing.xl,
  },
  brandRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
  },
  brand: {
    ...typography.brand,
    color: colors.primary,
  },
  skip: {
    ...typography.skip,
    color: colors.primary,
  },
  pagination: {
    height: 28,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
    paddingVertical: spacing.sm,
  },
  dotActive: {
    width: 24,
    height: 8,
    borderRadius: radii.pill,
    backgroundColor: colors.primary,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: radii.pill,
    backgroundColor: colors.inactive,
  },
  buttonWrap: {
    marginHorizontal: spacing.xl,
    marginBottom: spacing.xl,
  },
  button: {
    ...shadows.button,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.button,
    backgroundColor: colors.primary,
  },
  buttonLabel: {
    ...typography.button,
    color: colors.text.onPrimary,
  },
});

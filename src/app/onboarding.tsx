import { StyleSheet, Text, View } from 'react-native';

import { BenefitItem, ChartIcon, CheckIcon, StarIcon } from '@/components/benefit-item';
import { Mascot } from '@/components/mascot';
import { colors, radii, shadows, spacing, typography } from '@/theme';

export default function OnboardingWelcomeScreen() {
  return (
    <View style={styles.screen}>
      <View style={styles.header}>
        <Text style={styles.brand}>Nudge</Text>
        <Text style={styles.skip}>Skip</Text>
      </View>

      <Text style={styles.headline}>
        Small pushes.{'\n'}
        <Text style={styles.headlineAccent}>Big results.</Text>
      </Text>

      <Text style={styles.subtitle}>
        Nudge helps you stay accountable, get things done, and become a better version of yourself.
      </Text>

      <View style={styles.mascotSection}>
        <Mascot />
      </View>

      <View style={styles.benefits}>
        <BenefitItem
          title="Build habits"
          description="Turn intentions into actions."
          iconBackgroundColor={colors.primary}
          icon={<CheckIcon />}
        />
        <View style={styles.divider} />
        <BenefitItem
          title="Track progress"
          description="See your growth every day."
          iconBackgroundColor={colors.successSurface}
          icon={<ChartIcon />}
        />
        <View style={styles.divider} />
        <BenefitItem
          title="Earn rewards"
          description="Stay consistent and level up."
          iconBackgroundColor={colors.warningSurface}
          icon={<StarIcon />}
        />
      </View>

      <View style={styles.pagination}>
        <View style={styles.dotActive} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      <View style={styles.button}>
        <Text style={styles.buttonLabel}>Get started →</Text>
      </View>

      <Text style={styles.footer}>A BETTER YOU TOMORROW</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 56,
    paddingHorizontal: spacing.xl,
  },
  brand: {
    ...typography.brand,
    color: colors.text.primary,
  },
  skip: {
    ...typography.skip,
    color: colors.primary,
  },
  headline: {
    ...typography.headline,
    marginTop: 22,
    paddingHorizontal: spacing.xl,
    color: colors.text.primary,
  },
  headlineAccent: {
    color: colors.primary,
  },
  subtitle: {
    ...typography.body,
    marginTop: spacing.md,
    paddingHorizontal: spacing.xl,
    color: colors.text.secondary,
  },
  mascotSection: {
    flexGrow: 1,
    flexShrink: 1,
    paddingTop: spacing.sm,
  },
  benefits: {
    ...shadows.card,
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginHorizontal: spacing.lg,
    paddingHorizontal: spacing.sm,
    paddingVertical: 18,
    borderRadius: radii.card,
    backgroundColor: colors.surface,
  },
  divider: {
    alignSelf: 'stretch',
    width: 1,
    marginHorizontal: spacing.xxs,
    backgroundColor: colors.border,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: spacing.xs,
    paddingTop: spacing.lg,
    paddingBottom: spacing.sm,
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
  button: {
    ...shadows.button,
    height: 65,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.button,
    backgroundColor: colors.primary,
  },
  buttonLabel: {
    ...typography.button,
    color: colors.text.onPrimary,
  },
  footer: {
    ...typography.caption,
    marginTop: spacing.md,
    marginBottom: spacing.xl,
    textAlign: 'center',
    color: colors.text.caption,
  },
});

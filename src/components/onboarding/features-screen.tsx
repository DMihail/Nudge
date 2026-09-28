import { type ReactNode } from 'react';
import { ScrollView, StyleSheet, Text, View, type ViewStyle } from 'react-native';

import { useRouter } from 'expo-router';

import {
  OnboardingButton,
  OnboardingHeader,
  OnboardingPagination,
} from '@/components/onboarding/chrome';
import { Screen } from '@/components/screen';
import { GrowthIcon, ProgressIcon, ReminderIcon, RewardIcon } from '@/components/svg/feature-icons';
import { FeaturesMascot } from '@/components/svg/features-mascot';
import {
  completeOnboarding,
  onboardingHref,
  OnboardingStep,
  setNudgeStyle,
} from '@/store/onboarding';
import { colors, radii, shadows, spacing, typography } from '@/theme';

function FeatureCard({
  title,
  body,
  iconStyle,
  children,
}: {
  title: string;
  body: string;
  iconStyle: ViewStyle;
  children: ReactNode;
}) {
  return (
    <View style={styles.featureCard}>
      <View style={[styles.iconCircle, iconStyle]}>
        <View style={styles.iconBox}>{children}</View>
      </View>
      <View style={styles.featureCopy}>
        <Text style={styles.featureTitle}>{title}</Text>
        <Text style={styles.featureBody}>{body}</Text>
      </View>
    </View>
  );
}

export function OnboardingFeaturesScreen() {
  const router = useRouter();

  function skip() {
    completeOnboarding();
    router.replace('/');
  }

  return (
    <Screen style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <OnboardingHeader
          onBack={() => router.replace(onboardingHref(OnboardingStep.Welcome))}
          onSkip={skip}
        />
        <Text style={styles.headline}>
          {'More than a\n'}
          <Text style={styles.headlineAccent}>todo list.</Text>
        </Text>
        <Text style={styles.subtitle}>
          Reminders, progress, and a little pressure when you need it.
        </Text>
        <View style={styles.features}>
          <FeatureCard
            title="Get things done"
            body="Smart reminders that actually work."
            iconStyle={styles.iconGreen}
          >
            <ReminderIcon />
          </FeatureCard>
          <FeatureCard
            title="Track your progress"
            body="See your stats and build consistent habits."
            iconStyle={styles.iconGreen}
          >
            <ProgressIcon />
          </FeatureCard>
          <FeatureCard
            title="Earn rewards"
            body="Complete tasks and level up."
            iconStyle={styles.iconYellow}
          >
            <RewardIcon />
          </FeatureCard>
          <FeatureCard
            title="A better you"
            body="Small steps. Big changes."
            iconStyle={styles.iconGreen}
          >
            <GrowthIcon />
          </FeatureCard>
        </View>

        <View style={styles.mascotSection}>
          <FeaturesMascot />
        </View>
        <OnboardingPagination activeIndex={1} />
        <OnboardingButton
          label="Next →"
          onPress={() => {
            setNudgeStyle('normal');
            router.push(onboardingHref(OnboardingStep.Style, 'normal'));
          }}
        />
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  content: {
    flexGrow: 1,
  },
  headline: {
    ...typography.screenHeadline,
    marginTop: spacing.xl,
    paddingHorizontal: spacing.xl,
    textAlign: 'center',
    color: colors.text.primary,
  },
  headlineAccent: {
    color: colors.primary,
  },
  subtitle: {
    ...typography.subtitle,
    marginTop: spacing.sm,
    paddingHorizontal: spacing.xxl,
    textAlign: 'center',
    color: colors.text.secondary,
  },
  features: {
    alignSelf: 'stretch',
    gap: spacing.sm,
    marginTop: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  featureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: radii.option,
    backgroundColor: colors.surface,
    ...shadows.option,
  },
  iconCircle: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 48,
    height: 48,
    borderRadius: radii.iconCircle,
  },
  iconGreen: {
    backgroundColor: colors.primaryMuted,
  },
  iconYellow: {
    backgroundColor: colors.warningSurface,
  },
  iconBox: {
    width: 24,
    height: 24,
  },
  featureCopy: {
    flexGrow: 1,
    flexShrink: 1,
  },
  featureTitle: {
    ...typography.cardTitle,
    color: colors.text.primary,
  },
  featureBody: {
    ...typography.cardBody,
    marginTop: 2,
    color: colors.text.secondary,
  },
  mascotSection: {
    flexGrow: 1,
    flexShrink: 1,
    alignSelf: 'stretch',
    paddingTop: spacing.xxs,
  },
});

import { ScrollView, StyleSheet, Text, View } from 'react-native';

import { useLocalSearchParams, useRouter } from 'expo-router';

import {
  OnboardingButton,
  OnboardingHeader,
  OnboardingPagination,
} from '@/components/onboarding/chrome';
import { StyleOption } from '@/components/onboarding/style-option';
import { Screen } from '@/components/screen';
import { BrutalIcon, GamifiedIcon, GentleIcon, NormalIcon } from '@/components/svg/style-icons';
import { StyleMascot } from '@/components/svg/style-mascot';
import {
  isNudgeStyle,
  type NudgeStyle,
  onboardingHref,
  OnboardingStep,
  useOnboardingStore,
} from '@/store/onboarding';
import { colors, spacing, typography } from '@/theme';

export function OnboardingStyleScreen() {
  const router = useRouter();
  const { style } = useLocalSearchParams<{ step?: string; style?: string }>();
  const selected: NudgeStyle = isNudgeStyle(style) ? style : 'normal';

  function choose(next: NudgeStyle) {
    useOnboardingStore.getState().setNudgeStyle(next);
    router.setParams({ style: next });
  }

  function skip() {
    useOnboardingStore.getState().completeOnboarding();
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
          onBack={() => router.replace(onboardingHref(OnboardingStep.Features))}
          onSkip={skip}
        />
        <Text style={styles.headline}>
          {'Choose your\n'}
          <Text style={styles.headlineAccent}>Nudge style</Text>
        </Text>
        <Text style={styles.subtitle}>How should I remind you?</Text>
        <View style={styles.cards}>
          <StyleOption
            title="Gentle"
            description="Friendly reminders and positive vibes."
            selected={selected === 'gentle'}
            iconBackground={colors.primaryMuted}
            onPress={() => choose('gentle')}
          >
            <GentleIcon />
          </StyleOption>
          <StyleOption
            title="Normal"
            description="Balanced reminders with some pressure."
            selected={selected === 'normal'}
            iconBackground={colors.warningSurface}
            onPress={() => choose('normal')}
          >
            <NormalIcon />
          </StyleOption>
          <StyleOption
            title="Brutal"
            description="No excuses. I won't give up on you."
            selected={selected === 'brutal'}
            iconBackground={colors.dangerSurface}
            onPress={() => choose('brutal')}
          >
            <BrutalIcon />
          </StyleOption>
          <StyleOption
            title="Gamified"
            description="Extra motivation with challenges and rewards."
            selected={selected === 'gamified'}
            iconBackground={colors.primaryMuted}
            onPress={() => choose('gamified')}
          >
            <GamifiedIcon />
          </StyleOption>
        </View>

        <View style={styles.mascotSection}>
          <StyleMascot />
        </View>
        <OnboardingPagination activeIndex={2} />
        <OnboardingButton
          label="Continue →"
          onPress={() => {
            useOnboardingStore.getState().setNudgeStyle(selected);
            useOnboardingStore.getState().completeOnboarding();
            router.replace('/');
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
    marginTop: spacing.xs,
    paddingHorizontal: spacing.xxl,
    textAlign: 'center',
    color: colors.text.secondary,
    lineHeight: 22.5,
  },
  cards: {
    alignSelf: 'stretch',
    gap: spacing.sm,
    marginTop: spacing.lg,
    paddingHorizontal: spacing.lg,
  },
  mascotSection: {
    flexGrow: 1,
    flexShrink: 1,
    alignSelf: 'stretch',
    paddingTop: spacing.xxs,
  },
});

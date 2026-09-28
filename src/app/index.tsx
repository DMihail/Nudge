import { StyleSheet, Text } from 'react-native';

import { Redirect } from 'expo-router';

import { Screen } from '@/components/screen';
import { onboardingHref, OnboardingStep, useOnboardingStore } from '@/store/onboarding';
import { APP_NAME, colors, spacing, typography } from '@/theme';

export default function HomeScreen() {
  const completed = useOnboardingStore((state) => state.completed);

  if (!completed) {
    return <Redirect href={onboardingHref(OnboardingStep.Welcome)} />;
  }

  return (
    <Screen style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Text style={styles.appName}>{APP_NAME}</Text>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
    paddingHorizontal: spacing.lg,
    gap: spacing.xs,
  },
  title: {
    ...typography.title,
    color: colors.text.primary,
  },
  appName: {
    ...typography.skip,
    color: colors.text.secondary,
  },
});

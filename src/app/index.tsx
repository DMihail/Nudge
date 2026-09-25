import { StyleSheet, Text, View } from 'react-native';

import { Redirect } from 'expo-router';

import { onboardingHref, OnboardingStep, useOnboardingStore } from '@/store/onboarding';
import { APP_NAME, colors, spacing, typography } from '@/theme';

export default function HomeScreen() {
  const completed = useOnboardingStore((state) => state.completed);

  if (!completed) {
    return <Redirect href={onboardingHref(OnboardingStep.Welcome)} />;
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Text style={styles.appName}>{APP_NAME}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.surface,
    padding: spacing.lg,
    gap: spacing.xs,
  },
  title: {
    ...typography.title,
    color: '#111111',
  },
  appName: {
    fontSize: 20,
    color: '#111111',
  },
});

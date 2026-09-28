import { Redirect, useLocalSearchParams } from 'expo-router';

import { OnboardingFeaturesScreen } from '@/components/onboarding/features-screen';
import { OnboardingStyleScreen } from '@/components/onboarding/style-screen';
import { OnboardingWelcomeScreen } from '@/components/onboarding/welcome-screen';
import { onboardingHref,OnboardingStep } from '@/store/onboarding';

export default function OnboardingStepScreen() {
  const { step } = useLocalSearchParams<{ step: string }>();

  if (step === OnboardingStep.Welcome) {
    return <OnboardingWelcomeScreen />;
  }

  if (step === OnboardingStep.Features) {
    return <OnboardingFeaturesScreen />;
  }

  if (step === OnboardingStep.Style) {
    return <OnboardingStyleScreen />;
  }

  return <Redirect href={onboardingHref(OnboardingStep.Welcome)} />;
}

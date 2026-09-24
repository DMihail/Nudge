import { StyleSheet, Text, View } from 'react-native';

import { Link } from 'expo-router';

import { APP_NAME, colors, spacing, typography } from '@/theme';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World</Text>
      <Text style={styles.appName}>{APP_NAME}</Text>
      <Link href={'/onboarding'}>
        <Text style={styles.title}>onboarding</Text>
      </Link>
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

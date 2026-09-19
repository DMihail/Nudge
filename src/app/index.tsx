import { StyleSheet, Text, View } from 'react-native';

import { APP_NAME, Colors, Spacing, Typography } from '@/constants';

export default function HomeScreen() {
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
    backgroundColor: Colors.background,
    padding: Spacing.md,
    gap: Spacing.sm,
  },
  title: {
    ...Typography.title,
    color: Colors.text,
  },
  appName: {
    fontSize: 20,
    color: Colors.text,
  },
});

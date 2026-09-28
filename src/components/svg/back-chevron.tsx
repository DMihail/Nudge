import { StyleSheet, View } from 'react-native';

import { Path, Svg } from 'react-native-svg';

import { colors } from '@/theme';

export function BackChevron() {
  return (
    <View style={styles.back}>
      <Svg style={styles.chevron} width="9" height="15" viewBox="0 0 9 15" fill="none">
        <Path
          d="M7.09701 13.0945L1.09955 7.09701L7.09701 1.09955"
          stroke={colors.text.secondary}
          strokeWidth="2.19907"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 22,
    height: 22,
  },
  chevron: {
    position: 'absolute',
    top: 5,
    right: 8,
    bottom: 5,
    left: 8,
  },
});

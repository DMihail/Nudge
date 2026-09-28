import { type ReactNode } from 'react';
import { StyleSheet, type ViewStyle } from 'react-native';

import Svg from 'react-native-svg';

type IllustrationLayerProps = {
  top: number;
  right: number;
  bottom: number;
  left: number;
  width: number;
  height: number;
  children: ReactNode;
};

export function IllustrationLayer({
  top,
  right,
  bottom,
  left,
  width,
  height,
  children,
}: IllustrationLayerProps) {
  const frame: ViewStyle = { top, right, bottom, left };

  return (
    <Svg
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      fill="none"
      style={[styles.layer, frame]}
    >
      {children}
    </Svg>
  );
}

const styles = StyleSheet.create({
  layer: {
    position: 'absolute',
    overflow: 'visible',
  },
});

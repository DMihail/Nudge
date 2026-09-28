import { Path } from 'react-native-svg';

import { IllustrationLayer } from '@/components/svg/illustration-layer';
import { colors } from '@/theme';

export function SelectionCheck() {
  return (
    <IllustrationLayer top={4} right={2} bottom={4} left={2} width={11} height={8}>
      <Path
        d="M0.999878 3.99931L3.99936 6.9988L9.99834 0.999828"
        stroke={colors.text.onPrimary}
        strokeWidth="1.99966"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IllustrationLayer>
  );
}

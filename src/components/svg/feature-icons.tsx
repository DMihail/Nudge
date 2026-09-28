import { Path } from 'react-native-svg';

import { IllustrationLayer } from '@/components/svg/illustration-layer';
import { colors } from '@/theme';

export function ReminderIcon() {
  return (
    <>
      <IllustrationLayer top={2} right={3} bottom={7} left={3} width={20} height={17}>
        <Path
          d="M16 6.99994C16 5.40864 15.3679 3.88252 14.2426 2.7573C13.1174 1.63208 11.5913 0.999939 10 0.999939C8.4087 0.999939 6.88258 1.63208 5.75736 2.7573C4.63214 3.88252 4 5.40864 4 6.99994C4 13.9999 1 15.9999 1 15.9999H19C19 15.9999 16 13.9999 16 6.99994Z"
          stroke={colors.primary}
          strokeWidth="1.99989"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </IllustrationLayer>
      <IllustrationLayer top={21} right={10} bottom={2} left={10} width={6} height={3}>
        <Path
          d="M4.46012 1.00011C4.28431 1.30319 4.03196 1.55477 3.72835 1.72964C3.42473 1.90452 3.0805 1.99657 2.73012 1.99657C2.37974 1.99657 2.03551 1.90452 1.7319 1.72964C1.42828 1.55477 1.17593 1.30319 1.00012 1.00011"
          stroke={colors.primary}
          strokeWidth="1.99989"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </IllustrationLayer>
    </>
  );
}

export function ProgressIcon() {
  return (
    <>
      <IllustrationLayer top={14} right={18} bottom={2} left={2} width={4} height={8}>
        <Path
          d="M2.5 0H1.5C0.671573 0 0 0.671573 0 1.5V6.5C0 7.32843 0.671573 8 1.5 8H2.5C3.32843 8 4 7.32843 4 6.5V1.5C4 0.671573 3.32843 0 2.5 0Z"
          fill={colors.primary}
        />
      </IllustrationLayer>
      <IllustrationLayer top={9} right={10} bottom={2} left={10} width={4} height={13}>
        <Path
          d="M2.5 0H1.5C0.671573 0 0 0.671573 0 1.5V11.5C0 12.3284 0.671573 13 1.5 13H2.5C3.32843 13 4 12.3284 4 11.5V1.5C4 0.671573 3.32843 0 2.5 0Z"
          fill={colors.primary}
        />
      </IllustrationLayer>
      <IllustrationLayer top={4} right={2} bottom={2} left={18} width={4} height={18}>
        <Path
          d="M2.5 0H1.5C0.671573 0 0 0.671573 0 1.5V16.5C0 17.3284 0.671573 18 1.5 18H2.5C3.32843 18 4 17.3284 4 16.5V1.5C4 0.671573 3.32843 0 2.5 0Z"
          fill={colors.primary}
        />
      </IllustrationLayer>
    </>
  );
}

export function RewardIcon() {
  return (
    <>
      <IllustrationLayer top={2} right={2} bottom={3} left={2} width={20} height={19}>
        <Path
          d="M9.99946 0L12.8993 6.59964L19.9989 7.2996L14.9992 12.0993L16.4991 18.999L9.99946 15.4992L3.49981 18.999L4.99973 12.0993L0 7.2996L7.09962 6.59964L9.99946 0Z"
          fill="#F59E0B"
        />
      </IllustrationLayer>
    </>
  );
}

export function GrowthIcon() {
  return (
    <>
      <IllustrationLayer top={3} right={4} bottom={2} left={4} width={18} height={21}>
        <Path
          d="M8.74951 19.7489C13.7192 16.2491 16.7491 12.2493 16.7491 8.74953C16.7491 6.62791 15.9063 4.59319 14.4061 3.09298C12.9058 1.59277 10.8711 0.749962 8.74951 0.749962C6.62789 0.749962 4.59317 1.59277 3.09296 3.09298C1.59275 4.59319 0.749939 6.62791 0.749939 8.74953C0.749939 12.2493 3.77977 16.2491 8.74951 19.7489Z"
          fill={colors.primaryMuted}
          stroke={colors.primary}
          strokeWidth="1.49992"
        />
      </IllustrationLayer>
      <IllustrationLayer top={6} right={6} bottom={2} left={6} width={14} height={19}>
        <Path
          d="M6.90021 17.1546V6.15462M6.90021 6.15462C6.90021 2.15462 3.90021 0.154622 0.900208 1.15462M6.90021 6.15462C6.90021 2.15462 9.90021 0.154622 12.9002 1.15462"
          stroke={colors.primary}
          strokeWidth="1.7999"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </IllustrationLayer>
    </>
  );
}

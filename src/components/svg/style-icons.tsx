import { Path } from 'react-native-svg';

import { IllustrationLayer } from '@/components/svg/illustration-layer';
import { colors } from '@/theme';

export function GentleIcon() {
  return (
    <>
      <IllustrationLayer top={0} right={3} bottom={2} left={3} width={20} height={23}>
        <Path
          d="M9.74951 21.9988C9.74951 21.9988 0.75 15.9991 0.75 8.99951C0.75 6.61269 1.69816 4.32363 3.3859 2.6359C5.07363 0.94816 7.36269 0 9.74951 0C12.1363 0 14.4254 0.94816 16.1131 2.6359C17.8009 4.32363 18.749 6.61269 18.749 8.99951C18.749 15.9991 9.74951 21.9988 9.74951 21.9988Z"
          fill={colors.primaryMuted}
          stroke={colors.primary}
          strokeWidth="1.49992"
        />
      </IllustrationLayer>
      <IllustrationLayer top={5} right={6} bottom={2} left={6} width={14} height={20}>
        <Path
          d="M6.90015 18.1546V6.15463M6.90015 6.15463C6.90015 2.15463 3.90015 0.15463 0.900146 1.15463M6.90015 6.15463C6.90015 2.15463 9.90015 0.15463 12.9001 1.15463"
          stroke={colors.primary}
          strokeWidth="1.7999"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </IllustrationLayer>
    </>
  );
}

export function NormalIcon() {
  return (
    <>
      <IllustrationLayer top={1} right={3} bottom={1} left={3} width={17} height={23}>
        <Path
          d="M10.4955 0.499817L0.499756 12.4947H8.49637L6.49722 22.4905L16.493 10.4956H8.49637L10.4955 0.499817Z"
          fill="#F59E0B"
          stroke="#D97706"
          strokeWidth="0.999577"
          strokeLinejoin="round"
        />
      </IllustrationLayer>
    </>
  );
}

export function BrutalIcon() {
  return (
    <>
      <IllustrationLayer top={2} right={6} bottom={6} left={4} width={12} height={16}>
        <Path
          d="M6.99704 0C6.99704 0 11.9949 4.99789 11.9949 9.99577C11.9949 12.4947 10.4956 14.4939 8.9962 15.4934C9.49598 13.9941 9.49598 12.4947 8.49641 11.4951C8.49641 13.9941 6.49725 15.9932 3.99831 15.9932C1.99915 15.9932 0 14.4939 0 11.9949C0 8.9962 1.99915 6.99704 3.99831 5.99746C2.99873 7.99662 3.49852 9.49598 4.4981 9.99577C4.4981 5.99746 6.99704 0 6.99704 0Z"
          fill="#EF4444"
        />
      </IllustrationLayer>

      <IllustrationLayer top={13} right={7} bottom={2} left={7} width={9} height={9}>
        <Path
          d="M1.27946 4.4981C1.27946 4.4981 -0.719696 6.49725 0.279882 8.49641H8.2765C8.77629 6.49725 7.27692 4.99789 6.27735 3.99831C6.77713 2.49894 6.77713 0.999577 5.77756 0C5.27777 2.49894 3.7784 4.4981 1.27946 4.4981Z"
          fill="#F97316"
        />
      </IllustrationLayer>
    </>
  );
}

export function GamifiedIcon() {
  return (
    <>
      <IllustrationLayer top={4} right={1} bottom={2} left={1} width={24} height={14}>
        <Path
          d="M17.9932 0H5.99772C2.68527 0 0 2.68527 0 5.99772V7.99696C0 11.3094 2.68527 13.9947 5.99772 13.9947H17.9932C21.3056 13.9947 23.9909 11.3094 23.9909 7.99696V5.99772C23.9909 2.68527 21.3056 0 17.9932 0Z"
          fill="#1A1A2E"
        />
      </IllustrationLayer>

      <IllustrationLayer top={9} right={19} bottom={6} left={4} width={3} height={5}>
        <Path
          opacity="0.8"
          d="M1.99924 0H0.99962C0.447545 0 0 0.447545 0 0.99962V3.99848C0 4.55056 0.447545 4.9981 0.99962 4.9981H1.99924C2.55132 4.9981 2.99886 4.55056 2.99886 3.99848V0.99962C2.99886 0.447545 2.55132 0 1.99924 0Z"
          fill={colors.surface}
        />
      </IllustrationLayer>

      <IllustrationLayer top={10} right={18} bottom={7} left={3} width={5} height={3}>
        <Path
          opacity="0.8"
          d="M3.99848 0H0.99962C0.447545 0 0 0.447545 0 0.99962V1.99924C0 2.55132 0.447545 2.99886 0.99962 2.99886H3.99848C4.55056 2.99886 4.9981 2.55132 4.9981 1.99924V0.99962C4.9981 0.447545 4.55056 0 3.99848 0Z"
          fill={colors.surface}
        />
      </IllustrationLayer>

      <IllustrationLayer top={8} right={7} bottom={8} left={16} width={3} height={3}>
        <Path
          opacity="0.9"
          d="M1.49943 2.99886C2.32754 2.99886 2.99886 2.32754 2.99886 1.49943C2.99886 0.671318 2.32754 0 1.49943 0C0.671318 0 0 0.671318 0 1.49943C0 2.32754 0.671318 2.99886 1.49943 2.99886Z"
          fill={colors.primary}
        />
      </IllustrationLayer>

      <IllustrationLayer top={11} right={4} bottom={5} left={19} width={3} height={3}>
        <Path
          opacity="0.9"
          d="M1.49943 2.99886C2.32754 2.99886 2.99886 2.32754 2.99886 1.49943C2.99886 0.671318 2.32754 0 1.49943 0C0.671318 0 0 0.671318 0 1.49943C0 2.32754 0.671318 2.99886 1.49943 2.99886Z"
          fill={colors.primary}
        />
      </IllustrationLayer>

      <IllustrationLayer top={11} right={9} bottom={5} left={13} width={3} height={3}>
        <Path
          opacity="0.9"
          d="M1.49943 2.99886C2.32754 2.99886 2.99886 2.32754 2.99886 1.49943C2.99886 0.671318 2.32754 0 1.49943 0C0.671318 0 0 0.671318 0 1.49943C0 2.32754 0.671318 2.99886 1.49943 2.99886Z"
          fill={colors.primary}
        />
      </IllustrationLayer>

      <IllustrationLayer top={14} right={7} bottom={2} left={16} width={3} height={3}>
        <Path
          opacity="0.9"
          d="M1.49943 2.99886C2.32754 2.99886 2.99886 2.32754 2.99886 1.49943C2.99886 0.671318 2.32754 0 1.49943 0C0.671318 0 0 0.671318 0 1.49943C0 2.32754 0.671318 2.99886 1.49943 2.99886Z"
          fill={colors.primary}
        />
      </IllustrationLayer>

      <IllustrationLayer top={1} right={16} bottom={16} left={6} width={4} height={3}>
        <Path opacity="0.4" d="M1.99924 0L3.99848 2.99886H0L1.99924 0Z" fill="#1A1A2E" />
      </IllustrationLayer>

      <IllustrationLayer top={1} right={6} bottom={16} left={16} width={4} height={3}>
        <Path opacity="0.4" d="M1.99924 0L3.99848 2.99886H0L1.99924 0Z" fill="#1A1A2E" />
      </IllustrationLayer>
    </>
  );
}

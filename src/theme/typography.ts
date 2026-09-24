import { type TextStyle } from 'react-native';

export const FontFamily = {
  display: 'Plus Jakarta Sans',
  body: 'Inter',
} as const;

export const typography = {
  title: {
    fontSize: 32,
    fontWeight: '700',
    letterSpacing: -0.4,
  },
  brand: {
    fontFamily: FontFamily.display,
    fontSize: 22,
    fontWeight: '800',
    letterSpacing: -0.5,
    lineHeight: 33,
  },
  skip: {
    fontFamily: FontFamily.display,
    fontSize: 16,
    fontWeight: '600',
    lineHeight: 24,
  },
  headline: {
    fontFamily: FontFamily.display,
    fontSize: 40,
    fontWeight: '800',
    letterSpacing: -1.2,
    lineHeight: 45.2,
  },
  body: {
    fontFamily: FontFamily.body,
    fontSize: 15.5,
    fontWeight: '400',
    lineHeight: 25.58,
  },
  benefitTitle: {
    fontFamily: FontFamily.display,
    fontSize: 13.5,
    fontWeight: '700',
    lineHeight: 20.25,
  },
  benefitBody: {
    fontFamily: FontFamily.body,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 16.8,
  },
  button: {
    fontFamily: FontFamily.display,
    fontSize: 18,
    fontWeight: '700',
    letterSpacing: -0.2,
    lineHeight: 27,
  },
  caption: {
    fontFamily: FontFamily.body,
    fontSize: 10.5,
    fontWeight: '600',
    letterSpacing: 3,
    lineHeight: 15.75,
  },
  quote: {
    fontFamily: FontFamily.display,
    fontSize: 12.95,
    fontWeight: '700',
  },
} as const satisfies Record<string, TextStyle>;

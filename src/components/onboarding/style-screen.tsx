import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useLocalSearchParams, useRouter } from 'expo-router';

import {
  Defs,
  FeBlend,
  FeFlood,
  FeGaussianBlur,
  Filter,
  G,
  Path,
  RadialGradient,
  Stop,
  Svg,
} from 'react-native-svg';

import {
  completeOnboarding,
  isNudgeStyle,
  type NudgeStyle,
  setNudgeStyle,
} from '@/store/onboarding';

function StyleIndicator({ selected }: { selected: boolean }) {
  if (!selected) {
    return <View style={styles.selectionIndicator} />;
  }

  return (
    <View style={styles._selectionIndicator}>
      <View style={styles.___icon}>
        <Svg style={styles.____vector} width="11" height="8" viewBox="0 0 11 8" fill="none">
          <Path
            d="M0.999878 3.99931L3.99936 6.9988L9.99834 0.999828"
            stroke="white"
            strokeWidth="1.99966"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </Svg>
      </View>
    </View>
  );
}

export function OnboardingStyleScreen() {
  const router = useRouter();
  const { style } = useLocalSearchParams<{ step?: string; style?: string }>();
  const selected: NudgeStyle = isNudgeStyle(style) ? style : 'normal';

  function choose(next: NudgeStyle) {
    setNudgeStyle(next);
    router.setParams({ style: next });
  }

  function skip() {
    completeOnboarding();
    router.replace('/');
  }

  function cardStyle(id: NudgeStyle) {
    return [styles.nudgeStyleCard, selected === id ? styles.cardSelected : null];
  }

  return (
    <View style={styles.onboardingWelcomeScreenContainer}>
      <View style={styles.body}>
        <View style={styles.container}>
          <View style={styles.screen3}>
            <View style={styles._container}>
              <View style={styles.__container}>
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="Back"
                  onPress={() => router.back()}
                >
                  <View style={styles.button}>
                    <View style={styles.icon}>
                      <Svg
                        style={styles.vector}
                        width="9"
                        height="15"
                        viewBox="0 0 9 15"
                        fill="none"
                      >
                        <Path
                          d="M7.09695 13.0945L1.09949 7.09701L7.09695 1.09955"
                          stroke="#64748B"
                          strokeWidth="2.19907"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </Svg>
                    </View>
                  </View>
                </Pressable>
                <View style={styles.text}>
                  <Text style={styles.nudge}>{`Nudge`}</Text>
                </View>
              </View>
              <View style={styles._text}>
                <Pressable accessibilityRole="button" accessibilityLabel="Skip" onPress={skip}>
                  <Text style={styles.skip}>{`Skip`}</Text>
                </Pressable>
              </View>
            </View>
            <View style={styles.heading1}>
              <Text style={styles.chooseyourNudgestyle}>
                {`Choose your\n`}
                <Text
                  style={{
                    textAlign: 'center',
                    color: 'rgba(34, 197, 94, 1)',
                    fontFamily: 'Plus Jakarta Sans',
                    fontSize: 36,
                    fontWeight: 800,
                    letterSpacing: -1,
                    lineHeight: 41.400001525878906,
                  }}
                >{`Nudge style`}</Text>
              </Text>
            </View>
            <View style={styles.paragraph}>
              <Text style={styles.howshouldIremindyou}>{`How should I remind you?`}</Text>
            </View>
            <View style={styles.___container}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Gentle"
                onPress={() => choose('gentle')}
                style={cardStyle('gentle')}
              >
                <View style={styles.iconCircle}>
                  <View style={styles._icon}>
                    <Svg
                      style={styles._vector}
                      width="20"
                      height="23"
                      viewBox="0 0 20 23"
                      fill="none"
                    >
                      <Path
                        d="M9.74951 21.9988C9.74951 21.9988 0.75 15.9991 0.75 8.99951C0.75 6.61269 1.69816 4.32363 3.3859 2.6359C5.07363 0.94816 7.36269 0 9.74951 0C12.1363 0 14.4254 0.94816 16.1131 2.6359C17.8009 4.32363 18.749 6.61269 18.749 8.99951C18.749 15.9991 9.74951 21.9988 9.74951 21.9988Z"
                        fill="#DCFCE7"
                        stroke="#22C55E"
                        strokeWidth="1.49992"
                      />
                    </Svg>

                    <Svg
                      style={styles.__vector}
                      width="14"
                      height="20"
                      viewBox="0 0 14 20"
                      fill="none"
                    >
                      <Path
                        d="M6.90015 18.1546V6.15463M6.90015 6.15463C6.90015 2.15463 3.90015 0.15463 0.900146 1.15463M6.90015 6.15463C6.90015 2.15463 9.90015 0.15463 12.9001 1.15463"
                        stroke="#22C55E"
                        strokeWidth="1.7999"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Svg>
                  </View>
                </View>
                <View style={styles.____container}>
                  <View style={styles._____container}>
                    <Text style={styles.gentle}>{`Gentle`}</Text>
                  </View>
                  <View style={styles.______container}>
                    <Text style={styles.friendlyremindersandpositivevibes}>
                      {`Friendly reminders and positive vibes.`}
                    </Text>
                  </View>
                </View>
                <StyleIndicator selected={selected === 'gentle'} />
              </Pressable>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Normal"
                onPress={() => choose('normal')}
                style={cardStyle('normal')}
              >
                <View style={styles._iconCircle}>
                  <View style={styles.__icon}>
                    <Svg
                      style={styles.___vector}
                      width="17"
                      height="23"
                      viewBox="0 0 17 23"
                      fill="none"
                    >
                      <Path
                        d="M10.4955 0.499817L0.499756 12.4947H8.49637L6.49722 22.4905L16.493 10.4956H8.49637L10.4955 0.499817Z"
                        fill="#F59E0B"
                        stroke="#D97706"
                        strokeWidth="0.999577"
                        strokeLinejoin="round"
                      />
                    </Svg>
                  </View>
                </View>
                <View style={styles._______container}>
                  <View style={styles.________container}>
                    <Text style={styles.normal}>{`Normal`}</Text>
                  </View>
                  <View style={styles._________container}>
                    <Text style={styles.balancedreminderswithsomepressure}>
                      {`Balanced reminders with some pressure.`}
                    </Text>
                  </View>
                </View>
                <StyleIndicator selected={selected === 'normal'} />
              </Pressable>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Brutal"
                onPress={() => choose('brutal')}
                style={cardStyle('brutal')}
              >
                <View style={styles.__iconCircle}>
                  <View style={styles.____icon}>
                    <Svg
                      style={styles._____vector}
                      width="12"
                      height="16"
                      viewBox="0 0 12 16"
                      fill="none"
                    >
                      <Path
                        d="M6.99704 0C6.99704 0 11.9949 4.99789 11.9949 9.99577C11.9949 12.4947 10.4956 14.4939 8.9962 15.4934C9.49598 13.9941 9.49598 12.4947 8.49641 11.4951C8.49641 13.9941 6.49725 15.9932 3.99831 15.9932C1.99915 15.9932 0 14.4939 0 11.9949C0 8.9962 1.99915 6.99704 3.99831 5.99746C2.99873 7.99662 3.49852 9.49598 4.4981 9.99577C4.4981 5.99746 6.99704 0 6.99704 0Z"
                        fill="#EF4444"
                      />
                    </Svg>

                    <Svg
                      style={styles.______vector}
                      width="9"
                      height="9"
                      viewBox="0 0 9 9"
                      fill="none"
                    >
                      <Path
                        d="M1.27946 4.4981C1.27946 4.4981 -0.719696 6.49725 0.279882 8.49641H8.2765C8.77629 6.49725 7.27692 4.99789 6.27735 3.99831C6.77713 2.49894 6.77713 0.999577 5.77756 0C5.27777 2.49894 3.7784 4.4981 1.27946 4.4981Z"
                        fill="#F97316"
                      />
                    </Svg>
                  </View>
                </View>
                <View style={styles.__________container}>
                  <View style={styles.___________container}>
                    <Text style={styles.brutal}>{`Brutal`}</Text>
                  </View>
                  <View style={styles.____________container}>
                    <Text style={styles.noexcusesIwontgiveuponyou}>
                      {`No excuses. I won't give up on you.`}
                    </Text>
                  </View>
                </View>
                <StyleIndicator selected={selected === 'brutal'} />
              </Pressable>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Gamified"
                onPress={() => choose('gamified')}
                style={cardStyle('gamified')}
              >
                <View style={styles.___iconCircle}>
                  <View style={styles._____icon}>
                    <Svg
                      style={styles._______vector}
                      width="24"
                      height="14"
                      viewBox="0 0 24 14"
                      fill="none"
                    >
                      <Path
                        d="M17.9932 0H5.99772C2.68527 0 0 2.68527 0 5.99772V7.99696C0 11.3094 2.68527 13.9947 5.99772 13.9947H17.9932C21.3056 13.9947 23.9909 11.3094 23.9909 7.99696V5.99772C23.9909 2.68527 21.3056 0 17.9932 0Z"
                        fill="#1A1A2E"
                      />
                    </Svg>

                    <Svg
                      style={styles.________vector}
                      width="3"
                      height="5"
                      viewBox="0 0 3 5"
                      fill="none"
                    >
                      <Path
                        opacity="0.8"
                        d="M1.99924 0H0.99962C0.447545 0 0 0.447545 0 0.99962V3.99848C0 4.55056 0.447545 4.9981 0.99962 4.9981H1.99924C2.55132 4.9981 2.99886 4.55056 2.99886 3.99848V0.99962C2.99886 0.447545 2.55132 0 1.99924 0Z"
                        fill="white"
                      />
                    </Svg>

                    <Svg
                      style={styles._________vector}
                      width="5"
                      height="3"
                      viewBox="0 0 5 3"
                      fill="none"
                    >
                      <Path
                        opacity="0.8"
                        d="M3.99848 0H0.99962C0.447545 0 0 0.447545 0 0.99962V1.99924C0 2.55132 0.447545 2.99886 0.99962 2.99886H3.99848C4.55056 2.99886 4.9981 2.55132 4.9981 1.99924V0.99962C4.9981 0.447545 4.55056 0 3.99848 0Z"
                        fill="white"
                      />
                    </Svg>

                    <Svg
                      style={styles.__________vector}
                      width="3"
                      height="3"
                      viewBox="0 0 3 3"
                      fill="none"
                    >
                      <Path
                        opacity="0.9"
                        d="M1.49943 2.99886C2.32754 2.99886 2.99886 2.32754 2.99886 1.49943C2.99886 0.671318 2.32754 0 1.49943 0C0.671318 0 0 0.671318 0 1.49943C0 2.32754 0.671318 2.99886 1.49943 2.99886Z"
                        fill="#22C55E"
                      />
                    </Svg>

                    <Svg
                      style={styles.___________vector}
                      width="3"
                      height="3"
                      viewBox="0 0 3 3"
                      fill="none"
                    >
                      <Path
                        opacity="0.9"
                        d="M1.49943 2.99886C2.32754 2.99886 2.99886 2.32754 2.99886 1.49943C2.99886 0.671318 2.32754 0 1.49943 0C0.671318 0 0 0.671318 0 1.49943C0 2.32754 0.671318 2.99886 1.49943 2.99886Z"
                        fill="#22C55E"
                      />
                    </Svg>

                    <Svg
                      style={styles.____________vector}
                      width="3"
                      height="3"
                      viewBox="0 0 3 3"
                      fill="none"
                    >
                      <Path
                        opacity="0.9"
                        d="M1.49943 2.99886C2.32754 2.99886 2.99886 2.32754 2.99886 1.49943C2.99886 0.671318 2.32754 0 1.49943 0C0.671318 0 0 0.671318 0 1.49943C0 2.32754 0.671318 2.99886 1.49943 2.99886Z"
                        fill="#22C55E"
                      />
                    </Svg>

                    <Svg
                      style={styles._____________vector}
                      width="3"
                      height="3"
                      viewBox="0 0 3 3"
                      fill="none"
                    >
                      <Path
                        opacity="0.9"
                        d="M1.49943 2.99886C2.32754 2.99886 2.99886 2.32754 2.99886 1.49943C2.99886 0.671318 2.32754 0 1.49943 0C0.671318 0 0 0.671318 0 1.49943C0 2.32754 0.671318 2.99886 1.49943 2.99886Z"
                        fill="#22C55E"
                      />
                    </Svg>

                    <Svg
                      style={styles.______________vector}
                      width="4"
                      height="3"
                      viewBox="0 0 4 3"
                      fill="none"
                    >
                      <Path
                        opacity="0.4"
                        d="M1.99924 0L3.99848 2.99886H0L1.99924 0Z"
                        fill="#1A1A2E"
                      />
                    </Svg>

                    <Svg
                      style={styles._______________vector}
                      width="4"
                      height="3"
                      viewBox="0 0 4 3"
                      fill="none"
                    >
                      <Path
                        opacity="0.4"
                        d="M1.99924 0L3.99848 2.99886H0L1.99924 0Z"
                        fill="#1A1A2E"
                      />
                    </Svg>
                  </View>
                </View>
                <View style={styles._____________container}>
                  <View style={styles.______________container}>
                    <Text style={styles.gamified}>{`Gamified`}</Text>
                  </View>
                  <View style={styles._______________container}>
                    <Text style={styles.extramotivationwithchallengesandrewards}>
                      {`Extra motivation with challenges and rewards.`}
                    </Text>
                  </View>
                </View>
                <StyleIndicator selected={selected === 'gamified'} />
              </Pressable>
            </View>
            <View style={styles.________________container}>
              <View style={styles.mascotSceneCompact}>
                <Svg
                  style={styles.________________vector}
                  width="206"
                  height="73"
                  viewBox="0 0 206 73"
                  fill="none"
                >
                  <Path
                    d="M102.866 96.0085C159.678 96.0085 205.732 74.5163 205.732 48.0042C205.732 21.4922 159.678 0 102.866 0C46.0548 0 0 21.4922 0 48.0042C0 74.5163 46.0548 96.0085 102.866 96.0085Z"
                    fill="url(#paint0_radial_1_461)"
                  />
                  <Defs>
                    <RadialGradient
                      id="paint0_radial_1_461"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(102.866 67.2059) scale(102.866 48.0042)"
                    >
                      <Stop stopColor="#BBF7D0" stopOpacity="0.65" />
                      <Stop offset="1" stopColor="#F8FEF9" stopOpacity="0" />
                    </RadialGradient>
                  </Defs>
                </Svg>

                <Svg
                  style={styles._________________vector}
                  width="282"
                  height="32"
                  viewBox="0 0 282 32"
                  fill="none"
                >
                  <Path
                    d="M0 31.3843C32.0028 10.3539 68.5775 3.03892 109.724 9.43949C150.871 15.8401 187.445 14.0113 219.448 3.95329C242.307 -2.44728 262.88 -1.07573 281.168 8.06794V31.3843H0Z"
                    fill="#DCFCE7"
                  />
                </Svg>

                <Svg
                  style={styles.__________________vector}
                  width="282"
                  height="14"
                  viewBox="0 0 282 14"
                  fill="none"
                >
                  <Path
                    d="M0 13.4107C22.8592 5.18141 50.2902 2.43831 82.293 5.18141C114.296 7.92451 146.299 7.01014 178.302 2.43831C205.733 -1.21916 240.021 -0.761972 281.168 3.80986V13.4107H0Z"
                    fill="#A7F3D0"
                  />
                </Svg>

                <Svg
                  style={styles.___________________vector}
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <Path
                    d="M8.91507 17.8301C13.8387 17.8301 17.8301 13.8387 17.8301 8.91507C17.8301 3.99141 13.8387 0 8.91507 0C3.99141 0 0 3.99141 0 8.91507C0 13.8387 3.99141 17.8301 8.91507 17.8301Z"
                    fill="#6EE7B7"
                  />
                </Svg>

                <Svg
                  style={styles.____________________vector}
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                >
                  <Path
                    d="M6.85775 13.7155C10.6452 13.7155 13.7155 10.6452 13.7155 6.85775C13.7155 3.07032 10.6452 0 6.85775 0C3.07032 0 0 3.07032 0 6.85775C0 10.6452 3.07032 13.7155 6.85775 13.7155Z"
                    fill="#6EE7B7"
                  />
                </Svg>

                <Svg
                  style={styles._____________________vector}
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <Path
                    d="M5.4862 10.9724C8.51614 10.9724 10.9724 8.51614 10.9724 5.4862C10.9724 2.45626 8.51614 0 5.4862 0C2.45626 0 0 2.45626 0 5.4862C0 8.51614 2.45626 10.9724 5.4862 10.9724Z"
                    fill="#86EFAC"
                  />
                </Svg>

                <Svg
                  style={styles.______________________vector}
                  width="21"
                  height="21"
                  viewBox="0 0 21 21"
                  fill="none"
                >
                  <Path
                    d="M10.2866 20.5732C15.9678 20.5732 20.5732 15.9678 20.5732 10.2866C20.5732 4.60548 15.9678 0 10.2866 0C4.60548 0 0 4.60548 0 10.2866C0 15.9678 4.60548 20.5732 10.2866 20.5732Z"
                    fill="#6EE7B7"
                  />
                </Svg>

                <Svg
                  style={styles._______________________vector}
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <Path
                    d="M7.54352 15.087C11.7097 15.087 15.087 11.7097 15.087 7.54352C15.087 3.37735 11.7097 0 7.54352 0C3.37735 0 0 3.37735 0 7.54352C0 11.7097 3.37735 15.087 7.54352 15.087Z"
                    fill="#6EE7B7"
                  />
                </Svg>

                <Svg
                  style={styles.________________________vector}
                  width="11"
                  height="11"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <Path
                    d="M5.4862 10.9724C8.51614 10.9724 10.9724 8.51614 10.9724 5.4862C10.9724 2.45626 8.51614 0 5.4862 0C2.45626 0 0 2.45626 0 5.4862C0 8.51614 2.45626 10.9724 5.4862 10.9724Z"
                    fill="#86EFAC"
                  />
                </Svg>

                <Svg style={styles.group} width="16" height="28" viewBox="0 0 16 28" fill="none">
                  <G opacity="0.9">
                    <Path
                      d="M1.02893 5.14358L10.6298 1.02893"
                      stroke="#4ADE80"
                      strokeWidth="2.05732"
                      strokeLinecap="round"
                    />
                    <Path
                      d="M3.77197 16.116H14.7444"
                      stroke="#4ADE80"
                      strokeWidth="2.05732"
                      strokeLinecap="round"
                    />
                    <Path
                      d="M1.02893 26.4026L9.25823 22.2879"
                      stroke="#4ADE80"
                      strokeWidth="2.05732"
                      strokeLinecap="round"
                    />
                  </G>
                </Svg>

                <Svg
                  style={styles._________________________vector}
                  width="53"
                  height="55"
                  viewBox="0 0 53 55"
                  fill="none"
                >
                  <Path
                    d="M26.0595 54.862C40.4517 54.862 52.1189 42.5807 52.1189 27.431C52.1189 12.2813 40.4517 0 26.0595 0C11.6672 0 0 12.2813 0 27.431C0 42.5807 11.6672 54.862 26.0595 54.862Z"
                    fill="url(#paint0_radial_1_474)"
                  />
                  <Defs>
                    <RadialGradient
                      id="paint0_radial_1_474"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(26.0595 27.431) scale(26.0595 27.431)"
                    >
                      <Stop stopColor="#4ADE80" stopOpacity="0.35" />
                      <Stop offset="1" stopColor="#4ADE80" stopOpacity="0" />
                    </RadialGradient>
                  </Defs>
                </Svg>

                <Svg
                  style={styles.__________________________vector}
                  width="42"
                  height="28"
                  viewBox="0 0 42 28"
                  fill="none"
                >
                  <Path
                    d="M20.5732 27.431C31.9355 27.431 41.1465 21.2904 41.1465 13.7155C41.1465 6.14064 31.9355 0 20.5732 0C9.21096 0 0 6.14064 0 13.7155C0 21.2904 9.21096 27.431 20.5732 27.431Z"
                    fill="#1A1A2E"
                  />
                </Svg>

                <Svg
                  style={styles.___________________________vector}
                  width="39"
                  height="33"
                  viewBox="0 0 39 33"
                  fill="none"
                >
                  <Path
                    d="M19.2017 32.9172C29.8065 32.9172 38.4034 25.5484 38.4034 16.4586C38.4034 7.36877 29.8065 0 19.2017 0C8.59689 0 0 7.36877 0 16.4586C0 25.5484 8.59689 32.9172 19.2017 32.9172Z"
                    fill="#1A1A2E"
                  />
                </Svg>

                <Svg
                  style={styles.____________________________vector}
                  width="42"
                  height="42"
                  viewBox="0 0 42 42"
                  fill="none"
                >
                  <Path
                    d="M20.5732 41.1465C31.9355 41.1465 41.1465 31.9355 41.1465 20.5732C41.1465 9.21096 31.9355 0 20.5732 0C9.21096 0 0 9.21096 0 20.5732C0 31.9355 9.21096 41.1465 20.5732 41.1465Z"
                    fill="#1A1A2E"
                  />
                </Svg>

                <Svg
                  style={styles._____________________________vector}
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                >
                  <Path
                    d="M5.35599 10.8894C9.01437 11.8696 12.6158 10.2917 13.4 7.36502C14.1842 4.43832 11.8542 1.27111 8.19586 0.290846C4.53748 -0.689413 0.936052 0.88849 0.151844 3.81519C-0.632363 6.74189 1.69761 9.90911 5.35599 10.8894Z"
                    fill="#1A1A2E"
                  />
                </Svg>

                <Svg
                  style={styles.______________________________vector}
                  width="14"
                  height="12"
                  viewBox="0 0 14 12"
                  fill="none"
                >
                  <Path
                    d="M8.19588 10.8894C11.8543 9.90911 14.1842 6.7419 13.4 3.81519C12.6158 0.888493 9.01439 -0.68941 5.35601 0.290849C1.69763 1.27111 -0.632341 4.43833 0.151867 7.36503C0.936074 10.2917 4.5375 11.8696 8.19588 10.8894Z"
                    fill="#1A1A2E"
                  />
                </Svg>

                <Svg
                  style={styles._______________________________vector}
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                >
                  <Path
                    d="M5.31509 10.1155L1.20044 1.20039"
                    stroke="#1A1A2E"
                    strokeWidth="2.40021"
                    strokeLinecap="round"
                  />
                </Svg>

                <Svg
                  style={styles.________________________________vector}
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                >
                  <Path
                    d="M7.94096 8.25855C10.7332 6.30341 11.9401 3.20942 10.6367 1.34793C9.33325 -0.513562 6.01306 -0.437641 3.22082 1.5175C0.428591 3.47265 -0.778323 6.56664 0.525105 8.42813C1.82853 10.2896 5.14872 10.2137 7.94096 8.25855Z"
                    fill="#22C55E"
                  />
                </Svg>

                <Svg
                  style={styles._________________________________vector}
                  width="7"
                  height="12"
                  viewBox="0 0 7 12"
                  fill="none"
                >
                  <Path
                    d="M1.20044 10.1155L5.31509 1.20039"
                    stroke="#1A1A2E"
                    strokeWidth="2.40021"
                    strokeLinecap="round"
                  />
                </Svg>

                <Svg
                  style={styles.__________________________________vector}
                  width="12"
                  height="10"
                  viewBox="0 0 12 10"
                  fill="none"
                >
                  <Path
                    d="M3.22079 8.25855C6.01302 10.2137 9.33321 10.2896 10.6366 8.42812C11.9401 6.56664 10.7332 3.47264 7.94092 1.5175C5.14868 -0.437642 1.82849 -0.513563 0.525066 1.34793C-0.778363 3.20941 0.428552 6.30341 3.22079 8.25855Z"
                    fill="#22C55E"
                  />
                </Svg>

                <Svg
                  style={styles.___________________________________vector}
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                >
                  <G opacity="0.3" filter="url(#filter0_f_1_484)">
                    <Path
                      d="M13.7155 23.3164C18.2604 23.3164 21.9448 19.3249 21.9448 14.4013C21.9448 9.47762 18.2604 5.48621 13.7155 5.48621C9.17059 5.48621 5.48621 9.47762 5.48621 14.4013C5.48621 19.3249 9.17059 23.3164 13.7155 23.3164Z"
                      fill="#4ADE80"
                    />
                  </G>
                  <Defs>
                    <Filter
                      id="filter0_f_1_484"
                      x="6.19888e-06"
                      y="6.19888e-06"
                      width="27.431"
                      height="28.8025"
                      filterUnits="userSpaceOnUse"
                    >
                      <FeFlood floodOpacity="0" result="BackgroundImageFix" />
                      <FeBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <FeGaussianBlur stdDeviation="2.7431" result="effect1_foregroundBlur_1_484" />
                    </Filter>
                  </Defs>
                </Svg>

                <Svg
                  style={styles.____________________________________vector}
                  width="28"
                  height="29"
                  viewBox="0 0 28 29"
                  fill="none"
                >
                  <G opacity="0.3" filter="url(#filter0_f_1_485)">
                    <Path
                      d="M13.7155 23.3164C18.2604 23.3164 21.9448 19.3249 21.9448 14.4013C21.9448 9.47762 18.2604 5.48621 13.7155 5.48621C9.17059 5.48621 5.48621 9.47762 5.48621 14.4013C5.48621 19.3249 9.17059 23.3164 13.7155 23.3164Z"
                      fill="#4ADE80"
                    />
                  </G>
                  <Defs>
                    <Filter
                      id="filter0_f_1_485"
                      x="6.19888e-06"
                      y="6.19888e-06"
                      width="27.431"
                      height="28.8025"
                      filterUnits="userSpaceOnUse"
                    >
                      <FeFlood floodOpacity="0" result="BackgroundImageFix" />
                      <FeBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <FeGaussianBlur stdDeviation="2.7431" result="effect1_foregroundBlur_1_485" />
                    </Filter>
                  </Defs>
                </Svg>

                <Svg
                  style={styles._____________________________________vector}
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                >
                  <Path
                    d="M6.17197 13.7155C9.58066 13.7155 12.3439 10.6452 12.3439 6.85775C12.3439 3.07032 9.58066 0 6.17197 0C2.76329 0 0 3.07032 0 6.85775C0 10.6452 2.76329 13.7155 6.17197 13.7155Z"
                    fill="#4ADE80"
                  />
                </Svg>

                <Svg
                  style={styles.______________________________________vector}
                  width="13"
                  height="14"
                  viewBox="0 0 13 14"
                  fill="none"
                >
                  <Path
                    d="M6.17197 13.7155C9.58066 13.7155 12.3439 10.6452 12.3439 6.85775C12.3439 3.07032 9.58066 0 6.17197 0C2.76329 0 0 3.07032 0 6.85775C0 10.6452 2.76329 13.7155 6.17197 13.7155Z"
                    fill="#4ADE80"
                  />
                </Svg>

                <Svg
                  style={styles._______________________________________vector}
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                >
                  <Path
                    opacity="0.6"
                    d="M3.77176 8.91507C5.85485 8.91507 7.54352 6.91937 7.54352 4.45754C7.54352 1.99571 5.85485 0 3.77176 0C1.68868 0 0 1.99571 0 4.45754C0 6.91937 1.68868 8.91507 3.77176 8.91507Z"
                    fill="#86EFAC"
                  />
                </Svg>

                <Svg
                  style={styles.________________________________________vector}
                  width="8"
                  height="9"
                  viewBox="0 0 8 9"
                  fill="none"
                >
                  <Path
                    opacity="0.6"
                    d="M3.77176 8.91507C5.85485 8.91507 7.54352 6.91937 7.54352 4.45754C7.54352 1.99571 5.85485 0 3.77176 0C1.68868 0 0 1.99571 0 4.45754C0 6.91937 1.68868 8.91507 3.77176 8.91507Z"
                    fill="#86EFAC"
                  />
                </Svg>

                <Svg
                  style={styles._________________________________________vector}
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                >
                  <Path
                    opacity="0.95"
                    d="M2.05732 4.80043C3.19355 4.80043 4.11465 3.72581 4.11465 2.40021C4.11465 1.07461 3.19355 0 2.05732 0C0.921096 0 0 1.07461 0 2.40021C0 3.72581 0.921096 4.80043 2.05732 4.80043Z"
                    fill="white"
                  />
                </Svg>

                <Svg
                  style={styles.__________________________________________vector}
                  width="5"
                  height="5"
                  viewBox="0 0 5 5"
                  fill="none"
                >
                  <Path
                    opacity="0.95"
                    d="M2.05732 4.80043C3.19355 4.80043 4.11465 3.72581 4.11465 2.40021C4.11465 1.07461 3.19355 0 2.05732 0C0.921096 0 0 1.07461 0 2.40021C0 3.72581 0.921096 4.80043 2.05732 4.80043Z"
                    fill="white"
                  />
                </Svg>

                <Svg
                  style={styles.___________________________________________vector}
                  width="14"
                  height="4"
                  viewBox="0 0 14 4"
                  fill="none"
                >
                  <Path
                    d="M0.685791 0.685822C4.80044 3.8861 8.91509 3.8861 13.0297 0.685822"
                    stroke="#22C55E"
                    strokeWidth="1.37155"
                    strokeLinecap="round"
                  />
                </Svg>

                <Svg
                  style={styles.____________________________________________vector}
                  width="102"
                  height="55"
                  viewBox="0 0 102 55"
                  fill="none"
                >
                  <Path
                    d="M90.5223 0H10.9724C4.91251 0 0 4.91251 0 10.9724V43.8896C0 49.9495 4.91251 54.862 10.9724 54.862H90.5223C96.5822 54.862 101.495 49.9495 101.495 43.8896V10.9724C101.495 4.91251 96.5822 0 90.5223 0Z"
                    fill="#ECFDF5"
                  />
                </Svg>

                <Svg
                  style={styles._____________________________________________vector}
                  width="15"
                  height="11"
                  viewBox="0 0 15 11"
                  fill="none"
                >
                  <Path d="M2.05732 0L14.4013 8.2293L0 10.9724L2.05732 0Z" fill="#ECFDF5" />
                </Svg>

                <View style={styles._group}>
                  <Text style={styles.discomforttoday}>{`""Discomfort today.`}</Text>
                  <Text style={styles.abetteryou}>{`A better you`}</Text>
                  <Text style={styles.tomorrow}>{`tomorrow.""`}</Text>
                </View>
              </View>
            </View>
            <View style={styles.pagination}>
              <View style={styles._________________container} />
              <View style={styles.__________________container} />
              <View style={styles.___________________container} />
            </View>
            <View style={styles.____________________container}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Continue"
                onPress={() => {
                  setNudgeStyle(selected);
                  completeOnboarding();
                  router.replace('/');
                }}
              >
                <View style={styles.primaryButton}>
                  <Text style={styles.continue}>{`Continue →`}</Text>
                </View>
              </Pressable>
            </View>
            <View style={styles._____________________container} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  onboardingWelcomeScreenContainer: {
    position: 'relative',
    flexShrink: 0,
    height: 874,
    width: 402,
    backgroundColor: 'rgba(248, 254, 249, 1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  body: {
    position: 'relative',
    alignSelf: 'stretch',
    flexShrink: 0,
    height: 874,
    backgroundColor: 'rgba(248, 254, 249, 1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  container: {
    position: 'relative',
    alignSelf: 'stretch',
    flexShrink: 0,
    height: 844,
    backgroundColor: 'rgba(248, 254, 249, 1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  screen3: {
    position: 'relative',
    alignSelf: 'stretch',
    flexShrink: 0,
    height: 844,
    backgroundColor: 'rgba(248, 254, 249, 1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  _container: {
    position: 'relative',
    alignSelf: 'stretch',
    flexShrink: 0,
    paddingTop: 56,
    paddingBottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    columnGap: 0,
    paddingHorizontal: 24,
  },
  __container: {
    position: 'relative',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    columnGap: 10,
  },
  button: {
    position: 'relative',
    flexShrink: 0,
    display: 'flex',
    alignItems: 'center',
    columnGap: 0,
  },
  icon: {
    position: 'relative',
    flexShrink: 0,
    height: 22,
    width: 22,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 5,
    right: 8,
    bottom: 5,
    left: 8,
    overflow: 'visible',
  },
  text: {
    position: 'relative',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  nudge: {
    position: 'relative',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(34, 197, 94, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 22,
    fontWeight: 800,
    letterSpacing: -0.5,
    lineHeight: 33,
  },
  _text: {
    position: 'relative',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  skip: {
    position: 'relative',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(34, 197, 94, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 16,
    fontWeight: 600,
    lineHeight: 24,
  },
  heading1: {
    position: 'relative',
    flexShrink: 0,
    height: 101,
    width: 390,
    paddingTop: 18,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 0,
    paddingHorizontal: 24,
  },
  chooseyourNudgestyle: {
    position: 'relative',
    flexShrink: 0,
    textAlign: 'center',
    color: 'rgba(15, 23, 42, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 36,
    fontWeight: 800,
    letterSpacing: -1,
    lineHeight: 41.400001525878906,
  },
  paragraph: {
    position: 'relative',
    flexShrink: 0,
    height: 31,
    width: 390,
    paddingTop: 8,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 0,
    paddingHorizontal: 32,
  },
  howshouldIremindyou: {
    position: 'relative',
    flexShrink: 0,
    textAlign: 'center',
    color: 'rgba(100, 116, 139, 1)',
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 22.5,
  },
  ___container: {
    position: 'relative',
    alignSelf: 'stretch',
    flexShrink: 0,
    paddingTop: 18,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 10,
    paddingHorizontal: 16,
  },
  nudgeStyleCard: {
    position: 'relative',
    flexShrink: 0,
    borderStyle: 'solid',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    display: 'flex',
    alignItems: 'center',
    columnGap: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1.8715499639511108,
    borderColor: 'rgba(226, 232, 240, 1)',
    borderRadius: 18,
  },
  cardSelected: {
    backgroundColor: 'rgba(240, 253, 244, 1)',
    borderColor: 'rgba(34, 197, 94, 1)',
  },
  iconCircle: {
    position: 'relative',
    flexShrink: 0,
    height: 48,
    width: 48,
    backgroundColor: 'rgba(220, 252, 231, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 0,
    borderRadius: 23.998689651489258,
  },
  _icon: {
    position: 'relative',
    flexShrink: 0,
    height: 24,
    width: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  _vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 0,
    right: 3,
    bottom: 2,
    left: 3,
    overflow: 'visible',
  },
  __vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 5,
    right: 6,
    bottom: 2,
    left: 6,
    overflow: 'visible',
  },
  ____container: {
    position: 'relative',
    flexGrow: 218.27890014648438,
    flexShrink: 1,
    flexBasis: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  _____container: {
    position: 'relative',
    alignSelf: 'stretch',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  gentle: {
    position: 'relative',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(15, 23, 42, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 22.5,
  },
  ______container: {
    position: 'relative',
    flexShrink: 0,
    width: 218,
    paddingTop: 2,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
    paddingHorizontal: 0,
  },
  friendlyremindersandpositivevibes: {
    position: 'relative',
    flexShrink: 0,
    width: 219,
    textAlign: 'left',
    color: 'rgba(100, 116, 139, 1)',
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 18.850000381469727,
  },
  selectionIndicator: {
    position: 'relative',
    flexShrink: 0,
    height: 28,
    width: 28,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
    borderWidth: 1.8715499639511108,
    borderColor: 'rgba(226, 232, 240, 1)',
    borderRadius: 13.997611045837402,
  },
  _nudgeStyleCard: {
    position: 'relative',
    flexShrink: 0,
    borderStyle: 'solid',
    backgroundColor: 'rgba(240, 253, 244, 1)',
    display: 'flex',
    alignItems: 'center',
    columnGap: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1.8715499639511108,
    borderColor: 'rgba(34, 197, 94, 1)',
    borderRadius: 18,
  },
  _iconCircle: {
    position: 'relative',
    flexShrink: 0,
    height: 48,
    width: 48,
    backgroundColor: 'rgba(254, 249, 195, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 0,
    borderRadius: 23.998689651489258,
  },
  __icon: {
    position: 'relative',
    flexShrink: 0,
    height: 24,
    width: 22,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  ___vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 1,
    right: 3,
    bottom: 1,
    left: 3,
    overflow: 'visible',
  },
  _______container: {
    position: 'relative',
    flexGrow: 218.27890014648438,
    flexShrink: 1,
    flexBasis: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  ________container: {
    position: 'relative',
    alignSelf: 'stretch',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  normal: {
    position: 'relative',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(15, 23, 42, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 22.5,
  },
  _________container: {
    position: 'relative',
    flexShrink: 0,
    width: 218,
    paddingTop: 2,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
    paddingHorizontal: 0,
  },
  balancedreminderswithsomepressure: {
    position: 'relative',
    flexShrink: 0,
    width: 219,
    textAlign: 'left',
    color: 'rgba(100, 116, 139, 1)',
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 18.850000381469727,
  },
  _selectionIndicator: {
    position: 'relative',
    flexShrink: 0,
    height: 28,
    width: 28,
    backgroundColor: 'rgba(34, 197, 94, 1)',
    shadowColor: 'rgba(34, 197, 94, 0.35)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 8,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 0,
    borderRadius: 13.997611045837402,
  },
  ___icon: {
    position: 'relative',
    flexShrink: 0,
    height: 14,
    width: 14,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  ____vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 4,
    right: 2,
    bottom: 4,
    left: 2,
    overflow: 'visible',
  },
  __nudgeStyleCard: {
    position: 'relative',
    flexShrink: 0,
    borderStyle: 'solid',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    display: 'flex',
    alignItems: 'center',
    columnGap: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1.8715499639511108,
    borderColor: 'rgba(226, 232, 240, 1)',
    borderRadius: 18,
  },
  __iconCircle: {
    position: 'relative',
    flexShrink: 0,
    height: 48,
    width: 48,
    backgroundColor: 'rgba(254, 226, 226, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 0,
    borderRadius: 23.998689651489258,
  },
  ____icon: {
    position: 'relative',
    flexShrink: 0,
    height: 24,
    width: 22,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  _____vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 2,
    right: 6,
    bottom: 6,
    left: 4,
    overflow: 'visible',
  },
  ______vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 13,
    right: 7,
    bottom: 2,
    left: 7,
    overflow: 'visible',
  },
  __________container: {
    position: 'relative',
    flexGrow: 218.27890014648438,
    flexShrink: 1,
    flexBasis: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  ___________container: {
    position: 'relative',
    alignSelf: 'stretch',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  brutal: {
    position: 'relative',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(15, 23, 42, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 22.5,
  },
  ____________container: {
    position: 'relative',
    flexShrink: 0,
    height: 21,
    width: 218,
    paddingTop: 2,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
    paddingHorizontal: 0,
  },
  noexcusesIwontgiveuponyou: {
    position: 'relative',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(100, 116, 139, 1)',
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 18.850000381469727,
  },
  __selectionIndicator: {
    position: 'relative',
    flexShrink: 0,
    height: 28,
    width: 28,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
    borderWidth: 1.8715499639511108,
    borderColor: 'rgba(226, 232, 240, 1)',
    borderRadius: 13.997611045837402,
  },
  ___nudgeStyleCard: {
    position: 'relative',
    flexShrink: 0,
    borderStyle: 'solid',
    backgroundColor: 'rgba(255, 255, 255, 1)',
    display: 'flex',
    alignItems: 'center',
    columnGap: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1.8715499639511108,
    borderColor: 'rgba(226, 232, 240, 1)',
    borderRadius: 18,
  },
  ___iconCircle: {
    position: 'relative',
    flexShrink: 0,
    height: 48,
    width: 48,
    backgroundColor: 'rgba(220, 252, 231, 1)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 0,
    borderRadius: 23.998689651489258,
  },
  _____icon: {
    position: 'relative',
    flexShrink: 0,
    height: 20,
    width: 26,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  _______vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 4,
    right: 1,
    bottom: 2,
    left: 1,
    overflow: 'visible',
  },
  ________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 9,
    right: 19,
    bottom: 6,
    left: 4,
    overflow: 'visible',
  },
  _________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 10,
    right: 18,
    bottom: 7,
    left: 3,
    overflow: 'visible',
  },
  __________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 8,
    right: 7,
    bottom: 8,
    left: 16,
    overflow: 'visible',
  },
  ___________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 11,
    right: 4,
    bottom: 5,
    left: 19,
    overflow: 'visible',
  },
  ____________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 11,
    right: 9,
    bottom: 5,
    left: 13,
    overflow: 'visible',
  },
  _____________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 14,
    right: 7,
    bottom: 2,
    left: 16,
    overflow: 'visible',
  },
  ______________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 1,
    right: 16,
    bottom: 16,
    left: 6,
    overflow: 'visible',
  },
  _______________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 1,
    right: 6,
    bottom: 16,
    left: 16,
    overflow: 'visible',
  },
  _____________container: {
    position: 'relative',
    flexGrow: 218.27890014648438,
    flexShrink: 1,
    flexBasis: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  ______________container: {
    position: 'relative',
    alignSelf: 'stretch',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  gamified: {
    position: 'relative',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(15, 23, 42, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 22.5,
  },
  _______________container: {
    position: 'relative',
    flexShrink: 0,
    width: 218,
    paddingTop: 2,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
    paddingHorizontal: 0,
  },
  extramotivationwithchallengesandrewards: {
    position: 'relative',
    flexShrink: 0,
    width: 219,
    textAlign: 'left',
    color: 'rgba(100, 116, 139, 1)',
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 18.850000381469727,
  },
  ___selectionIndicator: {
    position: 'relative',
    flexShrink: 0,
    height: 28,
    width: 28,
    borderStyle: 'solid',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
    borderWidth: 1.8715499639511108,
    borderColor: 'rgba(226, 232, 240, 1)',
    borderRadius: 13.997611045837402,
  },
  ________________container: {
    position: 'relative',
    alignSelf: 'stretch',
    flexGrow: 93.26541900634766,
    flexShrink: 1,
    flexBasis: 0,
    paddingTop: 4,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
    paddingHorizontal: 0,
  },
  mascotSceneCompact: {
    position: 'relative',
    overflow: 'visible',
    flexShrink: 0,
    height: 93,
    width: 390,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  ________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 21,
    right: 68,
    bottom: -23,
    left: 116,
    overflow: 'visible',
  },
  _________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 62,
    right: 54,
    bottom: 0,
    left: 54,
    overflow: 'visible',
  },
  __________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 80,
    right: 54,
    bottom: 0,
    left: 54,
    overflow: 'visible',
  },
  ___________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 61,
    right: 286,
    bottom: 14,
    left: 87,
    overflow: 'visible',
  },
  ____________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 60,
    right: 278,
    bottom: 20,
    left: 98,
    overflow: 'visible',
  },
  _____________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 68,
    right: 297,
    bottom: 14,
    left: 82,
    overflow: 'visible',
  },
  ______________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 53,
    right: 89,
    bottom: 20,
    left: 281,
    overflow: 'visible',
  },
  _______________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 52,
    right: 81,
    bottom: 26,
    left: 294,
    overflow: 'visible',
  },
  ________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 60,
    right: 73,
    bottom: 22,
    left: 306,
    overflow: 'visible',
  },
  group: {
    position: 'absolute',
    flexShrink: 0,
    top: 38,
    height: 25,
    left: 251,
    width: 14,
  },
  _________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 34,
    right: 150,
    bottom: 4,
    left: 187,
    overflow: 'visible',
  },
  __________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 63,
    right: 156,
    bottom: 3,
    left: 193,
    overflow: 'visible',
  },
  ___________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 49,
    right: 157,
    bottom: 12,
    left: 194,
    overflow: 'visible',
  },
  ____________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 26,
    right: 156,
    bottom: 26,
    left: 193,
    overflow: 'visible',
  },
  _____________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 63,
    right: 187,
    bottom: 19,
    left: 189,
    overflow: 'visible',
  },
  ______________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 63,
    right: 152,
    bottom: 19,
    left: 224,
    overflow: 'visible',
  },
  _______________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 19,
    right: 183,
    bottom: 66,
    left: 203,
    overflow: 'visible',
  },
  ________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 11,
    right: 183,
    bottom: 74,
    left: 194,
    overflow: 'visible',
  },
  _________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 19,
    right: 166,
    bottom: 66,
    left: 220,
    overflow: 'visible',
  },
  __________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 11,
    right: 157,
    bottom: 74,
    left: 220,
    overflow: 'visible',
  },
  ___________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 38,
    right: 176,
    bottom: 38,
    left: 197,
    overflow: 'visible',
  },
  ____________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 38,
    right: 160,
    bottom: 38,
    left: 214,
    overflow: 'visible',
  },
  _____________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 40,
    right: 179,
    bottom: 40,
    left: 199,
    overflow: 'visible',
  },
  ______________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 40,
    right: 162,
    bottom: 40,
    left: 216,
    overflow: 'visible',
  },
  _______________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 42,
    right: 181,
    bottom: 42,
    left: 202,
    overflow: 'visible',
  },
  ________________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 42,
    right: 164,
    bottom: 42,
    left: 218,
    overflow: 'visible',
  },
  _________________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 41,
    right: 181,
    bottom: 48,
    left: 205,
    overflow: 'visible',
  },
  __________________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 41,
    right: 164,
    bottom: 48,
    left: 222,
    overflow: 'visible',
  },
  ___________________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 56,
    right: 170,
    bottom: 35,
    left: 207,
    overflow: 'visible',
  },
  ____________________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 10,
    right: 219,
    bottom: 29,
    left: 69,
    overflow: 'visible',
  },
  _____________________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 38,
    right: 208,
    bottom: 44,
    left: 168,
    overflow: 'visible',
  },
  _group: {
    position: 'absolute',
    flexShrink: 0,
    top: 19,
    height: 34,
    left: 76,
    width: 89,
  },
  discomforttoday: {
    position: 'absolute',
    flexShrink: 0,
    top: 0.4840736389160156,
    left: 0.32834625244140625,
    width: 89,
    height: 11,
    textAlign: 'center',
    color: 'rgba(15, 23, 42, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 8.915074348449707,
    fontWeight: 700,
  },
  abetteryou: {
    position: 'absolute',
    flexShrink: 0,
    top: 11.484073638916016,
    left: 17.328346252441406,
    width: 54,
    height: 11,
    textAlign: 'center',
    color: 'rgba(15, 23, 42, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 8.915074348449707,
    fontWeight: 700,
  },
  tomorrow: {
    position: 'absolute',
    flexShrink: 0,
    top: 23.484073638916016,
    left: 16.328346252441406,
    width: 56,
    height: 11,
    textAlign: 'center',
    color: 'rgba(15, 23, 42, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 8.915074348449707,
    fontWeight: 700,
  },
  pagination: {
    position: 'relative',
    flexShrink: 0,
    height: 28,
    width: 390,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    columnGap: 8,
    paddingHorizontal: 0,
    paddingVertical: 10,
  },
  _________________container: {
    position: 'relative',
    flexShrink: 0,
    height: 8,
    width: 8,
    backgroundColor: 'rgba(203, 213, 225, 1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
    borderRadius: 4,
  },
  __________________container: {
    position: 'relative',
    flexShrink: 0,
    height: 8,
    width: 8,
    backgroundColor: 'rgba(203, 213, 225, 1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
    borderRadius: 4,
  },
  ___________________container: {
    position: 'relative',
    flexShrink: 0,
    height: 8,
    width: 24,
    backgroundColor: 'rgba(34, 197, 94, 1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
    borderRadius: 4,
  },
  ____________________container: {
    position: 'relative',
    alignSelf: 'stretch',
    flexShrink: 0,
    height: 65,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  primaryButton: {
    position: 'absolute',
    flexShrink: 0,
    height: 65,
    left: 20,
    width: 350,
    shadowColor: 'rgba(34, 197, 94, 0.35)',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowRadius: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
    borderRadius: 50,
  },
  continue: {
    position: 'absolute',
    flexShrink: 0,
    top: 19,
    left: 127,
    width: 96,
    height: 27,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: -0.20000000298023224,
    lineHeight: 27,
  },
  _____________________container: {
    position: 'relative',
    alignSelf: 'stretch',
    flexShrink: 0,
    height: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
});

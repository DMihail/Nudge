import { Pressable, StyleSheet, Text, View } from 'react-native';

import { useRouter } from 'expo-router';

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
  onboardingHref,
  OnboardingStep,
  setNudgeStyle,
} from '@/store/onboarding';

export function OnboardingFeaturesScreen() {
  const router = useRouter();

  function skip() {
    completeOnboarding();
    router.replace('/');
  }

  return (
    <View style={styles.onboardingWelcomeScreenContainer}>
      <View style={styles.body}>
        <View style={styles.container}>
          <View style={styles.screen2}>
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
                          d="M7.09701 13.0945L1.09955 7.09701L7.09701 1.09955"
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
              <Text style={styles.morethanatodolist}>
                {`More than a\n`}
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
                >{`todo list.`}</Text>
              </Text>
            </View>
            <View style={styles.___container}>
              <Text style={styles.remindersprogressandalittlepressurewhenyo}>
                {`Reminders, progress, and a little pressure when you need it.`}
              </Text>
            </View>
            <View style={styles.____container}>
              <View style={styles.featureCard}>
                <View style={styles.iconCircle}>
                  <View style={styles._screen2}>
                    <Svg
                      style={styles._vector}
                      width="20"
                      height="17"
                      viewBox="0 0 20 17"
                      fill="none"
                    >
                      <Path
                        d="M16 6.99994C16 5.40864 15.3679 3.88252 14.2426 2.7573C13.1174 1.63208 11.5913 0.999939 10 0.999939C8.4087 0.999939 6.88258 1.63208 5.75736 2.7573C4.63214 3.88252 4 5.40864 4 6.99994C4 13.9999 1 15.9999 1 15.9999H19C19 15.9999 16 13.9999 16 6.99994Z"
                        stroke="#22C55E"
                        strokeWidth="1.99989"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Svg>

                    <Svg style={styles.__vector} width="6" height="3" viewBox="0 0 6 3" fill="none">
                      <Path
                        d="M4.46012 1.00011C4.28431 1.30319 4.03196 1.55477 3.72835 1.72964C3.42473 1.90452 3.0805 1.99657 2.73012 1.99657C2.37974 1.99657 2.03551 1.90452 1.7319 1.72964C1.42828 1.55477 1.17593 1.30319 1.00012 1.00011"
                        stroke="#22C55E"
                        strokeWidth="1.99989"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Svg>
                  </View>
                </View>
                <View style={styles._____container}>
                  <View style={styles.______container}>
                    <Text style={styles.getthingsdone}>{`Get things done`}</Text>
                  </View>
                  <View style={styles._______container}>
                    <Text style={styles.smartremindersthatactuallywork}>
                      {`Smart reminders that actually work.`}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles._featureCard}>
                <View style={styles._iconCircle}>
                  <View style={styles.__screen2}>
                    <Svg
                      style={styles.___vector}
                      width="4"
                      height="8"
                      viewBox="0 0 4 8"
                      fill="none"
                    >
                      <Path
                        d="M2.5 0H1.5C0.671573 0 0 0.671573 0 1.5V6.5C0 7.32843 0.671573 8 1.5 8H2.5C3.32843 8 4 7.32843 4 6.5V1.5C4 0.671573 3.32843 0 2.5 0Z"
                        fill="#22C55E"
                      />
                    </Svg>

                    <Svg
                      style={styles.____vector}
                      width="4"
                      height="13"
                      viewBox="0 0 4 13"
                      fill="none"
                    >
                      <Path
                        d="M2.5 0H1.5C0.671573 0 0 0.671573 0 1.5V11.5C0 12.3284 0.671573 13 1.5 13H2.5C3.32843 13 4 12.3284 4 11.5V1.5C4 0.671573 3.32843 0 2.5 0Z"
                        fill="#22C55E"
                      />
                    </Svg>

                    <Svg
                      style={styles._____vector}
                      width="4"
                      height="18"
                      viewBox="0 0 4 18"
                      fill="none"
                    >
                      <Path
                        d="M2.5 0H1.5C0.671573 0 0 0.671573 0 1.5V16.5C0 17.3284 0.671573 18 1.5 18H2.5C3.32843 18 4 17.3284 4 16.5V1.5C4 0.671573 3.32843 0 2.5 0Z"
                        fill="#22C55E"
                      />
                    </Svg>
                  </View>
                </View>
                <View style={styles.________container}>
                  <View style={styles._________container}>
                    <Text style={styles.trackyourprogress}>{`Track your progress`}</Text>
                  </View>
                  <View style={styles.__________container}>
                    <Text style={styles.seeyourstatsandbuildconsistenthabits}>
                      {`See your stats and build consistent habits.`}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.__featureCard}>
                <View style={styles.__iconCircle}>
                  <View style={styles.___screen2}>
                    <Svg
                      style={styles.______vector}
                      width="20"
                      height="19"
                      viewBox="0 0 20 19"
                      fill="none"
                    >
                      <Path
                        d="M9.99946 0L12.8993 6.59964L19.9989 7.2996L14.9992 12.0993L16.4991 18.999L9.99946 15.4992L3.49981 18.999L4.99973 12.0993L0 7.2996L7.09962 6.59964L9.99946 0Z"
                        fill="#F59E0B"
                      />
                    </Svg>
                  </View>
                </View>
                <View style={styles.___________container}>
                  <View style={styles.____________container}>
                    <Text style={styles.earnrewards}>{`Earn rewards`}</Text>
                  </View>
                  <View style={styles._____________container}>
                    <Text style={styles.completetasksandlevelup}>
                      {`Complete tasks and level up.`}
                    </Text>
                  </View>
                </View>
              </View>
              <View style={styles.___featureCard}>
                <View style={styles.___iconCircle}>
                  <View style={styles.____screen2}>
                    <Svg
                      style={styles._______vector}
                      width="18"
                      height="21"
                      viewBox="0 0 18 21"
                      fill="none"
                    >
                      <Path
                        d="M8.74951 19.7489C13.7192 16.2491 16.7491 12.2493 16.7491 8.74953C16.7491 6.62791 15.9063 4.59319 14.4061 3.09298C12.9058 1.59277 10.8711 0.749962 8.74951 0.749962C6.62789 0.749962 4.59317 1.59277 3.09296 3.09298C1.59275 4.59319 0.749939 6.62791 0.749939 8.74953C0.749939 12.2493 3.77977 16.2491 8.74951 19.7489Z"
                        fill="#DCFCE7"
                        stroke="#22C55E"
                        strokeWidth="1.49992"
                      />
                    </Svg>

                    <Svg
                      style={styles.________vector}
                      width="14"
                      height="19"
                      viewBox="0 0 14 19"
                      fill="none"
                    >
                      <Path
                        d="M6.90021 17.1546V6.15462M6.90021 6.15462C6.90021 2.15462 3.90021 0.154622 0.900208 1.15462M6.90021 6.15462C6.90021 2.15462 9.90021 0.154622 12.9002 1.15462"
                        stroke="#22C55E"
                        strokeWidth="1.7999"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </Svg>
                  </View>
                </View>
                <View style={styles.______________container}>
                  <View style={styles._______________container}>
                    <Text style={styles.abetteryou}>{`A better you`}</Text>
                  </View>
                  <View style={styles.________________container}>
                    <Text style={styles.smallstepsBigchanges}>{`Small steps. Big changes.`}</Text>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles._________________container}>
              <View style={styles.mascotSceneCompact}>
                <Svg
                  style={styles._________vector}
                  width="264"
                  height="94"
                  viewBox="0 0 264 94"
                  fill="none"
                >
                  <Path
                    d="M131.636 122.86C204.337 122.86 263.272 95.3571 263.272 61.4301C263.272 27.5032 204.337 0 131.636 0C58.9355 0 0 27.5032 0 61.4301C0 95.3571 58.9355 122.86 131.636 122.86Z"
                    fill="url(#paint0_radial_1_322)"
                  />
                  <Defs>
                    <RadialGradient
                      id="paint0_radial_1_322"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(131.636 86.0022) scale(131.636 61.4301)"
                    >
                      <Stop stopColor="#BBF7D0" stopOpacity="0.65" />
                      <Stop offset="1" stopColor="#F8FEF9" stopOpacity="0" />
                    </RadialGradient>
                  </Defs>
                </Svg>

                <Svg
                  style={styles.__________vector}
                  width="360"
                  height="41"
                  viewBox="0 0 360 41"
                  fill="none"
                >
                  <Path
                    d="M0 40.1619C40.9534 13.2496 87.7574 3.88886 140.412 12.0795C193.066 20.2702 239.87 17.93 280.824 5.05895C310.076 -3.13173 336.403 -1.37659 359.805 10.3244V40.1619H0Z"
                    fill="#DCFCE7"
                  />
                </Svg>

                <Svg
                  style={styles.___________vector}
                  width="360"
                  height="18"
                  viewBox="0 0 360 18"
                  fill="none"
                >
                  <Path
                    d="M0 17.1614C29.2525 6.63056 64.3554 3.12026 105.309 6.63056C146.262 10.1409 187.216 8.97075 228.169 3.12026C263.272 -1.56013 307.151 -0.975082 359.805 4.87541V17.1614H0Z"
                    fill="#A7F3D0"
                  />
                </Svg>

                <Svg
                  style={styles.____________vector}
                  width="23"
                  height="23"
                  viewBox="0 0 23 23"
                  fill="none"
                >
                  <Path
                    d="M11.4085 22.8169C17.7092 22.8169 22.8169 17.7092 22.8169 11.4085C22.8169 5.10774 17.7092 0 11.4085 0C5.10774 0 0 5.10774 0 11.4085C0 17.7092 5.10774 22.8169 11.4085 22.8169Z"
                    fill="#6EE7B7"
                  />
                </Svg>

                <Svg
                  style={styles._____________vector}
                  width="18"
                  height="18"
                  viewBox="0 0 18 18"
                  fill="none"
                >
                  <Path
                    d="M8.77574 17.5515C13.6224 17.5515 17.5515 13.6224 17.5515 8.77574C17.5515 3.92903 13.6224 0 8.77574 0C3.92903 0 0 3.92903 0 8.77574C0 13.6224 3.92903 17.5515 8.77574 17.5515Z"
                    fill="#6EE7B7"
                  />
                </Svg>

                <Svg
                  style={styles.______________vector}
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <Path
                    d="M7.02059 14.0412C10.898 14.0412 14.0412 10.898 14.0412 7.02059C14.0412 3.14322 10.898 0 7.02059 0C3.14322 0 0 3.14322 0 7.02059C0 10.898 3.14322 14.0412 7.02059 14.0412Z"
                    fill="#86EFAC"
                  />
                </Svg>

                <Svg
                  style={styles._______________vector}
                  width="27"
                  height="27"
                  viewBox="0 0 27 27"
                  fill="none"
                >
                  <Path
                    d="M13.1636 26.3272C20.4337 26.3272 26.3272 20.4337 26.3272 13.1636C26.3272 5.89355 20.4337 0 13.1636 0C5.89355 0 0 5.89355 0 13.1636C0 20.4337 5.89355 26.3272 13.1636 26.3272Z"
                    fill="#6EE7B7"
                  />
                </Svg>

                <Svg
                  style={styles.________________vector}
                  width="20"
                  height="20"
                  viewBox="0 0 20 20"
                  fill="none"
                >
                  <Path
                    d="M9.65331 19.3066C14.9847 19.3066 19.3066 14.9847 19.3066 9.65331C19.3066 4.32193 14.9847 0 9.65331 0C4.32193 0 0 4.32193 0 9.65331C0 14.9847 4.32193 19.3066 9.65331 19.3066Z"
                    fill="#6EE7B7"
                  />
                </Svg>

                <Svg
                  style={styles._________________vector}
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                >
                  <Path
                    d="M7.02059 14.0412C10.898 14.0412 14.0412 10.898 14.0412 7.02059C14.0412 3.14322 10.898 0 7.02059 0C3.14322 0 0 3.14322 0 7.02059C0 10.898 3.14322 14.0412 7.02059 14.0412Z"
                    fill="#86EFAC"
                  />
                </Svg>

                <Svg style={styles.group} width="21" height="36" viewBox="0 0 21 36" fill="none">
                  <G opacity="0.9">
                    <Path
                      d="M1.31671 6.58214L13.6027 1.3167"
                      stroke="#4ADE80"
                      strokeWidth="2.63272"
                      strokeLinecap="round"
                    />
                    <Path
                      d="M4.82703 20.6233H18.8682"
                      stroke="#4ADE80"
                      strokeWidth="2.63272"
                      strokeLinecap="round"
                    />
                    <Path
                      d="M1.31671 33.7869L11.8476 28.5215"
                      stroke="#4ADE80"
                      strokeWidth="2.63272"
                      strokeLinecap="round"
                    />
                  </G>
                </Svg>

                <Svg
                  style={styles.__________________vector}
                  width="67"
                  height="71"
                  viewBox="0 0 67 71"
                  fill="none"
                >
                  <Path
                    d="M33.3478 70.2059C51.7653 70.2059 66.6956 54.4898 66.6956 35.1029C66.6956 15.7161 51.7653 0 33.3478 0C14.9303 0 0 15.7161 0 35.1029C0 54.4898 14.9303 70.2059 33.3478 70.2059Z"
                    fill="url(#paint0_radial_1_335)"
                  />
                  <Defs>
                    <RadialGradient
                      id="paint0_radial_1_335"
                      cx="0"
                      cy="0"
                      r="1"
                      gradientUnits="userSpaceOnUse"
                      gradientTransform="translate(33.3478 35.1029) scale(33.3478 35.1029)"
                    >
                      <Stop stopColor="#4ADE80" stopOpacity="0.35" />
                      <Stop offset="1" stopColor="#4ADE80" stopOpacity="0" />
                    </RadialGradient>
                  </Defs>
                </Svg>

                <Svg
                  style={styles.___________________vector}
                  width="53"
                  height="36"
                  viewBox="0 0 53 36"
                  fill="none"
                >
                  <Path
                    d="M26.3272 35.1029C40.8673 35.1029 52.6544 27.2449 52.6544 17.5515C52.6544 7.85806 40.8673 0 26.3272 0C11.7871 0 0 7.85806 0 17.5515C0 27.2449 11.7871 35.1029 26.3272 35.1029Z"
                    fill="#1A1A2E"
                  />
                </Svg>

                <Svg
                  style={styles.____________________vector}
                  width="50"
                  height="43"
                  viewBox="0 0 50 43"
                  fill="none"
                >
                  <Path
                    d="M24.5721 42.1235C38.1428 42.1235 49.1441 32.6939 49.1441 21.0618C49.1441 9.42967 38.1428 0 24.5721 0C11.0013 0 0 9.42967 0 21.0618C0 32.6939 11.0013 42.1235 24.5721 42.1235Z"
                    fill="#1A1A2E"
                  />
                </Svg>

                <Svg
                  style={styles._____________________vector}
                  width="53"
                  height="53"
                  viewBox="0 0 53 53"
                  fill="none"
                >
                  <Path
                    d="M26.3272 52.6544C40.8673 52.6544 52.6544 40.8673 52.6544 26.3272C52.6544 11.7871 40.8673 0 26.3272 0C11.7871 0 0 11.7871 0 26.3272C0 40.8673 11.7871 52.6544 26.3272 52.6544Z"
                    fill="#1A1A2E"
                  />
                </Svg>

                <Svg
                  style={styles.______________________vector}
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                >
                  <Path
                    d="M6.854 13.9349C11.5356 15.1894 16.1442 13.1701 17.1478 9.4249C18.1513 5.67965 15.1697 1.62662 10.4881 0.372203C5.80657 -0.882216 1.19789 1.137 0.194352 4.88224C-0.809184 8.62749 2.17244 12.6805 6.854 13.9349Z"
                    fill="#1A1A2E"
                  />
                </Svg>

                <Svg
                  style={styles._______________________vector}
                  width="18"
                  height="15"
                  viewBox="0 0 18 15"
                  fill="none"
                >
                  <Path
                    d="M10.4882 13.9349C15.1697 12.6805 18.1513 8.6275 17.1478 4.88225C16.1443 1.13701 11.5356 -0.882208 6.85403 0.372212C2.17247 1.62663 -0.809154 5.67966 0.194381 9.42491C1.19792 13.1702 5.8066 15.1894 10.4882 13.9349Z"
                    fill="#1A1A2E"
                  />
                </Svg>

                <Svg
                  style={styles.________________________vector}
                  width="9"
                  height="15"
                  viewBox="0 0 9 15"
                  fill="none"
                >
                  <Path
                    d="M6.80157 12.9446L1.53613 1.53612"
                    stroke="#1A1A2E"
                    strokeWidth="3.07151"
                    strokeLinecap="round"
                  />
                </Svg>

                <Svg
                  style={styles._________________________vector}
                  width="15"
                  height="13"
                  viewBox="0 0 15 13"
                  fill="none"
                >
                  <Path
                    d="M10.1618 10.5683C13.735 8.06636 15.2794 4.10703 13.6115 1.72492C11.9435 -0.657193 7.6947 -0.560038 4.12153 1.94192C0.548359 4.44388 -0.996107 8.40321 0.671867 10.7853C2.33984 13.1674 6.58863 13.0703 10.1618 10.5683Z"
                    fill="#22C55E"
                  />
                </Svg>

                <Svg
                  style={styles.__________________________vector}
                  width="9"
                  height="15"
                  viewBox="0 0 9 15"
                  fill="none"
                >
                  <Path
                    d="M1.53613 12.9446L6.80157 1.53612"
                    stroke="#1A1A2E"
                    strokeWidth="3.07151"
                    strokeLinecap="round"
                  />
                </Svg>

                <Svg
                  style={styles.___________________________vector}
                  width="15"
                  height="13"
                  viewBox="0 0 15 13"
                  fill="none"
                >
                  <Path
                    d="M4.12155 10.5683C7.69472 13.0703 11.9435 13.1674 13.6115 10.7853C15.2794 8.40321 13.735 4.44389 10.1618 1.94193C6.58864 -0.560033 2.33986 -0.657188 0.671883 1.72493C-0.99609 4.10704 0.548376 8.06636 4.12155 10.5683Z"
                    fill="#22C55E"
                  />
                </Svg>

                <Svg
                  style={styles.____________________________vector}
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                >
                  <G opacity="0.3" filter="url(#filter0_f_1_345)">
                    <Path
                      d="M17.5515 29.8375C23.3675 29.8375 28.0823 24.7298 28.0823 18.429C28.0823 12.1283 23.3675 7.02058 17.5515 7.02058C11.7354 7.02058 7.02057 12.1283 7.02057 18.429C7.02057 24.7298 11.7354 29.8375 17.5515 29.8375Z"
                      fill="#4ADE80"
                    />
                  </G>
                  <Defs>
                    <Filter
                      id="filter0_f_1_345"
                      x="-1.95503e-05"
                      y="-4.29153e-06"
                      width="35.1029"
                      height="36.8581"
                      filterUnits="userSpaceOnUse"
                    >
                      <FeFlood floodOpacity="0" result="BackgroundImageFix" />
                      <FeBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <FeGaussianBlur
                        stdDeviation="3.51029"
                        result="effect1_foregroundBlur_1_345"
                      />
                    </Filter>
                  </Defs>
                </Svg>

                <Svg
                  style={styles._____________________________vector}
                  width="36"
                  height="37"
                  viewBox="0 0 36 37"
                  fill="none"
                >
                  <G opacity="0.3" filter="url(#filter0_f_1_346)">
                    <Path
                      d="M17.5515 29.8375C23.3675 29.8375 28.0823 24.7298 28.0823 18.429C28.0823 12.1283 23.3675 7.02058 17.5515 7.02058C11.7354 7.02058 7.02057 12.1283 7.02057 18.429C7.02057 24.7298 11.7354 29.8375 17.5515 29.8375Z"
                      fill="#4ADE80"
                    />
                  </G>
                  <Defs>
                    <Filter
                      id="filter0_f_1_346"
                      x="-1.95503e-05"
                      y="-4.29153e-06"
                      width="35.1029"
                      height="36.8581"
                      filterUnits="userSpaceOnUse"
                    >
                      <FeFlood floodOpacity="0" result="BackgroundImageFix" />
                      <FeBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="BackgroundImageFix"
                        result="shape"
                      />
                      <FeGaussianBlur
                        stdDeviation="3.51029"
                        result="effect1_foregroundBlur_1_346"
                      />
                    </Filter>
                  </Defs>
                </Svg>

                <Svg
                  style={styles.______________________________vector}
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <Path
                    d="M7.89816 17.5515C12.2602 17.5515 15.7963 13.6224 15.7963 8.77574C15.7963 3.92903 12.2602 0 7.89816 0C3.53613 0 0 3.92903 0 8.77574C0 13.6224 3.53613 17.5515 7.89816 17.5515Z"
                    fill="#4ADE80"
                  />
                </Svg>

                <Svg
                  style={styles._______________________________vector}
                  width="16"
                  height="18"
                  viewBox="0 0 16 18"
                  fill="none"
                >
                  <Path
                    d="M7.89816 17.5515C12.2602 17.5515 15.7963 13.6224 15.7963 8.77574C15.7963 3.92903 12.2602 0 7.89816 0C3.53613 0 0 3.92903 0 8.77574C0 13.6224 3.53613 17.5515 7.89816 17.5515Z"
                    fill="#4ADE80"
                  />
                </Svg>

                <Svg
                  style={styles.________________________________vector}
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                >
                  <Path
                    opacity="0.6"
                    d="M4.82665 11.4085C7.49234 11.4085 9.65331 8.85459 9.65331 5.70423C9.65331 2.55387 7.49234 0 4.82665 0C2.16097 0 0 2.55387 0 5.70423C0 8.85459 2.16097 11.4085 4.82665 11.4085Z"
                    fill="#86EFAC"
                  />
                </Svg>

                <Svg
                  style={styles._________________________________vector}
                  width="10"
                  height="12"
                  viewBox="0 0 10 12"
                  fill="none"
                >
                  <Path
                    opacity="0.6"
                    d="M4.82665 11.4085C7.49234 11.4085 9.65331 8.85459 9.65331 5.70423C9.65331 2.55387 7.49234 0 4.82665 0C2.16097 0 0 2.55387 0 5.70423C0 8.85459 2.16097 11.4085 4.82665 11.4085Z"
                    fill="#86EFAC"
                  />
                </Svg>

                <Svg
                  style={styles.__________________________________vector}
                  width="6"
                  height="7"
                  viewBox="0 0 6 7"
                  fill="none"
                >
                  <Path
                    opacity="0.95"
                    d="M2.63272 6.14301C4.08673 6.14301 5.26544 4.76785 5.26544 3.07151C5.26544 1.37516 4.08673 0 2.63272 0C1.17871 0 0 1.37516 0 3.07151C0 4.76785 1.17871 6.14301 2.63272 6.14301Z"
                    fill="white"
                  />
                </Svg>

                <Svg
                  style={styles.___________________________________vector}
                  width="6"
                  height="7"
                  viewBox="0 0 6 7"
                  fill="none"
                >
                  <Path
                    opacity="0.95"
                    d="M2.63272 6.14301C4.08673 6.14301 5.26544 4.76785 5.26544 3.07151C5.26544 1.37516 4.08673 0 2.63272 0C1.17871 0 0 1.37516 0 3.07151C0 4.76785 1.17871 6.14301 2.63272 6.14301Z"
                    fill="white"
                  />
                </Svg>

                <Svg
                  style={styles.____________________________________vector}
                  width="18"
                  height="5"
                  viewBox="0 0 18 5"
                  fill="none"
                >
                  <Path
                    d="M0.877625 0.877609C6.14307 4.97295 11.4085 4.97295 16.6739 0.877609"
                    stroke="#22C55E"
                    strokeWidth="1.75515"
                    strokeLinecap="round"
                  />
                </Svg>

                <Svg
                  style={styles._____________________________________vector}
                  width="130"
                  height="71"
                  viewBox="0 0 130 71"
                  fill="none"
                >
                  <Path
                    d="M115.84 0H14.0412C6.28645 0 0 6.28645 0 14.0412V56.1647C0 63.9194 6.28645 70.2059 14.0412 70.2059H115.84C123.594 70.2059 129.881 63.9194 129.881 56.1647V14.0412C129.881 6.28645 123.594 0 115.84 0Z"
                    fill="#ECFDF5"
                  />
                </Svg>

                <Svg
                  style={styles.______________________________________vector}
                  width="19"
                  height="15"
                  viewBox="0 0 19 15"
                  fill="none"
                >
                  <Path d="M2.63272 0L18.429 10.5309L0 14.0412L2.63272 0Z" fill="#ECFDF5" />
                </Svg>

                <View style={styles._group}>
                  <Text style={styles.progressstarts}>{`"Progress starts`}</Text>
                  <Text style={styles.withasingle}>{`with a single`}</Text>
                  <Text style={styles._nudge}>{`nudge."`}</Text>
                </View>
              </View>
            </View>
            <View style={styles.pagination}>
              <View style={styles.__________________container} />
              <View style={styles.___________________container} />
              <View style={styles.____________________container} />
            </View>
            <View style={styles._____________________container}>
              <Pressable
                accessibilityRole="button"
                accessibilityLabel="Next"
                onPress={() => {
                  setNudgeStyle('normal');
                  router.push(onboardingHref(OnboardingStep.Style, 'normal'));
                }}
              >
                <View style={styles.primaryButton}>
                  <Text style={styles.next}>{`Next →`}</Text>
                </View>
              </Pressable>
            </View>
            <View style={styles.______________________container} />
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
  screen2: {
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
    height: 103,
    width: 390,
    paddingTop: 20,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    rowGap: 0,
    paddingHorizontal: 24,
  },
  morethanatodolist: {
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
  ___container: {
    position: 'relative',
    alignSelf: 'stretch',
    flexShrink: 0,
    paddingTop: 10,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
    paddingHorizontal: 32,
  },
  remindersprogressandalittlepressurewhenyo: {
    position: 'relative',
    flexShrink: 0,
    width: 327,
    textAlign: 'center',
    color: 'rgba(100, 116, 139, 1)',
    fontFamily: 'Inter',
    fontSize: 15,
    fontWeight: 400,
    lineHeight: 24,
  },
  ____container: {
    position: 'relative',
    alignSelf: 'stretch',
    flexShrink: 0,
    paddingTop: 20,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 10,
    paddingHorizontal: 16,
  },
  featureCard: {
    position: 'relative',
    flexShrink: 0,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowColor: 'rgba(0, 0, 0, 0.06)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 16,
    display: 'flex',
    alignItems: 'center',
    columnGap: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 18,
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
  _screen2: {
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
    top: 2,
    right: 3,
    bottom: 7,
    left: 3,
    overflow: 'visible',
  },
  __vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 21,
    right: 10,
    bottom: 2,
    left: 10,
    overflow: 'visible',
  },
  _____container: {
    position: 'relative',
    flexGrow: 264.01483154296875,
    flexShrink: 1,
    flexBasis: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  ______container: {
    position: 'relative',
    alignSelf: 'stretch',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  getthingsdone: {
    position: 'relative',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(15, 23, 42, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 22.5,
  },
  _______container: {
    position: 'relative',
    flexShrink: 0,
    height: 21,
    width: 264,
    paddingTop: 2,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
    paddingHorizontal: 0,
  },
  smartremindersthatactuallywork: {
    position: 'relative',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(100, 116, 139, 1)',
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 18.850000381469727,
  },
  _featureCard: {
    position: 'relative',
    flexShrink: 0,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowColor: 'rgba(0, 0, 0, 0.06)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 16,
    display: 'flex',
    alignItems: 'center',
    columnGap: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 18,
  },
  _iconCircle: {
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
  __screen2: {
    position: 'relative',
    flexShrink: 0,
    height: 24,
    width: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  ___vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 14,
    right: 18,
    bottom: 2,
    left: 2,
    overflow: 'visible',
  },
  ____vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 9,
    right: 10,
    bottom: 2,
    left: 10,
    overflow: 'visible',
  },
  _____vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 4,
    right: 2,
    bottom: 2,
    left: 18,
    overflow: 'visible',
  },
  ________container: {
    position: 'relative',
    flexGrow: 264.01483154296875,
    flexShrink: 1,
    flexBasis: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  _________container: {
    position: 'relative',
    alignSelf: 'stretch',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  trackyourprogress: {
    position: 'relative',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(15, 23, 42, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 22.5,
  },
  __________container: {
    position: 'relative',
    flexShrink: 0,
    height: 21,
    width: 264,
    paddingTop: 2,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
    paddingHorizontal: 0,
  },
  seeyourstatsandbuildconsistenthabits: {
    position: 'relative',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(100, 116, 139, 1)',
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 18.850000381469727,
  },
  __featureCard: {
    position: 'relative',
    flexShrink: 0,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowColor: 'rgba(0, 0, 0, 0.06)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 16,
    display: 'flex',
    alignItems: 'center',
    columnGap: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderRadius: 18,
  },
  __iconCircle: {
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
  ___screen2: {
    position: 'relative',
    flexShrink: 0,
    height: 24,
    width: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  ______vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 2,
    right: 2,
    bottom: 3,
    left: 2,
    overflow: 'visible',
  },
  ___________container: {
    position: 'relative',
    flexGrow: 264.01483154296875,
    flexShrink: 1,
    flexBasis: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  ____________container: {
    position: 'relative',
    alignSelf: 'stretch',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  earnrewards: {
    position: 'relative',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(15, 23, 42, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 22.5,
  },
  _____________container: {
    position: 'relative',
    flexShrink: 0,
    height: 21,
    width: 264,
    paddingTop: 2,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
    paddingHorizontal: 0,
  },
  completetasksandlevelup: {
    position: 'relative',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(100, 116, 139, 1)',
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 18.850000381469727,
  },
  ___featureCard: {
    position: 'relative',
    flexShrink: 0,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    shadowColor: 'rgba(0, 0, 0, 0.06)',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowRadius: 16,
    display: 'flex',
    alignItems: 'center',
    columnGap: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
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
  ____screen2: {
    position: 'relative',
    flexShrink: 0,
    height: 24,
    width: 24,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  _______vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 3,
    right: 4,
    bottom: 2,
    left: 4,
    overflow: 'visible',
  },
  ________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 6,
    right: 6,
    bottom: 2,
    left: 6,
    overflow: 'visible',
  },
  ______________container: {
    position: 'relative',
    flexGrow: 264.01483154296875,
    flexShrink: 1,
    flexBasis: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  _______________container: {
    position: 'relative',
    alignSelf: 'stretch',
    flexShrink: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  abetteryou: {
    position: 'relative',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(15, 23, 42, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 15,
    fontWeight: 700,
    lineHeight: 22.5,
  },
  ________________container: {
    position: 'relative',
    flexShrink: 0,
    height: 21,
    width: 264,
    paddingTop: 2,
    paddingBottom: 0,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
    paddingHorizontal: 0,
  },
  smallstepsBigchanges: {
    position: 'relative',
    flexShrink: 0,
    textAlign: 'left',
    color: 'rgba(100, 116, 139, 1)',
    fontFamily: 'Inter',
    fontSize: 13,
    fontWeight: 400,
    lineHeight: 18.850000381469727,
  },
  _________________container: {
    position: 'relative',
    alignSelf: 'stretch',
    flexGrow: 119.35010528564453,
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
    height: 119,
    width: 390,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    rowGap: 0,
  },
  _________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 26,
    right: 33,
    bottom: -30,
    left: 94,
    overflow: 'visible',
  },
  __________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 79,
    right: 15,
    bottom: 0,
    left: 15,
    overflow: 'visible',
  },
  ___________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 102,
    right: 15,
    bottom: 0,
    left: 15,
    overflow: 'visible',
  },
  ____________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 78,
    right: 311,
    bottom: 18,
    left: 56,
    overflow: 'visible',
  },
  _____________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 76,
    right: 301,
    bottom: 25,
    left: 71,
    overflow: 'visible',
  },
  ______________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 87,
    right: 326,
    bottom: 18,
    left: 50,
    overflow: 'visible',
  },
  _______________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 68,
    right: 59,
    bottom: 25,
    left: 305,
    overflow: 'visible',
  },
  ________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 67,
    right: 49,
    bottom: 33,
    left: 321,
    overflow: 'visible',
  },
  _________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 77,
    right: 39,
    bottom: 28,
    left: 337,
    overflow: 'visible',
  },
  group: {
    position: 'absolute',
    flexShrink: 0,
    top: 49,
    height: 32,
    left: 266,
    width: 18,
  },
  __________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 44,
    right: 138,
    bottom: 5,
    left: 185,
    overflow: 'visible',
  },
  ___________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 81,
    right: 145,
    bottom: 4,
    left: 192,
    overflow: 'visible',
  },
  ____________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 62,
    right: 147,
    bottom: 15,
    left: 194,
    overflow: 'visible',
  },
  _____________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 33,
    right: 145,
    bottom: 33,
    left: 192,
    overflow: 'visible',
  },
  ______________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 81,
    right: 185,
    bottom: 25,
    left: 187,
    overflow: 'visible',
  },
  _______________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 81,
    right: 140,
    bottom: 25,
    left: 233,
    overflow: 'visible',
  },
  ________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 24,
    right: 180,
    bottom: 84,
    left: 205,
    overflow: 'visible',
  },
  _________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 14,
    right: 180,
    bottom: 95,
    left: 194,
    overflow: 'visible',
  },
  __________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 24,
    right: 157,
    bottom: 84,
    left: 227,
    overflow: 'visible',
  },
  ___________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 14,
    right: 147,
    bottom: 95,
    left: 227,
    overflow: 'visible',
  },
  ____________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 48,
    right: 171,
    bottom: 48,
    left: 198,
    overflow: 'visible',
  },
  _____________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 48,
    right: 150,
    bottom: 48,
    left: 219,
    overflow: 'visible',
  },
  ______________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 51,
    right: 174,
    bottom: 51,
    left: 200,
    overflow: 'visible',
  },
  _______________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 51,
    right: 153,
    bottom: 51,
    left: 221,
    overflow: 'visible',
  },
  ________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 54,
    right: 177,
    bottom: 54,
    left: 203,
    overflow: 'visible',
  },
  _________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 54,
    right: 156,
    bottom: 54,
    left: 224,
    overflow: 'visible',
  },
  __________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 52,
    right: 177,
    bottom: 61,
    left: 208,
    overflow: 'visible',
  },
  ___________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 52,
    right: 156,
    bottom: 61,
    left: 229,
    overflow: 'visible',
  },
  ____________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 72,
    right: 163,
    bottom: 44,
    left: 211,
    overflow: 'visible',
  },
  _____________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 12,
    right: 226,
    bottom: 37,
    left: 34,
    overflow: 'visible',
  },
  ______________________________________vector: {
    position: 'absolute',
    flexShrink: 0,
    top: 49,
    right: 212,
    bottom: 56,
    left: 160,
    overflow: 'visible',
  },
  _group: {
    position: 'absolute',
    flexShrink: 0,
    top: 24,
    height: 44,
    left: 54,
    width: 90,
  },
  progressstarts: {
    position: 'absolute',
    flexShrink: 0,
    top: 0.3055152893066406,
    left: 0.4152679443359375,
    width: 90,
    height: 14,
    textAlign: 'center',
    color: 'rgba(15, 23, 42, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 11.408455848693848,
    fontWeight: 700,
  },
  withasingle: {
    position: 'absolute',
    flexShrink: 0,
    top: 15.30551528930664,
    left: 11.415267944335938,
    width: 68,
    height: 14,
    textAlign: 'center',
    color: 'rgba(15, 23, 42, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 11.408455848693848,
    fontWeight: 700,
  },
  _nudge: {
    position: 'absolute',
    flexShrink: 0,
    top: 30.30551528930664,
    left: 22.415267944335938,
    width: 46,
    height: 14,
    textAlign: 'center',
    color: 'rgba(15, 23, 42, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 11.408455848693848,
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
  _____________________container: {
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
  next: {
    position: 'absolute',
    flexShrink: 0,
    top: 19,
    left: 146,
    width: 58,
    height: 27,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)',
    fontFamily: 'Plus Jakarta Sans',
    fontSize: 18,
    fontWeight: 700,
    letterSpacing: -0.20000000298023224,
    lineHeight: 27,
  },
  ______________________container: {
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

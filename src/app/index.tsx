import { type ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

import { type Href, Redirect, useRouter } from 'expo-router';

import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { Screen } from '@/components/screen';
import { HomeHeaderScene } from '@/components/svg/home-header';
import {
  BarsIcon,
  BellIcon,
  CalendarIcon,
  ChevronIcon,
  ClockIcon,
  FlameIcon,
  HomeIcon,
  NavPlusIcon,
  PlayIcon,
  PlusIcon,
  ProfileIcon,
  ProgressRing,
  StatsIcon,
  TargetIcon,
  TaskCheckIcon,
  XpStarIcon,
} from '@/components/svg/home-icons';
import { onboardingHref, OnboardingStep, useOnboardingStore } from '@/store/onboarding';
import { colors, FontFamily, radii, spacing, typography } from '@/theme';

type TaskMarker = 'done' | 'progress' | 'empty';

type HomeTask = {
  title: string;
  time: string;
  xp: string;
  marker: TaskMarker;
  status?: string;
  action?: string;
};

const tasks: HomeTask[] = [
  {
    title: 'English',
    time: '14:00 – 16:00',
    xp: '+100 XP',
    marker: 'done',
    status: 'Completed 1h ago',
  },
  {
    title: 'Work on Nudge',
    time: '18:00 – 19:00',
    xp: '+50 XP',
    marker: 'progress',
    action: 'Start',
  },
  {
    title: 'Gym',
    time: '20:00 – 21:00',
    xp: '+80 XP',
    marker: 'empty',
  },
];

export default function HomeScreen() {
  const completed = useOnboardingStore((state) => state.completed);
  const insets = useSafeAreaInsets();
  const router = useRouter();

  if (!completed) {
    return <Redirect href={onboardingHref(OnboardingStep.Welcome)} />;
  }

  return (
    <Screen style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={[styles.header, { marginTop: -insets.top }]}>
          <HomeHeaderScene />
          <View style={[styles.headerRow, { top: Math.max(46, insets.top) }]}>
            <View style={styles.greeting}>
              <Text style={styles.greetingLabel}>Good morning,</Text>
              <Text style={styles.greetingName}>Mykhailo!</Text>
              <Text style={styles.greetingTagline}>Small steps. Big results.</Text>
            </View>
            <View style={styles.speech}>
              <Text style={styles.speechText}>{`You've got\nthis today!`}</Text>
            </View>
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Notifications"
              style={styles.bell}
            >
              <BellIcon />
              <View style={styles.notificationDot} />
            </Pressable>
          </View>
        </View>

        <View style={styles.content}>
          <View style={styles.progressCard}>
            <View style={styles.levelBadge}>
              <Text style={styles.levelLabel}>Lv</Text>
              <Text style={styles.levelValue}>5</Text>
            </View>
            <View style={styles.progressCopy}>
              <Text style={styles.levelTitle}>Level 5</Text>
              <View style={styles.xpTrack}>
                <View style={styles.xpFill} />
              </View>
              <Text style={styles.xpCaption}>320 / 500 XP</Text>
            </View>
            <View style={styles.streak}>
              <FlameIcon />
              <Text style={styles.streakValue}>12</Text>
              <Text style={styles.streakLabel}>day streak</Text>
            </View>
          </View>

          <View style={styles.statRow}>
            <StatCard icon={<TargetIcon />} value="3/5" label="Tasks today" />
            <StatCard icon={<XpStarIcon />} value="260" label="XP earned" />
            <StatCard icon={<BarsIcon />} value="72%" label="Weekly goal" />
          </View>

          <View style={styles.sectionHeader}>
            <Text style={styles.sectionTitle}>Today</Text>
            <View style={styles.date}>
              <Text style={styles.dateText}>Mon, Sep 8</Text>
              <CalendarIcon />
            </View>
          </View>

          {tasks.map((task) => (
            <TaskCard key={task.title} task={task} />
          ))}

          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Add a new task"
            onPress={() => router.push('/createTask' as unknown as Href)}
            style={styles.addCard}
          >
            <View style={styles.addIcon}>
              <PlusIcon />
            </View>
            <View style={styles.addCopy}>
              <Text style={styles.addTitle}>Add a new task</Text>
              <Text style={styles.addSubtitle}>Keep the momentum going!</Text>
            </View>
            <ChevronIcon />
          </Pressable>

          <View style={styles.insightCard}>
            <Text
              style={styles.insightText}
            >{`Consistency today\ncreates the life you want tomorrow.`}</Text>
          </View>
        </View>
      </ScrollView>

      <View style={styles.tabBar}>
        <TabItem label="Home" active icon={<HomeIcon />} />
        <TabItem
          label="Add"
          icon={<NavPlusIcon />}
          badge
          onPress={() => router.push('/createTask' as unknown as Href)}
        />
        <TabItem label="Stats" icon={<StatsIcon />} />
        <TabItem label="Profile" icon={<ProfileIcon />} />
      </View>
    </Screen>
  );
}

function StatCard({ icon, value, label }: { icon: ReactNode; value: string; label: string }) {
  return (
    <View style={styles.statCard}>
      {icon}
      <View style={styles.statCopy}>
        <Text style={styles.statValue}>{value}</Text>
        <Text style={styles.statLabel}>{label}</Text>
      </View>
    </View>
  );
}

function TaskCard({ task }: { task: HomeTask }) {
  return (
    <View style={[styles.taskCard, task.marker === 'done' && styles.taskCardDone]}>
      <TaskMarkerView marker={task.marker} />
      <View style={styles.taskCopy}>
        <Text style={styles.taskTitle}>{task.title}</Text>
        <View style={styles.taskTime}>
          <ClockIcon />
          <Text style={styles.taskTimeText}>{task.time}</Text>
        </View>
        {task.status ? <Text style={styles.taskStatus}>{task.status}</Text> : null}
        {task.action ? (
          <Pressable
            accessibilityRole="button"
            accessibilityLabel={task.action}
            style={styles.startButton}
          >
            <PlayIcon />
            <Text style={styles.startLabel}>{task.action}</Text>
          </Pressable>
        ) : null}
      </View>
      <View style={styles.taskXp}>
        <Text style={styles.taskXpText}>{task.xp}</Text>
        <ChevronIcon />
      </View>
    </View>
  );
}

function TaskMarkerView({ marker }: { marker: TaskMarker }) {
  if (marker === 'done') {
    return (
      <View style={styles.doneMarker}>
        <TaskCheckIcon />
      </View>
    );
  }

  if (marker === 'progress') {
    return <ProgressRing />;
  }

  return <View style={styles.emptyMarker} />;
}

function TabItem({
  label,
  icon,
  active = false,
  badge = false,
  onPress,
}: {
  label: string;
  icon: ReactNode;
  active?: boolean;
  badge?: boolean;
  onPress?: () => void;
}) {
  return (
    <Pressable
      accessibilityRole="button"
      accessibilityLabel={label}
      accessibilityState={{ selected: active }}
      onPress={onPress}
      style={styles.tab}
    >
      {badge ? <View style={styles.addBadge}>{icon}</View> : icon}
      <Text style={[styles.tabLabel, active && styles.tabLabelActive]}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.background,
  },
  scroll: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: spacing.lg,
  },
  header: {
    height: 175,
  },
  headerRow: {
    position: 'absolute',
    top: 46,
    left: 20,
    right: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  greeting: {
    flexShrink: 1,
  },
  greetingLabel: {
    fontFamily: FontFamily.display,
    fontSize: 17,
    fontWeight: '600',
    lineHeight: 25.5,
    color: colors.text.primary,
  },
  greetingName: {
    fontFamily: FontFamily.display,
    fontSize: 26,
    fontWeight: '800',
    letterSpacing: -0.6,
    lineHeight: 39,
    color: colors.primary,
  },
  greetingTagline: {
    fontFamily: FontFamily.body,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19.5,
    color: colors.text.secondary,
  },
  speech: {
    backgroundColor: colors.successSurface,
    borderRadius: 13,
    paddingHorizontal: 13,
    paddingVertical: 9,
    marginHorizontal: spacing.xs,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 10,
  },
  speechText: {
    fontFamily: FontFamily.display,
    fontSize: 12.5,
    fontWeight: '600',
    lineHeight: 18.125,
    color: colors.text.primary,
  },
  bell: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: colors.surface,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.09,
    shadowRadius: 8,
  },
  notificationDot: {
    position: 'absolute',
    top: 6,
    right: 7,
    width: 7,
    height: 7,
    borderRadius: 3.5,
    backgroundColor: '#EF4444',
    borderWidth: 1.25,
    borderColor: colors.surface,
  },
  content: {
    paddingHorizontal: spacing.lg,
    paddingTop: 12,
    gap: spacing.sm,
  },
  progressCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.md,
    padding: spacing.lg,
    borderRadius: radii.option,
    backgroundColor: colors.surface,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.07,
    shadowRadius: 16,
  },
  levelBadge: {
    width: 52,
    height: 58,
    borderRadius: spacing.lg,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  levelLabel: {
    fontFamily: FontFamily.display,
    fontSize: 9,
    fontWeight: '700',
    letterSpacing: 0.3,
    lineHeight: 13.5,
    color: colors.text.onPrimary,
  },
  levelValue: {
    fontFamily: FontFamily.display,
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 24,
    color: colors.text.onPrimary,
  },
  progressCopy: {
    flex: 1,
  },
  levelTitle: {
    fontFamily: FontFamily.display,
    fontSize: 16,
    fontWeight: '700',
    lineHeight: 24,
    color: colors.text.primary,
  },
  xpTrack: {
    height: 8,
    borderRadius: radii.pill,
    backgroundColor: colors.border,
    marginTop: 7,
    overflow: 'hidden',
  },
  xpFill: {
    width: '64%',
    height: 8,
    borderRadius: radii.pill,
    backgroundColor: colors.primary,
  },
  xpCaption: {
    ...typography.benefitBody,
    lineHeight: 18,
    color: colors.text.secondary,
    marginTop: spacing.xxs,
  },
  streak: {
    alignItems: 'center',
  },
  streakValue: {
    fontFamily: FontFamily.display,
    fontSize: 24,
    fontWeight: '800',
    lineHeight: 24,
    color: colors.text.primary,
  },
  streakLabel: {
    fontFamily: FontFamily.body,
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 16.5,
    color: colors.text.secondary,
  },
  statRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  statCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.sm,
    paddingVertical: 12,
    borderRadius: spacing.md,
    backgroundColor: colors.surface,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
  },
  statCopy: {
    flex: 1,
  },
  statValue: {
    fontFamily: FontFamily.display,
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 17.6,
    color: colors.text.primary,
  },
  statLabel: {
    fontFamily: FontFamily.body,
    fontSize: 11,
    fontWeight: '400',
    lineHeight: 16.5,
    color: colors.text.secondary,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: spacing.xxs,
  },
  sectionTitle: {
    fontFamily: FontFamily.display,
    fontSize: 20,
    fontWeight: '800',
    letterSpacing: -0.4,
    lineHeight: 30,
    color: colors.text.primary,
  },
  date: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dateText: {
    fontFamily: FontFamily.body,
    fontSize: 13,
    fontWeight: '400',
    lineHeight: 19.5,
    color: colors.text.secondary,
  },
  taskCard: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 12,
    padding: spacing.md,
    borderRadius: spacing.lg,
    backgroundColor: colors.surface,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 12,
  },
  taskCardDone: {
    backgroundColor: colors.selectedSurface,
  },
  doneMarker: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  emptyMarker: {
    width: 38,
    height: 38,
    borderRadius: 19,
    borderWidth: 2.5,
    borderColor: colors.inactive,
  },
  taskCopy: {
    flex: 1,
    gap: 2,
  },
  taskTitle: {
    ...typography.cardTitle,
    color: colors.text.primary,
  },
  taskTime: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  taskTimeText: {
    fontFamily: FontFamily.body,
    fontSize: 12.5,
    fontWeight: '400',
    lineHeight: 18.75,
    color: colors.text.secondary,
  },
  taskStatus: {
    fontFamily: FontFamily.body,
    fontSize: 11.5,
    fontWeight: '400',
    lineHeight: 17.25,
    color: colors.text.secondary,
  },
  startButton: {
    alignSelf: 'flex-start',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    height: 37,
    marginTop: spacing.xs,
    paddingHorizontal: 20,
    borderRadius: radii.button,
    backgroundColor: colors.primary,
    shadowColor: colors.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
  },
  startLabel: {
    fontFamily: FontFamily.display,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    color: colors.text.onPrimary,
  },
  taskXp: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.xxs,
  },
  taskXpText: {
    ...typography.benefitTitle,
    color: colors.primary,
  },
  addCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: spacing.lg,
    borderWidth: 1.25,
    borderColor: colors.primary,
    backgroundColor: colors.selectedSurface,
  },
  addIcon: {
    width: 38,
    height: 38,
    borderRadius: 19,
    backgroundColor: colors.primary,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addCopy: {
    flex: 1,
  },
  addTitle: {
    ...typography.cardTitle,
    color: colors.text.primary,
  },
  addSubtitle: {
    fontFamily: FontFamily.body,
    fontSize: 12.5,
    fontWeight: '400',
    lineHeight: 18.75,
    color: colors.text.secondary,
  },
  insightCard: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.md,
    borderRadius: spacing.lg,
    backgroundColor: colors.successSurface,
  },
  insightText: {
    fontFamily: FontFamily.display,
    fontSize: 13.5,
    fontWeight: '600',
    lineHeight: 20.25,
    color: '#334155',
  },
  tabBar: {
    height: 68,
    flexDirection: 'row',
    alignItems: 'center',
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    backgroundColor: colors.surface,
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    gap: 3,
  },
  addBadge: {
    width: 28,
    height: 28,
    borderRadius: 14,
    backgroundColor: colors.text.caption,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabLabel: {
    fontFamily: FontFamily.display,
    fontSize: 11,
    fontWeight: '500',
    lineHeight: 16.5,
    color: colors.text.secondary,
  },
  tabLabelActive: {
    fontWeight: '700',
    color: colors.primary,
  },
});

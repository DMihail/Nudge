import { useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

import { useRouter } from 'expo-router';

import { Screen } from '@/components/screen';
import { BackChevron } from '@/components/svg/back-chevron';
import {
  ClearIcon,
  DateIcon,
  HealthIcon,
  PersonalIcon,
  ReminderIcon,
  RepeatIcon,
  StudyIcon,
  TimeIcon,
  TitleIcon,
  WorkIcon,
} from '@/components/svg/create-task-icons';
import { CreateTaskMascot } from '@/components/svg/create-task-mascot';
import { ChevronIcon } from '@/components/svg/home-icons';
import { colors, FontFamily, radii, shadows, spacing, typography } from '@/theme';

const categories = [
  { id: 'study', label: 'Study', icon: StudyIcon },
  { id: 'work', label: 'Work', icon: WorkIcon },
  { id: 'health', label: 'Health', icon: HealthIcon },
  { id: 'personal', label: 'Personal', icon: PersonalIcon },
] as const;

type CategoryId = (typeof categories)[number]['id'];

const xpOptions = [50, 100, 200] as const;

type XpReward = (typeof xpOptions)[number];

export default function CreateTaskScreen() {
  const router = useRouter();
  const [title, setTitle] = useState('English');
  const [category, setCategory] = useState<CategoryId>('study');
  const [xp, setXp] = useState<XpReward>(50);
  const [notes, setNotes] = useState('');

  return (
    <Screen style={styles.screen}>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled"
      >
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Back"
          onPress={() => router.back()}
          style={styles.header}
        >
          <BackChevron />
          <Text style={styles.brand}>Nudge</Text>
        </Pressable>

        <View style={styles.hero}>
          <View style={styles.heroCopy}>
            <Text style={styles.headline}>
              {'Create a '}
              <Text style={styles.headlineAccent}>new task</Text>
            </Text>
            <Text style={styles.subtitle}>Turn your intentions into actions.</Text>
          </View>
          <View style={styles.heroArt}>
            <View style={styles.speech}>
              <Text style={styles.speechText}>A small step today makes a big difference.</Text>
            </View>
            <CreateTaskMascot />
          </View>
        </View>

        <View style={styles.form}>
          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Task title</Text>
            <View style={styles.field}>
              <TitleIcon />
              <TextInput
                value={title}
                onChangeText={setTitle}
                style={styles.titleInput}
                accessibilityLabel="Task title"
              />
              {title.length > 0 ? (
                <Pressable
                  accessibilityRole="button"
                  accessibilityLabel="Clear title"
                  onPress={() => setTitle('')}
                  style={styles.clearButton}
                >
                  <ClearIcon />
                </Pressable>
              ) : null}
            </View>
            <Text style={styles.hint}>e.g. Study English, Go to Gym, Work on Project</Text>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Category</Text>
            <View style={styles.chips}>
              {categories.map((item) => {
                const selected = item.id === category;
                const Icon = item.icon;

                return (
                  <Pressable
                    key={item.id}
                    accessibilityRole="button"
                    accessibilityState={{ selected }}
                    onPress={() => setCategory(item.id)}
                    style={[styles.chip, selected && styles.chipSelected]}
                  >
                    <Icon color={selected ? colors.primary : colors.text.secondary} />
                    <Text style={[styles.chipLabel, selected && styles.chipLabelSelected]}>
                      {item.label}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>

          <View style={styles.splitRow}>
            <View style={styles.splitField}>
              <Text style={styles.label}>Date</Text>
              <View style={styles.field}>
                <DateIcon />
                <View style={styles.fieldCopy}>
                  <Text style={styles.fieldTitle}>Today</Text>
                  <Text style={styles.fieldCaption}>Mon, Sep 8</Text>
                </View>
                <ChevronIcon />
              </View>
            </View>
            <View style={styles.splitField}>
              <Text style={styles.label}>Time</Text>
              <View style={styles.field}>
                <TimeIcon />
                <Text style={styles.fieldValue}>14:00 – 16:00</Text>
                <ChevronIcon />
              </View>
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Repeat</Text>
            <View style={styles.field}>
              <RepeatIcon />
              <Text style={styles.pickerValue}>Does not repeat</Text>
              <ChevronIcon />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Reminders</Text>
            <View style={styles.field}>
              <ReminderIcon />
              <Text style={styles.pickerValue}>30 minutes before</Text>
              <ChevronIcon />
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>XP reward</Text>
            <View style={styles.rewardRow}>
              <View style={styles.rewardCopy}>
                <Text style={styles.rewardValue}>{`+${xp} XP`}</Text>
                <Text style={styles.rewardHint}>You can always change this later.</Text>
              </View>
              <View style={styles.chips}>
                {xpOptions.map((option) => {
                  const selected = option === xp;

                  return (
                    <Pressable
                      key={option}
                      accessibilityRole="button"
                      accessibilityState={{ selected }}
                      onPress={() => setXp(option)}
                      style={[styles.xpChip, selected && styles.chipSelected]}
                    >
                      <Text style={[styles.xpChipLabel, selected && styles.chipLabelSelected]}>
                        {`+${option}`}
                      </Text>
                    </Pressable>
                  );
                })}
              </View>
            </View>
          </View>

          <View style={styles.fieldGroup}>
            <Text style={styles.label}>Notes (optional)</Text>
            <View style={styles.notesField}>
              <TextInput
                value={notes}
                onChangeText={setNotes}
                placeholder="Add any additional details..."
                placeholderTextColor="rgba(100, 116, 139, 0.5)"
                multiline
                style={styles.notesInput}
                accessibilityLabel="Notes"
              />
            </View>
          </View>
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <Pressable
          accessibilityRole="button"
          accessibilityLabel="Create task"
          onPress={() => router.back()}
          style={styles.createButton}
        >
          <Text style={styles.createLabel}>Create task →</Text>
        </Pressable>
      </View>
    </Screen>
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
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingTop: spacing.md,
    paddingHorizontal: 20,
  },
  brand: {
    ...typography.brand,
    color: colors.primary,
  },
  hero: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    paddingTop: spacing.md,
    paddingBottom: 18,
    paddingHorizontal: 20,
  },
  heroCopy: {
    flex: 1,
    paddingRight: spacing.sm,
  },
  headline: {
    fontFamily: FontFamily.display,
    fontSize: 30,
    fontWeight: '800',
    letterSpacing: -0.8,
    lineHeight: 36,
    color: colors.text.primary,
  },
  headlineAccent: {
    color: colors.primary,
  },
  subtitle: {
    marginTop: spacing.xxs,
    fontFamily: FontFamily.body,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21,
    color: colors.text.secondary,
  },
  heroArt: {
    alignItems: 'flex-end',
  },
  speech: {
    maxWidth: 126,
    marginRight: 12,
    marginBottom: spacing.xxs,
    paddingHorizontal: 12,
    paddingVertical: 9,
    borderRadius: 13,
    backgroundColor: colors.successSurface,
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
  },
  speechText: {
    fontFamily: FontFamily.display,
    fontSize: 12,
    fontWeight: '600',
    lineHeight: 18,
    color: colors.text.primary,
  },
  form: {
    gap: 18,
    paddingHorizontal: spacing.lg,
  },
  fieldGroup: {
    gap: spacing.xs,
  },
  label: {
    fontFamily: FontFamily.display,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 21,
    color: colors.text.primary,
  },
  field: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: spacing.sm,
    paddingHorizontal: spacing.md,
    paddingVertical: 13,
    borderWidth: 1.25,
    borderColor: colors.border,
    borderRadius: spacing.md,
    backgroundColor: colors.surface,
  },
  titleInput: {
    flex: 1,
    padding: 0,
    fontFamily: FontFamily.display,
    fontSize: 15,
    fontWeight: '500',
    lineHeight: 22.5,
    color: colors.text.primary,
  },
  clearButton: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.text.caption,
  },
  hint: {
    fontFamily: FontFamily.body,
    fontSize: 12,
    fontWeight: '400',
    lineHeight: 18,
    color: colors.text.caption,
  },
  chips: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: spacing.xs,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    paddingHorizontal: spacing.md,
    paddingVertical: 9,
    borderWidth: 1.25,
    borderColor: colors.border,
    borderRadius: radii.button,
    backgroundColor: colors.surface,
  },
  chipSelected: {
    borderColor: colors.primary,
    backgroundColor: colors.selectedSurface,
  },
  chipLabel: {
    fontFamily: FontFamily.display,
    fontSize: 13.5,
    fontWeight: '600',
    lineHeight: 20.25,
    color: colors.text.secondary,
  },
  chipLabelSelected: {
    color: colors.primary,
  },
  splitRow: {
    flexDirection: 'row',
    gap: spacing.sm,
  },
  splitField: {
    flex: 1,
    gap: spacing.xs,
  },
  fieldCopy: {
    flex: 1,
  },
  fieldTitle: {
    fontFamily: FontFamily.display,
    fontSize: 13.5,
    fontWeight: '600',
    lineHeight: 20.25,
    color: colors.text.primary,
  },
  fieldCaption: {
    fontFamily: FontFamily.body,
    fontSize: 11.5,
    fontWeight: '400',
    lineHeight: 17.25,
    color: colors.text.secondary,
  },
  fieldValue: {
    flex: 1,
    fontFamily: FontFamily.display,
    fontSize: 13.5,
    fontWeight: '600',
    lineHeight: 20.25,
    color: colors.text.primary,
  },
  pickerValue: {
    flex: 1,
    fontFamily: FontFamily.body,
    fontSize: 14.5,
    fontWeight: '400',
    lineHeight: 21.75,
    color: colors.text.primary,
  },
  rewardRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  rewardCopy: {
    flex: 1,
  },
  rewardValue: {
    fontFamily: FontFamily.display,
    fontSize: 16,
    fontWeight: '800',
    lineHeight: 24,
    color: colors.primary,
  },
  rewardHint: {
    width: 85,
    fontFamily: FontFamily.body,
    fontSize: 11.5,
    fontWeight: '400',
    lineHeight: 17.25,
    color: colors.text.secondary,
  },
  xpChip: {
    paddingHorizontal: spacing.lg,
    paddingVertical: spacing.xs,
    borderWidth: 1.25,
    borderColor: colors.border,
    borderRadius: radii.button,
    backgroundColor: colors.surface,
  },
  xpChipLabel: {
    fontFamily: FontFamily.display,
    fontSize: 13.5,
    fontWeight: '700',
    lineHeight: 20.25,
    color: colors.text.secondary,
  },
  notesField: {
    minHeight: 88,
    paddingHorizontal: spacing.md,
    paddingVertical: 13,
    borderWidth: 1.25,
    borderColor: colors.border,
    borderRadius: spacing.md,
    backgroundColor: colors.surface,
  },
  notesInput: {
    minHeight: 62,
    padding: 0,
    fontFamily: FontFamily.body,
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 21.7,
    color: colors.text.primary,
    textAlignVertical: 'top',
  },
  footer: {
    paddingTop: 13,
    paddingBottom: spacing.xl,
    paddingHorizontal: 20,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: colors.border,
    backgroundColor: colors.background,
  },
  createButton: {
    ...shadows.button,
    height: 65,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: radii.button,
    backgroundColor: colors.primary,
  },
  createLabel: {
    ...typography.button,
    color: colors.text.onPrimary,
  },
});

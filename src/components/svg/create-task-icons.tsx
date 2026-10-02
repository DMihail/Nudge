import { StyleSheet, View } from 'react-native';

import { Path } from 'react-native-svg';

import { IllustrationLayer as Layer } from '@/components/svg/illustration-layer';
import { colors } from '@/theme';

export function TitleIcon() {
  return (
    <View style={styles.titleIcon}>
      <Layer top={4} right={3} bottom={10} left={3} width={16} height={8}>
        <Path
          d="M0.699707 3.6986L7.69705 0.699738L14.6944 3.6986L7.69705 6.69746L0.699707 3.6986Z"
          stroke={colors.text.secondary}
          strokeWidth="1.39947"
          strokeLinejoin="round"
        />
      </Layer>
      <Layer top={8} right={7} bottom={5} left={7} width={8} height={8}>
        <Path
          d="M0.699707 0.699738V5.19803L3.69857 6.69746L6.69743 5.19803V0.699738"
          stroke={colors.text.secondary}
          strokeWidth="1.39947"
          strokeLinecap="round"
        />
      </Layer>
    </View>
  );
}
export function ClearIcon() {
  return (
    <View style={styles.clearIcon}>
      <Layer top={2} right={2} bottom={2} left={2} width={8} height={8}>
        <Path
          d="M0.799316 0.799301L6.79411 6.7941M6.79411 0.799301L0.799316 6.7941"
          stroke={colors.text.onPrimary}
          strokeWidth="1.59861"
          strokeLinecap="round"
        />
      </Layer>
    </View>
  );
}
export function StudyIcon({ color = colors.primary }: { color?: string }) {
  return (
    <View style={styles.studyIcon}>
      <Layer top={2} right={2} bottom={8} left={2} width={14} height={8}>
        <Path
          d="M0.699707 3.69905L6.69817 0.699821L12.6966 3.69905L6.69817 6.69828L0.699707 3.69905Z"
          stroke={color}
          strokeWidth="1.39964"
          strokeLinejoin="round"
        />
      </Layer>
      <Layer top={6} right={5} bottom={3} left={5} width={8} height={8}>
        <Path
          d="M0.699707 0.699821V5.19867L3.69894 6.69828L6.69817 5.19867V0.699821"
          stroke={color}
          strokeWidth="1.39964"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Layer>
    </View>
  );
}
export function WorkIcon({ color = colors.text.secondary }: { color?: string }) {
  return (
    <View style={styles.workIcon}>
      <Layer top={5} right={1} bottom={1} left={1} width={15} height={11}>
        <Path
          d="M11.6969 0.699821H2.69919C1.59491 0.699821 0.699707 1.59502 0.699707 2.69931V7.69803C0.699707 8.80231 1.59491 9.69752 2.69919 9.69752H11.6969C12.8012 9.69752 13.6964 8.80231 13.6964 7.69803V2.69931C13.6964 1.59502 12.8012 0.699821 11.6969 0.699821Z"
          stroke={color}
          strokeWidth="1.39964"
        />
      </Layer>
      <Layer top={3} right={5} bottom={10} left={5} width={7} height={4}>
        <Path
          d="M0.699707 3.19918V2.19944C0.699707 1.80171 0.857702 1.42028 1.13893 1.13905C1.42017 0.857816 1.8016 0.699821 2.19932 0.699821H4.19881C4.59653 0.699821 4.97797 0.857816 5.2592 1.13905C5.54043 1.42028 5.69843 1.80171 5.69843 2.19944V3.19918"
          stroke={color}
          strokeWidth="1.39964"
        />
      </Layer>
      <Layer top={9} right={1} bottom={6} left={1} width={13} height={2}>
        <Path d="M0 0.699821H12.9967" stroke={color} strokeWidth="1.39964" />
      </Layer>
    </View>
  );
}
export function HealthIcon({ color = colors.text.secondary }: { color?: string }) {
  return (
    <View style={styles.healthIcon}>
      <Layer top={5} right={3} bottom={5} left={3} width={12} height={8}>
        <Path
          d="M0.749756 3.74905H3.24912L4.74873 0.749817L6.74822 6.74828L8.24783 3.74905H10.7472"
          stroke={color}
          strokeWidth="1.49962"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Layer>
    </View>
  );
}
export function PersonalIcon({ color = colors.text.secondary }: { color?: string }) {
  return (
    <View style={styles.personalIcon}>
      <Layer top={2} right={5} bottom={8} left={5} width={7} height={7}>
        <Path
          d="M3.19907 5.69854C4.57942 5.69854 5.69843 4.57954 5.69843 3.19918C5.69843 1.81882 4.57942 0.699821 3.19907 0.699821C1.81871 0.699821 0.699707 1.81882 0.699707 3.19918C0.699707 4.57954 1.81871 5.69854 3.19907 5.69854Z"
          stroke={color}
          strokeWidth="1.39964"
        />
      </Layer>
      <Layer top={9} right={3} bottom={2} left={3} width={12} height={7}>
        <Path
          d="M0.699707 5.69854C0.699707 2.93925 2.93913 0.699821 5.69843 0.699821C8.45772 0.699821 10.6971 2.93925 10.6971 5.69854"
          stroke={color}
          strokeWidth="1.39964"
          strokeLinecap="round"
        />
      </Layer>
    </View>
  );
}
export function DateIcon() {
  return (
    <View style={styles.dateIcon}>
      <Layer top={3} right={1} bottom={1} left={1} width={17} height={15}>
        <Path
          d="M13.1956 0.699768H3.19889C1.81863 0.699768 0.699707 1.81869 0.699707 3.19895V11.6962C0.699707 13.0764 1.81863 14.1953 3.19889 14.1953H13.1956C14.5759 14.1953 15.6948 13.0764 15.6948 11.6962V3.19895C15.6948 1.81869 14.5759 0.699768 13.1956 0.699768Z"
          stroke={colors.text.secondary}
          strokeWidth="1.39954"
        />
      </Layer>
      <Layer top={7} right={1} bottom={10} left={1} width={15} height={2}>
        <Path d="M0 0.699768H14.9951" stroke={colors.text.secondary} strokeWidth="1.39954" />
      </Layer>
      <Layer top={1} right={6} bottom={13} left={6} width={8} height={5}>
        <Path
          d="M0.699707 0.699768V3.69878M6.69774 0.699768V3.69878"
          stroke={colors.text.secondary}
          strokeWidth="1.39954"
          strokeLinecap="round"
        />
      </Layer>
    </View>
  );
}
export function TimeIcon() {
  return (
    <View style={styles.timeIcon}>
      <Layer top={2} right={2} bottom={2} left={2} width={16} height={16}>
        <Path
          d="M7.69741 14.6952C11.5621 14.6952 14.6951 11.5622 14.6951 7.69747C14.6951 3.83275 11.5621 0.699768 7.69741 0.699768C3.83269 0.699768 0.699707 3.83275 0.699707 7.69747C0.699707 11.5622 3.83269 14.6952 7.69741 14.6952Z"
          stroke={colors.text.secondary}
          strokeWidth="1.39954"
        />
      </Layer>
      <Layer top={5} right={6} bottom={7} left={9} width={4} height={7}>
        <Path
          d="M0.699707 0.699768V4.19862L3.19889 6.19797"
          stroke={colors.text.secondary}
          strokeWidth="1.39954"
          strokeLinecap="round"
        />
      </Layer>
    </View>
  );
}
export function RepeatIcon() {
  return (
    <View style={styles.repeatIcon}>
      <Layer top={3} right={3} bottom={9} left={3} width={13} height={8}>
        <Path
          d="M0.699707 3.6988H11.6961M9.19692 6.69782L11.6961 3.6988L9.19692 0.699783"
          stroke={colors.text.secondary}
          strokeWidth="1.39954"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Layer>
      <Layer top={9} right={3} bottom={3} left={3} width={13} height={8}>
        <Path
          d="M11.6961 3.6988H0.699707M3.19889 6.69782L0.699707 3.6988L3.19889 0.699783"
          stroke={colors.text.secondary}
          strokeWidth="1.39954"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Layer>
    </View>
  );
}
export function ReminderIcon() {
  return (
    <View style={styles.reminderIcon}>
      <Layer top={2} right={2} bottom={3} left={2} width={18} height={14}>
        <Path
          d="M13.9953 5.69813C13.9953 4.37248 13.4687 3.10113 12.5313 2.16375C11.594 1.22638 10.3226 0.699768 8.99697 0.699768C7.67133 0.699768 6.39997 1.22638 5.4626 2.16375C4.52522 3.10113 3.99861 4.37248 3.99861 5.69813C3.99861 11.1963 1.99927 12.6958 1.99927 12.6958H15.9947C15.9947 12.6958 13.9953 11.1963 13.9953 5.69813Z"
          stroke={colors.text.secondary}
          strokeWidth="1.39954"
          strokeLinecap="round"
        />
      </Layer>
      <Layer top={15} right={7} bottom={1} left={7} width={5} height={4}>
        <Path
          d="M4.09859 0.699768C4.09859 1.15049 3.91954 1.58275 3.60084 1.90146C3.28213 2.22016 2.84987 2.39921 2.39915 2.39921C1.94843 2.39921 1.51617 2.22016 1.19746 1.90146C0.878755 1.58275 0.699707 1.15049 0.699707 0.699768"
          stroke={colors.text.secondary}
          strokeWidth="1.39954"
          strokeLinecap="round"
        />
      </Layer>
    </View>
  );
}

const styles = StyleSheet.create({
  titleIcon: {
    width: 22,
    height: 20,
  },
  clearIcon: {
    width: 12,
    height: 12,
  },
  studyIcon: {
    width: 18,
    height: 16,
  },
  workIcon: {
    width: 18,
    height: 18,
  },
  healthIcon: {
    width: 18,
    height: 18,
  },
  personalIcon: {
    width: 18,
    height: 18,
  },
  dateIcon: {
    width: 20,
    height: 20,
  },
  timeIcon: {
    width: 20,
    height: 20,
  },
  repeatIcon: {
    width: 19,
    height: 20,
  },
  reminderIcon: {
    width: 22,
    height: 22,
  },
});

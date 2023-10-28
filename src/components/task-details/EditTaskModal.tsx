import { colors, textStyles } from '@theme';
import {
  CalendarBlank,
  CaretDown,
  CaretRight,
  Clock,
  FileText,
  ListChecks,
  MapPin,
  MapTrifold,
  MinusCircle,
  PlusCircle,
  X,
} from 'phosphor-react-native';
import React from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import commonStyles from 'src/theme/commonStyles';
import ArrowsHorizontal from '../../assets/svg/dashboard/ArrowHorizontal';
import RegularButton from '../buttons/RegularButton';
import AvatarCount from '../common/AvatarCount';
import BottomSheetWrapper from '../common/BottomSheetWrapper';
import Header from '../common/Header';
const { height } = Dimensions.get('window');

interface SetWorkspaceModalProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
}

const EditTaskModal: React.FC<SetWorkspaceModalProps> = ({ setIsVisible, isVisible }) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [multipleVisitChecked, setMultipleVisitChecked] = React.useState(true);
  function toggleSwitchMultipleVisit() {
    setMultipleVisitChecked(multipleVisitChecked => !multipleVisitChecked);
  }

  return (
    <BottomSheetWrapper
      containerStyle={styles.modalContainer}
      setIsVisible={setIsVisible}
      isVisible={isVisible}>
      <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
        <Header
          title={i18n.t('Edit Task')}
          hideBackIcon
          rightComponent={
            <TouchableOpacity onPress={() => setIsVisible(false)}>
              <X
                weight="bold"
                size={20}
                color={isDarkTheme ? colors.dark.grey2 : colors.light.grey2}
              />
            </TouchableOpacity>
          }
        />
      </View>

      <ScrollView showsVerticalScrollIndicator={false} style={{ paddingHorizontal: 20 }}>
        <Text style={customStyles.titleText(isDarkTheme)}>Untitled Task</Text>
        <View>
          <TouchableOpacity style={customStyles.workspaceBtn(isDarkTheme)}>
            <Text style={customStyles.workspaceTxt(isDarkTheme)}>Badhon’s Workspace</Text>
            <CaretRight
              weight="bold"
              size={12}
              color={isDarkTheme ? colors.dark.grey1 : colors.light.grey1}
            />
          </TouchableOpacity>
          <View>
            <Text style={customStyles.desc(isDarkTheme)}>
              The Project Manager should use appropriate verification techniques to manage changes
              in project scope, schedule, and costs...
            </Text>
          </View>
          <View style={customStyles.horLine(isDarkTheme)} />
          <View style={commonStyles.rowSpaceBetween}>
            <View style={commonStyles.rowStart}>
              <FileText size={18} color={isDarkTheme ? colors.dark.white : colors.light.dark} />
              <Text style={customStyles.category(isDarkTheme)}> Marketing (example)</Text>
            </View>
            <CaretDown
              weight="bold"
              size={14}
              color={isDarkTheme ? colors.dark.white : colors.light.dark}
            />
          </View>
          <View style={customStyles.horLine(isDarkTheme)} />
          <View style={commonStyles.rowSpaceBetween}>
            <View style={commonStyles.rowStart}>
              <ListChecks size={18} color={isDarkTheme ? colors.dark.white : colors.light.dark} />
              <Text style={customStyles.category(isDarkTheme)}> Field Visit (example)</Text>
            </View>
            <CaretDown
              weight="bold"
              size={14}
              color={isDarkTheme ? colors.dark.white : colors.light.dark}
            />
          </View>
          <View style={customStyles.horLine(isDarkTheme)} />
          <View style={commonStyles.rowStart}>
            <MapPin size={18} color={isDarkTheme ? colors.dark.white : colors.light.dark} />
            <Text style={customStyles.category(isDarkTheme)}> 144, DIT Avenue, Badda</Text>
          </View>
          <View style={customStyles.horLine(isDarkTheme)} />
          <View style={commonStyles.rowStart}>
            <Text style={customStyles.status(isDarkTheme)}>Multiple Visit:</Text>
            <TouchableOpacity
              activeOpacity={1}
              onPress={toggleSwitchMultipleVisit}
              style={[
                styles.outer,
                multipleVisitChecked
                  ? { justifyContent: 'flex-end', backgroundColor: colors.light.blue }
                  : { justifyContent: 'flex-start', backgroundColor: '#B1C0DE' },
              ]}>
              <View style={styles.inner} />
            </TouchableOpacity>
          </View>
          <View style={[commonStyles.rowSpaceBetween, { marginTop: 20 }]}>
            <View style={commonStyles.rowStart}>
              <MapTrifold size={18} color={isDarkTheme ? colors.dark.white : colors.light.dark} />
              <Text style={customStyles.category(isDarkTheme)}> 12</Text>
            </View>
            <View style={commonStyles.rowStart}>
              <TouchableOpacity style={{ padding: 5 }}>
                <MinusCircle
                  weight="bold"
                  size={24}
                  color={isDarkTheme ? colors.dark.grey1 : colors.light.grey1}
                />
              </TouchableOpacity>
              <TouchableOpacity style={{ padding: 5, marginLeft: 10 }}>
                <PlusCircle
                  weight="bold"
                  size={24}
                  color={isDarkTheme ? colors.dark.grey1 : colors.light.grey1}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={customStyles.horLine(isDarkTheme)} />
          <View style={commonStyles.rowSpaceBetween}>
            <TouchableOpacity style={[commonStyles.rowSpaceBetween, { width: '55%' }]}>
              <View style={commonStyles.rowStart}>
                <CalendarBlank
                  size={18}
                  color={isDarkTheme ? colors.dark.white : colors.light.dark}
                />
                <Text style={customStyles.category(isDarkTheme)}> Jan 18, 2023</Text>
              </View>
              <ArrowsHorizontal />
            </TouchableOpacity>
            <TouchableOpacity style={[commonStyles.rowStart, { width: '45%' }]}>
              <CalendarBlank
                size={18}
                style={{ marginLeft: 10 }}
                color={isDarkTheme ? colors.dark.white : colors.light.dark}
              />
              <Text style={customStyles.category(isDarkTheme)}> Jan 25, 2023</Text>
            </TouchableOpacity>
          </View>
          <View style={customStyles.horLine(isDarkTheme)} />
          <View style={commonStyles.rowSpaceBetween}>
            <TouchableOpacity style={[commonStyles.rowSpaceBetween, { width: '55%' }]}>
              <View style={commonStyles.rowStart}>
                <Clock size={18} color={isDarkTheme ? colors.dark.white : colors.light.dark} />
                <Text style={customStyles.category(isDarkTheme)}> 09:00 AM</Text>
              </View>
              <ArrowsHorizontal />
            </TouchableOpacity>
            <TouchableOpacity style={[commonStyles.rowStart, { width: '45%' }]}>
              <Clock
                size={18}
                style={{ marginLeft: 10 }}
                color={isDarkTheme ? colors.dark.white : colors.light.dark}
              />
              <Text style={customStyles.category(isDarkTheme)}> 05:30 PM</Text>
            </TouchableOpacity>
          </View>
          <View style={customStyles.horLine(isDarkTheme)} />
        </View>
        <Text style={customStyles.titleText(isDarkTheme)}>{i18n.t('Assigned')}</Text>
        <View style={[commonStyles.rowSpaceBetween, { marginTop: 10 }]}>
          <AvatarCount size={32} data={[]} />
          <RegularButton
            onPress={() => {
              alert('Add Button');
            }}
            title={`+ ${i18n.t('Add')}`}
            style={styles.btnStyle}
            btnText={textStyles.semiBold12}
          />
        </View>

        <RegularButton
          onPress={() => {
            alert('Update Task');
          }}
          title={i18n.t('Update Task')}
          style={styles.visitStartBtn}
          btnText={textStyles.semiBold16}
        />
      </ScrollView>
    </BottomSheetWrapper>
  );
};

export default EditTaskModal;

const customStyles = {
  titleText: (isDarkTheme: boolean) => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    marginVertical: 10,
    ...textStyles.semiBold18,
  }),
  desc: (isDarkTheme: boolean) => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    marginTop: 20,
    ...textStyles.medium13,
  }),
  category: (isDarkTheme: boolean) => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    marginLeft: 5,
    ...textStyles.medium13,
  }),
  status: (isDarkTheme: boolean) => ({
    color: isDarkTheme ? colors.dark.white : colors.light.dark,
    marginRight: 10,
    ...textStyles.medium13,
  }),
  workspaceBtn: (isDarkTheme: boolean) => ({
    backgroundColor: isDarkTheme ? colors.light.grey0_5 : '#EEF2FA',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 6,
    width: 148,
    ...commonStyles.rowStart,
  }),
  workspaceTxt: (isDarkTheme: boolean) => ({
    color: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    ...textStyles.semiBold12,
    marginBottom: 5,
  }),
  horLine: (isDarkTheme: boolean) => ({
    backgroundColor: isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
    height: 1,
    marginTop: 15,
    marginBottom: 20,
  }),
};

const styles = StyleSheet.create({
  modalContainer: {
    height: height / 1.1,
  },
  visitStartBtn: {
    paddingVertical: 15,
    marginVertical: 20,
  },
  outer: {
    width: 36,
    height: 19,
    borderRadius: 15,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 2,
  },
  inner: {
    width: 14,
    height: 14,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    elevation: 8,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 2,
  },
  btnStyle: {
    paddingHorizontal: 14,
    paddingVertical: 7,
  },
});

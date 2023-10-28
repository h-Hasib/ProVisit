import { colors, textStyles } from '@theme';
import { Field, Formik } from 'formik';
import {
  CalendarBlank,
  CaretDown,
  CaretUp,
  Clock,
  FolderOpen,
  MapPin,
  Plus,
  TextT,
  X,
} from 'phosphor-react-native';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import BottomSheetWrapper from 'src/components/common/BottomSheetWrapper';
import Header from 'src/components/common/Header';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import * as Yup from 'yup';
import AppButton from '../buttons/AppButton';
import RegularButton from '../buttons/RegularButton';
import AvatarCount from '../common/AvatarCount';
import DynamicWidthBox from '../create-task/DynamicWidthBox';
import DateField from '../inputs/DateField';
import FlatTextField from '../inputs/FlatTextField';
import TimeField from '../inputs/TimeField';
import TitleTextField from '../inputs/TitleTextField';

interface InstantVisitModalProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
}

const InstantVisitModal: React.FC<InstantVisitModalProps> = ({ setIsVisible, isVisible }) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [isAssignedCollapsed, setIsAssignedCollapsed] = useState(true);

  const textColor = {
    primaryText: isDarkTheme ? colors.dark.white : colors.light.dark,
    secondaryText: isDarkTheme ? colors.dark.grey1 : colors.light.grey1,
    placeholder: isDarkTheme ? colors.dark.grey2 : colors.light.grey2,
    blue: isDarkTheme ? colors.dark.blue : colors.light.blue,
    bgColor: isDarkTheme ? colors.dark.dark : colors.light.white,
    borderColor: isDarkTheme ? colors.dark.grey4 : colors.light.grey4,
    attachmentButtonLabel: isDarkTheme ? colors.dark.grey1 : colors.light.blue,
    attachmentButtonBackground: isDarkTheme ? colors.dark.background : colors.light.background,
  };
  const styles = StyleSheet.create({
    collapsibleSectionTitle: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginVertical: 15,
    },
    rowTextInput: {
      flex: 1,
      borderBottomWidth: 1,
      borderColor: textColor.borderColor,
    },
    AddAttachmentButton: {
      marginTop: 30,
      marginBottom: 15,
      paddingVertical: 10,
      paddingHorizontal: 24,
      borderWidth: 1,
      borderRadius: 8,
      borderStyle: 'dashed',
      borderColor: textColor.attachmentButtonLabel,
      backgroundColor: textColor.attachmentButtonBackground,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });

  const initialValues = {
    taskTitle: '',
    taskDescription: '',
    taskLocation: '',
    taskDate: '',
    taskTime: '',
  };
  const validationSchema = Yup.object().shape({
    // numOfVisit: Yup.number()
    //   .typeError(i18n.t(`Value must be a number`))
    //   .min(1, i18n.t(`Value must be at least 1`))
    //   .max(maxVisitLimit, i18n.t(`Value must not exceed `) + `${maxVisitLimit}`)
    //   .required(i18n.t(`Value is required`)),
    // contactPhoneNumber: Yup.string().required(i18n.t(`Phone number is required`)),
  });
  const handleSubmit = (values: typeof initialValues) => {
    alert(`${values.taskTitle}  `);
  };
  return (
    <>
      <BottomSheetWrapper
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        containerStyle={{
          marginTop: 10,
          height: responsiveHeight(68),
        }}
        onPressBackDropCloseModal={false}>
        <ScrollView>
          <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
            <Header
              title={i18n.t('Instant Visit')}
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
            <View style={{ marginBottom: 10 }} />
            <Formik
              initialValues={initialValues}
              validationSchema={validationSchema}
              onSubmit={handleSubmit}>
              {({ handleSubmit, setFieldValue }) => (
                <>
                  <Field
                    component={TitleTextField}
                    disable={false}
                    multiline={false}
                    name="taskTitle"
                    type="default"
                    placeholder="Untitled Task"
                    placeholderTextColor={textColor.primaryText}
                  />

                  <View>
                    <DynamicWidthBox
                      text={`Developer's workspace`}
                      onPress={() => alert('Open Workspace selection modal')}
                    />
                  </View>

                  <View style={{ marginBottom: 10 }} />
                  <Field
                    component={FlatTextField}
                    icon={<TextT size={18} color={textColor.secondaryText} />}
                    disable={false}
                    multiline={false}
                    name="taskDescription"
                    type="default"
                    placeholder="Add Description"
                    placeholderTextColor={textColor.secondaryText}
                  />
                  <Field
                    component={FlatTextField}
                    icon={<MapPin size={18} color={textColor.secondaryText} />}
                    disable={false}
                    multiline={false}
                    name="taskLocation"
                    type="default"
                    placeholder="Add Location"
                    placeholderTextColor={textColor.secondaryText}
                  />
                  <View style={styles.rowTextInput}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => {
                        alert('Hi');
                        setFieldValue('taskDate', 'form Date modal');
                      }}>
                      <Field
                        component={DateField}
                        icon={<CalendarBlank size={18} color={textColor.secondaryText} />}
                        disable={true}
                        multiline={false}
                        name="taskDate"
                        type="default"
                        placeholder="Task Date"
                        placeholderTextColor={textColor.secondaryText}
                      />
                    </TouchableOpacity>
                  </View>

                  <View style={[styles.rowTextInput, { marginBottom: 5 }]}>
                    <TouchableOpacity
                      activeOpacity={0.8}
                      //TODO: Add modal
                      onPress={() => {
                        alert('hello');
                        setFieldValue('taskTime', 'form Time modal');
                      }}>
                      <Field
                        component={TimeField}
                        icon={<Clock size={18} color={textColor.secondaryText} />}
                        disable={true}
                        multiline={false}
                        name="taskTime"
                        type="default"
                        placeholder="Task Time"
                        placeholderTextColor={textColor.secondaryText}
                      />
                    </TouchableOpacity>
                  </View>
                  {/* Assigned */}
                  <TouchableOpacity
                    activeOpacity={0.8}
                    onPress={() => setIsAssignedCollapsed(!isAssignedCollapsed)}>
                    <View style={styles.collapsibleSectionTitle}>
                      <Text
                        style={[
                          textStyles.bold16,
                          { color: textColor.primaryText },
                        ]}>{`Assigned`}</Text>
                      <View>
                        {isAssignedCollapsed ? (
                          <CaretDown size={18} color={textColor.secondaryText} />
                        ) : (
                          <CaretUp size={18} color={textColor.secondaryText} />
                        )}
                      </View>
                    </View>
                  </TouchableOpacity>
                  {!isAssignedCollapsed && (
                    <>
                      <View
                        style={{
                          flexDirection: 'row',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                        }}>
                        <AvatarCount size={30} />
                        <RegularButton
                          style={{ width: responsiveWidth(24), height: responsiveHeight(5) }}
                          leftIcon={<Plus size={14} color={colors.light.white} weight="bold" />}
                          title={'Add'}
                          onPress={() => alert('Add Pressed')}
                        />
                      </View>
                    </>
                  )}

                  {/* Add Attachment Button */}
                  <TouchableOpacity
                    activeOpacity={0.6}
                    onPress={() => alert('Open Attachment Modal')}>
                    <View style={styles.AddAttachmentButton}>
                      <FolderOpen
                        size={28}
                        color={textColor.attachmentButtonLabel}
                        weight="duotone"
                      />
                      <Text
                        style={[
                          textStyles.semiBold16,
                          { color: textColor.attachmentButtonLabel, marginLeft: 15 },
                        ]}>
                        {i18n.t(`Add Attachments`)}
                      </Text>
                    </View>
                  </TouchableOpacity>

                  {/* Create Task Button */}
                  <View
                    style={{
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      marginTop: 40,
                      marginBottom: 30,
                    }}>
                    <AppButton
                      title={'Create Task'}
                      mode="contained"
                      onPress={() => handleSubmit()}
                    />
                  </View>
                </>
              )}
            </Formik>
          </View>
        </ScrollView>
      </BottomSheetWrapper>
    </>
  );
};

export default InstantVisitModal;

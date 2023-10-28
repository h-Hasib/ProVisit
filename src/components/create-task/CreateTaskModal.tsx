import { colors, textStyles } from '@theme';
import { Field, Formik, FormikProps } from 'formik';
import {
  ArrowsHorizontal,
  CalendarBlank,
  CaretDown,
  CaretUp,
  Clock,
  FileText,
  FolderOpen,
  ListChecks,
  MapPin,
  MapTrifold,
  Plus,
  TextT,
  User,
  X,
} from 'phosphor-react-native';
import React, { useState } from 'react';
import { Dimensions, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Bangladesh from 'src/assets/svg/countryFlags/Bangladesh';
import France from 'src/assets/svg/countryFlags/France';
import Germany from 'src/assets/svg/countryFlags/Germany';
import India from 'src/assets/svg/countryFlags/India';
import Indonesia from 'src/assets/svg/countryFlags/Indonesia';
import Italy from 'src/assets/svg/countryFlags/Italy';
import Japan from 'src/assets/svg/countryFlags/Japan';
import Russia from 'src/assets/svg/countryFlags/Russia';
import SriLanka from 'src/assets/svg/countryFlags/SriLanka';
import Sweden from 'src/assets/svg/countryFlags/Sweden';
import UK from 'src/assets/svg/countryFlags/UK';
import USA from 'src/assets/svg/countryFlags/USA';
import BottomSheetWrapper from 'src/components/common/BottomSheetWrapper';
import Header from 'src/components/common/Header';
import i18n from 'src/languages/i18n';
import { useAppSelector } from 'src/store/hooks';
import * as Yup from 'yup';
import AppButton from '../buttons/AppButton';
import RegularButton from '../buttons/RegularButton';
import AvatarCount from '../common/AvatarCount';
import DateField from '../inputs/DateField';
import FlatTextField from '../inputs/FlatTextField';
import NumericCounterField from '../inputs/NumericCounterField';
import PhoneNumberField from '../inputs/PhoneNumberField';
import SelectModalField from '../inputs/SelectModalField';
import SwitchField from '../inputs/SwitchField';
import TimeField from '../inputs/TimeField';
import TitleTextField from '../inputs/TitleTextField';
import DynamicWidthBox from './DynamicWidthBox';

const { height } = Dimensions.get('window');

interface CreateTaskModalProps {
  setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
  isVisible: boolean;
}

const taskCategoryData: string[] = [
  'Marketing',
  'QA Management',
  'Design',
  'SEO',
  'Development',
  'Project Manager',
  'Social Media',
  'Marketing111',
  'QA Management111',
  'Design111',
  'SEO111',
  'Development111',
  'Project Manager111',
  'Social Media111',
  'Social Media201',
];
const CreateTaskModal: React.FC<CreateTaskModalProps> = ({ setIsVisible, isVisible }) => {
  const { isDarkTheme } = useAppSelector(state => state.app);
  const [isContactInfoCollapsed, setIsContactInfoCollapsed] = useState(true);
  const [isVisitInfoCollapsed, setIsVisitInfoCollapsed] = useState(true);
  const [isAssignedCollapsed, setIsAssignedCollapsed] = useState(true);

  const [selectedCountryFlag, setSelectedCountryFlag] = useState(countryCodes[0].flag);
  const [selectedCountryCode, setSelectedCountryCode] = useState(countryCodes[0].code);
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0].country);

  const handleCountryCodeSelect = (country: countryCodeProps, form: FormikProps<unknown>) => {
    setSelectedCountryFlag(country.flag);
    setSelectedCountryCode(country.code);
    setSelectedCountry(country.country);
    form.setFieldValue('contactCountryFlag', country.flag);
    form.setFieldValue('contactCountryCode', country.code);
    form.setFieldValue('contactCountry', country.country);
  };

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
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-evenly',
      paddingLeft: 15,
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
    taskCategory: '',
    taskType: '',
    taskLocation: '',
    multipleVisit: false,
    numOfVisit: '',
    dueDate: '',
    startDate: '',
    endDate: '',
    startTime: '',
    endTime: '',
    contactName: '',
    contactCountry: selectedCountry,
    contactCountryCode: selectedCountryCode,
    contactCountryFlag: selectedCountryFlag,
    contactPhoneNumber: '',
    contactAddress: '',
  };
  const maxVisitLimit = 5;
  const validationSchema = Yup.object().shape({
    // numOfVisit: Yup.number()
    //   .typeError(i18n.t(`Value must be a number`))
    //   .min(1, i18n.t(`Value must be at least 1`))
    //   .max(maxVisitLimit, i18n.t(`Value must not exceed `) + `${maxVisitLimit}`)
    //   .required(i18n.t(`Value is required`)),
    // contactPhoneNumber: Yup.string().required(i18n.t(`Phone number is required`)),
  });
  const handleSubmit = (values: typeof initialValues) => {
    alert(
      `country: ${values.contactCountry} \ncode: ${values.contactCountryCode}\n phone: ${values.contactPhoneNumber}`,
    );
  };
  return (
    <>
      <BottomSheetWrapper
        setIsVisible={setIsVisible}
        isVisible={isVisible}
        containerStyle={{
          // marginTop: 10,
          // height: responsiveHeight(68),
          height: height / 1.5,
        }}
        onPressBackDropCloseModal={false}>
        <>
          <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
            <Header
              title={i18n.t('Create Task')}
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

          <ScrollView>
            <View style={{ paddingHorizontal: 20, marginVertical: 10 }}>
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
                      component={SelectModalField}
                      icon={<FileText size={18} color={textColor.secondaryText} />}
                      name="taskCategory"
                      placeholder="Task Category"
                      data={taskCategoryData}
                    />
                    <TouchableOpacity
                      activeOpacity={0.8}
                      //TODO: Add modal
                      onPress={() => setFieldValue('taskType', 'Value form taskType modal')}>
                      <Field
                        component={SelectModalField}
                        icon={<ListChecks size={18} color={textColor.secondaryText} />}
                        name="taskType"
                        placeholder="Task Type"
                        data={['h', 'e']}
                      />
                    </TouchableOpacity>
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

                    {/* Visit Info */}
                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => setIsVisitInfoCollapsed(!isVisitInfoCollapsed)}>
                      <View style={styles.collapsibleSectionTitle}>
                        <Text
                          style={[
                            textStyles.bold16,
                            { color: textColor.primaryText },
                          ]}>{`Visit Info`}</Text>

                        <View>
                          {isVisitInfoCollapsed ? (
                            <CaretDown size={18} color={textColor.secondaryText} />
                          ) : (
                            <CaretUp size={18} color={textColor.secondaryText} />
                          )}
                        </View>
                      </View>
                    </TouchableOpacity>

                    {!isVisitInfoCollapsed && (
                      <>
                        <View
                          style={{
                            flexDirection: 'row',
                            alignItems: 'center',
                          }}>
                          <Text
                            style={[
                              textStyles.medium14,
                              { color: textColor.primaryText },
                            ]}>{`Multiple Visit: `}</Text>
                          <Field component={SwitchField} name="multipleVisit" />
                        </View>

                        <Field
                          component={NumericCounterField}
                          icon={<MapTrifold size={18} color={textColor.secondaryText} />}
                          // disable={false}
                          maxLimit={maxVisitLimit}
                          name="numOfVisit"
                          placeholder="No of Visit"
                          placeholderTextColor={textColor.secondaryText}
                        />

                        <TouchableOpacity
                          activeOpacity={0.8}
                          //TODO: Add modal
                          onPress={() => setFieldValue('dueDate', 'Value form Date modal')}>
                          <Field
                            component={FlatTextField}
                            icon={<CalendarBlank size={18} color={textColor.secondaryText} />}
                            disable={true}
                            multiline={false}
                            name="dueDate"
                            type="default"
                            placeholder="Due Date"
                            placeholderTextColor={textColor.secondaryText}
                          />
                        </TouchableOpacity>
                        <View style={styles.rowTextInput}>
                          <TouchableOpacity
                            style={{ width: responsiveWidth(45) }}
                            activeOpacity={0.8}
                            //TODO: Add modal
                            onPress={() => setFieldValue('startDate', 'form Date modal')}>
                            <Field
                              component={DateField}
                              icon={<CalendarBlank size={18} color={textColor.secondaryText} />}
                              disable={true}
                              multiline={false}
                              name="startDate"
                              type="default"
                              placeholder="Start Date"
                              placeholderTextColor={textColor.secondaryText}
                            />
                          </TouchableOpacity>
                          <View style={{ width: responsiveWidth(10) }}>
                            <ArrowsHorizontal size={18} color={textColor.secondaryText} />
                          </View>
                          <TouchableOpacity
                            style={{ width: responsiveWidth(45) }}
                            activeOpacity={0.8}
                            //TODO: Add modal
                            onPress={() => setFieldValue('endDate', 'form Date modal')}>
                            <Field
                              component={DateField}
                              icon={<CalendarBlank size={18} color={textColor.secondaryText} />}
                              disable={true}
                              multiline={false}
                              name="endDate"
                              type="default"
                              placeholder="End Date"
                              placeholderTextColor={textColor.secondaryText}
                            />
                          </TouchableOpacity>
                        </View>

                        <View style={[styles.rowTextInput, { marginBottom: 5 }]}>
                          <TouchableOpacity
                            style={{ width: responsiveWidth(45) }}
                            activeOpacity={0.8}
                            //TODO: Add modal
                            onPress={() => setFieldValue('startTime', 'form Time modal')}>
                            <Field
                              component={TimeField}
                              icon={<Clock size={18} color={textColor.secondaryText} />}
                              disable={true}
                              multiline={false}
                              name="startTime"
                              type="default"
                              placeholder="Start Time"
                              placeholderTextColor={textColor.secondaryText}
                            />
                          </TouchableOpacity>
                          <View style={{ width: responsiveWidth(10) }}>
                            <ArrowsHorizontal size={18} color={textColor.secondaryText} />
                          </View>
                          <TouchableOpacity
                            style={{ width: responsiveWidth(45) }}
                            activeOpacity={0.8}
                            //TODO: Add modal
                            onPress={() => setFieldValue('endTime', 'form Time modal')}>
                            <Field
                              component={TimeField}
                              icon={<Clock size={18} color={textColor.secondaryText} />}
                              disable={true}
                              multiline={false}
                              name="endTime"
                              type="default"
                              placeholder="End Time"
                              placeholderTextColor={textColor.secondaryText}
                            />
                          </TouchableOpacity>
                        </View>
                      </>
                    )}
                    {/* Contact Info */}

                    <TouchableOpacity
                      activeOpacity={0.8}
                      onPress={() => setIsContactInfoCollapsed(!isContactInfoCollapsed)}>
                      <View style={styles.collapsibleSectionTitle}>
                        <Text
                          style={[
                            textStyles.bold16,
                            { color: textColor.primaryText },
                          ]}>{`Contact Info`}</Text>
                        <View>
                          {isContactInfoCollapsed ? (
                            <CaretDown size={18} color={textColor.secondaryText} />
                          ) : (
                            <CaretUp size={18} color={textColor.secondaryText} />
                          )}
                        </View>
                      </View>
                    </TouchableOpacity>

                    {!isContactInfoCollapsed && (
                      <>
                        <Field
                          component={FlatTextField}
                          icon={<User size={18} color={textColor.secondaryText} />}
                          disable={false}
                          multiline={false}
                          name="contactName"
                          type="default"
                          placeholder="Name"
                          placeholderTextColor={textColor.secondaryText}
                        />
                        <Field
                          component={PhoneNumberField}
                          countryCodes={countryCodes}
                          selectedCountryFlag={selectedCountryFlag}
                          selectedCountry={selectedCountry}
                          onCountryCodeSelect={handleCountryCodeSelect}
                          disable={false}
                          multiline={false}
                          name="contactPhoneNumber"
                          type="flat"
                          placeholderTextColor={textColor.secondaryText}
                        />
                        <Field
                          component={FlatTextField}
                          icon={<MapPin size={18} color={textColor.secondaryText} />}
                          disable={false}
                          multiline={false}
                          name="contactAddress"
                          type="default"
                          placeholder="Address"
                          placeholderTextColor={textColor.secondaryText}
                        />
                      </>
                    )}

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
                          Add Attachments
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
        </>
      </BottomSheetWrapper>
    </>
  );
};

export default CreateTaskModal;

interface countryCodeProps {
  country: string;
  code: string;
  flag: React.ReactNode;
}
const countryCodes: countryCodeProps[] = [
  {
    country: 'USA',
    code: '+1',
    flag: <USA />,
  },
  {
    country: 'Bangladesh',
    code: '+88',
    flag: <Bangladesh />,
  },
  {
    country: 'UK',
    code: '+44',
    flag: <UK />,
  },
  {
    country: 'Indonesia',
    code: '+62',
    flag: <Indonesia />,
  },
  {
    country: 'Japan',
    code: '+81',
    flag: <Japan />,
  },
  {
    country: 'Italy',
    code: '+39',
    flag: <Italy />,
  },
  {
    country: 'France',
    code: '+33',
    flag: <France />,
  },
  {
    country: 'Germany',
    code: '+49',
    flag: <Germany />,
  },
  {
    country: 'Sweden',
    code: '+46',
    flag: <Sweden />,
  },
  {
    country: 'Russia',
    code: '+7',
    flag: <Russia />,
  },
  {
    country: 'Sri Lanka',
    code: '+94',
    flag: <SriLanka />,
  },
  {
    country: 'India',
    code: '+91',
    flag: <India />,
  },
];

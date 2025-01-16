import { FormFields } from './types/FormFields.type';

export const invalidStyle = {
  border: '2px solid #FF5631',
  backgroundImage: 'url(' + '/src/assets/input_cross.png' + ')',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '95% 50%',
};

export const validStyle = {
  backgroundImage: 'url(' + '/src/assets/input_check.svg' + ')',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '95% 50%',
};

export const selectsFirstPart: Array<{
  name: keyof FormFields;
  label: string;
  required: boolean;
  rules?: Record<string, unknown>;
  data: { value: string; label: string }[];
}> = [
  {
    required: true,
    name: 'gender',
    label: "What's your gender",
    rules: { required: 'Select your gender' },
    data: [
      { label: '', value: '' },
      { label: 'Male', value: 'MALE' },
      { label: 'Female', value: 'FAMALE' },
    ],
  },
  {
    required: true,
    name: 'maritalStatus',
    label: "What's your gender",
    rules: { required: 'Select your marital status' },
    data: [
      { label: '', value: '' },
      { label: 'Married', value: 'MARRIED' },
      { label: 'Divorced', value: 'DIVORCED' },
      { label: 'Single', value: 'SINGLE' },
      { label: 'Widow or Widower', value: 'WIDOW_WIDOWER' },
    ],
  },
];

export const selectsSecondPart: Array<{
  name: keyof FormFields;
  label: string;
  required: boolean;
  rules?: Record<string, unknown>;
  data: { value: string; label: string }[];
}> = [
  {
    required: true,
    name: 'employmentStatus',
    label: 'Your employment status',
    rules: { required: 'Select one of the options' },
    data: [
      { label: '', value: '' },
      {
        label: 'Unemployed',
        value: 'ENEMPLOYED',
      },
      {
        label: 'Self-employed',
        value: 'SELF_EMPLOYED',
      },
      {
        label: 'Employed',
        value: 'EMPLOYED',
      },
      {
        label: 'Business owner',
        value: 'BUSINESS_OWNER',
      },
    ],
  },
  {
    required: true,
    name: 'position',
    label: 'Your position',
    rules: { required: 'Select one of the options' },
    data: [
      { label: '', value: '' },
      { label: 'Worker', value: 'WORKER' },
      { label: 'Mid manager', value: 'MID_MANAGER' },
      { label: 'Top manager', value: 'TOP_MANAGER' },
      { label: 'Owner', value: 'OWNER' },
    ],
  },
];

export const inputsFirstPart = [
  {
    type: 'number',
    required: true,
    name: 'dependentAmount',
    label: 'Your number of dependents',
    placeholder: '0',
    rules: {
      required: 'Field is required',
    },
  },
  {
    type: 'date',
    required: true,
    name: 'passportIssueDate',
    label: 'Date of issue of the passport',
    placeholder: '',
    rules: {
      required: 'Field is required',
    },
  },
  {
    type: 'text',
    required: true,
    name: 'passportIssueBranch',
    label: 'Division code',
    placeholder: '000000',
    rules: {
      required: 'Field is required',
      pattern: {
        value: /^[0-9]{6}$/,
        message: 'The series must be 6 digits',
      },
    },
  },
];
export const inputsSecondPart = [
  {
    type: 'number',
    required: true,
    name: 'employerINN',
    label: 'Your employer INN',
    placeholder: '000000000000',
    rules: {
      required: 'Field is required',
      pattern: {
        value: /^[0-9]{12}$/,
        message: 'The INN must be 12 digits',
      },
    },
  },
  {
    type: 'number',
    required: true,
    name: 'salary',
    label: 'Your salary',
    placeholder: 'For example 100 000',
    rules: {
      required: 'Enter your salary',
    },
  },
  {
    type: 'number',
    required: true,
    name: 'workExperienceTotal',
    label: 'Your work experience total',
    placeholder: 'For example 10',
    rules: {
      required: 'Enter your work experience total',
    },
  },
  {
    type: 'number',
    required: true,
    name: 'workExperienceCurrent',
    label: 'Your work experience current',
    placeholder: 'For example 2',
    rules: {
      required: 'Enter your work experience current',
    },
  },
];
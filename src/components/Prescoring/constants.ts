import { SelectOption } from './types/SelectOption.type';
import { validateAge } from './utils';

export const selectOptions: SelectOption[] = [
  { label: '6 months', value: '6' },
  { label: '12 months', value: '12' },
  { label: '18 months', value: '18' },
  { label: '24 months', value: '24' },
];

export const invalidStyle = {
  border: '2px solid #FF5631',
  backgroundImage: 'url(' + 'src/assets/input_cross.png' + ')',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '95% 50%',
};

export const validStyle = {
  backgroundImage: 'url(' + 'src/assets/input_check.svg' + ')',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: '95% 50%',
};

export const inputsFirstPart = [
  {
    type: 'text',
    required: true,
    name: 'lastName',
    label: 'Your last name',
    placeholder: 'For Example Doe',
    rules: { required: 'Enter your last name' },
  },
  {
    type: 'text',
    required: true,
    name: 'firstName',
    label: 'Your first name',
    placeholder: 'For Example John',
    rules: { required: 'Enter your first name' },
  },
  {
    type: 'text',
    required: false,
    name: 'middleName',
    label: 'Your patronymic',
    placeholder: 'For Example Victorovich',
  },
];

export const inputsSecondPart = [
  {
    type: 'email',
    required: true,
    name: 'email',
    label: 'Your email',
    placeholder: 'test@gmail.com',
    rules: {
      required: 'Field is required',
      pattern: {
        value:
          /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        message: 'Incorrect email address',
      },
    },
  },
  {
    type: 'date',
    required: true,
    name: 'birthdate',
    label: 'Your date of birth',
    placeholder: 'Select Date and Time',
    rules: {
      required: 'Enter your date of birth',
      validate: (value: Date) => validateAge(value),
    },
  },
  {
    type: 'number',
    required: true,
    name: 'passportSeries',
    label: 'Your passport series',
    placeholder: '0000',
    rules: {
      required: 'Enter your passport number',
      pattern: {
        value: /^[0-9]{4}$/,
        message: 'The series must be 4 digits',
      },
    },
  },
  {
    type: 'number',
    required: true,
    name: 'passportNumber',
    label: 'Your passport number',
    placeholder: '000000',
    rules: {
      required: 'Enter your passport number',
      pattern: {
        value: /^[0-9]{6}$/,
        message: 'The series must be 6 digits',
      },
    },
  },
];

import { SelectOption } from "./types/SelectOption.type";

export const selectOptions: SelectOption[] = [
    { label: '6 months', value: '6' },
    { label: '12 months', value: '12' },
    { label: '18 months', value: '18' },
    { label: '24 months', value: '24' },
  ]

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
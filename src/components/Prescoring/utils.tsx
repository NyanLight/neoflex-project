export function addSpace(rangeValue: string) {
    return rangeValue.slice(0, -3) + ' ' + rangeValue.slice(-3);
  }

  export function validateAge(date: Date) {
    const currentDate = new Date();
    const birthdate = new Date(date);
    const difference = currentDate.valueOf() - birthdate.valueOf();
    const years = difference / 31556952000;
    return years >= 18 ? null : 'You must be at least 18 years old.';
  }
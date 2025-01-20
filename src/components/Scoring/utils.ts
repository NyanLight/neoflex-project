import { FormFields } from './types/FormFields.type';

export function validateYear(date: Date) {
  const currentDate = new Date();
  const selectedDate = new Date(date);
  return selectedDate < currentDate
    ? null
    : "The value can't be in the future.";
}

export function mutateRequest(spacelessData: FormFields) {
  const request = {
    gender: spacelessData.gender,
    maritalStatus: spacelessData.maritalStatus,
    dependentAmount: spacelessData.dependentAmount,
    passportIssueDate: spacelessData.passportIssueDate,
    passportIssueBranch: spacelessData.passportIssueBranch,
    employment: {
      employmentStatus: spacelessData.employmentStatus,
      employerINN: spacelessData.employerINN,
      salary: spacelessData.salary,
      position: spacelessData.position,
      workExperienceTotal: spacelessData.workExperienceTotal,
      workExperienceCurrent: spacelessData.workExperienceCurrent,
    },
    account: '11223344556677889900',
  };
  return request;
}

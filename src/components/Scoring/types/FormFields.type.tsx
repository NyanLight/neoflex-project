export type FormFields = {
  gender: "MALE" | "FAMALE",
  maritalStatus: "MARRIED" | "DIVORCED" | "SINGLE" | "WIDOW_WIDOWER",
  dependentAmount: number,
  passportIssueDate: string,
  passportIssueBranch: string,
  employmentStatus: "UNEMPLOYED" | "SELF_EMPLOYED" | "EMPLOYED" | "BUSINESS_OWNER",
  employerINN: number,
  salary: number,
  position: 'WORKER' | 'MID_MANAGER' | 'TOP_MANAGER' | 'OWNER',
  workExperienceTotal: number,
  workExperienceCurrent: number,
}
export type ButtonProps = {
  text: string;
  borderRadius: string;
  horizontalPadding: string;
  isRed?: boolean;
  isDisabled?: boolean;
  verticalPadding: string;
  handler: () => void;
}
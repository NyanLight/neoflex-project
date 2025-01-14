import { Offers } from '../components/Offers';
import { Platinum } from '../components/Platinum/Platinum';
import { Prescoring } from '../components/Prescoring';
import { Steps } from '../components/Steps';
import { TabbedContent } from '../components/TabbedContent';

export function Loan() {
  return (
    <>
      <Platinum />
      <TabbedContent />
      <Steps />
      <Prescoring />
      <Offers />
    </>
  );
}

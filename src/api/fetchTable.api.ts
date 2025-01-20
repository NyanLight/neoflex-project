export const fetchTable = async (applicationId: string) => {
    try {
      const response = await fetch(`http://localhost:8080/admin/application/${applicationId}`);
      const obj =  await response.json();
      const paymentSchedule =  obj.credit.paymentSchedule;
      return  paymentSchedule;
    } catch (error) {
      console.error('Error on table fetching.', error);
    }
  };
  
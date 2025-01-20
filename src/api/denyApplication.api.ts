export const denyApplication = async (applicationId: string) => {
  try {
    await fetch(`http://localhost:8080/application/${applicationId}/deny`, {
      method: 'POST',
      body: `${applicationId}`,
    });
  } catch (error) {
    console.error('Application has not been denied.', error);
  }
};

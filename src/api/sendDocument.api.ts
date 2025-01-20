export const sendDocument = async (applicationId: string) => {
  try {
    await fetch(`http://localhost:8080/document/${applicationId}/`, {
      method: 'POST',
      body: `${applicationId}`,
    });
  } catch (error) {
    console.error('Application has not been denied.', error);
  }
};

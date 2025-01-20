export const fetchCode = async (applicationId: string) => {
  try {
    const response = await fetch(
      `http://localhost:8080/admin/application/${applicationId}`,
    );
    const data = await response.json();
    return data.sesCode;
  } catch (error) {
    console.error('Code has not been received:', error);
    return [];
  }
};

export const fetchStatus = async (applicationId: string) => {
    try {
      const response = await fetch(
        `http://localhost:8080/admin/application/${applicationId}`,
      );
      const data = await response.json();
      return data.status;
    } catch (error) {
      console.error('Status has not been recieved:', error);
    }
  };
  
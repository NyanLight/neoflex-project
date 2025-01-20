export async function sendSign(applicationId: string) {
  try {
    await fetch(`http://localhost:8080/document/${applicationId}/sign`, {
      method: 'POST',
      body: `${applicationId}`,
    });
  } catch (error) {
    throw new Error(`Sign has not been sent, ${error}`);
  }
}

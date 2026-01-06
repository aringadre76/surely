export interface NoResponse {
  reason: string;
}

export async function getNoResponse(): Promise<NoResponse> {
  const response = await fetch('https://naas.isalman.dev/no');
  if (!response.ok) {
    throw new Error('Failed to fetch response');
  }
  return response.json();
}

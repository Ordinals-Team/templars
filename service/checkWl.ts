// services/checkWl.ts
// Example using the native 'fetch' API in Next.js/TypeScript

export interface CheckWlResponse {
  success: boolean;
  data?: {
    address?: string;
    wlType?: string;
    check?: boolean;
  };
  error?: string;
}

/**
 * checkWl
 *
 * Calls the /api/checkAddress endpoint with a given address.
 * The endpoint will:
 *  - Check if the doc exists in Firestore
 *  - Mark 'check' = true
 *  - Return updated doc data
 *
 * @param address - The address to check
 * @returns A promise with the response from the API
 */
export async function checkWl(address: string): Promise<CheckWlResponse> {
  try {
    // Call your Next.js API route
    const response = await fetch(`/api/checkWl?address=${address}`, {
      method: "GET",
    });

    console.log("resp", response);

    // If the API returns an error code, throw to handle below
    if (!response.ok) {
      throw new Error(`Request failed with status: ${response.status}`);
    }

    // Parse the JSON response
    const data: CheckWlResponse = await response.json();
    return data;
  } catch (error) {
    // You can throw here, or return a structured error
    console.error("Error in checkWl service:", error);
    const message = error instanceof Error ? error.message : String(error);

    return {
      success: false,
      error: message || "Failed to check WL.",
    };
  }
}

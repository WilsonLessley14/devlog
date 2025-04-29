/**
 * Logs the API request details.
 */
function logApiRequest(url: string, options: RequestInit): void {
	console.log('[API][Request]', { url, ...options });
}

/**
 * Makes the actual HTTP request.
 * @throws Error on network failure
 */
async function performFetch(url: string, options: RequestInit): Promise<Response> {
	try {
		return await fetch(url, options);
	} catch (err) {
		console.error('[API][NetworkError]', err);
		throw new Error(`Network error: ${err instanceof Error ? err.message : String(err)}`);
	}
}

/**
 * Parses the response body as JSON.
 * @throws Error on parse failure
 */
async function parseJsonResponse(res: Response): Promise<unknown> {
	try {
		return await res.json();
	} catch (err) {
		console.error('[API][ParseError]', err);
		throw new Error(
			`Failed to parse response JSON: ${err instanceof Error ? err.message : String(err)}`
		);
	}
}

/**
 * Logs the API response details.
 */
function logApiResponse(url: string, status: number, body: unknown): void {
	console.log('[API][Response]', { url, status, body });
}

/**
 * Throws an error if the response is not ok.
 */
function throwIfNotOk(res: Response, body: unknown): void {
	if (!res.ok) {
		throw new Error(`HTTP error ${res.status}: ${JSON.stringify(body)}`);
	}
}

/**
 * Makes an HTTP request and logs ingress/egress for debugging and observability.
 * @template T The expected response type
 * @param url The endpoint URL
 * @param options Fetch options (method, headers, body, etc)
 * @returns Parsed response of type T
 * @throws Error with descriptive message on network or response error
 */
export async function apiRequest<T>(url: string, options: RequestInit): Promise<T> {
	logApiRequest(url, options);
	const res = await performFetch(url, options);
	const responseBody = await parseJsonResponse(res);
	logApiResponse(url, res.status, responseBody);
	throwIfNotOk(res, responseBody);
	return responseBody as T;
}

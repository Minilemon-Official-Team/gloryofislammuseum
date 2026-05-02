export default {
    async fetch(request: Request, env: any): Promise<Response> {
        const response = await env.ASSETS.fetch(request);

        // Tangkap 404 DAN redirect (3xx) dari ASSETS
        if (response.status === 404 || (response.status >= 300 && response.status < 400)) {
            const indexRequest = new Request(
                new URL("/index.html", request.url),
                request
            );
            return env.ASSETS.fetch(indexRequest);
        }

        return response;
    }
}
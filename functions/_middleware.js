const WORKER_ORIGIN = "https://food-scan-worker.chene9224.workers.dev";

/**
 * The Worker hostname is blocked on some networks (workers.dev is not
 * reachable directly from mainland China). Pages is reachable there, so this
 * middleware gives the native app a same-network HTTPS relay for the existing
 * FoodScan API without changing the Worker contract or storing any content.
 */
export async function onRequest(context) {
  const url = new URL(context.request.url);
  if (!url.pathname.startsWith("/v1/")) return context.next();

  const target = new URL(url.pathname + url.search, WORKER_ORIGIN);
  const method = context.request.method;
  const headers = new Headers(context.request.headers);
  headers.delete("host");

  const init = {
    method,
    headers,
    redirect: "manual",
    body: method === "GET" || method === "HEAD" ? undefined : context.request.body,
  };
  return fetch(target.toString(), init);
}

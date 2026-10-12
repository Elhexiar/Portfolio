// Small helper to warm the browser cache before an image is displayed.
// Each url is only requested once, no matter how often we ask.

const alreadyPreloaded = new Set<string>();

export function preloadImages(urls: string[]) {
  for (const url of urls) {
    if (alreadyPreloaded.has(url)) continue;
    alreadyPreloaded.add(url);
    const img = new Image();
    img.src = url;
  }
}


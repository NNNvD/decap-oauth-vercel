import type { VercelRequest, VercelResponse } from "@vercel/node";
import { callback } from "@openlab/vercel-netlify-cms-github";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Preserve window.opener for cross-origin OAuth popups
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");

  // (Optional but harmless) prevent caching weirdness
  res.setHeader("Cache-Control", "no-store");

  return callback(req, res);
}

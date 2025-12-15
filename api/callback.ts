import type { VercelRequest, VercelResponse } from "@vercel/node";
import { callback } from "@openlab/vercel-netlify-cms-github";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Preserve window.opener for OAuth popups
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  res.setHeader("Cache-Control", "no-store");

  return callback(req, res);
}

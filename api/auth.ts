import type { VercelRequest, VercelResponse } from "@vercel/node";
import { auth } from "@openlab/vercel-netlify-cms-github";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Cross-Origin-Opener-Policy", "same-origin-allow-popups");
  res.setHeader("Cache-Control", "no-store");

  return auth(req, res);
}

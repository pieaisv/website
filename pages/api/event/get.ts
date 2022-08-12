import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      const octokit = new Octokit({
        auth: process.env.GH_TOKEN_GIST,
      });
      const data = await octokit.request("GET /gists/{gist_id}", {
        gist_id: process.env.GH_GIST_ID as string,
      });

      res
        .status(200)
        // @ts-ignore
        .json(JSON.parse(data.data.files["pieaisv.json"]?.content));
    } catch (error: unknown) {
      // @ts-ignore
      res.status(error.response.status).json({
        // @ts-ignore
        message: error.response.data.message,
      });
    }
  }
}

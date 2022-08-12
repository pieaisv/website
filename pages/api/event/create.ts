import type { NextApiRequest, NextApiResponse } from "next";
import { Octokit } from "octokit";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const octokit = new Octokit({
        auth: process.env.GH_TOKEN_GIST,
      });
      const responseDatabase = await octokit.request("GET /gists/{gist_id}", {
        gist_id: process.env.GH_GIST_ID as string,
      });
      let database = JSON.parse(
        // @ts-ignore
        responseDatabase.data.files["pieaisv.json"]?.content as string
      );

      const body =
        typeof req.body === "string" ? JSON.parse(req.body) : req.body;

      database.events.push(body);

      await octokit.request("PATCH /gists/{gist_id}", {
        gist_id: process.env.GH_GIST_ID as string,
        files: {
          "pieaisv.json": {
            content: JSON.stringify(database),
          },
        },
      });

      res.status(200).json({ message: "success" });
    } catch (error: any) {
      return res.status(500).json(error);
    }
  }
}

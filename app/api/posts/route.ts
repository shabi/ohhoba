import { NextResponse } from "next/server";
import { getPosts } from "../../get-posts";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const lang = searchParams.get("lang") ?? "en";

  return NextResponse.json(await getPosts(lang));
}

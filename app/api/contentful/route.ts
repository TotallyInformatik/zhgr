import apolloClient from "@/lib/apolloClient";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {

  const json = await request.json();

  const { data } = await apolloClient.query({
    query: json.query
  });

  console.log(data.exerciseSessionCollection.items);
  return NextResponse.json(data, { status: 200 });

}
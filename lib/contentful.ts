import apolloClient from "@/lib/apolloClient";

export async function getContentful(query: any) {

  const { data } = await apolloClient.query({
    query: query
  });

  return data;

}
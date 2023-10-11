import ploneClient from "@plone/client";
import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { headers } from "next/headers";
import getQueryClient from "./getQueryClient";
import Content from "./content";

const cli = ploneClient.initialize({
  apiPath: "http://localhost:8080/Plone",
});

const expand = ["breadcrumbs", "navigation"];

export default async function Main() {
  const { getContentQuery } = cli;
  const queryClient = getQueryClient();
  const headersList = headers();
  const path = headersList.get("x-invoke-path") || "/";
  console.log(`Visiting: ${path}`);
  await queryClient.prefetchQuery(getContentQuery({ path, expand }));
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>
      <main className="">
        <Content />
      </main>
    </HydrationBoundary>
  );
}

"use client";

import { useQuery } from "@tanstack/react-query";
import ploneClient from "@plone/client";
import { usePathname } from "next/navigation";

const cli = ploneClient.initialize({
  apiPath: "http://localhost:8080/Plone",
});

export default function Posts() {
  // This useQuery could just as well happen in some deeper child to
  // the "HydratedPosts"-component, data will be available immediately either way
  const { getContentQuery } = cli;
  const pathname = usePathname();
  const { data, isLoading } = useQuery(getContentQuery({ path: pathname }));
  // const { data, isLoading } = useQuery(["data"], getData);

  if (data) {
    return (
      <div>
        <h1>{data.title}</h1>
      </div>
    );
  }

  return "";
}

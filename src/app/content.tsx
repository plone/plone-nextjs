"use client";

import { useQuery } from "@tanstack/react-query";
import ploneClient from "@plone/client";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { flattenToAppURL } from "./utils";

const cli = ploneClient.initialize({
  apiPath: "http://localhost:8080/Plone",
});

export default function Content() {
  // This useQuery could just as well happen in some deeper child to
  // the "HydratedPosts"-component, data will be available immediately either way
  const { getContentQuery } = cli;
  const pathname = usePathname();
  const { data, isLoading } = useQuery(getContentQuery({ path: pathname }));

  console.log(data?.["@components"]?.navigation?.items);
  if (data) {
    return (
      <div>
        <h1>{data.title}</h1>
        <ul>
          {data?.["@components"]?.navigation?.items?.map((item) => (
            <li key={item["@id"]}>
              <Link href={flattenToAppURL(item["@id"])}>
                {flattenToAppURL(item["@id"])}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  return "";
}

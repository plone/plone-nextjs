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
  const { getContentQuery } = cli;
  const pathname = usePathname();
  console.log(getContentQuery({ path: pathname }));
  const { data, isLoading } = useQuery(getContentQuery({ path: pathname }));

  if (data) {
    return (
      <div style={{ fontSize: "20px" }}>
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

        <div>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </div>
      </div>
    );
  }

  return "";
}

'use client';

import { useQuery } from '@tanstack/react-query';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { flattenToAppURL } from './utils';
import { usePloneClient } from '@plone/client/provider';
// import Input from '@plone/components/components/Input/Input';

export default function Content() {
  const { getContentQuery } = usePloneClient();
  const pathname = usePathname();
  console.log(usePloneClient().config.apiPath);
  console.log('pathname in cli', pathname);
  const { data, isLoading } = useQuery(getContentQuery({ path: pathname }));

  if (data) {
    return (
      <div style={{ fontSize: '20px' }}>
        <h1>{data.title}</h1>
        {/* <Input
          name="field1"
          title="field 1 title"
          placeholder="Type something…"
          description="Optional help text"
          isRequired
        /> */}
        <ul>
          {data?.['@components']?.navigation?.items?.map((item) => (
            // @ts-ignore
            <li key={item['@id']}>
              {/* @ts-ignore */}
              <Link href={flattenToAppURL(item['@id'])}>
                {/* @ts-ignore */}
                {flattenToAppURL(item['@id'])}
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

  return '';
}

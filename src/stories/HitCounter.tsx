import { useState, useEffect } from "react";
import clsx from "clsx";

type Credentials = {
  baseUrl: string;
  siteId: string;
  apiKey: string;
};

export function HitCounter({ baseUrl, siteId, apiKey }: Credentials) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(`${baseUrl}/api/v1/hits/${siteId}`, {
      headers: {
        Authorization: `Bearer ${apiKey}`,
      },
    })
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
      });
  }, [baseUrl, siteId, apiKey]);

  return (
    <div className={clsx("text-center", "text-gray-500", "text-sm")}>
      {count} hits
    </div>
  );
}

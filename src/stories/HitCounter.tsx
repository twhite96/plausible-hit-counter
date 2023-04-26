import { useState, useEffect } from "react";
import clsx from "clsx";

type Credentials = {
  BASEURL: string;
  SITEID: string;
  APIKEY: string;
};

// I need to expose env variables to the user
// How do I do that?
// I can't use import.meta.env.VITE_... here
// do I use a helper function?

export function HitCounter({ BASEURL, SITEID, APIKEY }: Credentials) {
  const BASEURL = import.meta.env.VITE_BASE_URL;
  const SITEID = import.meta.env.VITE_SITE_ID;
  const APIKEY = import.meta.env.VITE_API_KEY;
  const [count, setCount] = useState(0);

  useEffect(() => {
    fetch(
      `${BASEURL}/api/v1/breakdown/${SITEID}&period=12mo&property=event:page&limit=5`,
      {
        headers: {
          Authorization: `Bearer ${APIKEY}`,
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setCount(data.count);
      });
  }, [BASEURL, SITEID, APIKEY]);

  return (
    <div className={clsx("text-center", "text-gray-500", "text-sm")}>
      {count} hits
    </div>
  );
}

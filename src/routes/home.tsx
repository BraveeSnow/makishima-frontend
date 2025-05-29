import { useEffect } from "react";
import { useSearchParams } from "react-router";

import { useAuth } from "@/lib/auth-provider";

export function Home() {
  const { setUser } = useAuth();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    if (searchParams.get("login") === "true") {
      (async () => {
        const res = await fetch("/api/user");
        const data = await res.json();

        if (data.error) {
          console.error(data.error || "Unable to fetch user data");
          return;
        }

        setUser(data);
      })();
    }
  }, [searchParams, setUser]);

  return <></>;
}

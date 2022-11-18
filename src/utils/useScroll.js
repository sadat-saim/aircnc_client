import { useEffect } from "react";

export default async function useScroll() {
  return useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}

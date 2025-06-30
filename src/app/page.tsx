import { Suspense } from "react";
import HomePage from "./home-page";
import Loading from "./loading";

export default function Home() {
  return (
    <Suspense fallback={<Loading/>}>
      <HomePage/>
    </Suspense>
  );
}
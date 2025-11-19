import { Suspense } from "react";
import MetaTags from "./components/MetaTag";
import Invitation from "./components/Invitation";

export default function Home() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <MetaTags></MetaTags>
      <Invitation name={"My Friend"}></Invitation>
    </Suspense>
  );
}

"use client";

import { Suspense } from "react";
import WelcomeContent from "./WelcomeContent";

export default function WelcomePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WelcomeContent />
    </Suspense>
  );
}

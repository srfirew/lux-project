export const metadata = {
  title: "Lux - Home",
  description: "Page description",
};

import Home from "@/components/home";
import Workflows from "@/components/guide-start";
import Features from "@/components/features";

export default function Page() {
  return (
    <>
      <Home />
      <Workflows />
      <Features />
    </>
  );
}

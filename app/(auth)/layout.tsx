"use client";

import PageIllustration from "@/components/page-illustration";
import ScrollToTop from "@/components/scroll-to-top";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="relative flex grow flex-col">
      <ScrollToTop />
      <PageIllustration multiple />

      {children}
    </main>
  );
}

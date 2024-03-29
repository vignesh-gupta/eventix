import { Inter } from "next/font/google";
import { Suspense } from "react";
import { Toaster } from "sonner";

import ConvexClientProvider from "@/components/convex-client-provider";
import Loader from "@/components/Loader";
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import { cn, generateMetaData } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = generateMetaData();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn("dark flex items-stretch flex-col", inter.className)}>
        <Suspense fallback={<Loader />}>
          <ConvexClientProvider>
            <Navbar />
            <main className="mb-5 grow ">{children}</main>
            <Footer />
            <Toaster />
          </ConvexClientProvider>
        </Suspense>
      </body>
    </html>
  );
}

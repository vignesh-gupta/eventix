"use client";

import { ClerkProvider, useAuth } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import {
  AuthLoading,
  Authenticated,
  ConvexReactClient,
  Unauthenticated,
} from "convex/react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import Loader from "./Loader";

type ConvexClientProviderProps = {
  children: React.ReactNode;
};

const convexURL = process.env.NEXT_PUBLIC_CONVEX_URL!;

const convex = new ConvexReactClient(convexURL);

const ConvexClientProvider = ({ children }: ConvexClientProviderProps) => {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <AuthLoading>
          <Loader />
        </AuthLoading>
        <Authenticated>{children}</Authenticated>
        <Unauthenticated>{children}</Unauthenticated>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

export default ConvexClientProvider;

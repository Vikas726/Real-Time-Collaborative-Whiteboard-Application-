"use client";

import { ClerkProvider, useAuth } from "@clerk/clerk-react";
import { ConvexProviderWithClerk } from "convex/react-clerk";
import { ConvexReactClient, AuthLoading, Authenticated } from "convex/react";

import { Loading } from "@/components/auth/loading";


interface ConvexClientProviderProps {
  children: React.ReactNode;
}

// Ensure `convexURL` is valid
const convexURL = process.env.NEXT_PUBLIC_CONVEX_URL;

if (!convexURL) {
  throw new Error(
    "Environment variable NEXT_PUBLIC_CONVEX_URL is not set. Please configure it in your .env.local file."
  );
}

const convex = new ConvexReactClient(convexURL);

export const ConvexClientProvider = ({
  children,
}: ConvexClientProviderProps) => {
  return (
    <ClerkProvider publishableKey="pk_test_d29ya2FibGUtdGVhbC01My5jbGVyay5hY2NvdW50cy5kZXYk">
      <ConvexProviderWithClerk useAuth={useAuth} client={convex}>
        <Authenticated>{children}</Authenticated>
        <AuthLoading>
          <Loading />
        </AuthLoading>
      </ConvexProviderWithClerk>
    </ClerkProvider>
  );
};

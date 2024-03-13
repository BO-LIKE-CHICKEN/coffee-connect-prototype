import { Global, ThemeProvider } from '@emotion/react';
import { HydrationBoundary, QueryClient, QueryClientProvider } from '@tanstack/react-query';
import type { AppProps } from 'next/app';
import React from 'react';
import { RecoilRoot } from 'recoil';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { theme } from '@styles/theme';
import { globalStyles } from '@styles/global';

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // With SSR, we usually want to set some default staleTime
            // above 0 to avoid refetching immediately on the client
            staleTime: 60 * 1000,
          },
        },
      }),
  );

  return (
    <>
      <Global styles={globalStyles} />
      <QueryClientProvider client={queryClient}>
        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <HydrationBoundary>
              <Component {...pageProps} />
            </HydrationBoundary>
          </ThemeProvider>
        </RecoilRoot>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </>
  );
}

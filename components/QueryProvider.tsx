'use client'

// Wraps the app in TanStack Query's context. Must be a Client Component
// because QueryClient holds client-side state.
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { useState } from 'react'

export default function QueryProvider({ children }: { children: React.ReactNode }) {
  // Create the client inside useState so each browser session gets its own
  // instance and it isn't shared across requests on the server.
  const [queryClient] = useState(() => new QueryClient())

  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
}

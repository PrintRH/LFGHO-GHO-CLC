import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { WALLETCONNECT_PROJECT_ID } from '@/constants';
import { WagmiConfig, createConfig } from "wagmi";
import { ConnectKitProvider, ConnectKitButton, getDefaultConfig } from "connectkit";

const config = createConfig(
  getDefaultConfig({
    // Required API Keys
    alchemyId: process.env.ALCHEMY_ID, // or infuraId
    walletConnectProjectId: WALLETCONNECT_PROJECT_ID,

    // Required
    appName: "gclc",

    // Optional
    appDescription: "Your App Description",
    appUrl: "https://family.co", // your app's url
    appIcon: "https://family.co/logo.png", // your app's icon, no bigger than 1024x1024px (max. 1MB)
  }),
);

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <WagmiConfig config={config}>
      <ConnectKitProvider>
        {/* Your layout structure */}
        <header>
          {/* Header content */}
        </header>
        <main>{children}</main>
        <footer>
          {/* Footer content */}
        </footer>
        <ConnectKitButton />
      </ConnectKitProvider>
    </WagmiConfig>

  )
}

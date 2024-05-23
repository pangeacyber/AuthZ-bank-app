'use client';

import './globals.css';
import { cn } from "@/lib/utils"
import NavBar from '../components/NavBar';
import { Container } from 'reactstrap';
import React from 'react';
import { UserProvider } from '@auth0/nextjs-auth0/client';
import { Inter as FontSans } from "next/font/google"

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
          integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
          crossOrigin="anonymous"
        />
        <link rel="stylesheet" href="https://cdn.auth0.com/js/auth0-samples-theme/1.0/css/auth0-theme.min.css" />
      </head>
      <body className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable)}>
        <UserProvider>
          <main id="app"  data-testid="layout">
            <NavBar />
            {children}
          </main>
        </UserProvider>
      </body>
    </html>
  );
}

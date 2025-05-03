import React from 'react';
import Head from 'next/head';
export const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <>
    <Head>
      <title>بحر الأكواد</title>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
    <main>{children}</main>
  </>
);

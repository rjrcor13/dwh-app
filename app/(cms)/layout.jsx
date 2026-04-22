export const metadata = {
  title: 'Outstatic',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body id="outstatic" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}

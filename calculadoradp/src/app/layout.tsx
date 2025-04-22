export const metadata = {
    title: 'Calculadora',
    description: 'Calculadora con historial en Next.js',
  };
  
  export default function RootLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return (
      <html lang="es">
        <body>{children}</body>
      </html>
    );
  }
  
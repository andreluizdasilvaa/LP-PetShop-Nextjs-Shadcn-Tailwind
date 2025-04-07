import "./globals.css";
import AosInit from "./_components/aos-init";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
        <AosInit />
      </body>
    </html>
  );
}

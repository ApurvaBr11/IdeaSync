import { Inter } from "next/font/google";
import '../globals.css'
import { ClerkProvider } from "@clerk/nextjs";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "IdeaSync",
  description: "A NextJs Meta IdeaSync project",
};

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
   <ClerkProvider>

      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>{children}</body>
      </html>
   </ClerkProvider>
   
  );
};

export default RootLayout;

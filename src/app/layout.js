import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ClerkProvider, ClerkLoading, ClerkLoaded } from "@clerk/nextjs";
import Loader from "./components/Loader";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "NextJS authentication using Clerk",
  description:
    "NextJS app using Clerk for authentication and harvesting the User login credentials in MongoDB",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <ClerkLoading>
            {/* <div className="flex justify-center items-center text-2xl font-bold text-gray-800">
              Clerk is loading...
            </div> */}
            <Loader />
          </ClerkLoading>
          <ClerkLoaded>
            <Header />

            {children}
          </ClerkLoaded>
        </body>
      </html>
    </ClerkProvider>
  );
}

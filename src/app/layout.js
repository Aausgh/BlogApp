import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { ThemeContextProvider } from "@/context/ThemeContext";
import ThemeProvider from "@/providers/ThemeProvider";
import AuthProvider from "@/providers/AuthProvider";
import { Provider as ChakraProvider } from "@/providers/ChakraProvider";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    title: "GadgetGlobe",
    description: "Explore the World of Gadgets with GadgetGlobe - Where Innovation Shines Bright!",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <AuthProvider>
                    <ChakraProvider>
                        <ThemeContextProvider>
                            <ThemeProvider>
                                <div className="container">
                                    <div className="wrapper">
                                        <Navbar />
                                        {children}
                                        <Footer />
                                    </div>
                                </div>
                            </ThemeProvider>
                        </ThemeContextProvider>
                    </ChakraProvider>
                </AuthProvider>
            </body>
        </html>
    );
}

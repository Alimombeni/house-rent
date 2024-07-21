
import '@/assets/styles/globals.css';
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metaData = {
    title:'House rental ',
    description : 'Find your dream rental property',
    keywords:'rental , find rental , find properties',
}

const mainLayout = ( { children } ) =>{


    return(
        <html lang='en'>
        <body>
        <Navbar />

             <main>{children}</main>

        <Footer/>

        </body>
        </html>
        );
};


export default mainLayout;
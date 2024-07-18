
import '@/assets/styles/globals.css';

export const metaData = {
    title:'House rental ',
    description : 'Find your dream rental property',
    keywords:'rental , find rental , find properties',

}


const mainLayout = ( { children } ) =>{


    return(
        <html lang='en'>
        <body>
             <div>{children}</div>
        </body>
        </html>
        );
};


export default mainLayout;
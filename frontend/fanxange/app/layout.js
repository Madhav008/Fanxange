import '../styles/globals.css'

export const metadata = {
    title: "Fanxange",
    description: "Buy Fantasy stocks of your favorite players",
};

const RootLayout = ({ children }) => (
    <html lang='en'>
        <body>
            <main className='app'>
                {children}
            </main>
        </body>
    </html>
);

export default RootLayout;
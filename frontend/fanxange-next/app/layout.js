import { Inter } from 'next/font/google'
import 'bootstrap/dist/css/bootstrap.min.css';
import './globals.css'



import { Providers } from './provider'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Fanxange | Fantasy Sports Stock Exchange',
  description: 'Fantasy Sports Stock Exchange',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* <!--font awesome 5 minified css source--> */}
        <link rel="stylesheet" href="assets/icons/font_awesome/css/all.min.css" />
        {/* <!--flaticon css source--> */}
        <link rel="stylesheet" href="assets/icons/flat_icon/flaticon.css" />
        {/* <!--admin icons--> */}
        <link rel="stylesheet" href="assets/icons/cs/flaticon.css" />
        {/* <!--owl carousel-2.3.4 minified css source--> */}
        <link rel="stylesheet" href="assets/css/vendor/owl.carousel.min.css" />
        {/* <!--owl carousel-2.3.4 theme default minified css source--> */}
        <link rel="stylesheet" href="assets/css/vendor/owl.theme.default.min.css" />
        {/* <!--magnific popup-1.1.0 css source--> */}
        <link rel="stylesheet" href="assets/css/vendor/magnific-popup.css" />
        {/* <!--jquery nice select css source--> */}
        <link rel="stylesheet" href="assets/css/vendor/nice-select.css" />
        {/* <!--animate css source--> */}
        <link rel="stylesheet" href="assets/css/vendor/animate.css" />
      </head>
      <body className={inter.className}>
        <Providers>
          {children}
        </Providers>

        {/* <!--jquery-3.6.0 minified source--> */}
        <script src="assets/js/vendor/jquery-3.6.0.min.js"></script>
        {/* <!--owl carousel-2.3.4 minified js source--> */}
        <script src="assets/js/vendor/owl.carousel.min.js"></script>
        {/* <!--jquery waypoints minified source--> */}
        <script src="assets/js/vendor/jquery.waypoints.min.js"></script>
        {/* <!--magnific popup-1.1.0 minified source--> */}
        <script src="assets/js/vendor/jquery.magnific-popup.min.js"></script>
        {/* <!--counter up-1.0.0 minified js source--> */}
        <script src="assets/js/vendor/jquery.counterup.min.js"></script>
        {/* <!--jquery nice select minified source--> */}
        <script src="assets/js/vendor/jquery.nice-select.min.js"></script>
        {/* <!--apexs chart minified js source--> */}
        <script src="assets/js/vendor/apexcharts.min.js"></script>
        {/* <!--apex chart customization js source--> */}
        <script src="assets/js/vendor/apex-customization.js"></script>
        {/* <!--wow animation js source--> */}
        <script src="assets/js/vendor/wow.min.js"></script>
        {/* <!--custom js source--> */}
        <script src="assets/js/main.js"></script>
      </body>
    </html>
  )
}

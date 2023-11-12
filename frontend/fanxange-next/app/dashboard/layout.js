export default function DashboardLayout({ children }) {
    return (
        <html lang="en">
            <head>

                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
                    integrity="sha512-..." crossorigin="anonymous" />


                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/6.15.0/css/flag-icons.min.css" />

            </head>
            <body>
                {children}
            </body>
        </html>
    )
}

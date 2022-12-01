import '../styles/index.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{ process.env.siteTitle }</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0, width=device-width, user-scalable=0" />
        <meta name="description" content="A placeholder text generator based on excerpts taken from the novel Noli Me Tangere by Jose Rizal" />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      </head>
      <body>{ children }</body>
    </html>
  )
}
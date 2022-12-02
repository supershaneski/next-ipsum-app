import '../styles/index.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>{ process.env.siteTitle }</title>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="maximum-scale=1.0, minimum-scale=1.0, initial-scale=1.0, width=device-width, user-scalable=0" />
        <meta name="title" content="Noli Me Ipsum" />
        <meta name="description" content="A placeholder text generator based on excerpts taken from the novel Noli Me Tangere by Jose Rizal. You can use this as an alternative to the commonly known Lorem ipsum. The text are in Spanish as originally written by Rizal." />
        <meta property="og:site_name" content="Noli Me Ipsum" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Noli Me Ipsum" />
        <meta property="og:description" content="A placeholder text generator based on excerpts taken from the novel Noli Me Tangere by Jose Rizal. You can use this as an alternative to the commonly known Lorem ipsum. The text are in Spanish as originally written by Rizal." />
        <link rel="apple-touch-icon" href="/logo192.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
      </head>
      <body>{ children }</body>
    </html>
  )
}
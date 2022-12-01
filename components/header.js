export default function Header() {
    return (
        <header className="header">
            <h1 className="title">{process.env.siteTitle}</h1>
            <p className="description">Generate placeholder text based on excerpts taken from the novel <strong>Noli Me Tangere</strong> by <em>Jose Rizal</em>.</p>
        </header>
    )
}
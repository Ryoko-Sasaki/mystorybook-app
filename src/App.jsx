import { Badge } from './components/Badge/Badge'
import './App.css'

function App() {
  return (
    <main className="design-preview">
      <Badge type="number" state="alert" size="L" badgeNumber="1" />
      <a
        className="storybook-link"
        href="https://4113bc249ac4eaaf6cead66ab57cfc16.share.chromatic.com"
        target="_blank"
        rel="noreferrer"
      >
        Storybookを開く
      </a>
    </main>
  )
}

export default App

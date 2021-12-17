import { Link, LiveReload, Outlet, Links, Meta } from "remix"
import globalStylesUrl from "~/styles/global.css"

export const links = () => [
  {
    rel: "stylesheet",
    href: globalStylesUrl,
  },
]

export const meta = () => {
  const description = "The best Remix blog"
  const keywords = "Remix React Jsx blog"
  return {
    description,
    keywords,
  }
}
export default function App() {
  return (
    <Document>
      <Layout>
        <Outlet />
      </Layout>
    </Document>
  )
}

function Document({ title, children }) {
  return (
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <Meta />
        <Links />
        <title>{title ? title : "Remix Blog"}</title>
      </head>
      <body>
        {children}
        {process.env.NODE_ENV === "development" ? <LiveReload /> : null}
      </body>
    </html>
  )
}

function Layout({ children }) {
  return (
    <>
      <nav className='navbar'>
        <Link to='/' className='logo'>
          Remix
        </Link>
        <ul className='nav'>
          <li>
            <Link to='/posts'>Post</Link>
          </li>
        </ul>
      </nav>
      <div className='container'>{children}</div>
    </>
  )
}

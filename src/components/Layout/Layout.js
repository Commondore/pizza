import Toolbar from "../Toolbar/Toolbar"

function Layout({children}) {
  return (
    <>
      <Toolbar/>
      <main className="main-wrapper">
        {children}
      </main>
    </>
  )
}

export default Layout

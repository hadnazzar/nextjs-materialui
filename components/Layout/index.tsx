import HomeHeader from "../homeHeader";
import Footer from "../footer";

const Layout = ({children} : JSX.ElementChildrenAttribute) => {
  return (
    <>
      <HomeHeader />
      {children}
      <Footer />
    </>
  )
}

export default Layout;

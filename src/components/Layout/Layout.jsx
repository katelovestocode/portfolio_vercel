import { Suspense } from "react"
import { Outlet } from "react-router-dom"
import { Header, Navigation, NavItem, FlexContainer, Link, Image } from "./Layout.styled"
import icon from "../../icons/kosylyaEdit.gif"


const Layout = () => {
    return (
        <>
            <Header> 
               
            <FlexContainer> 
            <Link href="/"> <Image src={icon} alt="" width="55" /> </Link>
                   
            <Navigation>
            <NavItem to="/" key={"home"} end> Home</NavItem>
                    <NavItem to={"about"} key={"about"}> About Me </NavItem>
                    <NavItem to={"projects"} key={"projects"}> Projects </NavItem>
                    <NavItem to={"contact"} key={"contact"}> Contact </NavItem>
             </Navigation>
            </FlexContainer>
            
            </Header>

            <Suspense fallback={<div> Loading... </div>}>  <Outlet /> </Suspense>
     </>
        )

}

export default Layout;

import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #007bff;
    color: white;
    padding: 20px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
    font-size: 24px;
    font-weight: bold;
    margin-left: 20px;
`;

const Nav = styled.nav`
    margin-right: 20px;
`;

const NavList = styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
`;

const NavItem = styled.li`
    margin-left: 20px;
`;

const NavLink = styled.a`
    color: white;
    text-decoration: none;
    font-size: 16px;

    &:hover {
        text-decoration: underline;
    }
`;

export default function Header() {
    return (
        <HeaderContainer>
            <Logo>NurseSite</Logo>
            <Nav>
                <NavList>
                    <NavItem><NavLink href="#home">Home</NavLink></NavItem>
                    <NavItem><NavLink href="#about">About</NavLink></NavItem>
                    <NavItem><NavLink href="#services">Services</NavLink></NavItem>
                    <NavItem><NavLink href="#contact">Contact</NavLink></NavItem>
                </NavList>
            </Nav>
        </HeaderContainer>
    );
}

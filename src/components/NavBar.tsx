import styled from '@emotion/styled'
import { Link } from 'react-router-dom'
import LogoImg from '../assets/logo_se.png'
import { useEffect, useState } from 'react'

const NavBar = () => {

  const [isLogin, setIsLogin] = useState(false)
  const accessToken = localStorage.getItem('token')

  useEffect(() => {
    if (accessToken) {
      setIsLogin(true)
    }
  }, [accessToken])


  return (
    <NavWrapper>
      <LeftMenu>
        <Logo src={LogoImg} width={60}/>
        <StyledLink to='/project'><NavItem>프로젝트</NavItem></StyledLink>
        <StyledLink to='/retro'><NavItem>회고록</NavItem></StyledLink>
        <StyledLink to='/lastsprint'><NavItem>지난 스프린트</NavItem></StyledLink>
      </LeftMenu>
      <RightMenu>
        {isLogin ? <StyledLink to='mypage'>seoyun님</StyledLink> : <StyledLink to='login'>로그인 / 회원가입</StyledLink>}
      </RightMenu>
    </NavWrapper>
  )
}

const NavWrapper = styled.div`
  width: 100%;
  height: 5rem;
  background-color: #E1EEFF;
  display: flex;
  flex-direction: row;
  align-items: center;
  color: #11235B;
  justify-content: space-between;
  z-index: 10;
  position: relative;
`

const LeftMenu = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledLink = styled(Link)`
text-decoration: none;
  color: inherit;

  &:visited {
    color: inherit;
  }

  &:hover {
    text-decoration: none;
  }

  &:active {
    color: inherit;
  }
`

const Logo = styled.img`
  padding-left: 3rem;
  padding-right: 2rem;
`

const NavItem = styled.div`
  margin: 1rem;
`

const RightMenu = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: 3rem;
`

export default NavBar
import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import UserInfo from './UserInfo';
import { useRecoilValue } from 'recoil';
import { userInfoState } from '../../Atom';

const Header = () => {
  const [infoBar, setInfoBar] = useState(false);
  const url = useLocation().pathname.split('/')[1];
  const user = useRecoilValue(userInfoState);

  useEffect(() => {
    setInfoBar(false);
  }, [url]);

  return (
    <HeaderContainer>
      <HeaderTop infoBar={infoBar === true}>
        <TopBox
          onClick={() => {
            setInfoBar(!infoBar);
          }}>
          <Link to="/">
            <Logo>
              <p style={{ color: '#FFC34E' }}>NORAE</p>
              <p style={{ color: 'white' }}>HEY</p>
            </Logo>
          </Link>
          <ProfileImg
            src={user.profileUrl}
          />
        </TopBox>
        <UserInfo />
      </HeaderTop>
      <HeaderBottom>
        <BottomBox />
        <BottomBox2 />
      </HeaderBottom>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  width: 100%;
  position: relative;
  background: white;
  z-index: 0;
`;

const TopBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const HeaderBottom = styled.div`
  width: 100%;
  height: 30px;
  position: relative;
`;

const HeaderTop = styled.div<{ infoBar: boolean }>`
  width: 100%;
  padding: 20px;
  height: ${({ infoBar }) => (infoBar ? '250px' : '80px')};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  border-radius: 0 0 30px 0;
  background: #a793ff;
  font-family: 'omni035';
  font-size: 24px;
  box-sizing: border-box;
  transition: all 0.25s ease;
`;

const BottomBox = styled.div`
  width: 100%;
  height: calc(100% + 1px);
  position: absolute;
  border-radius: 30px 0 0 0;
  background-color: white;
  z-index: 2;
`;

const BottomBox2 = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background: #a793ff;
  z-index: 1;
`;

const Logo = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  font-size: 20px;
  text-shadow: 0px 0px 5px rgba(0, 0, 0, 0.25);
  cursor: pointer;
`;

const ProfileImg = styled.img`
  width: 40px;
  height: 40px;
  color: #ffffff;
  border-radius: 50px;
  cursor: pointer;
`;

export default Header;

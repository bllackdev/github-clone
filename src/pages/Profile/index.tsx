import React from 'react';

import ProfileData from '../../components/ProfileData';

import { Container, Main, LeftSide, RightSide } from './styles';

const Profile: React.FC = () => {
    return (
        <Container>
            <Main>
                <LeftSide>
                    <ProfileData 
                        username={'bllackdev'}
                        name={'Raphael Renato'}
                        avatarUrl={'https://avatars.githubusercontent.com/u/42950800?v=4'}
                        followers={68}
                        following={124}
                        company={'CI&T'}
                        location={'São Paulo,Brazil'}
                        email={'rapha_rmm@hotmail.com'}
                        blog={'bllackdev.vercel.app'}
                    />
                </LeftSide>
                <RightSide></RightSide>
            </Main>
        </Container>
    );
}

export default Profile;
import React from 'react';
import styled from 'styled-components';

const Footer = () => {
    return (
        <FooterContainer>
            <p>© 2024 WatchFantasy. Hecho por Alex.</p>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.footer`

    
    bottom: 0;
    position: relative;
    width: 100%;
    color: white;
    margin-bottom: 20px;
    margin-top: 40px;
    text-align: center;
    
`;

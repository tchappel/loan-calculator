import React from 'react';
import { Layout as AntdLayout } from 'antd';
import { Header, Footer, Content, AppTitle } from './styled';
import PropTypes from 'prop-types';

const Layout = ({children}) => (
    <AntdLayout>
        <Header>
            <AppTitle>Loan Calculator </AppTitle>
        </Header>
        <Content>
            {children}
        </Content>
        <Footer>
            Made with ❤ by Thomas Chappel
        </Footer>
    </AntdLayout>
);

Layout.propTypes = {
    children: PropTypes.node
};

export default Layout;

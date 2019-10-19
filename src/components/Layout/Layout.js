import React from 'react';
import { Layout as AntdLayout } from 'antd';
import { FormattedMessage } from 'react-intl';
import { Header, Footer, Content, AppTitle } from './styled';
import PropTypes from 'prop-types';

const Layout = ({children}) => (
    <AntdLayout>
        <Header>
            <AppTitle>
                <FormattedMessage
                    id="app.title"
                    defaultMessage="loan calculator"
                    description="app title in main header"
                />
            </AppTitle>
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

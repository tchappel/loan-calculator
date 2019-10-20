import styled from 'styled-components';
import { Layout } from 'antd';

const {Header: AntdHeader, Footer: AntdFooter, Content: AntdContent} = Layout;

const headerHeight = 64;
const footerHeight = 69;

export const Header = styled(AntdHeader)`
    color: white;
`;

export const AppTitle = styled.h1`
    color: white;
    display: inline-block;
    text-transform: capitalize;
`;

export const Content = styled(AntdContent)`
    min-height: calc(100vh - ${headerHeight + footerHeight}px);
    padding: 0 50px;
`;

export const Footer = styled(AntdFooter)`
    text-align: center;
`;

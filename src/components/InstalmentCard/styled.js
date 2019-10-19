import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

export const Card = styled.div`
    width: 300px;
    height: 300px;
    padding: 24px;
    background-color: #140757;
    color: white;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .15);
    display: flex;
    flex-flow: column nowrap;
    justify-content: space-between;
    align-items: center
`;

export const CardTitle = styled.div`
    font-size: 22px;
    &:first-letter{
        text-transform: capitalize
    }
`;

export const InstalmentContainer = styled.div`
    font-size: 24px;
    font-weight: bold;
`;

export const Button = styled(AntdButton)`
    text-transform: uppercase;
`

export const Contacts = styled.div`
    text-decoration: underline;
    cursor: pointer;
`;


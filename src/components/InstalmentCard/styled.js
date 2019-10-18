import styled from 'styled-components';

export const Card = styled.div`
    width: 300px;
    padding: 24px;
    background-color: #140757;
    color: white;
    border-radius: 3px;
    box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, .15);
`;

export const CardTitle = styled.div`
    text-align: center;
    font-size: 22px;
`;

export const InstalmentContainer = styled.div`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
    align-items: center;
    height: 80px;
    font-size: 20px;
    font-weight: bold;
`;

export const ButtonContainer = styled.div`
    text-align: center;
    padding: 24px 0;
    visibility: ${({visibility}) => visibility}
    textAlign: 'center',
`;

export const Contacts = styled.div`
    text-align: center;
    text-decoration: underline;
    cursor: pointer;
`


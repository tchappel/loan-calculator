import styled from 'styled-components';

export const FormFieldHeading = styled.div`
    font-weight: bold;
    font-size: 16px;
    &:first-letter{
        text-transform: capitalize
    }
    width: 200px;
`;

export const FormFieldHeadingRow = styled.div`
    display: flex;
    flex-flow: row nowrap;
    justify-content: start;
    align-items: center;
    margin-bottom: 10px;
`;

export const FormSectionSeparator = styled.div`
    height: 25px;
`;

export const SliderWrapper = styled.div`
    padding-right: 50px;
`

export const SliderMarkLabel = styled.span`
    white-space: nowrap;
`

import React from 'react';
import { Card, CardTitle, InstalmentContainer, ButtonContainer, Contacts } from './styled';
import { instalmentPropType } from '../../shapes';
import { Button, Icon } from 'antd';

const InstalmentCard = ({instalment = {}}) => (
    <Card>
        <CardTitle>
            Your monthly instalment
        </CardTitle>
        <InstalmentContainer>
            {
                instalment.isLoading
                    ?
                    <Icon type="loading" style={{fontSize: 24}} spin />
                    :
                    instalment.data

            }
        </InstalmentContainer>
        <ButtonContainer
            visibility={instalment.isLoading ? 'hidden' : 'visible'}
        >
            <Button
                type="primary"
                size="large"
            >
                PROCEED
            </Button>
        </ButtonContainer>
        <Contacts><Icon type="phone" />Contact one of our agents</Contacts>
    </Card>
);

InstalmentCard.propTypes = {
    instalment: instalmentPropType
};

export default InstalmentCard;

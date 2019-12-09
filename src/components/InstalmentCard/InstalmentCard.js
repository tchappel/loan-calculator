import React from 'react';
import { isEmpty } from 'ramda';
import { FormattedMessage, FormattedNumber } from 'react-intl';
import { Icon } from 'antd';
import { Card, CardTitle, InstalmentContainer, Button, Contacts } from './styled';
import { instalmentPropType } from '../../shapes';

const InstalmentCard = ({instalment = {}}) => (
    <Card>
        <CardTitle>
            <FormattedMessage
                id="instalmentCard.title"
                defaultMessage="Your monthly instalment"
                description="title of the instalment card"
            />
        </CardTitle>
        {
            isEmpty(instalment) ||
            instalment.isLoading ?
                <Icon type="loading" style={{fontSize: 24}} spin />
                :
                <React.Fragment>
                    <InstalmentContainer>
                        <FormattedNumber
                            value={instalment.data}
                            // eslint-disable-next-line
                            style="currency"
                            currency="CZK"
                            minimumFractionDigits={0}
                        />
                    </InstalmentContainer>
                    <Button
                        type="primary"
                        size="large"
                    >
                        <FormattedMessage
                            id="instalmentCard.buttonProceed"
                            defaultMessage="proceed"
                            description="text of button 'proceed' inside InstalmentCard component"
                        />
                    </Button>
                </React.Fragment>
        }
        <Contacts>
            <Icon type="phone" style={{marginRight: 5}} />
            <FormattedMessage
                id="instalmentCard.contactAgent"
                defaultMessage="contact one of our agents"
                description="text of link to contact agent inside InstalmentCard component"
            />
        </Contacts>
    </Card>
);

InstalmentCard.propTypes = {
    instalment: instalmentPropType
};

export default InstalmentCard;

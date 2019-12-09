import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage, FormattedHTMLMessage, injectIntl } from 'react-intl';
import { Button, Modal } from 'antd';

const ModalNoConnection = ({visible, intl}) => (
    <Modal
        title={intl.formatMessage({
            id: "modalNoConnection.title",
            description: "title of ModalNoConnectionComponent",
            defaultMessage: "No connection!",
        })}
        centered
        closable={false}
        visible={visible}
        maskClosable={false}
        footer={[
            <Button type="primary" onClick={() => window.location.reload()}>
                <FormattedMessage
                    id="button.reloadPage"
                    description="message displayed on button to reload page"
                    defaultMessage="Reload Page"
                />
            </Button>
        ]}
    >
        <FormattedHTMLMessage
            id="modalNoConnection.message"
            description="message displayed inside ModalNoConnection component"
            defaultMessage="<p>Unable to connect with server.<br />Please check your connection and reload page.</p>"
        />
    </Modal>
);

ModalNoConnection.propTypes = {
    visible: PropTypes.bool,
};

export default injectIntl(ModalNoConnection);

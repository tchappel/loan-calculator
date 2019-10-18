import React from 'react'
import { Button, Modal } from 'antd'

const ModalNoConnection = ({visible}) => (
	<Modal
		title="No connection!"
		centered
		closable={ false }
		visible={ visible }
		maskClosable={ false }
		footer={ [
			<Button type="primary" onClick={ () => window.location.reload() }>
				Reload page
			</Button>
		] }
	>
		<p>Unable to connect with server.<br />Please check your connection and reload page.</p>
	</Modal>
)

export default ModalNoConnection
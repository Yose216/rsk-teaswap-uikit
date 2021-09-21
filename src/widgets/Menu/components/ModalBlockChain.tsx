import React, { useCallback } from 'react'
import Button from "../../../components/Button/Button";
import Text from "../../../components/Text/Text";
import { BSCIcon } from "../icons";
import { Modal } from "../../Modal";


interface ModalBlockChainProps {
  onDismiss?: () => void
}

const ModalBlockChain: React.FC<ModalBlockChainProps> = ({ onDismiss }) => {
  return (
    <Modal title="Choose your blockchain" onDismiss={onDismiss}>
      <Button
        width="100%"
        variant="tertiary"
        onClick={() => {console.log('1')}}
        style={{ justifyContent: "space-between" }}
        mb={10}
      >
        <BSCIcon width="24px" />
        <Text bold color="primary" mr="16px">
          Binance Smart Chain
        </Text>
      </Button>

      <Button
        width="100%"
        variant="tertiary"
        onClick={() => {console.log('1')}}
        style={{ justifyContent: "space-between" }}
        mb={10}
      >
        <Text bold color="primary" mr="16px">
          Arbitrum
        </Text>
      </Button>
      <Button
        width="100%"
        variant="tertiary"
        onClick={() => {console.log('1')}}
        style={{ justifyContent: "space-between" }}
        mb={10}
      >
        <Text bold color="primary" mr="16px">
          RSK
        </Text>
      </Button>
      <Button
        width="100%"
        variant="tertiary"
        onClick={() => {console.log('1')}}
        style={{ justifyContent: "space-between" }}
        mb={10}
      >
        <Text bold color="primary" mr="16px">
          Polygon
        </Text>
      </Button>
    </Modal>
  )
}

export default ModalBlockChain

import React from 'react'
import Modal from 'react-native-modal'

export default function ModalSuccessed({
   isVisible,
   children,
}) {
   return (
      <Modal
         isVisible={isVisible}
         backdropOpacity={0.4}

         onBackdropPress={() => !isVisible}
      >
         {children}
      </Modal>
   )
}
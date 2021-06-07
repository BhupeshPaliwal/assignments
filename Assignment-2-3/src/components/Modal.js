import React, { useState } from "react";
import { Modal, Button, Spin } from "antd";

const ModalComponent = (props) => {
  return (
    <>
      <Modal
        title="Basic Modal"
        visible={props.visible}
        footer={null}
        closable={false}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "center",
          }}
        >
          <Spin size="large" />
          <p>Logging you in...</p>
        </div>
      </Modal>
    </>
  );
};

export default ModalComponent;

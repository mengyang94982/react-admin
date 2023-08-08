import React, { useRef } from 'react'
import { Button, Modal, Form, Input } from 'antd'

const AddTag = props => {
  const formRef = useRef(null)
  const { visible, changeVisible, item } = props
  const title = item ? '编辑标签' : '新增标签'

  const handleCancel = () => {
    changeVisible(false)
  }
  const handleSubmit = () => {
    // formRef.current.validateFields().then(values => {
    //   values
    // })
  }

  return (
    <Modal
      title={title}
      open={visible}
      onOk={handleSubmit}
      onCancel={handleCancel}
      footer={[
        <Button
          key="back"
          onClick={handleCancel}
        >
          取消
        </Button>,
        <Button
          type="primary"
          key="submit"
          onClick={handleSubmit}
        >
          保存
        </Button>
      ]}
    >
      <Form ref={formRef}>
        <Form.Item
          label="标签名"
          name="name"
          rules={[
            {
              required: true,
              message: '请输入标签名'
            }
          ]}
        >
          <Input />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default AddTag

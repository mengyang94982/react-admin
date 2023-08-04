import React from 'react'
import { Form, Input, Button } from 'antd'
import SvgIcon from '@/components/custom/svg-icon'

export default function RegisterForm() {
  return (
    <Form>
      <Form.Item>
        <Input
          prefix={<SvgIcon icon="ant-design:user-outlined" />}
          rootClassName="rd-0"
          size="large"
          placeholder="请输入账号名"
        />
      </Form.Item>
      <Form.Item>
        <Input.Password
          rootClassName="rd-0"
          size="large"
          placeholder="请输入密码"
          prefix={<SvgIcon icon="ant-design:lock-outlined" />}
        />
      </Form.Item>
      <Form.Item>
        <Input.Password
          rootClassName="rd-0"
          size="large"
          placeholder="再次输入密码"
          prefix={<SvgIcon icon="ant-design:lock-outlined" />}
        />
      </Form.Item>
      <Form.Item>
        <Button
          size="large"
          block
          type="primary"
        >
          注册
        </Button>
      </Form.Item>
    </Form>
  )
}

import React from 'react'

import { Form, Input, Checkbox, Button } from 'antd'

import SvgIcon from '@/components/custom/svg-icon'

export default function LoginForm() {
  return (
    <Form
      name="basic"
      autoComplete="off"
      validateTrigger="onChange"
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: '请输入账号' }]}
      >
        <Input
          placeholder="请输入账号"
          rootClassName="rd-0"
          size="large"
          allowClear
          prefix={<SvgIcon icon="ant-design:user-outlined" />}
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: '请输入密码' }]}
      >
        <Input.Password
          placeholder="请输入密码"
          rootClassName="rd-0"
          size="large"
          prefix={<SvgIcon icon="ant-design:lock-outlined" />}
        />
      </Form.Item>
      <Form.Item>
        <div className="flex justify-between">
          <Checkbox>自动登录</Checkbox>
          <span className="cursor-pointer">忘记密码？</span>
        </div>
      </Form.Item>
      <Form.Item>
        <Button
          htmlType="submit"
          className="rd-0"
          size="large"
          type="primary"
          block
        >
          登录
        </Button>
      </Form.Item>
    </Form>
  )
}

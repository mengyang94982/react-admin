import React, { useState } from 'react'
import { Table, Row, Col, Button, Form, Input } from 'antd'
import SvgIcon from '@/components/custom/svg-icon'
import AddTag from '@/views/article/tag/components/addTag'

const Tag = () => {
  const columns = [
    {
      title: '标签名',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>
    },
    {
      title: '类型',
      dataIndex: 'age',
      key: 'age'
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address'
    },
    {
      title: 'Tags',
      key: 'tags',
      dataIndex: 'tags',
      render: (_, { tags }) => (
        <>
          {tags.map(tag => {
            let color = tag.length > 5 ? 'geekblue' : 'green'
            if (tag === 'loser') {
              color = 'volcano'
            }
            return (
              <Tag
                color={color}
                key={tag}
              >
                {tag.toUpperCase()}
              </Tag>
            )
          })}
        </>
      )
    }
  ]
  const data = []
  const [name, setName] = useState('')

  const reset = () => {
    setName('')
  }
  const search = () => {}
  const nameChange = e => {
    setName(e.target.value)
  }
  const [visible, setVisible] = useState(false)
  const addItem = () => {
    setVisible(true)
  }

  return (
    <>
      <div className="p-x-10px pt-24px bg-#fff mb-10px">
        <Form>
          <Row>
            <Col span={6}>
              <Form.Item label="标签名">
                <Input
                  value={name}
                  onChange={nameChange}
                />
              </Form.Item>
            </Col>
            <Col
              span={6}
              offset={12}
              className="flex justify-end"
            >
              <Button
                className="mr-5px"
                onClick={reset}
              >
                重置
              </Button>
              <Button
                type="primary"
                onClick={search}
              >
                搜索
              </Button>
            </Col>
          </Row>
        </Form>
      </div>

      <div>
        <div className="mb-5px">
          <Button
            type="primary"
            className="flex"
            onClick={addItem}
          >
            <SvgIcon
              icon="material-symbols:add-rounded"
              className="text-20px"
            />
            新增
          </Button>
        </div>
        <Table
          columns={columns}
          dataSource={data}
        />
      </div>
      <AddTag
        visible={visible}
        changeVisible={setVisible}
      />
    </>
  )
}

export default Tag

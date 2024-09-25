import React, { useState } from 'react';
import { Button, Modal, Form, Input } from 'antd';
const ChangePassword = (props) => {
    const [open, setOpen] = useState(false);

    const onFinish = async (values) => {
        console.log(values)
    };
    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const showModal = (e) => {
        e.preventDefault();
        setOpen(true);
    };
    const handleOk = () => {
        setOpen(false);
    };
    const handleCancel = () => {
        setOpen(false);
    };
    return (
        <>
            <a href='#' onClick={e => showModal(e)}>{props.children}</a>
            <Modal
                open={open}
                title="變更密碼"
                onOk={handleOk}
                onCancel={handleCancel}
                footer={(_, { OkBtn, CancelBtn }) => (
                    <>
                        <CancelBtn />
                        <Form.Item className='text-right m-0'>
                            <Button type="primary" htmlType="submit" className='rounded-full'>登入</Button>
                        </Form.Item>
                    </>
                )}
            >
                <Form name="basic"
                    // initialValues={{}}
                    onFinish={onFinish} //送出 onSubmit
                    onFinishFailed={onFinishFailed} //表單驗證
                    autoComplete="off"
                >
                    <Form.Item name="username"
                        rules={[
                            {
                                required: true,
                                message: '尚未填寫使用者名稱',
                            },
                        ]}
                    >
                        <Input className='rounded-full' size="large"
                            prefix={<span className='material-icons-round me-1'>person</span>} />
                    </Form.Item>
                    <Form.Item name="password"
                        rules={[
                            {
                                required: true,
                                message: '尚未填寫密碼',
                            },
                        ]}
                    >
                        <Input.Password
                            className='rounded-full' size="large"
                            prefix={<span className='material-icons-round me-1'>key</span>}
                        />
                    </Form.Item>
                    {/* <Form.Item className='text-right m-0'>
                        <Button type="primary" htmlType="submit" className='w-full rounded-full'>登入</Button>
                    </Form.Item> */}
                </Form>
            </Modal>
        </>
    )
}
export default ChangePassword
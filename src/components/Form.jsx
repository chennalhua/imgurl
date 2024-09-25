import React, { useEffect, useState } from 'react';
import { Form, Button, Input, Checkbox, Skeleton } from 'antd';
const FormBox = () => {
    const onFinish = (values) => {
        ('Success:', values);
    };
    const onFinishFailed = (errorInfo) => {
        ('Failed:', errorInfo);
    };

    let [skeletonLoading, setSkeletonLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => { setSkeletonLoading(false) }, 2000)
    }, [])
    return (
        <div className="p-5">
            {/* <Skeleton active paragraph={{ rows: 6 }} loading={skeletonLoading} /> */}
            {
                // !skeletonLoading &&
                <div className='grid grid-cols-12'>
                    <div className='col-span-12 md:col-span-8 lg:col-span-6'>
                        <Form name="basic"
                            initialValues={{ //預設值
                                remember: true,
                                username: '測試預設OOO'
                            }}
                            onFinish={onFinish} //送出 onSubmit
                            onFinishFailed={onFinishFailed} //表單驗證
                            autoComplete="off"
                        >
                            <Form.Item label="帳號" name="username"
                                rules={[
                                    {
                                        required: true,
                                        message: '尚未填寫使用者名稱',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item label="密碼" name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: '尚未填寫密碼',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item label="驗證碼" name="text"
                                rules={[
                                    {
                                        required: true,
                                        message: '尚未填寫驗證碼',
                                    },
                                ]}
                            >
                                <Input.OTP length={6} />
                            </Form.Item>
                            <Form.Item name="remember" valuePropName="checked">
                                <Checkbox>記住我</Checkbox>
                            </Form.Item>
                            <Form.Item><Button type="primary" htmlType="submit">送出</Button></Form.Item>
                        </Form>
                    </div>
                </div>
            }
        </div>
    )
}
export default FormBox
import React from 'react';
import {Button, Result} from "antd";

const Page404Container = () => {
  return (
    <React.Fragment>
    <Result
      status="404"
      title="404"
      subTitle="Sorry, the page you visited does not exist."
      extra={<Button href={'http://localhost:3000/main'} type="primary">Back Home</Button>}
    />
    </React.Fragment>
  )
}

export default Page404Container;
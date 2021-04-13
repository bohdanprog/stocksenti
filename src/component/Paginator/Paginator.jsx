import {Pagination, Row} from 'antd';


const Paginator = () => {
  return (
    <Row >
      <Pagination
        hideOnSinglePage={true}
        pageSize={5}
        defaultCurrent={1}
        total={200}
        responsive={true}
        showLessItems={true}
        size={"default"}
      />
    </Row>
  )
}

export default Paginator;
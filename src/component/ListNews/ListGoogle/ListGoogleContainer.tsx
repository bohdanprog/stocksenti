import React from 'react'
import {ListGoogleNews} from "./ListGoogleNews";
import {Col, Input, List, Row} from "antd";
import {GoogleNewsType} from "../../../type/types";
import classes from "../List.module.css";

type PropsType = {
  googleNews: Array<GoogleNewsType>
  loading:boolean
}

export const ListGoogleContainer: React.FC<PropsType> = React.memo(({googleNews, loading}) => {
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState< Array<GoogleNewsType>>([]);
  const handleChange = (event: { target: { value: React.SetStateAction<string>; }; }) => {
    setSearchTerm(event.target.value);
  };
  React.useEffect(() => {
    const results = googleNews.filter(person =>
      person.articleprovider.toLowerCase().includes(searchTerm)
    );
    setSearchResults(results);
  }, [searchTerm, googleNews]);
  const data = searchTerm === '' ? googleNews : searchResults ;
  return (
    <React.Fragment>
      <Row><Col xl={12} xs={24}>
      <div className={classes.inputContainerSearch}>
      <Input type="text" placeholder="Search" value={searchTerm} onChange={handleChange}  name={'search'}/>
      </div>
      </Col></Row>
      <List bordered={false} split={false} loading={loading} pagination={{showLessItems: true, showSizeChanger: false, responsive: true,
            hideOnSinglePage: true, pageSize: 10, position: 'both'}} rowKey={'key'} itemLayout="vertical" size="small"
            dataSource={data} renderItem = {(item:GoogleNewsType) => (
          <ListGoogleNews articleprovider = {item.articleprovider} titlesentiment={item.titlesentiment}
                          title={item.title} relatedsentenceswithsentimentslist={item.relatedsentenceswithsentimentslist}
                          date={item.createddate} key={item.id} id={item.id} articlephoto={item.articlephoto}
                          link={item.link} titlesentimentscore={item.titlesentimentscore}
                          articlesentimentscore={item.articlesentimentscore} articlegooglesummary={item.articlegooglesummary}/>)}
      />
    </React.Fragment>
  )
})

import React from 'react'
import {ListGoogleNews} from "./ListGoogleNews";
import {Col, Input, List, Row} from "antd";
import {GoogleNewsType} from "../../../type/types";
import SpinnerContainer from "../../Spiner/SpinnerContainer";

type PropsType = {
  googleNews: Array<GoogleNewsType>
  instrument: string
}

export const ListGoogleContainer: React.FC<PropsType> = React.memo(({instrument, googleNews}) => {
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

  if(!googleNews){
    return <SpinnerContainer/>
  }

  const data = searchTerm === '' ? googleNews : searchResults ;
  return (
    <React.Fragment>
      <Row><Col xl={12} xs={24}>
      <div style={{marginTop:'0.5rem', marginLeft:'0.25rem'}}>
      <Input type="text" placeholder="Search" value={searchTerm} onChange={handleChange}  name={'search'}/>
      </div>
      </Col></Row>
      <List grid={{gutter: 16, xs: 1, sm: 1, md: 1, lg: 1, xl: 1, xxl: 1,}}
        pagination={{showLessItems: true, showSizeChanger: false, responsive: true,
                    hideOnSinglePage: true, pageSize: 5, position: 'both'}}
        rowKey={'key'} itemLayout="vertical" size="default" dataSource={data}
        renderItem= {(item:GoogleNewsType) => (
          <ListGoogleNews articleprovider={item.articleprovider} titlesentiment={item.titlesentiment}
                          title={item.title} relatedsentenceswithsentimentslist={item.relatedsentenceswithsentimentslist}
                          date={item.createddate} key={item.id} id={item.id} articlephoto={item.articlephoto}
                          link={item.link} titlesentimentscore={item.titlesentimentscore}
                          articlesentimentscore={item.articlesentimentscore} articlegooglesummary={item.articlegooglesummary}/>)}
      />
    </React.Fragment>
  )
})

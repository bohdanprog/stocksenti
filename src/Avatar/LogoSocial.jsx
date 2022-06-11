import {Avatar} from 'antd';

export const LogoSocial = ({logo}) => {
  return (
    <div>
      <Avatar style={{backgroundColor:'#fff'}} size={{ xs: 32, xxl: 44}} src={logo}/>
    </div>
)
}
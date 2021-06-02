import {Avatar} from 'antd';

export const LogoSocial = ({logo}) => {
  return (
    <div>
      <Avatar style={{backgroundColor:'#fff'}} size={32} src={logo}/>
    </div>
)
}
import {Avatar} from 'antd';

const Logo = ({logo}) => {
  return (
    <div>
      <Avatar size={{ xs: 44, xxl: 64}} src={logo}/>
    </div>
)
}

export default Logo;
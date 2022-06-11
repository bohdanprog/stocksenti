import {Avatar} from 'antd';

const Logo = ({logo}) => {
  return (
    <div>
      <Avatar size={64} src={logo}/>
    </div>
)
}

export default Logo;
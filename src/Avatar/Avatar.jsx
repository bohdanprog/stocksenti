import { Avatar } from 'antd';
import { UserOutlined } from '@ant-design/icons';

const Logo = (props) => {
  return (
    <div>
      <Avatar size="small" icon={<UserOutlined/>}/>
    </div>
)
}

export default Logo;
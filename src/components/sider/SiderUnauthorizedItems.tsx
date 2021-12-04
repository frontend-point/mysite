import { LockOutlined } from '@ant-design/icons'
import { Menu } from 'antd'
import { Link, useLocation } from 'react-router-dom'
import { LocationType } from 'types/Types'

const SiderUnauthorizedItems = () => {
  const { pathname } = useLocation<LocationType>()

  return (
    <Menu
      theme="dark"
      defaultSelectedKeys={['/login']}
      selectedKeys={[pathname]}
      mode="inline"
    >
      <Menu.Item key="/login" icon={<LockOutlined />}>
        <Link to="/login">Аутентификация</Link>
      </Menu.Item>
    </Menu>
  )
}

export default SiderUnauthorizedItems

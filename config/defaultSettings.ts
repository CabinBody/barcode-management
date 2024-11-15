import { ProLayoutProps } from '@ant-design/pro-components';

/**
 * @name
 */
const Settings: ProLayoutProps & {
  pwa?: boolean;
} = {
  navTheme: 'light',
  // 拂晓蓝
  layout: 'mix',
  contentWidth: 'Fluid',
  fixedHeader: false,
  fixSiderbar: true,
  siderWidth: 152,
  colorWeak: false,
  title: '后台管理系统',
  pwa: true,
  logo: false,
  iconfontUrl: '',
  token: {
    bgLayout: '#F1F5F5', // 布局背景色
    sider: {
      colorMenuBackground: '#2C3A47', // menu 的背景颜色
      colorBgMenuItemHover: '#1890FF', // menuItem 的 hover 背景颜色
      colorBgMenuItemSelected: '#1890FF', // menuItem 的选中背景颜色
      colorTextMenu: '#b0b6bf', // menuItem 的字体颜色
      colorTextMenuSelected: '#FFFFFF', // menuItem 的选中字体颜色
      colorTextMenuItemHover: '#FFFFFF', // menuItem 的 hover 字体颜色
      colorTextMenuActive: '#FFFFFF', // menuItem hover 的选中字体颜色
    },
    header: {
      heightLayoutHeader: 64, // header 的高度
      colorBgHeader: '#314254', // menu 的背景颜色
      colorHeaderTitle: '#FFFFFF', // menu 的字体颜色
    },
    
    // 参见ts声明，demo 见文档，通过token 修改样式
    //https://procomponents.ant.design/components/layout#%E9%80%9A%E8%BF%87-token-%E4%BF%AE%E6%94%B9%E6%A0%B7%E5%BC%8F
  },
  
};

export default Settings;

// @ts-ignore
/* eslint-disable */

declare namespace API {
  type ManchantInfo = {
    id: number;
    shop_name: string;
    wechatId?: string;
    open_date: string;
    income: number;
    fans?: number;
    artical_num?: number;
    minus_score: number;
    balance: number;
    other?: any;
    isBannded?: boolean;
  };

  type RetailInvestorInfo = {
    id: number;
    username: string;
    wechatId?: string;
    register_date: string;
    buied_artical_num?: number;
    user_balance?: number;
    message_num?: number;
    other?: null;
    isBannded?: boolean;
  };

  type MerchantReviewInfo = {
    id: number;
    username: string;
    wechatId?: string;
    request_date: string;
    shop_name: string;
    shop_desc: string;
    shop_avatar: string;
    other?: null;
    isHandled?: boolean;
    request_result: string;
  };

  type WithdrawRequestInfo = {
    order_id: number;
    username: string;
    wechatId?: string;
    request_date: string;
    withdraw_amount: number;
    isHandled: boolean;
    request_result: string;
  };

  type UseComplaintInfo = {
    order_id: number;
    username: string;
    wechatId: string;
    comlpaint_date: string;
    complainted_target?: {
      username?: string;
      shop_name?: string;
    };
    complaint_type: string;
    complaint_content?: string;
    commpaint_phone?: string;
    isHandled: boolean;
  }

  type CurrentUser = {
    name?: string;
    avatar?: string;
    userid?: string;
    email?: string;
    signature?: string;
    title?: string;
    group?: string;
    tags?: { key?: string; label?: string }[];
    notifyCount?: number;
    unreadCount?: number;
    country?: string;
    access?: string;
    geographic?: {
      province?: { label?: string; key?: string };
      city?: { label?: string; key?: string };
    };
    address?: string;
    phone?: string;
  };

  type LoginResult = {
    status?: string;
    type?: string;
    currentAuthority?: string;
  };

  type PageParams = {
    current?: number;
    pageSize?: number;
  };

  type RuleListItem = {
    key?: number;
    disabled?: boolean;
    href?: string;
    avatar?: string;
    name?: string;
    owner?: string;
    desc?: string;
    callNo?: number;
    status?: number;
    updatedAt?: string;
    createdAt?: string;
    progress?: number;
  };

  type RuleList = {
    data?: RuleListItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type FakeCaptcha = {
    code?: number;
    status?: string;
  };

  type LoginParams = {
    username?: string;
    password?: string;
    autoLogin?: boolean;
    type?: string;
  };

  type ErrorResponse = {
    /** 业务约定的错误码 */
    errorCode: string;
    /** 业务上的错误信息 */
    errorMessage?: string;
    /** 业务上的请求是否成功 */
    success?: boolean;
  };

  type NoticeIconList = {
    data?: NoticeIconItem[];
    /** 列表的内容总数 */
    total?: number;
    success?: boolean;
  };

  type NoticeIconItemType = 'notification' | 'message' | 'event';

  type NoticeIconItem = {
    id?: string;
    extra?: string;
    key?: string;
    read?: boolean;
    avatar?: string;
    title?: string;
    status?: string;
    datetime?: string;
    description?: string;
    type?: NoticeIconItemType;
  };
}

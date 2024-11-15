import { Request, Response } from 'express';
import moment from 'moment';
import { parse } from 'url';

// mock list
const genMerchantList = (current: number, pageSize: number) => {
    const tableListDataSource: API.ManchantInfo[] = [];

    for (let i = 0; i < pageSize; i += 1) {
        const index = (current - 1) * 10 + i;
        tableListDataSource.push({
            id: index,
            shop_name: `店铺 ${index}`,
            wechatId: `wechatId ${index}`,
            open_date: moment().format('YYYY/MM/DD'),
            income: Math.floor(Math.random() * 10000),
            fans: Math.floor(Math.random() * 1000),
            artical_num: Math.floor(Math.random() * 100),
            minus_score: Math.floor(Math.random() * 100),
            balance: Math.floor(Math.random() * 10000),
            other: null,
            isBannded: false
        });
    }
    tableListDataSource.reverse();
    return tableListDataSource;
};

let merchantListDataSource = genMerchantList(1, 100);

function getMerchantList(req: Request, res: Response, u: string) {
    let realUrl = u;
    if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
        realUrl = req.url;
    }
    const { current = 1, pageSize = 10 } = req.query;
    const params = parse(realUrl, true).query as unknown as API.PageParams &
        API.ManchantInfo & {
            sorter: any;
            filter: any;
        };

    let dataSource = [...merchantListDataSource].slice(
        ((current as number) - 1) * (pageSize as number),
        (current as number) * (pageSize as number),
    );
    if (params.sorter) {
        const sorter = JSON.parse(params.sorter);
        dataSource = dataSource.sort((prev, next) => {
            let sortNumber = 0;
            (Object.keys(sorter) as Array<keyof API.ManchantInfo>).forEach((key) => {
                let nextSort = next?.[key] as number;
                let preSort = prev?.[key] as number;
                if (sorter[key] === 'descend') {
                    if (preSort - nextSort > 0) {
                        sortNumber += -1;
                    } else {
                        sortNumber += 1;
                    }
                    return;
                }
                if (preSort - nextSort > 0) {
                    sortNumber += 1;
                } else {
                    sortNumber += -1;
                }
            });
            return sortNumber;
        });
    }
    if (params.filter) {
        const filter = JSON.parse(params.filter as any) as {
            [key: string]: string[];
        };
        if (Object.keys(filter).length > 0) {
            dataSource = dataSource.filter((item) => {
                return (Object.keys(filter) as Array<keyof API.ManchantInfo>).some((key) => {
                    if (!filter[key]) {
                        return true;
                    }
                    if (filter[key].includes(`${item[key]}`)) {
                        return true;
                    }
                    return false;
                });
            });
        }
    }
    const result = {
        data: dataSource,
        total: merchantListDataSource.length,
        success: true,
        pageSize,
        current: parseInt(`${params.current}`, 10) || 1,
    };

    return res.json(result);
}

function postUpdateMerchant(req: Request, res: Response, u: string, b: Request) {
    let realUrl = u;
    if (!realUrl || Object.prototype.toString.call(realUrl) !== '[object String]') {
        realUrl = req.url;
    }

    const body = (b && b.body) || req.body;
    const { method, id, isBannded = null, minusScore = null } = body;

    switch (method) {
        /* eslint no-case-declarations:0 */
        case 'delete':
            break;
        case 'post':
            break;
        case 'update':
            (() => {
                let newMerchant = {};
                merchantListDataSource = merchantListDataSource.map((item) => {
                    if (item.id === id) {
                        if (isBannded) {
                            newMerchant = { ...item, isBannded };
                            return { ...item, isBannded };
                        }
                        if (minusScore) {
                            newMerchant = { ...item, minusScore };
                            return { ...item, minusScore };
                        }
                    }
                    return item;
                });
                return res.json(newMerchant);
            })();
            return;
        default:
            break;
    }

    const result = {
        list: merchantListDataSource,
        pagination: {
            total: merchantListDataSource.length,
        },
    };

    res.json(result);
}

export default {
    'GET /api/merchant': getMerchantList,
    'POST /api/updateMerchant': postUpdateMerchant,
};

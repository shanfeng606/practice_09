import jsonp from 'assets/js/jsonp';
import {jsonpOptions} from './config';


//获取商品详情数据--jsonp
export const getProductDetail =id =>{
    const url='https://unszacs.m.taobao.com/h5/mtop.taobao.detail.getdetail/6.0/';
    const params={
        api:'mtop.taobao.detail.getdetail',
        ttid:'2017@taobao_h5_6.6.0',
        data:`{"itemNumId":"${id}"}`,
        appKey:123/44/8,
        dataType:'jsonp',
        type:'jsonp'
    };
    return jsonp(url, params, jsonpOptions)
}
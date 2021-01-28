import ajax from './ajax.js'
//lunbo

export const Reqlubo = () => ajax('/api/getlunbo')

// 商品

export const ReqGoods = (num) => ajax(`/api/getgoods?pageindex=${num}`)

//图片类目

export const ReqPictures = () => ajax('/api/getimgcategory')

//类目图片
export const ReqPic = (id) => ajax(`/api/getimages/${id}`)

//资讯

export const ReqNews = () => ajax('/api/getnewslist')

//资讯详情
export const ReqNewsDel = (id) => ajax(`/api/getnew/${id}`)


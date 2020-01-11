import * as data from './data'


export const getList = ()=>{
    return Promise.resolve(data.data).then(data=>{
        return data.data.map(v=>{
            return {image_url:v.image_url, title: v.title}
        });
    })
}
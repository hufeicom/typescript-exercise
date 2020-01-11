import * as data from './data'


export const getList = ()=>{
    return Promise.resolve(data.data).then((data)=>{
        return data.data.map((v)=>{
            console.log(v.image_url);
            return {image_url:v.image_url, title: v.title}
        });
    })
}
import { http } from './config'

export default {
    get:() => {
        return http.get('products')
    },
    getIdCategory:(id) => {
        return http.get('products?/category_id='+id)
    }
}
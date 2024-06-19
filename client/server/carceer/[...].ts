import { createRouter, defineEventHandler, useBase } from 'h3'
const router = createRouter()

// fetch all
router.get('/fetch-data', defineEventHandler(async (event : any) => {
    const requestUrl = ""
    try {
        const { data } : any = await $fetch(requestUrl)
        return data;
    } catch (err) {
        console.error(err)
    }
}))

// fetch with :id
router.get('/:id', defineEventHandler(async (event : any) => {
    const id = event.context.params.id;
    const requestUrl = ``
    try {
        const { data } : any = await $fetch(requestUrl)
        return data;
    } catch (err) {
        console.error(err)
    }
}))

// update
router.patch('/update', defineEventHandler(async (event : any) => {
    const id = event.context.params.id;
    const requestUrl = ``
    try {
        const { data } : any = await $fetch(requestUrl)
        return data;
    } catch (err) {
        console.error(err)
    }
}))


export default useBase('/api/user', router.handler)
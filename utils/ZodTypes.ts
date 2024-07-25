import { z } from 'zod'

const listing = z.object({
    _id: z.string(),
    title: z.string(),
    description: z.string(),
    pay: z.number(),
    duration: z.number(),
    creator: z.string(),
    postDate: z.string(),
    __v: z.number(),
})

export type Listing = z.infer<typeof listing>
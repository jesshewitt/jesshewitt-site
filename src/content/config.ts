import { defineCollection, z } from 'astro:content'

const art = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        thumbnail: z.string(),
        images: z.array(z.string()).default([]),
        description: z.string(),
        externalLinks: z.array(z.object({
            label: z.string(),
            url: z.string()
        })).default([]),
        featured: z.boolean().default(false),
        exhibitions: z.array(z.object({
            description: z.string(),
            image: z.string().optional()
        })).default([])
    })
})

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        thumbnail: z.string(),
        description: z.string(),
        links: z.array(z.object({
            label: z.string(),
            url: z.string()
        })).default([]),
        featured: z.boolean().default(false)
    })
})

const blog = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.coerce.date(),
        description: z.string()
    })
})

export const collections = { art, projects, blog }

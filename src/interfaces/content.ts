import { ContentTypeEnum } from './contentType'

export interface IContent {
    title: string
    slug: string
    description: string
    content: string
    contentType: ContentTypeEnum
}

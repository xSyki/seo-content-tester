import { IContentTests } from './contentTests'
import { IDescriptionTests } from './descriptionTests'
import { ISlugTests } from './slugTests'
import { ITitleTests } from './titleTests'

export interface IResults {
    title: ITitleTests
    slug: ISlugTests
    description: IDescriptionTests
    content: IContentTests
}

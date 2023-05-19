import { IH1Length, IInternalLinksLength } from '../tests'
import { IExternalLinksLength } from '../tests/externalLinksLength'
import { IIsWordLengthCorrect } from '../tests/isWordLengthCorrect'
import { ISubHeadingsLength } from '../tests/subHeadingsLength'

export interface IContentTests {
    isWordLengthCorrect: IIsWordLengthCorrect
    h1Length: IH1Length
    subHeadingsLength: ISubHeadingsLength
    externalLinksLength: IExternalLinksLength
    internalLinksLength: IInternalLinksLength
}

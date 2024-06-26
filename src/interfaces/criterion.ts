export default interface Criterion {
  id: number,
  attributes: {
    name: string,
    slug: string,
    pageUrl: string,
    officialDescription: string,
    criterionNumber: number,
    criterionLevel: string,
    wcagVersion: string,
    criterionSort: number,
    whatToDo: string,
    whyItIsImportant: string,
    howToTestForIt: string,
    commonPitfalls: string,
    moreAboutThisCriterion: string,
    metaDescription: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    locale: string,
    localizations: {
      data: [{
        attributes: {
          slug: string
        }
      }]
    },
    wcagPrinciple: {
      data: {
        attributes: {
          name: string,
          principleNumber: number,
          slug: string
        }
      }
    },
    wcagGuideline: {
      data: {
        attributes: {
          name: string,
          guidelineNumber: number,
          slug: string
        }
      }
    }
  };
}
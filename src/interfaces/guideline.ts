export default interface Guideline {
  id: number,
  attributes: {
    name: string,
    slug: string,
    pageUrl: string,
    guidelineDescription: string,
    guidelineNumber: number,
    metaDescription: string,
    createdAt: string,
    updatedAt: string,
    publishedAt: string,
    locale: string,
    localizations: {
      data: [{
        attributes: {
          slug: string,
          pageUrl: string
        }
      }]
    },
    wcagPrinciple: {
      data: {
        attributes: {
          name: string,
          principleNumber: number
          slug: string
        }
      }
    }
  };
}
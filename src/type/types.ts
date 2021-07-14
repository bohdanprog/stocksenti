export type GoogleNewsType = {
  "id": number
  "instrument": string
  "createddate": string
  "titlesentiment": string
  "link": string
  "title": string
  "articleproviderlogolink": string
  "searchphrase": string
  "articlesentiment": string
  "articlesentimentscore": number
  "titlesentimentscore": string
  "articlephoto": string
  "articleprovider": string
  "articlegooglesummary": string
  "articlegooglesummarysentiment": string
  "articlegooglesummarysentimentscore": string
  relatedsentenceswithsentimentslist: Array<SentimentslistType>
}

export type StocksType = {
  "id": number | null
  "instrument": string | null
  "createddate": number | null
  "stockvalue": number | null
  "stocksymbols": string | null
}

export interface GoogleSentimentType {
  "id": number
  "googlenewsperiodsinstrument": string
  "googlenewsperiodscreateddate": string
  "googlenewsperiodscount": number
  "googlenewsperiodstitlepositivecount": number
  "googlenewsperiodstitlenegativecount": number
  "googlenewsperiodstitlenegsum": number
  "googlenewsperiodstitleneusum": number
  "googlenewsperiodstitlepossum": number
  "googlenewsperiodstitleaveragenegsum": number
  "googlenewsperiodstitleaverageneusum": number
  "googlenewsperiodstitleaveragepossum": number
  "googlenewsperiodscontentpositivecount": number
  "googlenewsperiodscontentnegativecount": number
  "googlenewsperiodscontentnegsum": number
  "googlenewsperiodscontentneusum": number
  "googlenewsperiodscontentpossum": number
  "googlenewsperiodscontentaveragenegsum": number
  "googlenewsperiodscontentaverageneusum": number
  "googlenewsperiodscontentaveragepossum": number
  "googlenewsperiodsbagofwords": string
}

export interface TwitterSentimentType {
  "id": number
  "tweetperiodsinstrument": string
  "tweetperiodscreateddate": string
  "tweetperiodscount": number
  "tweetperiodspositivecount": number
  "tweetperiodsnegativecount": number
  "tweetperiodsneutralcount": number
  "tweetperiodsreachsum": number
  "tweetperiodsreachpositivesum": number
  "tweetperiodsreachnegativesum": number
  "tweetperiodsreachneutralsum": number
  "tweetperiodsbagofwords": string
}

export interface ChartI {
  "createdDate": string,
  "tweetCount": number,
  "tweetPositiveCount": number,
  "tweetNegativeCount": number,
  "tweetReach": number,
  "tweetPositiveReach": number,
  "tweetNegativeReach": number,
  "stockValue": number,
  "googleNewsCount": number,
  "googleNewsPositiveCount": number,
  "googleNewsNegativeCount": number
}
export type TwitterNewsType = {
  "id": number
  "content": string
  "createddate": number
  "instrument": string
  "twitterid": string
  "searchphrase": string
  "accountid": string
  "reach": number
  "sentiment": string
  "sentimentscore": number
  "location": string
}

export type EntityConfigListType = {
  "instruments": string | null
  "timestamp": null
  "stocksymbols": string | null
  "articlesearchphrases": string | null
  "twittersearchphrases": string | null
  "id": number | null
  instrumentphoto: string | null
}

export type SentimentslistType = {
  sentenceid: number | null
  articlesentence: string
  articlesentiment: string
  sentimentscore: number | undefined

}

export interface PostsType {
  "id": number
  "username": string
  "text": string
  "likesCount": number
  "created": string
}
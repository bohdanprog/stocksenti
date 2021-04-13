export type GoogleNewsType = {
        id: number | undefined
        "instrument": string | null
        "createddate": null | number
        "titlesentiment": null | string
        "link": null | string
        "title": null | string
        "articleproviderlogolink": string | null
        "searchphrase": string | null
        "articlesentiment": string | null
        "articlesentimentscore": null
        "relatedsentenceswithsentiments": string | null
        "articleprovider": string | null
}

export type EntityConfigListType ={
    "instruments": string|null
    "timestamp":null
    "stocksymbols":string|null
    "articlesearchphrases":string|null
    "twittersearchphrases":string|null
    "id": number|null
    instrumentphoto: string | null
}

export type SentimentslistType ={
    articlesentence: string
    articlesentiment: 'negative' | 'neutral' | 'positive'
    sentimentscore: number | undefined

}
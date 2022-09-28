import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' 

export const FetchWordChartApi = createApi({
    reducerPath: 'FetchWordChartApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'f85029e6ffmsh0e4e6cf7f1636d6p1380f0jsncb410ba6b49c');
            headers.set('X-RapidAPI-Host','shazam-core.p.rapidapi.com');
            return headers;
        },
    }),
endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world'})
})
});

export const {useGetTopChartsQuery,} = FetchWordChartApi;
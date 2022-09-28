import {createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react' 

export const FetchWordChartApi = createApi({
    reducerPath: 'FetchWordChartApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', '');
            headers.set('X-RapidAPI-Host','shazam-core.p.rapidapi.com');
            return headers;
        },
    }),
endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world'})
})
});

export const {useGetTopChartsQuery,} = FetchWordChartApi;

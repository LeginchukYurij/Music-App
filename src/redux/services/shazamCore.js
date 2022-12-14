import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamCoreApi = createApi({
    reducerPath: 'shazamCoreApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://shazam-core.p.rapidapi.com/v1',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', 'b1d068de61msh7f511b0dabea13cp13d04fjsnc6bb41edff6d');
            headers.set('X-RapidAPI-Host', 'shazam-core.p.rapidapi.com');
            return headers;
        }
    }),
    endpoints: (builder) => ({
        getTopCharts: builder.query({ query: () => {
            return '/charts/world';
        } }),
        getSongDetails: builder.query({ query: (songid) => {
            return `/tracks/details?track_id=${songid}`;
        }}),
        getSongRelated: builder.query({ query: (songid) => {
            return `/tracks/related?track_id=${songid}`;
        } })
    })
});

export const { 
    useGetTopChartsQuery,
    useGetSongDetailsQuery, 
    useGetSongRelatedQuery
} = shazamCoreApi;


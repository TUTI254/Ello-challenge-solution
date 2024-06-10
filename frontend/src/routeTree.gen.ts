/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from '@tanstack/react-router'

// Import Routes

import { Route as rootRoute } from './routes/__root'

// Create Virtual Routes

const ReadingListLazyImport = createFileRoute('/reading-list')()
const IndexLazyImport = createFileRoute('/')()

// Create/Update Routes

const ReadingListLazyRoute = ReadingListLazyImport.update({
  path: '/reading-list',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/reading-list.lazy').then((d) => d.Route))

const IndexLazyRoute = IndexLazyImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any).lazy(() => import('./routes/index.lazy').then((d) => d.Route))

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexLazyImport
      parentRoute: typeof rootRoute
    }
    '/reading-list': {
      id: '/reading-list'
      path: '/reading-list'
      fullPath: '/reading-list'
      preLoaderRoute: typeof ReadingListLazyImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexLazyRoute,
  ReadingListLazyRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/reading-list"
      ]
    },
    "/": {
      "filePath": "index.lazy.tsx"
    },
    "/reading-list": {
      "filePath": "reading-list.lazy.tsx"
    }
  }
}
ROUTE_MANIFEST_END */

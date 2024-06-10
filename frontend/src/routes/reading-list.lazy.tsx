import { createLazyFileRoute } from '@tanstack/react-router'
import ReadingListPage from '../pages/ReadingListPage'

export const Route = createLazyFileRoute('/reading-list')({
  component: () => <ReadingListPage />,
})
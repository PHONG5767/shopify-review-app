import {
  Page,
  Layout,
  Text,
  Card, Box

} from '@shopify/polaris';
import { useLoaderData } from '@remix-run/react';
import { useState } from 'react';
export default function Index() {
  const [totalRating, setTotalRating] = useState(8);
  const [reviewRequests, setReviewRequests] = useState(8);
  const [reviewsCollected, setReviewsCollected] = useState(8);
  const [pageView, setPageView] = useState(8);
  const [uniqueVisitor, setUniqueVisitor] = useState(8);
  const [addToCart, setAddToCart] = useState(8);


  return (
    <Page
      title="Dashboard"
      actionGroups={[
        {
          title: 'All time',
          actions: [
            {
              content: 'Last 90 days',
              onAction: () => alert('Last 90 days'),
            },
            {
              content: 'Last 30 days',
              onAction: () => alert('Last 30 days'),
            },
            {
              content: 'Last 7 days',
              onAction: () => alert('Last 7 days'),
            },
            {
              content: 'Today',
              onAction: () => alert('Today'),
            },
          ],
        },
      ]}
    >
      <Layout>
        <Layout.Section variant="oneThird">
          <Card roundedAbove="sm">
            <Text as="h2" variant="headingSm">
              Average star rating
            </Text>
            <Box paddingBlockStart="200">
              <Text as="p" variant="bodyMd">
                {totalRating}
              </Text>
            </Box>
          </Card>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card roundedAbove="sm">
            <Text as="h2" variant="headingSm">
              Review Requests Sent
            </Text>
            <Box paddingBlockStart="200">
              <Text as="p" variant="bodyMd">
                {reviewRequests}
              </Text>
            </Box>
          </Card>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card roundedAbove="sm">
            <Text as="h2" variant="headingSm">
              Reviews Collected
            </Text>
            <Box paddingBlockStart="200">
              <Text as="p" variant="bodyMd">
                {reviewsCollected}
              </Text>
            </Box>
          </Card>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card roundedAbove="sm">
            <Text as="h2" variant="headingSm">
              Page View
            </Text>
            <Box paddingBlockStart="200">
              <Text as="p" variant="bodyMd">
                {pageView}
              </Text>
            </Box>
          </Card>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card roundedAbove="sm">
            <Text as="h2" variant="headingSm">
              Unique Visitor
            </Text>
            <Box paddingBlockStart="200">
              <Text as="p" variant="bodyMd">
                {uniqueVisitor}
              </Text>
            </Box>
          </Card>
        </Layout.Section>
        <Layout.Section variant="oneThird">
          <Card roundedAbove="sm">
            <Text as="h2" variant="headingSm">
              Add to cart
            </Text>
            <Box paddingBlockStart="200">
              <Text as="p" variant="bodyMd">
                {addToCart}
              </Text>
            </Box>
          </Card>
        </Layout.Section>
      </Layout>
    </Page>
  );
}
import {
  Page,
  Layout,
  Card,
  IndexTable,
  Button,
  Select,
  ButtonGroup,
  Badge,
  Modal,
  Tooltip,
  InlineStack,
  Tabs,
  Thumbnail,
  useBreakpoints,
  LegacyStack,
  DropZone,
  Checkbox,
  Frame,
} from '@shopify/polaris';
import { useLoaderData, json } from '@remix-run/react';
import { useState, useCallback, useMemo } from 'react';
import countryList from 'react-select-country-list';
import { ImageMajor, PlusMinor } from "@shopify/polaris-icons";
import { getProducts } from '~/models/QRCode.server';
import { authenticate } from '~/shopify.server';

import ReviewFormLayout from './modal/importAli';
import ReviewFormLayoutAmazon from './modal/importAmazon';
import ImportFileModal from './modal/importFile';

export async function loader({ request }) {
  const { admin, session } = await authenticate.admin(request);
  const products = await getProducts(session.shop, admin.graphql);
  return json({ products });
}

export default function Import() {
  const { products: productConnection } = useLoaderData();
  const products = productConnection.edges;

  const [value, setValue] = useState('');
  const optionsCountry = useMemo(() => countryList().getData(), []);
  const changeHandler = value => {
    setValue(value);
  };

  const [activeOpenView, setActiveOpenView] = useState(false);
  const handleOpenView = useCallback(() => setActiveOpenView(!activeOpenView), [activeOpenView]);

  const resourceName = {
    singular: 'product',
    plural: 'products',
  };

  const [url, setUrl] = useState('');
  const handleUrlChange = useCallback((valueInput) => setUrl(valueInput), []);

  const [selected, setSelected] = useState(0);
  const [modalActive, setModalActive] = useState(false);
  const handleTabChange = useCallback(
    (selectedTabIndex) => setSelected(selectedTabIndex),
    [],
  );

  const [selectedProductDetails, setSelectedProductDetails] = useState({ title: '', imageSrc: '', id: '' });
  const handleModalToggle = useCallback((productDetails) => {
    setModalActive(!modalActive);
    setSelectedProductDetails(productDetails);
  }, [modalActive]);

  const [selectedReview, setSelectedReview] = useState('All reviews');
  const handleSelectChange = useCallback(
    (Value) => setSelectedReview(Value),
    [],
  );

  const options = [
    { label: 'All reviews', value: 'reviews' },
    { label: 'Photo reviews only', value: 'Photo' },
    { label: 'Text reviews only', value: 'Text' },
    { label: 'Video reviews only', value: 'Text' },
  ];

  const [selectedQuantity, setSelectedQuantity] = useState("20");
  const handleSelectChangeQuantity = useCallback(
    (quantity) => setSelectedQuantity(quantity),
    [],
  );

  const optionsQuantity = [
    { label: "5", value: '5' },
    { label: "10", value: '10' },
    { label: "20", value: '20' },
    { label: "50", value: '50' },
    { label: "100", value: '100' },
    { label: "200", value: '200' },
    { label: "300", value: '300' },
    { label: "400", value: '400' },
    { label: "500", value: '500' },
  ];

  const [activeDelete, setActiveDelete] = useState(false);
  const toggleModal = useCallback(() => setActiveDelete((activeDelete) => !activeDelete), []);

  const rowMarkup = products.map((product, index) => {
    const { title, id } = product.node;
    const imageSrc = product.node.images.edges[0]?.node.src || ImageMajor;
    return (
      <IndexTable.Row id={product.node.id} key={product.node.id} position={index}>
        <IndexTable.Cell>
          <img
            alt={title}
            style={{ width: '50px', height: '50px' }}
            src={imageSrc}
          />
        </IndexTable.Cell>
        <IndexTable.Cell>{title}</IndexTable.Cell>
        <IndexTable.Cell>
          <Badge>Review</Badge>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <Button variant="primary" tone="critical" onClick={() => handleModalToggle({ title, imageSrc, id })}>
            Import Reviews
          </Button>
        </IndexTable.Cell>
        <IndexTable.Cell>
          <ButtonGroup variant="segmented">
            <Tooltip
              content={
                <InlineStack gap="200">
                  Delete Review
                </InlineStack>
              }
            >
              <Button onClick={toggleModal}><svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path data-v-0f7331dc="" data-v-08f7de98="" fill-rule="evenodd" clip-rule="evenodd" d="M10.2 3.2H12.6C13.0418 3.2 13.4 3.55817 13.4 4L13.4 4.8H0.599976L0.599997 4C0.599997 3.55817 0.958169 3.2 1.4 3.2H3.8V1.2C3.8 0.537258 4.33725 0 5 0H9C9.66274 0 10.2 0.537259 10.2 1.2V3.2ZM5.4 1.6V3.2H8.6V1.6H5.4Z" fill="#5C5F62"></path><path data-v-0f7331dc="" data-v-08f7de98="" fill-rule="evenodd" clip-rule="evenodd" d="M1.4 6.4H12.6V14.8C12.6 15.4627 12.0627 16 11.4 16H2.6C1.93726 16 1.4 15.4627 1.4 14.8V6.4ZM4.59998 8.8H2.99998V13.6H4.59998V8.8ZM7.79998 8.8H6.19998V13.6H7.79998V8.8ZM9.39997 8.8H11V13.6H9.39997V8.8Z" fill="#5C5F62"></path></svg></Button>
            </Tooltip>
            <Tooltip
              content={
                <InlineStack gap="200">
                  View Details
                </InlineStack>
              }
            >
              <Button onClick={handleOpenView}><svg width="14" height="16" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M19.928 9.629C17.791 4.286 13.681 1.85 9.573 2.064c-4.06.21-7.892 3.002-9.516 7.603L-.061 10l.118.333c1.624 4.601 5.455 7.393 9.516 7.603 4.108.213 8.218-2.222 10.355-7.565l.149-.371-.149-.371zM10 15a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"></path><circle cx="10" cy="10" r="3"></circle></svg></Button>
            </Tooltip>
          </ButtonGroup>
        </IndexTable.Cell>
      </IndexTable.Row>
    );
  });

  const tabs = [
    {
      id: 'AliExpress-import',
      content: 'Import from AliExpress',
      panel: <div><ReviewFormLayout
        url={url}
        handleUrlChange={handleUrlChange}
        selectedReview={selectedReview}
        handleSelectChange={handleSelectChange}
        selectedQuantity={selectedQuantity}
        handleSelectChangeQuantity={handleSelectChangeQuantity}
        optionsCountry={optionsCountry}
        changeHandler={changeHandler}
        options={options}
        optionsQuantity={optionsQuantity}
        value={value}
        imageSrc={selectedProductDetails.imageSrc}
        title={selectedProductDetails.title}
        id={selectedProductDetails.id}
      /></div>
    },
    {
      id: 'Amazon-import',
      content: 'Import from Amazon',
      panel: <div><ReviewFormLayoutAmazon
        url={url}
        handleUrlChange={handleUrlChange}
        selectedReview={selectedReview}
        handleSelectChange={handleSelectChange}
        selectedQuantity={selectedQuantity}
        handleSelectChangeQuantity={handleSelectChangeQuantity}
        optionsCountry={optionsCountry}
        changeHandler={changeHandler}
        options={options}
        optionsQuantity={optionsQuantity}
        value={value}
        imageSrc={selectedProductDetails.imageSrc}
        title={selectedProductDetails.title}
        id={selectedProductDetails.id}
      /></div>

    },
    {
      id: 'file-import',
      content: 'Import file',
      panel: <div><ImportFileModal /></div>

    },
  ];

  return (
    <Page
      title="Review"
      primaryAction={{ content: 'Export all review', icon: PlusMinor }}
      pagination={{
        hasNext: true,
      }}
    >
      <Layout>
        <Layout.Section>
          <Card>
            <IndexTable
              resourceName={resourceName}
              itemCount={products.length}
              headings={[
                { title: 'Product' },
                { title: 'Title' },
                { title: 'Reviews' },
                { title: 'Import' },
                { title: 'Action' },
              ]}
              selectable={false}
              condensed={useBreakpoints().smDown}
            >
              {rowMarkup}
            </IndexTable>
          </Card>
        </Layout.Section>
      </Layout>
      <Modal
        open={modalActive}
        title={tabs[selected].content}
        onClose={() => handleModalToggle({ title: '', imageSrc: '', id: '' })}
        primaryAction={{
          content: 'Submit',
          onAction: handleModalToggle,
        }}
        secondaryActions={[
          {
            content: 'Cancel',
            onAction: handleModalToggle,
          },
        ]}
      >
        <Modal.Section>
          <Tabs
            tabs={tabs}
            selected={selected}
            onSelect={handleTabChange}
            disclosureText="More views"
          >
            {tabs[selected].panel}
          </Tabs>
        </Modal.Section>
      </Modal>

      <div style={{ height: '500px' }}>
        <Modal
          open={activeDelete}
          onClose={toggleModal}
          title="Discard all unsaved changes"
          primaryAction={{
            destructive: true,
            content: 'Discard changes',
            onAction: toggleModal,
          }}
          secondaryActions={[
            {
              content: 'Continue editing',
              onAction: toggleModal,
            },
          ]}
        >
          <Modal.Section>
            If you discard changes, you’ll delete any edits you made since you
            last saved.
          </Modal.Section>
        </Modal>
      </div>
    </Page>
  );
}

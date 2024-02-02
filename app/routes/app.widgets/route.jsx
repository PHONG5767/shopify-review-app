import { Page, Layout, LegacyCard, Text, Icon, Button } from "@shopify/polaris";
import ToggleSwitch from "./component/toggleSwitch";
import HeadLayoutTemplate from "./component/radioCheckbox/index";
import React, { useState, useCallback } from "react";
import styled from "styled-components";
import RatingStart from "./component/startRating";
import ProcessRating from "./component/processRating";
import SelectedReview from "./component/selectReview";
import CustomerReviews from "./component/showPhoto";
import AllRereview from "./component/allReview";
import PaginationControlled from "~/layouts/pagination";
import { useForm, useWatch, FormProvider } from "react-hook-form";
import ColorPicker from "~/layouts/colorPicker";
import * as ReviewSummarys from "./customLayout"

const { ReviewSummary, Selected } = ReviewSummarys;

const StickyReviewWidget = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  margin-bottom: 1rem;
  padding: 1rem;
  border-bottom: 1px solid #ddd;      
  z-index: 99;
  background-color: #fff;
  font-weight: 600;
  font-size: 16px;
`;
const Section = styled.div`
max-width: 800px;
display: flex;
flex-direction: column;
justify-content: center;
`;
const SectionContainer = styled.div`
width:100%;
display:flex;
justify-content:center;
flex-direction: column;
align-items:center;
`;
const StyledButton = styled(Button)`
background-color: #000;
`
export default function Widgets() {
  const [selectedOption, setSelectedOption] = useState("regular");
  const [imageSrc, setImageSrc] = useState({
    regular:
      "https://cdn.vstar.app/static/images/webp/display/regular-header-active.webp",
    streamlined:
      "https://cdn.vstar.app/static/images/webp/display/streamlined-header.webp",
  });

  const handleChange = useCallback((newOption) => {
    setSelectedOption(newOption);
    if (newOption === "regular") {
      setImageSrc({
        regular:
          "https://cdn.vstar.app/static/images/webp/display/regular-header-active.webp",
        streamlined:
          "https://cdn.vstar.app/static/images/webp/display/streamlined-header.webp",
      });
    } else if (newOption === "streamlined") {
      setImageSrc({
        regular:
          "https://cdn.vstar.app/static/images/webp/display/regular-header.webp",
        streamlined:
          "https://cdn.vstar.app/static/images/webp/display/streamlined-header-active.webp",
      });
    }
  }, []);

  const customerReview = [{ "customer_id": "2edb3c29-02fd-4b33-bde3-6a89e5aa9bd7", "rating": 3, "customer_name": "Tom Johnson", "content": "Average experience, there is a room for improvement.", "image": "https://cdn.tgdd.vn/comment/54850984/IMG_1689251675809_1689251708346FKO7P.jpg" }, { "customer_id": "a56c3ae9-b2dc-46bb-a120-5bbe08d98a98", "rating": 5, "customer_name": "Isla Johnson", "content": "Not happy with the purchase. Had some issues with the product.", "image": "https://cdn.tgdd.vn/comment/54850984/IMG_1689084295606_16890866866286YZ99.jpg" }, { "customer_id": "3ff8172a-f67c-4049-9b64-57ed8e06fcde", "rating": 2, "customer_name": "Bruce Davis", "content": "Average experience, there is a room for improvement.", "image": "https://cdn.tgdd.vn/comment/54746557/1688360379016346186296665413585994DZO.jpg" }, { "customer_id": "d883fb78-64ed-47bd-9687-bd7721b071f7", "rating": 3, "customer_name": "Corey Miller", "content": "Average experience, there is a room for improvement.", "image": "https://cdn.tgdd.vn/comment/54746557/16883604390336722601762356896777GB2NH.jpg" }, { "customer_id": "0bbdc68d-34a7-4720-a840-7231380d33ef", "rating": 2, "customer_name": "Isla Johnson", "content": "Excellent service and product quality, will buy again!", "image": "https://cdn.tgdd.vn/comment/54746557/16883604390336722601762356896777GB2NH.jpg" }, { "customer_id": "8f748443-1ea7-4776-ba98-bc51f3fe18e2", "rating": 3, "customer_name": "Nicole Doe", "content": "Good value for money, quite satisfied with what I got.", "image": "https://via.placeholder.com/150?text=Review+8f748443" }, { "customer_id": "32e287f9-d3d5-4564-bca1-1cfe5cf165b3", "rating": 5, "customer_name": "Peter Garcia", "content": "Excellent service and product quality, will buy again!", "image": "https://via.placeholder.com/150?text=Review+32e287f9" }, { "customer_id": "cff2c09d-ea96-452c-bd4c-0d37b09a6372", "rating": 4, "customer_name": "Nicole Jones", "content": "Good value for money, quite satisfied with what I got.", "image": "https://via.placeholder.com/150?text=Review+cff2c09d" }, { "customer_id": "24bd88b7-9e89-44b0-840f-514198cd48b7", "rating": 1, "customer_name": "Bruce Johnson", "content": "Wonderful experience! The product exceeded my expectations!", "image": "https://via.placeholder.com/150?text=Review+24bd88b7" }, { "customer_id": "1cd31f9a-c6d8-437f-b4fa-f1fa73775d80", "rating": 4, "customer_name": "Katie Johnson", "content": "Wonderful experience! The product exceeded my expectations!", "image": "https://via.placeholder.com/150?text=Review+1cd31f9a" }, { "customer_id": "4cfbacd7-97a3-4547-af68-b2fc38b8d748", "rating": 3, "customer_name": "Peter Smith", "content": "Not happy with the purchase. Had some issues with the product.", "image": "https://via.placeholder.com/150?text=Review+4cfbacd7" }, { "customer_id": "e9cae859-6ec6-41be-a1d6-d52149bfa312", "rating": 3, "customer_name": "Jane Garcia", "content": "Average experience, there is a room for improvement.", "image": "https://via.placeholder.com/150?text=Review+e9cae859" }, { "customer_id": "04b43c2f-3939-40cb-92d9-333a909da1e4", "rating": 4, "customer_name": "Emma Smith", "content": "Average experience, there is a room for improvement.", "image": "https://via.placeholder.com/150?text=Review+04b43c2f" }, { "customer_id": "4ec51617-c277-49f0-b4dd-a1dab99fbed4", "rating": 1, "customer_name": "Jane Jones", "content": "Average experience, there is a room for improvement.", "image": "https://via.placeholder.com/150?text=Review+4ec51617" }, { "customer_id": "4b738ec9-af21-4fec-a528-e0a25226a7b0", "rating": 5, "customer_name": "Nicole Davis", "content": "Excellent service and product quality, will buy again!", "image": "https://via.placeholder.com/150?text=Review+4b738ec9" }, { "customer_id": "dce60f78-febc-4b34-8833-9bbe2988cb1d", "rating": 1, "customer_name": "Emma Johnson", "content": "Good value for money, quite satisfied with what I got.", "image": null }, { "customer_id": "b0a12f9e-7696-49ef-9469-f38fedc05c93", "rating": 5, "customer_name": "Tom Doe", "content": "Not happy with the purchase. Had some issues with the product.", "image": null }, { "customer_id": "b11dbefc-1ec6-4abb-882d-86090afb5c4f", "rating": 4, "customer_name": "Corey Smith", "content": "Wonderful experience! The product exceeded my expectations!", "image": null }, { "customer_id": "8077b1a5-362f-40e6-a2a4-8c6ce449c839", "rating": 4, "customer_name": "Peter Doe", "content": "Wonderful experience! The product exceeded my expectations!", "image": null }, { "customer_id": "32687e3a-6ef3-46bb-9c9e-43d14e3800c5", "rating": 4, "customer_name": "Corey Smith", "content": "Not happy with the purchase. Had some issues with the product.", "image": null }, { "customer_id": "32da5ea4-f42a-40b0-9c98-f8fcc4431261", "rating": 4, "customer_name": "Corey Doe", "content": "Not happy with the purchase. Had some issues with the product.", "image": null }, { "customer_id": "5d27fd95-ee5f-4553-97f9-805375116474", "rating": 5, "customer_name": "Katie Jones", "content": "Not happy with the purchase. Had some issues with the product.", "image": null }, { "customer_id": "ca86907a-c6a1-4667-8862-d774b9739923", "rating": 5, "customer_name": "Bruce Garcia", "content": "Wonderful experience! The product exceeded my expectations!", "image": null }, { "customer_id": "25c38414-ac3b-4865-8b6a-32c66e253e70", "rating": 2, "customer_name": "Nicole Garcia", "content": "Average experience, there is a room for improvement.", "image": null }, { "customer_id": "c1a1ffc6-592f-4278-a005-7a7757f7bedb", "rating": 1, "customer_name": "Nicole Miller", "content": "Good value for money, quite satisfied with what I got.", "image": null }, { "customer_id": "eaebc583-e67e-4f26-9956-001519637510", "rating": 2, "customer_name": "Emma Doe", "content": "Excellent service and product quality, will buy again!", "image": null }, { "customer_id": "7ebbf2f8-fd7a-47ec-b9ce-c314923c498b", "rating": 3, "customer_name": "Jane Smith", "content": "Not happy with the purchase. Had some issues with the product.", "image": null }, { "customer_id": "64143852-ed9f-4691-9a42-218475371ad7", "rating": 4, "customer_name": "Peter Wilson", "content": "Good value for money, quite satisfied with what I got.", "image": null }, { "customer_id": "96267a06-91a3-4d95-a4bc-3123ffeedbd9", "rating": 3, "customer_name": "Jane Brown", "content": "Average experience, there is a room for improvement.", "image": null }, { "customer_id": "a8e5f813-8c01-4a1c-9f95-7e0589220ab0", "rating": 4, "customer_name": "Peter Davis", "content": "Good value for money, quite satisfied with what I got.", "image": null }];
  const totalRatings = customerReview.reduce((sum, review) => sum + review.rating, 0);
  const rating = totalRatings / customerReview.length;
  const totalReview = customerReview.length;

  const [currentPage, setCurrentPage] = useState(1);
  const reviewsPerPage = 10;
  const indexOfLastReview = currentPage * reviewsPerPage;
  const indexOfFirstReview = indexOfLastReview - reviewsPerPage;
  const currentReviews = customerReview.slice(indexOfFirstReview, indexOfLastReview);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const formMethods = useForm({
    defaultValues: {
      starColor: "#F29D38",
      DisabledStar: "#d9d9d9",
      ratingColor: "#F29D38",
      fontSize: "30px",
      fontWeight: "bold",
      textColor: "#000000",
      processWidth: "80px",
      processHeight: "8px",
      fontSizeRating:"14px",
    },
  });

  const { register } = formMethods;
  return (
    <Page fullWidth>
      <FormProvider {...formMethods}>
        <form>
          <Layout>
            <Layout.Section variant="oneThird">
              <StickyReviewWidget>Review widget</StickyReviewWidget>
              <LegacyCard sectioned>
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col">
                    <Text as="h2" variant="headingSm">
                      Activate Review Widget
                    </Text>
                    <p>
                      Display customer reviews at the bottom of the product page.
                    </p>
                  </div>
                  <ToggleSwitch />
                </div>
              </LegacyCard>
              <LegacyCard sectioned>
                <div>
                  <HeadLayoutTemplate
                    imageSrc={imageSrc}
                    selectedOption={selectedOption}
                    handleChange={handleChange} />
                </div>
                <div className="flex flex-col items-">
                  <div className="flex flex-row w-full mb-3">
                    <div className="flex flex-row w-2/4">
                      <ColorPicker register={register} nameColor="starColor" />
                      <p className="ml-3">Star color</p>
                    </div>
                    <div className="flex flex-row w-2/4">
                      <ColorPicker register={register} nameColor="DisabledStar" />
                      <p className="ml-3">Disabled star</p>
                    </div>
                  </div>
                  <div className="flex flex-row w-full mb-3">
                    <div className="flex flex-row w-2/4">
                      <ColorPicker register={register} nameColor="ratingColor" />
                      <p className="ml-3">Color total rating</p>
                    </div>
                    <div className="flex flex-row w-2/4">
                      <ColorPicker register={register} nameColor="textColor" />
                      <p className="ml-3">Text color rating</p>
                    </div>
                  </div>
                  <div className="flex flex-row w-full mb-3">

                  </div>
                </div>
                <div className="flex flex-col w-full">
                  <p>Name</p>
                  <div className="flex flex-row w-full mb-3">
                    <Selected name="fontSize" options={["20px", "22px", "24px", "26px", "30px", "32px", "34px", "36px", "38px", "40px"]} />
                  </div>
                  <p>Name</p>
                  <div className="flex flex-row w-full mb-3">
                    <Selected name="fontSizeRating" options={["12px","14px","16px","18px","20px", "22px","24px"]} />
                  </div>
                  <p>Name</p>
                  <div className="flex flex-row w-full mb-3">
                    <Selected name="processHeight" options={["3px", "5px", "6px", "7px", "8px", "9px", "10px"]} />
                  </div>
                  <p>Name</p>
                  <div className="flex flex-row w-full mb-3">
                    <Selected name="processWidth" options={["80px", "85px", "90px", "95px", "100px", "105px", "110px", "115px", "120px"]} />
                  </div>
                </div>
              </LegacyCard>
            </Layout.Section>
            <Layout.Section>
              <StickyReviewWidget>Example</StickyReviewWidget>
              <LegacyCard sectioned>
                <SectionContainer>
                  <Section>
                    <div className="p-3 rounded mb-px" style={{ background: `#A30DFF3B` }}>
                      <div className="flex flex-row">
                        <svg xmlns="http://www.w3.org/2000/svg" width="21" height="21" viewBox="0 0 21 21" fill="none">
                          <path d="M9.1875 3.9375L9.84375 2.625L11.1562 1.96875L9.84375 1.3125L9.1875 0L8.53125 1.3125L7.21875 1.96875L8.53125 2.625L9.1875 3.9375ZM3.28125 6.5625L4.37473 4.37514L6.5625 3.28125L4.37473 2.18736L3.28125 0L2.18777 2.18736L0 3.28125L2.18777 4.37514L3.28125 6.5625ZM17.7188 11.8125L16.6253 13.9999L14.4375 15.0938L16.6253 16.1876L17.7188 18.375L18.8122 16.1876L21 15.0938L18.8122 13.9999L17.7188 11.8125ZM20.6153 3.8649L17.1351 0.384727C16.8792 0.127969 16.5432 0 16.2073 0C15.8714 0 15.5355 0.127969 15.2791 0.384727L0.384727 15.2791C-0.127969 15.7918 -0.127969 16.6228 0.384727 17.1351L3.8649 20.6153C4.12125 20.8716 4.45717 20.9996 4.79268 20.9996C5.12859 20.9996 5.46451 20.8716 5.72086 20.6153L20.6153 5.72045C21.128 5.20857 21.128 4.37719 20.6153 3.8649ZM14.7431 8.34504L12.655 6.25693L16.2069 2.70498L18.295 4.79309L14.7431 8.34504Z" fill="url(#paint0_linear_7_3)" />
                          <defs>
                            <linearGradient id="paint0_linear_7_3" x1="10.5" y1="0" x2="10.5" y2="20.9996" gradientUnits="userSpaceOnUse">
                              <stop stop-color="#A30DFF" />
                              <stop offset="0.973958" stop-color="#080009" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="font-bold text-lg ml-2" style={{ background: 'linear-gradient(90deg, #000000 0%, #A30DFF 59.03%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text', color: 'transparent' }}>AI Neutral-Analysis Reviews</div>
                      </div>
                      <div>Almost people think that’s this product is slight thin; It would be more better if more thick.<br />
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam vel at vulputate commodo sed tristique ac sapien. Nunc, aliquet id faucibus dictum faucibus tempor elementum in.</div>
                    </div>
                    <div className="flex flex-row justify-between mt-3">
                      <div className="flex flex-row">
                        <div className="flex items-center flex-col pr-6 border-r-2 justify-center">
                          <ReviewSummary rating={rating} />
                          <div className="mt-3 mb-3">
                            <RatingStart rating={rating} size='30px' />
                          </div>
                          <div>{totalReview} Review</div>
                        </div>
                        <div className="pl-2 flex flex-col">
                          <ProcessRating
                            customerReview={customerReview}
                            totalReview={totalReview} />
                          <div className="mt-3 w-full"><StyledButton fullWidth tone="success">Write a review</StyledButton></div>
                        </div>
                      </div>
                      <div className="flex flex-row items-center">
                        <SelectedReview />
                      </div>
                    </div>
                    <div className="flex flex-col">
                      <div className="text-lg font-bold">Customers’ photos</div>
                      <CustomerReviews customerReview={customerReview} />
                      <AllRereview customerReview={currentReviews} />
                    </div>
                    <PaginationControlled
                      currentPage={currentPage}
                      handleChangePage={handleChangePage}
                      totalReviews={customerReview.length}
                      reviewsPerPage={reviewsPerPage}
                    />
                  </Section>
                </SectionContainer>
              </LegacyCard>
            </Layout.Section>
          </Layout>
        </form>
      </FormProvider>
    </Page>
  );
}

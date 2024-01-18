import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();


// Hàm lấy thông tin chi tiết sản phẩm từ Shopify

// Hàm lấy thông tin sản phẩm từ cơ sở dữ liệu
export async function getProducts(shop, graphql) {
  const response = await graphql(
    `
    query MyQuery {
        products(first: 50) {
          edges {
            node {
              id
              title
              images(first: 1) {
                edges {
                  node {
                    src
                  }
                }
              }
              variants(first: 1) {
                edges {
                  node {
                    price
                  }
                }
              }
            }
          }
        }     
    }
    `,
  );

  const { data } = await response.json();

  return data.products;
}

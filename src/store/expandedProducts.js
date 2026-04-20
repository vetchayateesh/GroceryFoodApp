import { products } from "./products";

const getProductImage = (itemName, categoryName, itemId) => {
  const keywords = `${itemName},${categoryName},food`;

  // lock keeps each item image stable and different across products
  return `https://loremflickr.com/640/480/${encodeURIComponent(keywords)}?lock=${itemId}`;
};

const additionalItemsByCategory = {
  Meat: [
    {
      name: "Turkey Meat",
      img: "https://images.unsplash.com/photo-1602475481407-74b402f1459e?auto=format&fit=crop&w=800&q=80",
      price: 9.49,
      quantity: 1,
      unit: "kg",
      reviews: 4.3,
      reviewCount: 21,
    },
    {
      name: "Duck Meat",
      img: "https://images.unsplash.com/photo-1548943487-a2e4e43b4853?auto=format&fit=crop&w=800&q=80",
      price: 11.25,
      quantity: 1,
      unit: "kg",
      reviews: 4.4,
      reviewCount: 19,
    },
    {
      name: "Mutton Cubes",
      img: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?auto=format&fit=crop&w=800&q=80",
      price: 13.5,
      quantity: 1,
      unit: "kg",
      reviews: 4.6,
      reviewCount: 33,
    },
    {
      name: "Chicken Mince",
      img: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
      price: 7.75,
      quantity: 1,
      unit: "kg",
      reviews: 4.2,
      reviewCount: 26,
    },
  ],
  Vegetables: [
    {
      name: "Onion",
      img: "https://images.unsplash.com/photo-1508747703725-719777637510?auto=format&fit=crop&w=800&q=80",
      price: 1.59,
      quantity: 1,
      unit: "kg",
      reviews: 4.4,
      reviewCount: 24,
    },
    {
      name: "Potato",
      img: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=800&q=80",
      price: 1.29,
      quantity: 1,
      unit: "kg",
      reviews: 4.5,
      reviewCount: 31,
    },
    {
      name: "Cucumber",
      img: "https://images.unsplash.com/photo-1449300079323-02e209d9d3a6?auto=format&fit=crop&w=800&q=80",
      price: 1.85,
      quantity: 1,
      unit: "kg",
      reviews: 4.3,
      reviewCount: 18,
    },
    {
      name: "Cauliflower",
      img: "https://images.unsplash.com/photo-1568584711271-8218f96f5d0f?auto=format&fit=crop&w=800&q=80",
      price: 2.15,
      quantity: 1,
      unit: "kg",
      reviews: 4.2,
      reviewCount: 20,
    },
  ],
  Fruits: [
    {
      name: "Mango",
      img: "https://images.unsplash.com/photo-1553279768-865429fa0078?auto=format&fit=crop&w=800&q=80",
      price: 2.99,
      quantity: 1,
      unit: "kg",
      reviews: 4.8,
      reviewCount: 41,
    },
    {
      name: "Pomegranate",
      img: "https://images.unsplash.com/photo-1619566636858-adf3ef46400b?auto=format&fit=crop&w=800&q=80",
      price: 3.79,
      quantity: 1,
      unit: "kg",
      reviews: 4.5,
      reviewCount: 27,
    },
    {
      name: "Papaya",
      img: "https://images.unsplash.com/photo-1617112848923-cc2234396a8f?auto=format&fit=crop&w=800&q=80",
      price: 2.25,
      quantity: 1,
      unit: "kg",
      reviews: 4.4,
      reviewCount: 22,
    },
    {
      name: "Guava",
      img: "https://images.unsplash.com/photo-1594282486552-05a0f1c7f99b?auto=format&fit=crop&w=800&q=80",
      price: 2.1,
      quantity: 1,
      unit: "kg",
      reviews: 4.2,
      reviewCount: 16,
    },
  ],
  Dairy: [
    {
      name: "Paneer",
      img: "https://images.unsplash.com/photo-1645177628172-a94c1f96b760?auto=format&fit=crop&w=800&q=80",
      price: 4.25,
      quantity: 1,
      unit: "kg",
      reviews: 4.8,
      reviewCount: 38,
    },
    {
      name: "Ghee",
      img: "https://images.unsplash.com/photo-1598971704657-b4f5f8e8bce3?auto=format&fit=crop&w=800&q=80",
      price: 5.49,
      quantity: 1,
      unit: "ltr",
      reviews: 4.7,
      reviewCount: 35,
    },
    {
      name: "Curd",
      img: "https://images.unsplash.com/photo-1571212515416-fca88e8e7d35?auto=format&fit=crop&w=800&q=80",
      price: 2.2,
      quantity: 1,
      unit: "kg",
      reviews: 4.4,
      reviewCount: 23,
    },
    {
      name: "Cream",
      img: "https://images.unsplash.com/photo-1559563362-c667ba5f5480?auto=format&fit=crop&w=800&q=80",
      price: 3.65,
      quantity: 1,
      unit: "kg",
      reviews: 4.3,
      reviewCount: 20,
    },
  ],
  Grains: [
    {
      name: "Quinoa",
      img: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
      price: 5.15,
      quantity: 1,
      unit: "kg",
      reviews: 4.4,
      reviewCount: 18,
    },
    {
      name: "Millets",
      img: "https://images.unsplash.com/photo-1604908177225-4d4cf0a1d57d?auto=format&fit=crop&w=800&q=80",
      price: 3.35,
      quantity: 1,
      unit: "kg",
      reviews: 4.6,
      reviewCount: 26,
    },
    {
      name: "Corn",
      img: "https://images.unsplash.com/photo-1551754655-cd27e38d2076?auto=format&fit=crop&w=800&q=80",
      price: 2.75,
      quantity: 1,
      unit: "kg",
      reviews: 4.3,
      reviewCount: 22,
    },
    {
      name: "Ragi",
      img: "https://images.unsplash.com/photo-1515543904379-3d757afe72e3?auto=format&fit=crop&w=800&q=80",
      price: 2.95,
      quantity: 1,
      unit: "kg",
      reviews: 4.5,
      reviewCount: 24,
    },
  ],
};

const allExistingIds = products.flatMap((category) =>
  category.items.map((item) => item.id)
);

let generatedId = Math.max(...allExistingIds) + 1;

const normalizeItem = (item) => {
  const quantity = Number.parseFloat(item.quantity) || 1;
  const price = Number.parseFloat(item.price) || 0;
  const hasUnsplashImage =
    typeof item.img === "string" &&
    (item.img.includes("source.unsplash.com") || item.img.includes("images.unsplash.com"));

  return {
    ...item,
    img:
      !item.img || hasUnsplashImage
        ? getProductImage(item.name, item.categoryName, item.id)
        : item.img,
    quantity,
    total: Number.parseFloat((quantity * price).toFixed(2)),
  };
};

export const productsWithEightItems = products.map((category) => {
  const existingItems = category.items.map((item) =>
    normalizeItem({ ...item, categoryName: category.category })
  );
  const additionalItems = (additionalItemsByCategory[category.category] || []).map((item) => {
    const normalized = normalizeItem({
      ...item,
      id: generatedId,
      categoryName: category.category,
    });

    return {
      ...normalized,
      id: generatedId++,
    };
  });

  return {
    ...category,
    items: [...existingItems, ...additionalItems],
  };
});

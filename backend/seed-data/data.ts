function timestamp() {
  // sometime in the last 30 days
  const stampy =
    Date.now() - Math.floor(Math.random() * 1000 * 60 * 60 * 24 * 30);
  return new Date(stampy).toISOString();
}

export const products = [
  {
    name: '2015 Zinfandel',
    description: 'Zinfandel Paso Robles',
    status: 'AVAILABLE',
    price: 2500,
    photo: {
      id: '6efbed262849d7961377c2c0',
      filename: '2015_zin.jpg',
      originalFilename: '2015_zin.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'trnwine-keystone/6efbed262849d7961377c2c0',
        version: 1576791335,
        signature: '9f7d5115788b7677307a39214f9684dd827ea5f9',
        width: 750,
        height: 457,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 27871,
        type: 'upload',
        etag: 'e1fdf84d5126b6ca2e1c8ef9532be5a5',
        placeholder: false,
        url:
          'http://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg',
        secure_url:
          'https://res.cloudinary.com/wesbos/image/upload/v1576791335/sick-fits-keystone/5dfbed262849d7961377c2c0.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: null,
    // updatedBy: null,
    // updatedAt_utc: '2020-12-19T21:35:35.739Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-12-19T21:35:35.739Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: '2016 Zinfandel',
    description: 'Zinfandel Paso Robles',
    status: 'AVAILABLE',
    price: 2500,
    photo: {
      id: '5e2a13f0689b2835ae71d1a5',
      filename: '270-camo-sunset.jpg',
      originalFilename: '270-camo-sunset.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sick-fits-keystone/5e2a13f0689b2835ae71d1a5',
        version: 1579815920,
        signature: 'a430b2d35f6a03dc562f6f56a474deb6810e393f',
        width: 960,
        height: 640,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 45455,
        type: 'upload',
        etag: 'aebe8e9cc98ee4ad71682f19af85745b',
        placeholder: false,
        url:
          'http://res.cloudinary.com/wesbos/image/upload/v1579815920/sick-fits-keystone/5e2a13f0689b2835ae71d1a5.jpg',
        secure_url:
          'https://res.cloudinary.com/wesbos/image/upload/v1579815920/sick-fits-keystone/5e2a13f0689b2835ae71d1a5.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:20.833Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:20.833Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: '2016 Disorder',
    description: 'Grenache Paso Robles',
    status: 'AVAILABLE',
    price: 3500,
    photo: {
      id: '5e2a13ff689b2835ae71d1a7',
      filename: 'kith-hoodie.jpg',
      originalFilename: 'kith-hoodie.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sick-fits-keystone/5e2a13ff689b2835ae71d1a7',
        version: 1579815935,
        signature: '360df116020320a14845cf235b87a4a5cdc23f86',
        width: 2000,
        height: 2000,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 202924,
        type: 'upload',
        etag: 'b6fbc18b196c68e2b87f51539b849e70',
        placeholder: false,
        url:
          'http://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg',
        secure_url:
          'https://res.cloudinary.com/wesbos/image/upload/v1579815935/sick-fits-keystone/5e2a13ff689b2835ae71d1a7.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:36.012Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:36.012Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: '2018 Cabernet Sauvignon',
    description: 'Cabernet Sauvignon Paso Robles',
    status: 'AVAILABLE',
    price: 3500,
    photo: {
      id: '5e2a1413689b2835ae71d1a9',
      filename: 'TNF-fanorak.png',
      originalFilename: 'TNF-fanorak.png',
      mimetype: 'image/png',
      encoding: '7bit',
      _meta: {
        public_id: 'sick-fits-keystone/5e2a1413689b2835ae71d1a9',
        version: 1579815957,
        signature: 'affd16fa20107a4d5399aab553ea77fff1c4b2ef',
        width: 1276,
        height: 1490,
        format: 'png',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 2454948,
        type: 'upload',
        etag: 'ce0f36da93c60c5d4406657225206f70',
        placeholder: false,
        url:
          'http://res.cloudinary.com/wesbos/image/upload/v1579815957/sick-fits-keystone/5e2a1413689b2835ae71d1a9.png',
        secure_url:
          'https://res.cloudinary.com/wesbos/image/upload/v1579815957/sick-fits-keystone/5e2a1413689b2835ae71d1a9.png',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:45:58.336Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:45:58.336Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: '2019 Rosé',
    description: 'Paso Robles',
    status: 'AVAILABLE',
    price: 2000,
    photo: {
      id: '5e2a142c689b2835ae71d1ab',
      filename: 'vapormax.jpg',
      originalFilename: 'vapormax.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sick-fits-keystone/5e2a142c689b2835ae71d1ab',
        version: 1579815980,
        signature: '6dd95447407c06ba955164c4961bd4abc2fb9f4d',
        width: 1100,
        height: 735,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 183071,
        type: 'upload',
        etag: '5550566c7fab113ba32d85ed08f54faa',
        placeholder: false,
        url:
          'http://res.cloudinary.com/wesbos/image/upload/v1579815980/sick-fits-keystone/5e2a142c689b2835ae71d1ab.jpg',
        secure_url:
          'https://res.cloudinary.com/wesbos/image/upload/v1579815980/sick-fits-keystone/5e2a142c689b2835ae71d1ab.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:46:21.015Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:46:21.015Z',
    // createdAt_offset: '+00:00',
  },
  {
    name: '2017 Chardonnay',
    description: 'Chardonnay Paso Robles',
    status: 'AVAILABLE',
    price: 2500,
    photo: {
      id: '5e2a143f689b2835ae71d1ad',
      filename: 'coral-yeti.jpg',
      originalFilename: 'coral-yeti.jpg',
      mimetype: 'image/jpeg',
      encoding: '7bit',
      _meta: {
        public_id: 'sick-fits-keystone/5e2a143f689b2835ae71d1ad',
        version: 1579815999,
        signature: '97e8f27cdbb6a736062391b9ac3a5c689bd50646',
        width: 1300,
        height: 1144,
        format: 'jpg',
        resource_type: 'image',
        created_at: timestamp(),
        tags: [],
        bytes: 286643,
        type: 'upload',
        etag: '3655bfd83998492b8421782db868c9df',
        placeholder: false,
        url:
          'http://res.cloudinary.com/wesbos/image/upload/v1579815999/sick-fits-keystone/5e2a143f689b2835ae71d1ad.jpg',
        secure_url:
          'https://res.cloudinary.com/wesbos/image/upload/v1579815999/sick-fits-keystone/5e2a143f689b2835ae71d1ad.jpg',
        original_filename: 'file',
      },
    },
    // createdBy: '5de9a29642ca551f24c596ba',
    // updatedBy: '5de9a29642ca551f24c596ba',
    // updatedAt_utc: '2020-01-23T21:46:40.526Z',
    // updatedAt_offset: '+00:00',
    // createdAt_utc: '2020-01-23T21:46:40.526Z',
    // createdAt_offset: '+00:00',
  },
];

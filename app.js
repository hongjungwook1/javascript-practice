const express = require('express');
const bodyParser = require('body-parser');
const Joi = require('joi');

const app = express();
const port = process.env.PORT || 3000;
const delay = process.env.API_DELAY || 0;

app.use(bodyParser.json());

// 인메모리 저장소와 ID 카운터
let users = [];
let products = [];
let cart = [];
let userIdCounter = 1;
let productIdCounter = 1;
let cartItemIdCounter = 1;

// 스키마 정의 수정
const userSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  age: Joi.number().integer().min(0).max(120)
});

const productSchema = Joi.object({
  name: Joi.string().required(),
  price: Joi.number().positive().required(),
  description: Joi.string()
});

const cartItemSchema = Joi.object({
  productId: Joi.number().required(),
  quantity: Joi.number().integer().positive().required()
});

// 지연 미들웨어 (변경 없음)
const delayMiddleware = (req, res, next) => {
  setTimeout(next, delay);
};

app.use(delayMiddleware);

// 유효성 검사 미들웨어 (변경 없음)
const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.details[0].message });
  }
  next();
};

// 사용자 API
app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', validate(userSchema), (req, res) => {
  const newUser = {
    id: userIdCounter++,
    ...req.body
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get('/users/:id', (req, res) => {
  const user = users.find(u => u.id === parseInt(req.params.id));
  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.put('/users/:id', validate(userSchema), (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    users[index] = { id, ...req.body };
    res.json(users[index]);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

app.delete('/users/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = users.findIndex(u => u.id === id);
  if (index !== -1) {
    users.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// 상품 API
app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', validate(productSchema), (req, res) => {
  const newProduct = {
    id: productIdCounter++,
    ...req.body
  };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

app.get('/products/:id', (req, res) => {
  const product = products.find(p => p.id === parseInt(req.params.id));
  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.put('/products/:id', validate(productSchema), (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products[index] = { id, ...req.body };
    res.json(products[index]);
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

app.delete('/products/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = products.findIndex(p => p.id === id);
  if (index !== -1) {
    products.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Product not found' });
  }
});

// 장바구니 API
app.get('/cart', (req, res) => {
  res.json(cart);
});

app.post('/cart', validate(cartItemSchema), (req, res) => {
  const newItem = {
    id: cartItemIdCounter++,
    ...req.body
  };
  cart.push(newItem);
  res.status(201).json(newItem);
});

app.delete('/cart/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = cart.findIndex(item => item.id === id);
  if (index !== -1) {
    cart.splice(index, 1);
    res.status(204).send();
  } else {
    res.status(404).json({ error: 'Item not found in cart' });
  }
});

// 404 에러 처리 (변경 없음)
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

app.listen(port, () => {
  console.log(`Mock API server running on port ${port}`);
  console.log(`API delay set to ${delay}ms`);
});

## Serverless Microservice

This is a sample of a serverless microservices.

## Disclaimer

- Since I've written the FSM code myself, the transition method in the finite state machine currently not doing any state validation. In an actual implementation, it should validate the current state before transitioning.

## Deployment

- I've deployed an actual running application to my own AWS Lambda instance. ENDPOINT as below:
  - **ORDER:** [https://15dw3d499c.execute-api.ap-southeast-1.amazonaws.com/dev/order](https://15dw3d499c.execute-api.ap-southeast-1.amazonaws.com/dev/order)
  - **PAYMENT:** [https://djcuxscww8.execute-api.ap-southeast-1.amazonaws.com/dev/payment](https://djcuxscww8.execute-api.ap-southeast-1.amazonaws.com/dev/payment)

## Available Scripts

In each of the project directory (order and payment), you will have to run:

### `yarn deploy`
This will deploy the project to AWS Lambda.

### `yarn deploy:offline`
This will emulates an AWS Lambda on the local machine.
- Order [http://localhost:2222](http://localhost:2222)
- Payment [http://localhost:3333](http://localhost:3333)

## APIs

### Create Order

- **POST** [http://localhost:2222/order](http://localhost:2222/order)
  - ***Req body(optional)***: 
  ```
  {
    "price": "{optional}", 
    "currency": "{optional}"
  }
  ```

### Cancel Order

- **PUT** [http://localhost:2222/order/cancel](http://localhost:2222/order)
  - ***Req body (required)***: 
  ```
  {
    "_id": "{required}"
  }
  ```

### Check Order Details

- **GET** [http://localhost:2222/order/{orderId}](http://localhost:2222/order/{orderId})

## Some business logic assumption

- Payment is triggered by the Order app after 5 seconds upon order creation.
- CONFIRMED order can be cancelled within 15 seconds. After 15 seconds, CONFIRMED order will trigger delivery.



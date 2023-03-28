import { Injectable } from '@nestjs/common';

@Injectable()
export class CustomersService {
  findCustomer() {
    return {
      id: 1,
      name: 'Clifford',
      email: 'Clifford123@gmail.com',
      createdAT: new Date(),
    };
  }
}

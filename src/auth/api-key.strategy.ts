import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { Strategy } from 'passport-http-bearer';

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(Strategy, 'api-key') {
  private validApiKeys: string[];

  constructor() {
    super();
    const keys = process.env.VALID_API_KEYS;
    this.validApiKeys = keys ? keys.split(',') : [];
  }

  async validate(apiKey: string): Promise<any> {
    if (this.validApiKeys.includes(apiKey)) {
      return { isValid: true };
    }
    return null;
  }
}

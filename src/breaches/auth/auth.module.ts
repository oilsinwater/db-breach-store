import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { ApiKeyStrategy } from './api-key.strategy';

@Module({
  imports: [PassportModule.register({ defaultStrategy: 'api-key' })],
  providers: [ApiKeyStrategy],
  exports: [PassportModule],
})
export class AuthModule {}

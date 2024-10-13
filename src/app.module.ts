import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthController } from './auth/auth.controller';
import { AuthService } from './auth/auth.service';
import { GoogleStrategy } from './auth/strategies/google.stategy';
import typeorm from './config/typeorm';
import { OauthinfoModule } from './oauthinfo/oauthinfo.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: '.env',
      load: [typeorm],
    }),
    TypeOrmModule.forRootAsync({
      inject: [ConfigService],
      useFactory: async (configService: ConfigService) =>
        configService.get('typeorm'),
      imports: undefined,
    }),
    UsersModule,
    OauthinfoModule,
  ],
  controllers: [AuthController],
  providers: [GoogleStrategy, AuthService],
})
export class AppModule {}

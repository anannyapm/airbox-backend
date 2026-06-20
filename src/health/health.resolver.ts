import { Query, Resolver } from '@nestjs/graphql';

import { HealthStatus } from './health.model';

@Resolver(() => HealthStatus)
export class HealthResolver {
  @Query(() => HealthStatus, { name: 'health' })
  health(): HealthStatus {
    return {
      status: 'ok',
      timestamp: new Date().toISOString(),
    };
  }
}

